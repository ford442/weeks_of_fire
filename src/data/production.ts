// Production timeline data models for weeks_on_fire
// These map directly to episodes/<episode>/scenes.json
// Git-friendly structured data with full change history.

export type SceneStatus =
  | 'draft'
  | 'generated'
  | 'approved'
  | 'in-edit'
  | 'final';

export interface SceneHistoryEntry {
  date: string; // ISO string
  action: 'added' | 'edited' | 'status-changed' | 'media-added' | string;
  note: string;
}

export interface ProductionScene {
  id: string;                 // e.g. "scene-001"
  order: number;
  title: string;
  timestamp: string;          // "00:00:01" style from synopsis
  description: string;
  prompt?: string;
  mediaUrl?: string;
  status: SceneStatus;
  addedAt: string;            // ISO
  lastEditedAt: string;       // ISO
  history: SceneHistoryEntry[];
}

export interface EpisodeHistoryEntry {
  date: string;
  action: string;
  note: string;
}

export interface EpisodeProduction {
  episode: string;            // "01"
  title: string;
  lastUpdated: string;
  scenes: ProductionScene[];
  episodeHistory: EpisodeHistoryEntry[];
}

// Helper: load static JSON (Vite supports direct import)
// Usage: import data from '../../episodes/episode-XX/scenes.json'
// (kept for future multi-episode dynamic loading)
export async function loadEpisodeProduction(_episode: string): Promise<EpisodeProduction | null> {
  return null;
}

// Synchronous version for initial render (preferred for build)
// Callers do: import data from '...' with { type: 'json' }
export function getEpisodeProductionSync(_episode: string): EpisodeProduction | null {
  return null;
}

// Create a new empty scene template
export function createEmptyScene(order: number): ProductionScene {
  const now = new Date().toISOString();
  return {
    id: `scene-${String(order).padStart(3, '0')}`,
    order,
    title: 'New Scene',
    timestamp: '00:00:00',
    description: '',
    prompt: '',
    mediaUrl: '',
    status: 'draft',
    addedAt: now,
    lastEditedAt: now,
    history: [
      {
        date: now,
        action: 'added',
        note: 'Created in Timeline editor',
      },
    ],
  };
}

// Append a history entry and bump timestamps
export function appendSceneHistory(
  scene: ProductionScene,
  action: string,
  note: string
): ProductionScene {
  const now = new Date().toISOString();
  return {
    ...scene,
    lastEditedAt: now,
    history: [
      ...scene.history,
      {
        date: now,
        action,
        note,
      },
    ],
  };
}

export function updateSceneStatus(
  scene: ProductionScene,
  newStatus: SceneStatus,
  note?: string
): ProductionScene {
  if (scene.status === newStatus) return scene;
  const now = new Date().toISOString();
  return {
    ...scene,
    status: newStatus,
    lastEditedAt: now,
    history: [
      ...scene.history,
      {
        date: now,
        action: 'status-changed',
        note: note || `Status changed to ${newStatus}`,
      },
    ],
  };
}

// Flatten all events for a production timeline (most recent first)
export function flattenTimeline(production: EpisodeProduction) {
  const events: Array<{
    id: string;
    date: string;
    type: 'episode' | 'scene';
    sceneId?: string;
    sceneTitle?: string;
    action: string;
    note: string;
  }> = [];

  // Episode level
  production.episodeHistory.forEach((entry, idx) => {
    events.push({
      id: `ep-${idx}`,
      date: entry.date,
      type: 'episode',
      action: entry.action,
      note: entry.note,
    });
  });

  // Per-scene
  production.scenes.forEach((scene) => {
    scene.history.forEach((entry, idx) => {
      events.push({
        id: `${scene.id}-h${idx}`,
        date: entry.date,
        type: 'scene',
        sceneId: scene.id,
        sceneTitle: scene.title,
        action: entry.action,
        note: entry.note,
      });
    });
  });

  // Sort newest first
  return events.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Status badge colors (Tailwind classes)
export const statusColors: Record<SceneStatus, string> = {
  draft: 'bg-zinc-700 text-zinc-200',
  generated: 'bg-sky-900 text-sky-200',
  approved: 'bg-emerald-900 text-emerald-200',
  'in-edit': 'bg-amber-900 text-amber-200',
  final: 'bg-orange-700 text-orange-100',
};
