import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

interface InteractiveButtonProps
  extends Omit<ComponentProps<typeof motion.button>, 'whileHover' | 'whileTap'> {
  children: React.ReactNode;
  hoverScale?: number;
  tapScale?: number;
}

/**
 * Animated button with hover and tap interactions
 * Provides visual feedback for user interactions
 */
function InteractiveButton({
  children,
  hoverScale = 1.02,
  tapScale = 0.96,
  className,
  ...props
}: InteractiveButtonProps): JSX.Element {
  return (
    <motion.button
      whileHover={{ scale: hoverScale, transition: { duration: 0 } }}
      whileTap={{ scale: tapScale }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.15,
        ease: 'easeOut',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default InteractiveButton;
