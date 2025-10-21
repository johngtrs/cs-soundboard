export interface Sound {
  id: string;
  name: string;
  file: string;
  category: SoundCategory;
  label: string;
}

export type SoundCategory = 'top' | 'radio' | 'commands' | 'responses' | 'events';

export interface AudioState {
  isPlaying: boolean;
  currentSound: string | null;
}

export type Language = 'fr' | 'en';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}
