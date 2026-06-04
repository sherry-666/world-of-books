import { useEffect, useRef, useState } from 'react';

export const LANGUAGE_OPTIONS = ['English', 'French', 'Chinese'] as const;

interface Props {
  selected: Set<string>;
  onChange: (next: Set<string>) => void;
}

export function LanguageFilter({ selected, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const toggle = (lang: string) => {
    const next = new Set(selected);
    if (next.has(lang)) next.delete(lang); else next.add(lang);
    onChange(next);
  };

  const label =
    selected.size === 0           ? 'No language' :
    selected.size === LANGUAGE_OPTIONS.length ? 'All languages' :
    Array.from(selected).join(' · ');

  return (
    <div className="chrome langfilter" ref={rootRef}>
      <button
        className="langfilter-btn"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="langfilter-label">{label}</span>
        <span className="langfilter-caret">▾</span>
      </button>
      {open && (
        <div className="langfilter-menu" role="listbox">
          {LANGUAGE_OPTIONS.map(lang => (
            <label key={lang} className="langfilter-row">
              <input
                type="checkbox"
                checked={selected.has(lang)}
                onChange={() => toggle(lang)}
              />
              <span>{lang}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
