import React, { useState, useRef, useEffect } from 'react';
import { Music } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AmbientPlayer = () => {
  const AUDIO_SRC = `${import.meta.env.BASE_URL}rock-suave.mp3`;

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setHasError(false);
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Playback error:', err);
          setIsPlaying(false);
        });
    }
  };

  const handleAudioError = (e) => {
    console.error('Error loading audio:', e);
    setHasError(true);
    setIsPlaying(false);
  };

  return (
    <div className="flex items-center">
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="auto"
        onError={handleAudioError}
        onEnded={() => setIsPlaying(false)}
      />

      <button
        onClick={togglePlay}
        className={`p-2 rounded-full apple-glass transition-all duration-300 ${
          isPlaying
            ? 'border-amber-500/80 text-amber-500 bg-amber-500/10 shadow-sm'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-amber-500 dark:hover:text-amber-400'
        }`}
        title={
          hasError
            ? "Error al cargar /rock-suave.mp3"
            : isPlaying
            ? (language === 'es' ? 'Pausar Música (/rock-suave.mp3)' : 'Pause Music (/rock-suave.mp3)')
            : (language === 'es' ? 'Reproducir /rock-suave.mp3' : 'Play /rock-suave.mp3')
        }
      >
        <Music className={`w-4 h-4 ${isPlaying ? 'animate-pulse text-amber-500' : ''}`} />
      </button>
    </div>
  );
};
