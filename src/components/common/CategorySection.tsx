import { motion, AnimatePresence } from 'framer-motion';
import { Sound } from '@/types';
import SoundButton from './SoundButton';
import { FadeIn, PulsingBar } from '@/components/animated';

interface CategorySectionProps {
  title: string;
  sounds: Sound[];
  onPlaySound: (sound: Sound) => void;
  currentSound: string | null;
}

function CategorySection({
  title,
  sounds,
  onPlaySound,
  currentSound,
}: CategorySectionProps): JSX.Element {
  return (
    <FadeIn className="mb-8">
      <h2 className="text-2xl font-bold text-primary mb-4 tracking-wider uppercase flex items-center gap-3">
        <PulsingBar className="w-2 h-8 bg-primary rounded-full" />
        {title}
      </h2>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {sounds.map((sound) => (
            <motion.div
              key={sound.id}
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                layout: { duration: 0.2, ease: 'easeOut' },
                opacity: { duration: 0.1 },
              }}
            >
              <SoundButton
                label={sound.label}
                onClick={() => onPlaySound(sound)}
                isPlaying={currentSound?.endsWith(sound.file) ?? false}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </FadeIn>
  );
}

export default CategorySection;
