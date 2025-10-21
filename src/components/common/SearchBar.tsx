import { Search, X } from 'lucide-react';
import { FadeIn } from '@/components/animated';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

function SearchBar({ value, onChange, placeholder }: SearchBarProps): JSX.Element {
  const handleClear = (): void => {
    onChange('');
  };

  return (
    <FadeIn delay={0.2} className="mb-8">
      <div className="relative max-w-2xl mx-auto">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-12 pr-12 py-4 rounded-lg bg-slate-800/50 border-2 border-slate-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200 backdrop-blur-sm"
          />
          {value && (
            <button
              onClick={handleClear}
              className="absolute right-4 p-1 rounded-full hover:bg-slate-700 transition-colors duration-200 group"
              aria-label="Effacer la recherche"
            >
              <X className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
            </button>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default SearchBar;
