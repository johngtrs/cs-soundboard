import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SoundButtonProps {
  label: string;
  onClick: () => void;
  isPlaying: boolean;
  disabled?: boolean;
}

function SoundButton({ label, onClick, isPlaying, disabled = false }: SoundButtonProps): JSX.Element {
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
        'transition-all duration-200',
        'hover:border-primary hover:shadow-lg hover:shadow-primary/20',
        'active:scale-95',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        isPlaying && 'border-primary shadow-lg shadow-primary/30 bg-gradient-to-br from-slate-700 to-slate-800'
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Glowing effect when playing */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary/10 blur-xl"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      <div className="relative flex items-center justify-between gap-3">
        <span className="text-foreground group-hover:text-primary transition-colors flex-1">
          {label}
        </span>
        
        <motion.div
          animate={isPlaying ? {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          } : {}}
          transition={{
            duration: 1,
            repeat: isPlaying ? Infinity : 0,
            ease: 'linear',
          }}
        >
          <Play
            className={cn(
              'w-5 h-5 transition-colors',
              isPlaying ? 'text-primary fill-primary' : 'text-muted-foreground group-hover:text-primary'
            )}
          />
        </motion.div>
      </div>

      {/* Hover border animation */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-primary opacity-0 group-hover:opacity-100"
        initial={false}
        animate={isPlaying ? { opacity: 1 } : {}}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}

export default SoundButton;

