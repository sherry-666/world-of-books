import type { AuthorEvent } from '../types';
import type { UIStrings } from '../i18n';
import { translatePlace, translateCountry } from '../placeNames';
import { localize } from '../authors';

interface Props {
  event: AuthorEvent;
  x: number;
  y: number;
  t: UIStrings;
  primaryLanguage: string;
}

export function EventTooltip({ event, x, y, t, primaryLanguage }: Props) {
  const yearRange = event.yearEnd
    ? `${event.year}–${event.yearEnd}`
    : String(event.year);

  const style: React.CSSProperties = {
    left: x + 18,
    top: y - 10,
  };

  return (
    <div className="event-tooltip" style={style}>
      <div className={`event-tooltip-type ev-${event.type}`}>{t.eventLabels[event.type]}</div>
      <div className="event-tooltip-year">{yearRange}</div>
      <div className="event-tooltip-place">{translatePlace(event.place, primaryLanguage)}, {translateCountry(event.country, primaryLanguage)}</div>
      {event.note && <div className="event-tooltip-note">{localize(event.note, primaryLanguage)}</div>}
    </div>
  );
}
