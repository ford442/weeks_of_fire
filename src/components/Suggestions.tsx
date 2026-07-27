import { useMemo, useState } from 'react';
import { Check, Copy, Lightbulb, Music2, Sparkles, Timer } from 'lucide-react';
import { cutawaySuggestions, type CutawaySegment, type CutawaySuggestion } from '../data/suggestions';

export default function Suggestions() {
  const [selected, setSelected] = useState<CutawaySuggestion>(cutawaySuggestions[0]);
  const [activeSegmentId, setActiveSegmentId] = useState(cutawaySuggestions[0].segments[0]?.id ?? '');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const activeSegment = useMemo(
    () => selected.segments.find((segment) => segment.id === activeSegmentId) ?? selected.segments[0],
    [activeSegmentId, selected.segments],
  );

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
    setSelected(cutaway);
    setActiveSegmentId(cutaway.segments[0]?.id ?? '');
  };

  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8">
      <div className="space-y-5">
        {cutawaySuggestions.map((cutaway) => (
          <article
            key={cutaway.id}
            className={`overflow-hidden rounded-lg border bg-zinc-950 transition ${
              selected.id === cutaway.id
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
                    {cutaway.episode}
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
              </div>
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
            </button>

            <div className="border-t border-zinc-800 p-4">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Timed Segments
              </h3>
              <div className="space-y-2">
                {cutaway.segments.map((segment) => (
                  <SegmentRow
                    key={segment.id}
                    segment={segment}
                    active={selected.id === cutaway.id && activeSegment?.id === segment.id}
                    onSelect={() => {
                      selectCutaway(cutaway);
                      setActiveSegmentId(segment.id);
                    }}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="lg:sticky lg:top-20 lg:self-start">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-400">
          <Lightbulb size={17} />
          Prompt Workspace
        </div>
        {activeSegment && (
          <SegmentDetail
            cutaway={selected}
            segment={activeSegment}
            copiedKey={copiedKey}
            onCopy={copyToClipboard}
          />
        )}
      </div>
    </section>
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
        <div>
          <p className="font-mono text-[11px] text-zinc-500">
            {segment.start} – {segment.end} · {segment.durationSec}s
          </p>
          <p className="mt-1 text-sm font-semibold text-white">{segment.label}</p>
        </div>
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
          {segment.start} → {segment.end} ({segment.durationSec}s)
        </p>
        <p className="mt-3 text-sm leading-6 text-zinc-300">{segment.onScreen}</p>
      </div>

      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Lyrics / Cue
        </h3>
        <pre className="max-h-36 overflow-auto rounded-md border border-zinc-800 bg-black/80 p-3 text-sm leading-6 text-zinc-200 whitespace-pre-wrap">
          {segment.lyrics}
        </pre>
        <p className="mt-2 text-xs leading-5 text-zinc-500">{segment.musicCue}</p>
      </section>

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
