import type { AuthorEvent } from '../types';

const TYPE_LABEL: Record<AuthorEvent['type'], string> = {
  birth: 'Born',
  lived: 'Lived here',
  traveled: 'Traveled',
  wrote: 'Wrote here',
  died: 'Died',
};

interface Props {
  event: AuthorEvent;
  x: number;
  y: number;
}

export function EventTooltip({ event, x, y }: Props) {
  const yearRange = event.yearEnd
    ? `${event.year}–${event.yearEnd}`
    : String(event.year);

  const style: React.CSSProperties = {
    left: x + 18,
    top: y - 10,
  };

  return (
    <div className="event-tooltip" style={style}>
      <div className={`event-tooltip-type ev-${event.type}`}>{TYPE_LABEL[event.type]}</div>
      <div className="event-tooltip-year">{yearRange}</div>
      <div className="event-tooltip-place">{event.place}, {event.country}</div>
      {event.note && <div className="event-tooltip-note">{event.note}</div>}
    </div>
  );
}
