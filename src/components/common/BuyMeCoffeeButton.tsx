import { Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BuyMeCoffeeButtonProps {
  username?: string;
  className?: string;
  variant?: 'default' | 'compact';
}

function BuyMeCoffeeButton({
  username = 'john_vdl',
  className,
  variant = 'default',
}: BuyMeCoffeeButtonProps): JSX.Element {
  const url = `https://buymeacoffee.com/${username}`;

  const handleClick = (): void => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Animation variants pour une fluidité optimale
  const buttonVariants = {
    initial: {
      scale: 1,
      opacity: 0,
      y: 10,
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: 'easeInOut',
      },
    },
  };

  if (variant === 'compact') {
    return (
      <motion.button
        onClick={handleClick}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2 rounded-lg',
          'bg-gradient-to-r from-orange-700 to-orange-600',
          'text-white font-semibold text-sm',
          'border-2 border-orange-500/50',
          'shadow-md shadow-orange-900/30',
          'transition-shadow duration-300 ease-out',
          'hover:shadow-lg hover:shadow-orange-900/40',
          'no-underline',
          className
        )}
        aria-label="Buy me a coffee"
      >
        <Coffee className="w-4 h-4" />
        <span>Buy me a coffee</span>
      </motion.button>
    );
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      className={cn(
        'inline-flex items-center gap-3 px-6 py-3 rounded-lg',
        'bg-gradient-to-r from-orange-700 to-orange-600',
        'text-white font-bold text-base sm:text-lg',
        'border-2 border-orange-500/50',
        'shadow-md shadow-orange-900/30',
        'transition-shadow duration-300 ease-out',
        'hover:shadow-lg hover:shadow-orange-900/40',
        'no-underline',
        className
      )}
      aria-label="Support me on Buy Me a Coffee"
    >
      <span className="tracking-wide">☕ Buy me a coffee</span>
    </motion.a>
  );
}

export default BuyMeCoffeeButton;
