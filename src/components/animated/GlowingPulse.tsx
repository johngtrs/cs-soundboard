import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

interface GlowingPulseProps
  extends Omit<ComponentProps<typeof motion.div>, 'animate' | 'transition'> {
  duration?: number;
  opacityRange?: [number, number, number];
}

/**
 * Animated div that creates a glowing pulse effect
 * Perfect for highlighting active elements
 */
function GlowingPulse({
  duration = 0.8,
  opacityRange = [0.3, 0.6, 0.3],
  className,
  ...props
}: GlowingPulseProps): JSX.Element {
  return (
    <motion.div
      className={className}
      animate={{
        opacity: opacityRange,
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

export default GlowingPulse;
