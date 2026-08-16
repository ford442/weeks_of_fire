import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface SongAudioPlayerProps {
  audioUrl: string;
  title: string;
  compact?: boolean;
  className?: string;
}

export default function SongAudioPlayer({
  audioUrl,
  title,
  compact = false,
  className = '',
}: SongAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, [audioUrl]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

  if (compact) {
    return (
      <div className={className}>
        <audio ref={audioRef} preload="none" src={audioUrl} className="hidden" />
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
          className="inline-flex items-center justify-center rounded-md border border-orange-500/30 bg-orange-500/10 p-2 text-orange-200 transition hover:border-orange-400 hover:bg-orange-500/20 hover:text-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>
    );
  }

  return (
    <section className={`rounded-md border border-zinc-800 bg-zinc-900/80 p-3 ${className}`}>
      <div className="mb-3 flex items-center gap-3">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/15 text-orange-200 transition hover:border-orange-400 hover:bg-orange-500/25 hover:text-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </button>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-zinc-200">{isPlaying ? 'Now playing' : 'Preview'}</p>
          <p className="truncate text-xs text-zinc-500">{title}</p>
        </div>
      </div>
      <audio ref={audioRef} controls preload="none" className="w-full" src={audioUrl}>
        Your browser does not support audio playback.
      </audio>
    </section>
  );
}
