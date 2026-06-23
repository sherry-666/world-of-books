import { useEffect, useRef, useState } from 'react';

export const LANGUAGE_OPTIONS = ['English', 'French', 'Chinese'] as const;

// Each language is shown in its own native name (endonym), fixed — it
// does not follow the primary-language UI translation.
export const LANGUAGE_LABELS: Record<(typeof LANGUAGE_OPTIONS)[number], string> = {
  English: 'English',
  French: 'Français',
  Chinese: '中文',
};

interface Props {
  selected: Set<string>;
  onChange: (next: Set<string>) => void;
  primaryLanguage: string;
  onPrimaryChange: (lang: string) => void;
}

export function LanguageFilter({ selected, onChange, primaryLanguage, onPrimaryChange }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const toggle = (lang: string) => {
    if (lang === primaryLanguage) return; // primary cannot be deselected
    const next = new Set(selected);
    if (next.has(lang)) next.delete(lang); else next.add(lang);
    onChange(next);
  };

  const label =
    selected.size === 0                  ? 'No language' :
    selected.size === LANGUAGE_OPTIONS.length ? 'All languages' :
    Array.from(selected).map(l => LANGUAGE_LABELS[l as keyof typeof LANGUAGE_LABELS] ?? l).join(' · ');

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
          {LANGUAGE_OPTIONS.map(lang => {
            const isPrimary = lang === primaryLanguage;
            return (
              <div key={lang} className="langfilter-row">
                <label className="langfilter-check-label">
                  <input
                    type="checkbox"
                    checked={selected.has(lang)}
                    disabled={isPrimary}
                    onChange={() => toggle(lang)}
                  />
                  <span>{LANGUAGE_LABELS[lang]}</span>
                </label>
                <button
                  className={`langfilter-star${isPrimary ? ' active' : ''}`}
                  title={isPrimary ? 'Primary language' : `Set ${lang} as primary`}
                  onClick={(e) => { e.stopPropagation(); onPrimaryChange(lang); }}
                  aria-label={`Set ${lang} as primary language`}
                >
                  {isPrimary ? '★' : '☆'}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
