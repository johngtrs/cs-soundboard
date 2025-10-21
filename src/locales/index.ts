import { Language } from '@/types';
import { fr } from './fr';
import { en } from './en';

export const translations = {
  fr,
  en,
} as const;

export type TranslationKeys = typeof fr;

export const getTranslation = (language: Language): TranslationKeys => {
  return translations[language] as TranslationKeys;
};
