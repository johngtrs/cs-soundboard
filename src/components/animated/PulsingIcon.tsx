import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

interface PulsingIconProps
  extends Omit<ComponentProps<typeof motion.div>, 'animate' | 'transition'> {
  children: React.ReactNode;
  duration?: number;
  scaleRange?: [number, number, number];
}

/**
 * Animated wrapper that creates a continuous pulsing scale effect
 * Perfect for icons and small decorative elements
 */
function PulsingIcon({
  children,
  duration = 2,
  scaleRange = [1, 1.05, 1],
  className,
  ...props
}: PulsingIconProps): JSX.Element {
  return (
    <motion.div
      animate={{
        scale: scaleRange,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default PulsingIcon;
