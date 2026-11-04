import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  GalleryPhoto,
  LANGUAGES,
  LanguageCode,
  LanguageOption,
  MediaItem
} from '../data/ministryData';
import {
  NextGatheringState,
  computeAutoTheme,
  computeNextGathering
} from '../utils/time';

export type ThemeMode = 'auto' | 'light' | 'dark';

interface AppContextValue {
  themeMode: ThemeMode;
  activeTheme: 'light' | 'dark';
  setThemeMode: (mode: ThemeMode) => void;
  language: LanguageCode;
  currentLang: LanguageOption;
  setLanguage: (code: LanguageCode) => void;
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
      const saved = localStorage.getItem('egw-theme-mode') as ThemeMode | null;
      if (saved === 'auto' || saved === 'light' || saved === 'dark') return saved;
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

  const [nextGathering, setNextGathering] = useState<NextGatheringState>(() =>
    computeNextGathering()
  );

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    const resolved = computeAutoTheme(themeMode);
    setActiveTheme(resolved);
    document.documentElement.setAttribute('data-theme', resolved);
    document.documentElement.setAttribute('data-theme-mode', themeMode);
    try {
      localStorage.setItem('egw-theme-mode', themeMode);
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
    const timer = window.setInterval(() => {
      setNextGathering(computeNextGathering());
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
  }, [themeMode]);

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
    setLanguage: setLanguageState,
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
