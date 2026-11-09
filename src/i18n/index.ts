import type { LanguageCode } from '../data/ministryData';

export type LocaleDict = Record<string, string>;

const LOCALE_CACHE: Partial<Record<LanguageCode, LocaleDict>> = {};

const LOCALE_LOADERS: Partial<Record<LanguageCode, () => Promise<{ default: LocaleDict }>>> = {
  es: () => import('./locales/es'),
  fr: () => import('./locales/fr'),
  tw: () => import('./locales/tw'),
  gaa: () => import('./locales/gaa'),
  ig: () => import('./locales/ig'),
  yo: () => import('./locales/yo'),
  sw: () => import('./locales/sw'),
  zh: () => import('./locales/zh')
};

export const INTL_LOCALES: Record<LanguageCode, string> = {
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  tw: 'ak-GH',
  gaa: 'en-GH',
  ig: 'ig-NG',
  yo: 'yo-NG',
  sw: 'sw-KE',
  zh: 'zh-CN'
};

export function getCachedLocale(lang: LanguageCode): LocaleDict | undefined {
  if (lang === 'en') return undefined;
  return LOCALE_CACHE[lang];
}

export async function loadLocaleDict(lang: LanguageCode): Promise<LocaleDict> {
  if (lang === 'en') return {};
  const cached = LOCALE_CACHE[lang];
  if (cached) return cached;
  const loader = LOCALE_LOADERS[lang];
  if (!loader) return {};
  const mod = await loader();
  LOCALE_CACHE[lang] = mod.default;
  return mod.default;
}

export function translateText(
  dict: LocaleDict | undefined,
  text: string,
  vars?: Record<string, string | number>
): string {
  let out = (dict && dict[text]) || text;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      out = out.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
    }
  }
  return out;
}
