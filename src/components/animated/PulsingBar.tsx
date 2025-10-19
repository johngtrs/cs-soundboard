import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

interface PulsingBarProps
  extends Omit<ComponentProps<typeof motion.span>, 'animate' | 'transition'> {
  duration?: number;
  scaleRange?: [number, number, number];
}

/**
 * Animated span that pulses vertically
 * Perfect for decorative bars and indicators
 */
function PulsingBar({
  duration = 0.8,
  scaleRange = [1, 1.15, 1],
  className,
  ...props
}: PulsingBarProps): JSX.Element {
  return (
    <motion.span
      className={className}
      animate={{
        scaleY: scaleRange,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      {...props}
    />
  );
}

export default PulsingBar;
