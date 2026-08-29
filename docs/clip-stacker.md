# clip_stacker integration

The Production Timeline can export a reduced JSON payload for external **clip_stacker** tooling and import it back with merge rules.

## Export payload (`clip-stacker-NN.json`)

| Field | Type | Notes |
|-------|------|-------|
| `project` | string | Episode title (from `EpisodeProduction.title`) |
| `version` | `"weeks_on_fire_v1"` | Schema tag — required for import |
| `exportedAt` | string | ISO timestamp |
| `clips` | array | One entry per scene (see below) |
| `episodeHistory` | array | Episode-level history entries |

### Each `clips[]` item

| Field | Type | Source |
|-------|------|--------|
| `id` | string | `ProductionScene.id` |
| `title` | string | Scene title |
| `timestamp` | string | `HH:MM:SS` synopsis timecode |
| `order` | number | Scene sort order |
| `status` | string | `draft` \| `generated` \| `approved` \| `in-edit` \| `final` |
| `mediaUrl` | string \| null | Empty string exported as `null` |
| `description` | string | Scene description |

### Omitted on export

These fields exist in `episodes/episode-NN/scenes.json` but are **not** included in clip_stacker exports:

- `episode` (episode number)
- `lastUpdated`
- Per-scene `prompt`
- Per-scene `addedAt`, `lastEditedAt`
- Per-scene `history`

Use **Export JSON** in the Timeline for the full committed schema.

## Import merge semantics

When importing a `clip-stacker-*.json` file:

1. Validate `version === "weeks_on_fire_v1"` and `clips` is an array.
2. For each clip, match by `id` against the **committed** `scenes.json` baseline for the current episode.
3. **Matched scenes** — update `title`, `timestamp`, `order`, `status`, `mediaUrl`, `description`; preserve `prompt`, `addedAt`, and prior `history`; append an `"Imported from clip_stacker"` history entry.
4. **New clip IDs** — create a new scene with defaults; append import history.
5. `episodeHistory` from the payload **replaces** the episode history.
6. `title` ← `project`; `lastUpdated` ← import time.

### Data loss warnings

- Import cannot restore `prompt` or per-scene history for clips whose `id` does not match a committed scene.
- Re-importing after editing only in clip_stacker will overwrite matched scene fields.

## Example minimal payload

```json
{
  "project": "Weeks on Fire - Episode 02",
  "version": "weeks_on_fire_v1",
  "exportedAt": "2026-08-29T14:00:00.000Z",
  "clips": [
    {
      "id": "scene-001",
      "title": "480p Feed Up / Warehouse Establish",
      "timestamp": "00:00:00",
      "order": 1,
      "status": "draft",
      "mediaUrl": null,
      "description": "Grainy 480p warehouse establish."
    }
  ],
  "episodeHistory": [
    {
      "date": "2026-08-29T12:00:00Z",
      "action": "scenes-json-initialized",
      "note": "Sparse production timeline scaffold created for Episode 02"
    }
  ]
}
```

## Related files

- Export/import logic: [`src/data/production.ts`](../src/data/production.ts) (`exportToClipStacker`, `clipStackerToProduction`)
- Timeline UI: [`src/App.tsx`](../src/App.tsx)
- Committed scene data: [`episodes/episode-NN/scenes.json`](../episodes/)
