import { motion, HTMLMotionProps } from 'framer-motion';

type FadeInProps = {
  children: React.ReactNode;
  as?: 'div' | 'main' | 'section' | 'footer' | 'article';
  delay?: number;
  duration?: number;
  slideY?: number;
  className?: string;
} & Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'transition' | 'children'>;

/**
 * Animated component that fades in with optional slide-up effect
 * Versatile component for general purpose fade-in animations
 */
function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.3,
  slideY = 20,
  className,
  ...props
}: FadeInProps): JSX.Element {
  const animationProps = {
    initial: { opacity: 0, y: slideY },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration, ease: 'easeOut' as const },
    className,
    ...props,
  };

  if (as === 'main') {
    return <motion.main {...animationProps}>{children}</motion.main>;
  }

  if (as === 'section') {
    return <motion.section {...animationProps}>{children}</motion.section>;
  }

  if (as === 'footer') {
    return <motion.footer {...animationProps}>{children}</motion.footer>;
  }

  if (as === 'article') {
    return <motion.article {...animationProps}>{children}</motion.article>;
  }

  return <motion.div {...animationProps}>{children}</motion.div>;
}

export default FadeIn;
