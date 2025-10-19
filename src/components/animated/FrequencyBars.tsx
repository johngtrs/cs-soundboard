import { motion } from 'framer-motion';

interface FrequencyBarsProps {
  isPlaying: boolean;
  barCount?: number;
  className?: string;
  barClassName?: string;
}

/**
 * Animated frequency bars that simulate an audio equalizer
 * Perfect for visualizing sound playback
 */
function FrequencyBars({
  isPlaying,
  barCount = 5,
  className = '',
  barClassName = '',
}: FrequencyBarsProps): JSX.Element {
  // Generate random heights for a more dynamic effect
  const generateRandomHeights = () => {
    return Array.from({ length: 3 }, () => Math.random() * 0.5 + 0.3);
  };

  return (
    <div className={`flex items-center justify-center gap-0.5 ${className}`}>
      {Array.from({ length: barCount }).map((_, index) => {
        const heights = generateRandomHeights();
        const delay = index * 0.05;

        return (
          <motion.div
            key={index}
            className={`w-1 bg-primary rounded-full ${barClassName}`}
            initial={{ scaleY: 0.3 }}
            animate={
              isPlaying
                ? {
                    scaleY: heights,
                  }
                : { scaleY: 0.3 }
            }
            transition={{
              duration: 0.4 + Math.random() * 0.3,
              repeat: isPlaying ? Infinity : 0,
              ease: 'easeInOut',
              delay: isPlaying ? delay : 0,
              repeatType: 'reverse',
            }}
            style={{
              height: '16px',
              originY: 1,
            }}
          />
        );
      })}
    </div>
  );
}

export default FrequencyBars;
