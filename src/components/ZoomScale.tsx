import { useRef } from 'react';

interface ZoomScaleProps {
  zoom: number;
  min: number;
  max: number;
  onChange: (k: number) => void;
}

export function ZoomScale({ zoom, min, max, onChange }: ZoomScaleProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const logMin = Math.log(min);
  const logMax = Math.log(max);
  const clamped = Math.max(min, Math.min(max, zoom));
  // Top of the bar = max zoom, bottom = min zoom
  const positionFromTop = 1 - (Math.log(clamped) - logMin) / (logMax - logMin);

  const setFromY = (clientY: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
    const ratio = 1 - y / rect.height;
    onChange(Math.exp(logMin + ratio * (logMax - logMin)));
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setFromY(e.clientY);
    const onMove = (ev: PointerEvent) => setFromY(ev.clientY);
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  // Logarithmic tick positions at 1×, 10×, 100×
  const tickValues = [1, 10, 100].filter(v => v >= min && v <= max);
  const tickTop = (v: number) => `${(1 - (Math.log(v) - logMin) / (logMax - logMin)) * 100}%`;

  return (
    <div className="zoomscale">
      <div className="zoomscale-readout">{zoom.toFixed(1)}×</div>
      <div
        ref={trackRef}
        className="zoomscale-track"
        onPointerDown={handlePointerDown}
        role="slider"
        aria-label="Map zoom"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={Math.round(zoom)}
      >
        {tickValues.map(v => (
          <div key={v} className="zoomscale-tick" style={{ top: tickTop(v) }}>
            <span className="zoomscale-ticklabel">{v}×</span>
          </div>
        ))}
        <div className="zoomscale-thumb" style={{ top: `${positionFromTop * 100}%` }} />
      </div>
    </div>
  );
}
