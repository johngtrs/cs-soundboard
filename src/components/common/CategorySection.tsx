import { Sound } from '@/types';
import SoundButton from './SoundButton';
import { FadeIn, PulsingBar, StaggeredGrid, StaggeredItem } from '@/components/animated';

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

      <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sounds.map((sound) => (
          <StaggeredItem key={sound.id}>
            <SoundButton
              label={sound.label}
              onClick={() => onPlaySound(sound)}
              isPlaying={currentSound === sound.file}
            />
          </StaggeredItem>
        ))}
      </StaggeredGrid>
    </FadeIn>
  );
}

export default CategorySection;
