import { motion } from 'framer-motion';
import { Sound } from '@/types';
import SoundButton from './SoundButton';

interface CategorySectionProps {
  title: string;
  sounds: Sound[];
  onPlaySound: (sound: Sound) => void;
  currentSound: string | null;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function CategorySection({ title, sounds, onPlaySound, currentSound }: CategorySectionProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <motion.h2
        className="text-2xl font-bold text-primary mb-4 tracking-wider uppercase flex items-center gap-3"
        whileHover={{ x: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.span
          className="w-2 h-8 bg-primary rounded-full"
          animate={{
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {title}
      </motion.h2>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {sounds.map((sound) => (
          <motion.div key={sound.id} variants={item}>
            <SoundButton
              label={sound.label}
              onClick={() => onPlaySound(sound)}
              isPlaying={currentSound === sound.file}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default CategorySection;

