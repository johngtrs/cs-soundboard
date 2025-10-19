import { motion, Variants } from 'framer-motion';
import { ComponentProps } from 'react';

interface StaggeredItemProps extends Omit<ComponentProps<typeof motion.div>, 'variants'> {
  children: React.ReactNode;
  duration?: number;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: (duration: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: 'easeOut',
    },
  }),
};

/**
 * Animated item to be used inside a StaggeredGrid
 * Provides the fade-in and slide-up animation
 */
function StaggeredItem({
  children,
  duration = 0.2,
  className,
  ...props
}: StaggeredItemProps): JSX.Element {
  return (
    <motion.div custom={duration} variants={defaultVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export default StaggeredItem;
