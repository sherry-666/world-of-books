import type { MapTweaks } from '../types';

interface TweaksPanelProps {
  tweaks: MapTweaks;
  setTweak: <K extends keyof MapTweaks>(key: K, value: MapTweaks[K]) => void;
  onClose: () => void;
}

interface SegOption<T> {
  value: T;
  label: string;
}

function SegControl<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: SegOption<T>[];
  onChange: (v: T) => void;
}) {
  const idx = Math.max(0, options.findIndex(o => o.value === value));
  const n = options.length;
  return (
    <div className="twk-seg">
      <div
        className="twk-seg-thumb"
        style={{
          left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
          width: `calc((100% - 4px) / ${n})`,
        }}
      />
      {options.map(o => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={o.value === value}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      className="twk-toggle"
      data-on={value ? '1' : '0'}
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
    >
      <i />
    </button>
  );
}

export function TweaksPanel({ tweaks, setTweak, onClose }: TweaksPanelProps) {
  return (
    <div className="twk-panel">
      <div className="twk-hd">
        <b>Tweaks</b>
        <button className="twk-x" aria-label="Close tweaks" onClick={onClose}>✕</button>
      </div>
      <div className="twk-body">

        <div className="twk-sect">Atlas style</div>

        <div className="twk-row">
          <div className="twk-lbl"><span>Theme</span></div>
          <SegControl
            value={tweaks.theme}
            options={[
              { value: 'atlas' as const,     label: 'Vintage'   },
              { value: 'parchment' as const, label: 'Parchment' },
              { value: 'modern' as const,    label: 'Modern'    },
            ]}
            onChange={v => setTweak('theme', v)}
          />
        </div>

        <div className="twk-row">
          <div className="twk-lbl"><span>Markers</span></div>
          <SegControl
            value={tweaks.markerStyle}
            options={[
              { value: 'spine' as const, label: 'Spine' },
              { value: 'dot'   as const, label: 'Pin'   },
              { value: 'cover' as const, label: 'Cover' },
            ]}
            onChange={v => setTweak('markerStyle', v)}
          />
        </div>

        <div className="twk-row twk-row-h">
          <div className="twk-lbl"><span>Animate markers</span></div>
          <Toggle value={tweaks.animate} onChange={v => setTweak('animate', v)} />
        </div>

        <div className="twk-sect">Map detail</div>

        <div className="twk-row">
          <div className="twk-lbl">
            <span>Reveal rate</span>
            <span className="twk-val">{tweaks.reveal.toFixed(1)}</span>
          </div>
          <input
            type="range"
            className="twk-slider"
            min={0.6}
            max={1.6}
            step={0.1}
            value={tweaks.reveal}
            onChange={e => setTweak('reveal', parseFloat(e.target.value))}
          />
        </div>

        <div className="twk-row twk-row-h">
          <div className="twk-lbl"><span>Place labels</span></div>
          <Toggle value={tweaks.labels} onChange={v => setTweak('labels', v)} />
        </div>

        <div className="twk-row twk-row-h">
          <div className="twk-lbl"><span>Graticule</span></div>
          <Toggle value={tweaks.graticule} onChange={v => setTweak('graticule', v)} />
        </div>

      </div>
    </div>
  );
}
