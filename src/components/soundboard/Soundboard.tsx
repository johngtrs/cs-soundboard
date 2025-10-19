import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import CategorySection from '@/components/common/CategorySection';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { SOUNDS, CATEGORY_LABELS } from '@/constants/sounds';
import { Sound, SoundCategory } from '@/types';

function Soundboard(): JSX.Element {
  const { play, currentSound } = useAudioPlayer();

  const categorizedSounds = useMemo(() => {
    const categories: Record<SoundCategory, Sound[]> = {
      radio: [],
      commands: [],
      responses: [],
      events: [],
    };

    SOUNDS.forEach((sound) => {
      categories[sound.category].push(sound);
    });

    return categories;
  }, []);

  const handlePlaySound = (sound: Sound): void => {
    play(sound.file);
  };

  return (
    <div className="min-h-screen pb-12">
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Sound categories */}
        <div className="space-y-12">
          {Object.entries(categorizedSounds).map(
            ([category, sounds]) =>
              sounds.length > 0 && (
                <CategorySection
                  key={category}
                  title={CATEGORY_LABELS[category]}
                  sounds={sounds}
                  onPlaySound={handlePlaySound}
                  currentSound={currentSound}
                />
              )
          )}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-16 text-center text-muted-foreground text-sm"
        >
          <p className="tracking-wider">Counter-Strike 1.6 © Valve Corporation</p>
          <p className="mt-2 text-xs">Built with React, TypeScript, Tailwind CSS & Framer Motion</p>
        </motion.footer>
      </motion.main>
    </div>
  );
}

export default Soundboard;
