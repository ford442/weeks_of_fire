import { Maximize2, X } from 'lucide-react';
import type { FilmScene } from '../data/films';
import PromptCard from './PromptCard';

interface LightboxProps {
  scene: FilmScene;
  copiedKey: string | null;
  onClose: () => void;
  onCopy: (text: string, label: string, key: string) => void;
}

export default function Lightbox({ scene, copiedKey, onClose, onCopy }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex bg-black/92 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${scene.title} prompt details`}
      onClick={onClose}
    >
      <div
        className="relative m-auto grid max-h-[calc(100vh-1.5rem)] w-full max-w-7xl grid-rows-[minmax(0,1fr)_auto] gap-4 overflow-hidden lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)] lg:grid-rows-1"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-zinc-800 bg-black shadow-2xl shadow-black">
          <img
            src={scene.imageUrl}
            alt={scene.title}
            className="h-full max-h-[70vh] w-full object-contain lg:max-h-[calc(100vh-3rem)]"
          />
          <a
            href={scene.imageUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-md bg-black/75 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-zinc-900"
          >
            <Maximize2 size={16} />
            Open
          </a>
        </div>

        <div className="min-h-0 overflow-auto">
          <PromptCard scene={scene} copiedKey={copiedKey} onCopy={onCopy} />
        </div>

        <button
          type="button"
          aria-label="Close lightbox"
          onClick={onClose}
          className="absolute right-2 top-2 rounded-md bg-black/75 p-2 text-white ring-1 ring-white/15 transition hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
