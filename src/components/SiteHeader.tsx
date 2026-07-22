import type { ReactNode } from 'react';
import { Clock, Film, Music2, Users } from 'lucide-react';

export type SiteView = 'gallery' | 'timeline' | 'songs' | 'staff';

const viewMeta: Record<
  SiteView,
  { eyebrow: string; description: string; icon: typeof Film }
> = {
  gallery: {
    eyebrow: 'Grok Imagine Archive',
    description:
      'A copy-ready production gallery for short-film stills, prompt variations, scene notes, and Minimax music cues.',
    icon: Film,
  },
  timeline: {
    eyebrow: 'Production Timeline',
    description:
      'Track scene creation, prompt evolution, media links, and status. Export JSON to commit production history.',
    icon: Clock,
  },
  songs: {
    eyebrow: 'Minimax Music Catalog',
    description:
      'Browse the series soundtrack — Minimax style prompts, lyrics, episode ties, and copy-ready generation notes.',
    icon: Music2,
  },
  staff: {
    eyebrow: 'Series Crew',
    description:
      'Meet the fictional writer, producer, director, and crew behind Weeks on Fire — bios, quotes, and series credits.',
    icon: Users,
  },
};

interface SiteHeaderProps {
  view: SiteView;
  onViewChange: (view: SiteView) => void;
}

export default function SiteHeader({ view, onViewChange }: SiteHeaderProps) {
  const meta = viewMeta[view];
  const EyebrowIcon = meta.icon;

  return (
    <section className="border-b border-zinc-850 bg-[radial-gradient(circle_at_top_left,_rgba(234,88,12,0.18),_transparent_34%),linear-gradient(135deg,_#121212_0%,_#090909_58%,_#1b1010_100%)]">
      <div className="mx-auto flex min-h-[36vh] max-w-7xl flex-col justify-end px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-md border border-orange-500/30 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
            <EyebrowIcon size={15} />
            {meta.eyebrow}
          </p>
          <h1 className="text-5xl font-semibold leading-none text-white sm:text-7xl">Weeks on Fire</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">{meta.description}</p>

          <nav
            aria-label="Site sections"
            className="mt-8 inline-flex flex-wrap rounded-lg border border-zinc-800 bg-black/40 p-1"
          >
            <TabButton active={view === 'gallery'} onClick={() => onViewChange('gallery')}>
              <Film size={16} />
              Visual Archive
            </TabButton>
            <TabButton active={view === 'timeline'} onClick={() => onViewChange('timeline')}>
              <Clock size={16} />
              Timeline
            </TabButton>
            <TabButton active={view === 'songs'} onClick={() => onViewChange('songs')}>
              <Music2 size={16} />
              Songs
            </TabButton>
            <TabButton active={view === 'staff'} onClick={() => onViewChange('staff')}>
              <Users size={16} />
              Crew
            </TabButton>
          </nav>
        </div>
      </div>
    </section>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-orange-300 ${
        active
          ? 'bg-orange-600 text-white shadow-sm shadow-orange-900/40'
          : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}
