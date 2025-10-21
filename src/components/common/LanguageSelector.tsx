import { motion } from 'framer-motion';
import { Language, LanguageOption } from '@/types';
import { cn } from '@/lib/utils';
import { TranslationKeys } from '@/locales';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationKeys;
  className?: string;
}

function LanguageSelector({
  currentLanguage,
  onLanguageChange,
  t,
  className,
}: LanguageSelectorProps): JSX.Element {
  const languages: LanguageOption[] = [
    { code: 'fr', label: t.language.french, flag: '🇫🇷' },
    { code: 'en', label: t.language.english, flag: '🇬🇧' },
  ];

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all',
            'border-2',
            currentLanguage === lang.code
              ? 'border-primary bg-primary/20 text-primary'
              : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-600 hover:text-slate-300'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-xl">{lang.flag}</span>
          <span className="text-sm font-semibold">{lang.label}</span>
        </motion.button>
      ))}
    </div>
  );
}

export default LanguageSelector;
