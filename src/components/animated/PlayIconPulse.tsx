import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

interface PlayIconPulseProps
  extends Omit<ComponentProps<typeof motion.div>, 'animate' | 'transition'> {
  children: React.ReactNode;
  isPlaying: boolean;
  duration?: number;
  scaleRange?: [number, number, number];
}

/**
 * Animated wrapper for play icons that pulses when active
 * Provides visual feedback for playing state
 */
function PlayIconPulse({
  children,
  isPlaying,
  duration = 0.6,
  scaleRange = [1, 1.15, 1],
  className,
  ...props
}: PlayIconPulseProps): JSX.Element {
  return (
    <motion.div
      animate={
        isPlaying
          ? {
              scale: scaleRange,
            }
          : {}
      }
      transition={{
        duration,
        repeat: isPlaying ? Infinity : 0,
        ease: 'easeInOut',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default PlayIconPulse;
