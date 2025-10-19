import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

interface FloatingOrbProps
  extends Omit<ComponentProps<typeof motion.div>, 'animate' | 'transition'> {
  duration?: number;
  scaleRange?: [number, number, number];
  opacityRange?: [number, number, number];
}

/**
 * Animated decorative orb that floats and pulses
 * Perfect for background decorative elements
 */
function FloatingOrb({
  duration = 8,
  scaleRange = [1, 1.2, 1],
  opacityRange = [0.3, 0.5, 0.3],
  className,
  ...props
}: FloatingOrbProps): JSX.Element {
  return (
    <motion.div
      className={className}
      animate={{
        scale: scaleRange,
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

export default FloatingOrb;
