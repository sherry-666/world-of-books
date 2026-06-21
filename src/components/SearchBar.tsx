import { useState, useRef, useCallback, useEffect } from 'react';
import { searchLocations } from '../searchLocations';
import type { SearchLocation } from '../searchLocations';

interface SearchBarProps {
  onSelect: (loc: SearchLocation) => void;
  placeholder?: string;
}

export function SearchBar({ onSelect, placeholder = 'Search country or region…' }: SearchBarProps) {
  const [query,       setQuery]       = useState('');
  const [results,     setResults]     = useState<SearchLocation[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open,        setOpen]        = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef  = useRef<HTMLUListElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    const res = searchLocations(val);
    setResults(res);
    setActiveIndex(-1);
    setOpen(res.length > 0);
  }, []);

  const commit = useCallback((loc: SearchLocation) => {
    onSelect(loc);
    setQuery(loc.name);
    setOpen(false);
    setResults([]);
    inputRef.current?.blur();
  }, [onSelect]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const loc = activeIndex >= 0 ? results[activeIndex] : results[0];
      if (loc) commit(loc);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }, [open, results, activeIndex, commit]);

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex < 0 || !listRef.current) return;
    const item = listRef.current.children[activeIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!inputRef.current?.closest('.searchbar')?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div className="chrome searchbar">
      <div className="searchbar-inner">
        <svg className="searchbar-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="6.5" cy="6.5" r="5" />
          <path d="M11 11l3.5 3.5" />
        </svg>
        <input
          ref={inputRef}
          className="searchbar-input"
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => { if (results.length) setOpen(true); }}
          autoComplete="off"
          spellCheck={false}
          aria-label="Search location"
          aria-autocomplete="list"
          aria-expanded={open}
        />
        {query && (
          <button
            className="searchbar-clear"
            onClick={() => { setQuery(''); setResults([]); setOpen(false); inputRef.current?.focus(); }}
            aria-label="Clear search"
          >×</button>
        )}
      </div>
      {open && (
        <ul ref={listRef} className="searchbar-dropdown" role="listbox">
          {results.map((loc, i) => (
            <li
              key={`${loc.type}-${loc.name}`}
              className={`searchbar-option${i === activeIndex ? ' active' : ''}`}
              role="option"
              aria-selected={i === activeIndex}
              onMouseDown={(e) => { e.preventDefault(); commit(loc); }}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <span className="searchbar-option-name">{loc.name}</span>
              <span className="searchbar-option-type">{loc.type}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
