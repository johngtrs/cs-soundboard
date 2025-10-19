import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import CategorySection from '@/components/common/CategorySection';
import SearchBar from '@/components/common/SearchBar';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { SOUNDS, CATEGORY_LABELS } from '@/constants/sounds';
import { Sound, SoundCategory } from '@/types';
import { FadeIn, FloatingOrb } from '@/components/animated';
import { matchesSearch } from '@/utils/string';

function Soundboard(): JSX.Element {
  const { play, currentSound } = useAudioPlayer();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categorizedSounds = useMemo(() => {
    const categories: Record<SoundCategory, Sound[]> = {
      top: [],
      radio: [],
      commands: [],
      responses: [],
      events: [],
    };

    // Filter sounds based on search query (accent-insensitive)
    const filteredSounds = searchQuery
      ? SOUNDS.filter((sound) => matchesSearch(sound.label, searchQuery))
      : SOUNDS;

    filteredSounds.forEach((sound) => {
      categories[sound.category].push(sound);
    });

    return categories;
  }, [searchQuery]);

  const handlePlaySound = (sound: Sound): void => {
    play(sound.file);
  };

  const hasResults = useMemo(() => {
    return Object.values(categorizedSounds).some((sounds) => sounds.length > 0);
  }, [categorizedSounds]);

  return (
    <div className="min-h-screen pb-12">
      <Header />

      <FadeIn as="main" delay={0.15} slideY={0} className="max-w-7xl mx-auto px-6">
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <FloatingOrb className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <FloatingOrb
            duration={10}
            scaleRange={[1.2, 1, 1.2]}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          />
        </div>

        {/* Search bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Sound categories */}
        {hasResults ? (
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
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center py-16"
          >
            <div className="space-y-4">
              <p className="text-2xl text-muted-foreground">🔍</p>
              <p className="text-xl text-foreground font-semibold">Aucun son trouvé</p>
              <p className="text-muted-foreground">Essayez avec d'autres mots-clés</p>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <FadeIn
          as="footer"
          delay={0.5}
          duration={0.4}
          slideY={0}
          className="mt-16 text-center text-muted-foreground text-sm"
        >
          <p className="tracking-wider">Counter-Strike 1.6 © Valve Corporation</p>
        </FadeIn>
      </FadeIn>
    </div>
  );
}

export default Soundboard;
