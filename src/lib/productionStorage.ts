import type { EpisodeProduction } from '../data/production';
import { isValidEpisodeProduction } from '../data/production';

const SCHEMA_VERSION = 1;

interface StoredProduction {
  schemaVersion: typeof SCHEMA_VERSION;
  savedAt: string;
  production: EpisodeProduction;
}

function storageKey(episode: string): string {
  return `wof:production:episode-${episode}`;
}

export function productionsEqual(a: EpisodeProduction, b: EpisodeProduction): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function loadStored(episode: string): EpisodeProduction | null {
  try {
    const raw = localStorage.getItem(storageKey(episode));
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed)) return null;
    if (parsed.schemaVersion !== SCHEMA_VERSION) return null;
    if (!isValidEpisodeProduction(parsed.production)) return null;

    return parsed.production;
  } catch {
    return null;
  }
}

export function saveStored(episode: string, production: EpisodeProduction): void {
  const payload: StoredProduction = {
    schemaVersion: SCHEMA_VERSION,
    savedAt: new Date().toISOString(),
    production,
  };
  localStorage.setItem(storageKey(episode), JSON.stringify(payload));
}

export function clearStored(episode: string): void {
  localStorage.removeItem(storageKey(episode));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}
