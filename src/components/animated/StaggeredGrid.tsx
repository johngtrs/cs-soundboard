import { motion, Variants } from 'framer-motion';
import { ComponentProps } from 'react';

interface StaggeredGridProps
  extends Omit<ComponentProps<typeof motion.div>, 'variants' | 'initial' | 'animate'> {
  children: React.ReactNode;
  staggerDelay?: number;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0 },
  show: (staggerDelay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

/**
 * Animated grid container that staggers the appearance of its children
 * Children should use the StaggeredItem component
 */
function StaggeredGrid({
  children,
  staggerDelay = 0.03,
  className,
  ...props
}: StaggeredGridProps): JSX.Element {
  return (
    <motion.div
      custom={staggerDelay}
      variants={defaultVariants}
      initial="hidden"
      animate="show"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default StaggeredGrid;
