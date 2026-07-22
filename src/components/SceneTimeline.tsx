import { useState } from 'react';
import { Clock, Edit2, Film, Plus, Download } from 'lucide-react';
import type { EpisodeProduction, ProductionScene, SceneStatus } from '../data/production';
import { flattenTimeline, statusColors } from '../data/production';

interface SceneTimelineProps {
  production: EpisodeProduction;
  onEditScene: (scene: ProductionScene) => void;
  onAddScene: () => void;
  onExport: () => void;
  onUpdateProduction?: (updated: EpisodeProduction) => void;
}

export default function SceneTimeline({
  production,
  onEditScene,
  onAddScene,
  onExport,
}: SceneTimelineProps) {
  const [filterStatus, setFilterStatus] = useState<'all' | SceneStatus>('all');
  const [sortMode, setSortMode] = useState<'chronological' | 'recent'>('recent');

  const filteredScenes = production.scenes
    .filter((s) => filterStatus === 'all' || s.status === filterStatus)
    .sort((a, b) => a.order - b.order);

  const timelineEvents = flattenTimeline(production);

  const displayedEvents =
    sortMode === 'recent'
      ? timelineEvents
      : [...timelineEvents].sort((a, b) => (a.date > b.date ? 1 : -1));

  const formatDate = (iso: string) => {
    try {
      const d = new Date(iso);
      return d.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return iso;
    }
  };

  const getActionIcon = (action: string) => {
    if (action.includes('added') || action === 'created') return '🆕';
    if (action.includes('edit') || action === 'synopsis-updated') return '✏️';
    if (action.includes('status')) return '🔄';
    return '•';
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-400">
            <Film size={16} /> {production.title}
          </div>
          <div className="text-xs text-zinc-500">
            Last updated: {formatDate(production.lastUpdated)} • {production.scenes.length} scenes
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="h-9 rounded-md border border-zinc-800 bg-zinc-950 px-3 text-xs text-white outline-none focus:border-orange-400"
          >
            <option value="all">All statuses</option>
            <option value="draft">Draft</option>
            <option value="generated">Generated</option>
            <option value="in-edit">In Edit</option>
            <option value="approved">Approved</option>
            <option value="final">Final</option>
          </select>

          <select
            value={sortMode}
            onChange={(e) => setSortMode(e.target.value as any)}
            className="h-9 rounded-md border border-zinc-800 bg-zinc-950 px-3 text-xs text-white outline-none focus:border-orange-400"
          >
            <option value="recent">Most recent first</option>
            <option value="chronological">Chronological</option>
          </select>

          <button
            onClick={onAddScene}
            className="flex items-center gap-1.5 rounded-md bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-orange-500"
          >
            <Plus size={14} /> Add Scene
          </button>

          <button
            onClick={onExport}
            className="flex items-center gap-1.5 rounded-md border border-zinc-700 px-3 py-1.5 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-900 hover:text-orange-200"
          >
            <Download size={14} /> Export JSON
          </button>
        </div>
      </div>

      {/* Scenes Grid */}
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          SCENES ({filteredScenes.length})
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filteredScenes.map((scene) => (
            <div
              key={scene.id}
              className="group rounded-lg border border-zinc-800 bg-zinc-950 p-4 transition hover:border-orange-500/60"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-mono text-[10px] text-zinc-500">
                    {scene.timestamp} • #{scene.order}
                  </div>
                  <div className="mt-1 text-lg font-semibold leading-tight text-white">
                    {scene.title}
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest ${statusColors[scene.status]}`}
                >
                  {scene.status}
                </span>
              </div>

              <p className="mt-2 line-clamp-3 text-sm leading-snug text-zinc-400">
                {scene.description}
              </p>

              {scene.prompt && (
                <div className="mt-3 rounded bg-black/60 p-2 text-[10px] leading-snug text-zinc-400 line-clamp-2">
                  {scene.prompt}
                </div>
              )}

              <div className="mt-3 flex items-center justify-between text-xs">
                <div className="text-zinc-500">
                  {scene.history.length} edits • last {formatDate(scene.lastEditedAt)}
                </div>
                <button
                  onClick={() => onEditScene(scene)}
                  className="flex items-center gap-1 rounded border border-zinc-700 px-2 py-1 text-zinc-300 transition hover:border-orange-400 hover:text-orange-200"
                >
                  <Edit2 size={13} /> Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Production Timeline */}
      <div>
        <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          <Clock size={14} /> PRODUCTION TIMELINE
        </h3>

        <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-4">
          {displayedEvents.length === 0 && (
            <div className="py-8 text-center text-sm text-zinc-500">No history yet.</div>
          )}

          <ol className="space-y-4">
            {displayedEvents.map((event, idx) => (
              <li key={event.id} className="relative flex gap-3 pl-1">
                {/* Timeline dot + line */}
                <div className="flex w-9 shrink-0 flex-col items-center">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 ring-2 ring-orange-500/30" />
                  {idx !== displayedEvents.length - 1 && (
                    <div className="mt-1 h-full w-px flex-1 bg-zinc-800" />
                  )}
                </div>

                <div className="min-w-0 flex-1 pb-2">
                  <div className="flex flex-wrap items-baseline gap-x-2 text-xs">
                    <span className="font-mono text-orange-300">{formatDate(event.date)}</span>
                    <span className="text-zinc-500">{getActionIcon(event.action)}</span>
                    <span className="font-semibold text-white">
                      {event.type === 'episode' ? 'Episode-level' : event.sceneTitle}
                    </span>
                    {event.action && (
                      <span className="rounded bg-zinc-900 px-1.5 py-px text-[10px] text-zinc-400">
                        {event.action}
                      </span>
                    )}
                  </div>
                  <div className="mt-0.5 text-sm leading-snug text-zinc-300">{event.note}</div>
                  {event.sceneId && (
                    <button
                      onClick={() => {
                        const s = production.scenes.find((sc) => sc.id === event.sceneId);
                        if (s) onEditScene(s);
                      }}
                      className="mt-1 text-[11px] text-orange-400 underline-offset-2 hover:underline"
                    >
                      View / edit scene →
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="pt-2 text-[10px] text-zinc-500">
        Timeline is derived from <code>scenes.json</code> history arrays. Edit in the modal to append entries. Export JSON and commit to persist.
      </div>
    </div>
  );
}
