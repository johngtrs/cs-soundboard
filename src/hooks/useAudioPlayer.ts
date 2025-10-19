import { useState, useCallback, useRef } from 'react';

interface UseAudioPlayerReturn {
  play: (audioUrl: string) => void;
  stop: () => void;
  isPlaying: boolean;
  currentSound: string | null;
}

export const useAudioPlayer = (): UseAudioPlayerReturn => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentSound(null);
  }, []);

  const play = useCallback((audioUrl: string) => {
    // Stop current audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Create new audio instance
    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    setIsPlaying(true);
    setCurrentSound(audioUrl);

    audio.play().catch((error) => {
      console.error('Error playing audio:', error);
      setIsPlaying(false);
      setCurrentSound(null);
    });

    audio.onended = () => {
      setIsPlaying(false);
      setCurrentSound(null);
    };

    audio.onerror = () => {
      console.error('Error loading audio:', audioUrl);
      setIsPlaying(false);
      setCurrentSound(null);
    };
  }, []);

  return { play, stop, isPlaying, currentSound };
};

