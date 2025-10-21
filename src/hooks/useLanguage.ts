import { useState, useEffect, useCallback, useMemo } from 'react';
import { Language } from '@/types';
import { getTranslation, TranslationKeys } from '@/locales';

const LANGUAGE_STORAGE_KEY = 'cs-soundboard-language';
const DEFAULT_LANGUAGE: Language = 'fr';

interface UseLanguageReturn {
  language: Language;
  setLanguage: (lang: Language) => void;
  getAudioPath: (fileName: string) => string;
  t: TranslationKeys;
}

export const useLanguage = (): UseLanguageReturn => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return stored === 'fr' || stored === 'en' ? stored : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const getAudioPath = useCallback(
    (fileName: string): string => {
      return `/${language}/${fileName}`;
    },
    [language]
  );

  const t = useMemo(() => getTranslation(language), [language]);

  return {
    language,
    setLanguage,
    getAudioPath,
    t,
  };
};
