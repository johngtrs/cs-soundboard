import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { InteractiveButton, PlayIconPulse, FrequencyBars } from '@/components/animated';

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
        'border-2',
        'text-left font-cs text-sm tracking-wide',
        'transition-all duration-0',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'flex items-center',
        // Playing state
        isPlaying
          ? 'border-primary shadow-lg shadow-primary/30 bg-gradient-to-br from-slate-700 to-slate-800'
          : 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-primary hover:shadow-lg hover:shadow-primary/20'
      )}
    >
      <div className="relative flex items-center justify-between gap-3 w-full">
        <span
          className={cn(
            'transition-colors duration-0 flex-1 leading-tight',
            isPlaying ? 'text-primary' : 'text-foreground group-hover:text-primary'
          )}
        >
          {label}
        </span>

        {/* Show frequency bars when playing, play icon when not playing */}
        {isPlaying ? (
          <FrequencyBars isPlaying={isPlaying} barCount={5} />
        ) : (
          <PlayIconPulse isPlaying={isPlaying}>
            <Play
              className={cn(
                'w-5 h-5 transition-all duration-0',
                'text-muted-foreground group-hover:text-primary'
              )}
            />
          </PlayIconPulse>
        )}
      </div>
    </InteractiveButton>
  );
}

export default SoundButton;
