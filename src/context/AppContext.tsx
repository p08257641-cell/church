import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import {
  GalleryPhoto,
  LANGUAGES,
  LanguageCode,
  LanguageOption,
  MediaItem
} from '../data/ministryData';
import {
  INTL_LOCALES,
  LocaleDict,
  getCachedLocale,
  loadLocaleDict,
  translateText
} from '../i18n';
import {
  NextGatheringState,
  computeAutoTheme,
  computeNextGathering
} from '../utils/time';

export type ThemeMode = 'light' | 'dark' | 'auto';

const THEME_STORAGE_KEY = 'egw-theme-mode-v2';

interface AppContextValue {
  themeMode: ThemeMode;
  activeTheme: 'light' | 'dark';
  setThemeMode: (mode: ThemeMode) => void;
  language: LanguageCode;
  currentLang: LanguageOption;
  setLanguage: (code: LanguageCode) => void;
  locale: string;
  t: (text: string, vars?: Record<string, string | number>) => string;
  nextGathering: NextGatheringState;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  activeMedia: MediaItem | null;
  playMedia: (item: MediaItem) => void;
  closeMedia: () => void;
  lightboxPhoto: GalleryPhoto | null;
  openLightbox: (photo: GalleryPhoto) => void;
  closeLightbox: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
      if (saved === 'light' || saved === 'dark' || saved === 'auto') return saved;
      const legacy = localStorage.getItem('egw-theme-mode');
      if (legacy === 'dark') return 'dark';
      if (legacy) {
        localStorage.removeItem('egw-theme-mode');
      }
    } catch {
      // ignore storage errors
    }
    return 'light';
  });

  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>(() =>
    computeAutoTheme(themeMode)
  );

  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem('egw-lang') as LanguageCode | null;
      if (saved && LANGUAGES.some(l => l.code === saved)) return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const [localeDict, setLocaleDict] = useState<LocaleDict>(
    () => getCachedLocale(language) || {}
  );
  const latestLangReqRef = useRef(0);

  const locale = INTL_LOCALES[language] || 'en-US';

  const t = useCallback(
    (text: string, vars?: Record<string, string | number>) =>
      translateText(localeDict, text, vars),
    [localeDict]
  );

  const setLanguage = useCallback((code: LanguageCode) => {
    const reqId = ++latestLangReqRef.current;
    if (code === 'en') {
      setLocaleDict({});
      setLanguageState('en');
      return;
    }
    const cached = getCachedLocale(code);
    if (cached) {
      setLocaleDict(cached);
      setLanguageState(code);
      return;
    }
    loadLocaleDict(code)
      .then(dict => {
        if (latestLangReqRef.current === reqId) {
          setLocaleDict(dict);
          setLanguageState(code);
        }
      })
      .catch(() => {
        if (latestLangReqRef.current === reqId) {
          setLocaleDict({});
          setLanguageState(code);
        }
      });
  }, []);

  const [nextGathering, setNextGathering] = useState<NextGatheringState>(() =>
    computeNextGathering(Date.now(), {
      t: (txt, vars) => translateText(getCachedLocale(language), txt, vars),
      locale: INTL_LOCALES[language] || 'en-US'
    })
  );

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (language === 'en') {
      setLocaleDict({});
      return;
    }
    const cached = getCachedLocale(language);
    if (cached) {
      setLocaleDict(cached);
      return;
    }
    loadLocaleDict(language)
      .then(dict => {
        if (!cancelled) setLocaleDict(dict);
      })
      .catch(() => {
        if (!cancelled) setLocaleDict({});
      });
    return () => {
      cancelled = true;
    };
  }, [language]);

  useEffect(() => {
    const resolved = computeAutoTheme(themeMode);
    setActiveTheme(resolved);
    document.documentElement.setAttribute('data-theme', resolved);
    document.documentElement.setAttribute('data-theme-mode', themeMode);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themeMode);
    } catch {
      // ignore
    }
  }, [themeMode]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    try {
      localStorage.setItem('egw-lang', language);
    } catch {
      // ignore
    }
  }, [language]);

  useEffect(() => {
    document.title = t('Ephesus Gatherings Worldwide — Equipping God’s Overcomers Across the Nations');
  }, [t]);

  useEffect(() => {
    setNextGathering(computeNextGathering(Date.now(), { t, locale }));
    const timer = window.setInterval(() => {
      setNextGathering(computeNextGathering(Date.now(), { t, locale }));
      if (themeMode === 'auto') {
        const nextAuto = computeAutoTheme('auto');
        setActiveTheme(prev => {
          if (prev !== nextAuto) {
            document.documentElement.setAttribute('data-theme', nextAuto);
          }
          return nextAuto;
        });
      }
    }, 1000);
    return () => window.clearInterval(timer);
  }, [themeMode, t, locale]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setLightboxPhoto(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const currentLang = useMemo(
    () => LANGUAGES.find(l => l.code === language) || LANGUAGES[0],
    [language]
  );

  const value: AppContextValue = {
    themeMode,
    activeTheme,
    setThemeMode: setThemeModeState,
    language,
    currentLang,
    setLanguage,
    locale,
    t,
    nextGathering,
    isSearchOpen,
    openSearch: () => setIsSearchOpen(true),
    closeSearch: () => setIsSearchOpen(false),
    activeMedia,
    playMedia: (item: MediaItem) => setActiveMedia(item),
    closeMedia: () => setActiveMedia(null),
    lightboxPhoto,
    openLightbox: (photo: GalleryPhoto) => setLightboxPhoto(photo),
    closeLightbox: () => setLightboxPhoto(null)
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
