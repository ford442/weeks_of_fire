import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Check, Copy, Lightbulb, MessageSquare, Music2, Search, Sparkles, Timer } from 'lucide-react';
import {
  cutawaySuggestions,
  type CutawaySegment,
  type CutawaySuggestion,
  type SuggestionKind,
} from '../data/suggestions';
import {
  formatExchangeAsScreenplay,
  getDialogVersionsForScene,
  type DialogExchange,
} from '../data/sceneDialogVersions';

const allValue = 'All';

const kindLabel: Record<SuggestionKind, string> = {
  musical: 'Musical',
  gag: 'Gags',
  scene: 'Scenes',
};

export default function Suggestions() {
  const [kind, setKind] = useState<typeof allValue | SuggestionKind>(allValue);
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(cutawaySuggestions[0]?.id ?? '');
  const [activeSegmentId, setActiveSegmentId] = useState(cutawaySuggestions[0]?.segments[0]?.id ?? '');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [workspaceTab, setWorkspaceTab] = useState<'prompts' | 'dialog'>('prompts');
  const [expandedExchangeId, setExpandedExchangeId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return cutawaySuggestions.filter((cutaway) => {
      const matchesKind = kind === allValue || cutaway.kind === kind;
      const matchesSearch =
        normalizedQuery.length === 0 ||
        [
          cutaway.title,
          cutaway.summary,
          cutaway.episode,
          cutaway.songTitle,
          cutaway.visualArc,
          cutaway.tags.join(' '),
        ]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesKind && matchesSearch;
    });
  }, [kind, query]);

  const selected = useMemo(
    () => filtered.find((cutaway) => cutaway.id === selectedId) ?? filtered[0],
    [filtered, selectedId],
  );

  const activeSegment = useMemo(
    () => selected?.segments.find((segment) => segment.id === activeSegmentId) ?? selected?.segments[0],
    [activeSegmentId, selected],
  );

  useEffect(() => {
    if (!selected) {
      return;
    }
    if (selected.id !== selectedId) {
      setSelectedId(selected.id);
    }
    const segmentIds = new Set(selected.segments.map((segment) => segment.id));
    if (!segmentIds.has(activeSegmentId)) {
      setActiveSegmentId(selected.segments[0]?.id ?? '');
    }
  }, [activeSegmentId, selected, selectedId]);

  const counts = useMemo(() => {
    const next = { musical: 0, gag: 0, scene: 0 };
    for (const cutaway of cutawaySuggestions) {
      next[cutaway.kind] += 1;
    }
    return next;
  }, []);

  const copyToClipboard = async (text: string, label: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 1600);
    } catch {
      window.prompt(`Copy ${label}`, text);
    }
  };

  const selectCutaway = (cutaway: CutawaySuggestion) => {
    setSelectedId(cutaway.id);
    setActiveSegmentId(cutaway.segments[0]?.id ?? '');
    setWorkspaceTab('prompts');
    setExpandedExchangeId(null);
  };

  const dialogVersions = useMemo(
    () => (selected?.kind === 'scene' ? getDialogVersionsForScene(selected.id) : undefined),
    [selected],
  );

  useEffect(() => {
    if (!dialogVersions && workspaceTab === 'dialog') {
      setWorkspaceTab('prompts');
    }
  }, [dialogVersions, workspaceTab]);

  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8">
      <div className="space-y-5">
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-zinc-400">
              {filtered.length} of {cutawaySuggestions.length} suggestions
            </p>
            <div className="flex flex-wrap gap-2">
              <KindChip
                active={kind === allValue}
                label={`All (${cutawaySuggestions.length})`}
                onClick={() => setKind(allValue)}
              />
              <KindChip
                active={kind === 'musical'}
                label={`Musical (${counts.musical})`}
                onClick={() => setKind('musical')}
              />
              <KindChip
                active={kind === 'gag'}
                label={`Gags (${counts.gag})`}
                onClick={() => setKind('gag')}
              />
              <KindChip
                active={kind === 'scene'}
                label={`Scenes (${counts.scene})`}
                onClick={() => setKind('scene')}
              />
            </div>
          </div>
          <label className="relative mt-3 block">
            <span className="sr-only">Search suggestions</span>
            <Search
              aria-hidden="true"
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search titles, songs, tags..."
              className="h-11 w-full rounded-md border border-zinc-800 bg-black/70 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
            />
          </label>
        </div>

        {filtered.map((cutaway) => {
          const isSelected = selected?.id === cutaway.id;

          return (
            <article
              key={cutaway.id}
              className={`overflow-hidden rounded-lg border bg-zinc-950 transition ${
                isSelected
                  ? 'border-orange-500/70 ring-1 ring-orange-500/30'
                  : 'border-zinc-800 hover:border-orange-500/50'
              }`}
            >
              <button
                type="button"
                onClick={() => selectCutaway(cutaway)}
                className="block w-full p-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                      {kindLabel[cutaway.kind]} · {cutaway.episode}
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold leading-tight text-white">{cutaway.title}</h2>
                  </div>
                  <StatusBadge status={cutaway.status} />
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{cutaway.summary}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1">
                    <Timer size={14} /> {cutaway.runtime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1">
                    <Music2 size={14} /> {cutaway.songTitle}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1">
                    <Sparkles size={14} /> {cutaway.segments.length} segments
                  </span>
                  {getDialogVersionsForScene(cutaway.id) && (
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-orange-500/30 bg-orange-500/10 px-2.5 py-1 text-orange-200">
                      <MessageSquare size={14} />{' '}
                      {getDialogVersionsForScene(cutaway.id)!.exchanges.length} dialog scenes
                    </span>
                  )}
                </div>
                {isSelected && (
                  <>
                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      <span className="font-medium text-zinc-400">Visual arc: </span>
                      {cutaway.visualArc}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cutaway.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </button>

              {isSelected && (
                <div className="border-t border-zinc-800 p-4">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Timed Segments
                  </h3>
                  <div className="space-y-2">
                    {cutaway.segments.map((segment) => (
                      <SegmentRow
                        key={segment.id}
                        segment={segment}
                        active={activeSegment?.id === segment.id}
                        onSelect={() => {
                          selectCutaway(cutaway);
                          setActiveSegmentId(segment.id);
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}

        {filtered.length === 0 && (
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-10 text-center text-zinc-400">
            No suggestions match the current filters.
          </div>
        )}
      </div>

      <div className="lg:sticky lg:top-20 lg:self-start">
        {dialogVersions && (
          <div className="mb-3 flex gap-2">
            <WorkspaceTabButton
              active={workspaceTab === 'prompts'}
              label="Prompts"
              icon={<Sparkles size={15} />}
              onClick={() => setWorkspaceTab('prompts')}
            />
            <WorkspaceTabButton
              active={workspaceTab === 'dialog'}
              label={`Dialog (${dialogVersions.exchanges.length})`}
              icon={<MessageSquare size={15} />}
              onClick={() => setWorkspaceTab('dialog')}
            />
          </div>
        )}
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-400">
          {workspaceTab === 'dialog' ? <MessageSquare size={17} /> : <Lightbulb size={17} />}
          {workspaceTab === 'dialog' ? 'Dialog Versions' : 'Prompt Workspace'}
        </div>
        {selected && workspaceTab === 'dialog' && dialogVersions ? (
          <DialogVersionsPanel
            dialogSet={dialogVersions}
            expandedExchangeId={expandedExchangeId}
            copiedKey={copiedKey}
            onToggleExchange={(id) =>
              setExpandedExchangeId((prev) => (prev === id ? null : id))
            }
            onCopy={copyToClipboard}
          />
        ) : selected && activeSegment ? (
          <SegmentDetail
            cutaway={selected}
            segment={activeSegment}
            copiedKey={copiedKey}
            onCopy={copyToClipboard}
          />
        ) : (
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-5 text-sm text-zinc-400">
            Select a suggestion to copy prompts.
          </div>
        )}
      </div>
    </section>
  );
}

function KindChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] transition focus:outline-none focus:ring-2 focus:ring-orange-300 ${
        active
          ? 'border-orange-500/60 bg-orange-500/15 text-orange-100'
          : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
      }`}
    >
      {label}
    </button>
  );
}

function StatusBadge({ status }: { status: CutawaySuggestion['status'] }) {
  const label =
    status === 'ready-to-generate'
      ? 'Ready to generate'
      : status === 'in-production'
        ? 'In production'
        : 'Suggested';

  return (
    <span className="rounded-md border border-orange-500/30 bg-orange-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-200">
      {label}
    </span>
  );
}

interface SegmentRowProps {
  segment: CutawaySegment;
  active: boolean;
  onSelect: () => void;
}

function SegmentRow({ segment, active, onSelect }: SegmentRowProps) {
  const timing =
    segment.durationSec === 0
      ? 'still'
      : `${segment.start} – ${segment.end} · ${segment.durationSec}s`;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-md border px-3 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-orange-300 ${
        active
          ? 'border-orange-500/60 bg-orange-500/10'
          : 'border-zinc-800 bg-black/40 hover:border-zinc-600'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[11px] text-zinc-500">{timing}</p>
          <p className="mt-1 text-sm font-semibold text-white">{segment.label}</p>
        </div>
        {segment.stillUrl && (
          <img
            src={segment.stillUrl}
            alt=""
            className="h-12 w-20 shrink-0 rounded border border-zinc-800 object-cover"
          />
        )}
      </div>
      <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-400">{segment.onScreen}</p>
    </button>
  );
}

interface SegmentDetailProps {
  cutaway: CutawaySuggestion;
  segment: CutawaySegment;
  copiedKey: string | null;
  onCopy: (text: string, label: string, key: string) => void;
}

function SegmentDetail({ cutaway, segment, copiedKey, onCopy }: SegmentDetailProps) {
  return (
    <aside className="flex min-h-0 flex-col gap-5 rounded-lg border border-zinc-800 bg-zinc-950/95 p-5 shadow-2xl shadow-black/30">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
          {cutaway.title}
        </p>
        <h2 className="mt-2 text-xl font-semibold leading-tight text-white">{segment.label}</h2>
        <p className="mt-2 font-mono text-xs text-zinc-500">
          {segment.durationSec === 0
            ? 'Still'
            : `${segment.start} → ${segment.end} (${segment.durationSec}s)`}
        </p>
        <p className="mt-3 text-sm leading-6 text-zinc-300">{segment.onScreen}</p>
      </div>

      {segment.stillUrl && (
        <img
          src={segment.stillUrl}
          alt={segment.label}
          className="w-full rounded-md border border-zinc-800 object-cover"
        />
      )}

      {segment.lyrics ? (
        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Lyrics / Cue
          </h3>
          <pre className="max-h-36 overflow-auto rounded-md border border-zinc-800 bg-black/80 p-3 text-sm leading-6 text-zinc-200 whitespace-pre-wrap">
            {segment.lyrics}
          </pre>
          <p className="mt-2 text-xs leading-5 text-zinc-500">{segment.musicCue}</p>
        </section>
      ) : (
        <p className="text-xs leading-5 text-zinc-500">{segment.musicCue}</p>
      )}

      <PromptBlock
        title="Grok Imagine Prompt"
        text={segment.grokImaginePrompt}
        copied={copiedKey === `${segment.id}:grok`}
        onCopy={() => onCopy(segment.grokImaginePrompt, 'Grok Imagine prompt', `${segment.id}:grok`)}
      />

      <PromptBlock
        title="Gemini Omni Prompt"
        text={segment.geminiOmniPrompt}
        copied={copiedKey === `${segment.id}:gemini`}
        onCopy={() => onCopy(segment.geminiOmniPrompt, 'Gemini Omni prompt', `${segment.id}:gemini`)}
      />

      {segment.promptVariations.length > 0 && (
        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Variations
          </h3>
          <div className="space-y-3">
            {segment.promptVariations.map((variation, index) => (
              <div key={variation} className="rounded-md border border-zinc-800 bg-zinc-900/70 p-3">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-zinc-500">Variation {index + 1}</span>
                  <CopyButton
                    copied={copiedKey === `${segment.id}:variation:${index}`}
                    label="Copy"
                    onClick={() =>
                      onCopy(variation, `Variation ${index + 1}`, `${segment.id}:variation:${index}`)
                    }
                  />
                </div>
                <p className="text-sm leading-6 text-zinc-300">{variation}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}

interface PromptBlockProps {
  title: string;
  text: string;
  copied: boolean;
  onCopy: () => void;
}

function PromptBlock({ title, text, copied, onCopy }: PromptBlockProps) {
  return (
    <section className="min-h-0">
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">{title}</h3>
        <CopyButton copied={copied} label="Copy" onClick={onCopy} />
      </div>
      <pre className="max-h-44 overflow-auto rounded-md border border-zinc-800 bg-black/80 p-4 text-sm leading-6 text-zinc-200 whitespace-pre-wrap">
        {text}
      </pre>
    </section>
  );
}

interface CopyButtonProps {
  copied: boolean;
  label: string;
  onClick: () => void;
}

function CopyButton({ copied, label, onClick }: CopyButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-zinc-700 px-2.5 py-1.5 text-xs font-semibold text-zinc-200 transition hover:border-orange-400 hover:text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? 'Copied' : label}
    </button>
  );
}

function WorkspaceTabButton({
  active,
  label,
  icon,
  onClick,
}: {
  active: boolean;
  label: string;
  icon: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex flex-1 items-center justify-center gap-2 rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition focus:outline-none focus:ring-2 focus:ring-orange-300 ${
        active
          ? 'border-orange-500/60 bg-orange-500/15 text-orange-100'
          : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

interface DialogVersionsPanelProps {
  dialogSet: NonNullable<ReturnType<typeof getDialogVersionsForScene>>;
  expandedExchangeId: string | null;
  copiedKey: string | null;
  onToggleExchange: (id: string) => void;
  onCopy: (text: string, label: string, key: string) => void;
}

function DialogVersionsPanel({
  dialogSet,
  expandedExchangeId,
  copiedKey,
  onToggleExchange,
  onCopy,
}: DialogVersionsPanelProps) {
  return (
    <aside className="flex max-h-[calc(100vh-10rem)] min-h-0 flex-col gap-4 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/95 p-5 shadow-2xl shadow-black/30">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
          Rosencrantz register
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-300">{dialogSet.description}</p>
        <p className="mt-2 font-mono text-[11px] text-zinc-500">{dialogSet.sourceFile}</p>
      </div>

      <div className="-mx-1 flex-1 space-y-2 overflow-y-auto px-1">
        {dialogSet.exchanges.map((exchange) => (
          <DialogExchangeCard
            key={exchange.id}
            exchange={exchange}
            expanded={expandedExchangeId === exchange.id}
            copiedKey={copiedKey}
            onToggle={() => onToggleExchange(exchange.id)}
            onCopy={onCopy}
          />
        ))}
      </div>
    </aside>
  );
}

interface DialogExchangeCardProps {
  exchange: DialogExchange;
  expanded: boolean;
  copiedKey: string | null;
  onToggle: () => void;
  onCopy: (text: string, label: string, key: string) => void;
}

function DialogExchangeCard({
  exchange,
  expanded,
  copiedKey,
  onToggle,
  onCopy,
}: DialogExchangeCardProps) {
  const screenplay = formatExchangeAsScreenplay(exchange);
  const copyKey = `dialog:${exchange.id}`;

  return (
    <div className="rounded-md border border-zinc-800 bg-black/40">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-3 px-3 py-3 text-left transition hover:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-300"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-orange-300">
              {exchange.id}
            </span>
            <DialogStatusBadge status={exchange.status} />
          </div>
          <p className="mt-1 text-sm font-semibold text-white">{exchange.title}</p>
          <p className="mt-1 text-xs text-zinc-500">{exchange.beat}</p>
          <p className="mt-1 text-xs text-zinc-400">{exchange.register}</p>
          <p className="mt-2 text-[11px] text-zinc-500">
            {exchange.characters.join(' · ')} · {exchange.lines.length} lines
          </p>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-zinc-800 px-3 py-3">
          <div className="mb-2 flex justify-end">
            <CopyButton
              copied={copiedKey === copyKey}
              label="Copy scene"
              onClick={() => onCopy(screenplay, exchange.title, copyKey)}
            />
          </div>
          <pre className="max-h-80 overflow-auto rounded-md border border-zinc-800 bg-zinc-950 p-3 text-sm leading-6 text-zinc-200 whitespace-pre-wrap">
            {exchange.lines.map((line) => (
              <span key={`${line.speaker}:${line.text.slice(0, 24)}`} className="block mb-3 last:mb-0">
                <span className="font-semibold text-orange-200">{line.speaker}</span>
                {'\n'}
                {line.text}
              </span>
            ))}
          </pre>
        </div>
      )}
    </div>
  );
}

function DialogStatusBadge({ status }: { status: DialogExchange['status'] }) {
  const styles: Record<DialogExchange['status'], string> = {
    draft: 'border-zinc-700 bg-zinc-900 text-zinc-400',
    alt: 'border-blue-500/30 bg-blue-500/10 text-blue-200',
    active: 'border-green-500/30 bg-green-500/10 text-green-200',
    fragment: 'border-amber-500/30 bg-amber-500/10 text-amber-200',
  };

  return (
    <span
      className={`rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${styles[status]}`}
    >
      {status}
    </span>
  );
}
