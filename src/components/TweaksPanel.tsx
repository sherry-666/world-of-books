import type { MapTweaks } from '../types';

interface TweaksPanelProps {
  tweaks: MapTweaks;
  setTweak: <K extends keyof MapTweaks>(key: K, value: MapTweaks[K]) => void;
  onClose: () => void;
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
