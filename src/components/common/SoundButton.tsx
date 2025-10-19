import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative group w-full',
        'px-6 py-4 rounded-lg',
        'bg-gradient-to-br from-slate-800 to-slate-900',
        'border-2 border-slate-700',
        'text-left font-cs text-sm tracking-wide',
        'transition-all duration-150',
        'hover:border-primary hover:shadow-lg hover:shadow-primary/20',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        isPlaying &&
          'border-primary shadow-lg shadow-primary/30 bg-gradient-to-br from-slate-700 to-slate-800'
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      {/* Glowing pulse effect when playing */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary/10 blur-lg"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      <div className="relative flex items-center justify-between gap-3">
        <span className="text-foreground group-hover:text-primary transition-colors duration-150 flex-1">
          {label}
        </span>

        {/* Play icon with pulse animation when playing */}
        <motion.div
          animate={
            isPlaying
              ? {
                  scale: [1, 1.15, 1],
                }
              : {}
          }
          transition={{
            duration: 0.6,
            repeat: isPlaying ? Infinity : 0,
            ease: 'easeInOut',
          }}
        >
          <Play
            className={cn(
              'w-5 h-5 transition-all duration-150',
              isPlaying
                ? 'text-primary fill-primary'
                : 'text-muted-foreground group-hover:text-primary'
            )}
          />
        </motion.div>
      </div>
    </motion.button>
  );
}

export default SoundButton;
