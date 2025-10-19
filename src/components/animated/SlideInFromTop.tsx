import { motion, HTMLMotionProps } from 'framer-motion';

type SlideInFromTopProps = {
  children: React.ReactNode;
  as?: 'header' | 'div' | 'section';
  duration?: number;
  className?: string;
} & Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'transition' | 'children'>;

/**
 * Animated component that slides in from the top with a fade effect
 * Perfect for headers and top-level sections
 */
function SlideInFromTop({
  children,
  as = 'header',
  duration = 0.3,
  className,
  ...props
}: SlideInFromTopProps): JSX.Element {
  const animationProps = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration, ease: 'easeOut' as const },
    className,
    ...props,
  };

  if (as === 'header') {
    return <motion.header {...animationProps}>{children}</motion.header>;
  }

  if (as === 'section') {
    return <motion.section {...animationProps}>{children}</motion.section>;
  }

  return <motion.div {...animationProps}>{children}</motion.div>;
}

export default SlideInFromTop;
