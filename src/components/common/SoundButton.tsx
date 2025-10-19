import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { InteractiveButton, GlowingPulse, PlayIconPulse } from '@/components/animated';

interface SoundButtonProps {
  label: string;
  onClick: () => void;
  isPlaying: boolean;
  disabled?: boolean;
}

function SoundButton({
  label,
  onClick,
  isPlaying,
  disabled = false,
}: SoundButtonProps): JSX.Element {
  return (
    <InteractiveButton
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative group w-full',
        'min-h-[72px] px-6 py-4 rounded-lg',
        'bg-gradient-to-br from-slate-800 to-slate-900',
        'border-2 border-slate-700',
        'text-left font-cs text-sm tracking-wide',
        'transition-all duration-0',
        'hover:border-primary hover:shadow-lg hover:shadow-primary/20',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'flex items-center',
        isPlaying &&
          'border-primary shadow-lg shadow-primary/30 bg-gradient-to-br from-slate-700 to-slate-800'
      )}
    >
      {/* Glowing pulse effect when playing */}
      {isPlaying && <GlowingPulse className="absolute inset-0 rounded-lg bg-primary/10 blur-lg" />}

      <div className="relative flex items-center justify-between gap-3 w-full">
        <span className="text-foreground group-hover:text-primary transition-colors duration-0 flex-1 leading-tight">
          {label}
        </span>

        {/* Play icon with pulse animation when playing */}
        <PlayIconPulse isPlaying={isPlaying}>
          <Play
            className={cn(
              'w-5 h-5 transition-all duration-0',
              isPlaying
                ? 'text-primary fill-primary'
                : 'text-muted-foreground group-hover:text-primary'
            )}
          />
        </PlayIconPulse>
      </div>
    </InteractiveButton>
  );
}

export default SoundButton;
