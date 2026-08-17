"use client";

interface EventRowProps {
  dateISO: string;
  eventName: string;
  venue: string;
  startTime?: string;
  timeApprox?: boolean;
  note?: string;
}

// dateISO ist ein reines Kalenderdatum ("YYYY-MM-DD") ohne Zeitzone. Über
// Date.UTC + timeZone: "UTC" bleibt das Kalenderdatum unabhängig davon
// erhalten, in welcher Zeitzone Server oder Browser gerade laufen.
function formatDatePart(dateISO: string, options: Intl.DateTimeFormatOptions): string {
  const [year, month, day] = dateISO.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat("de-AT", { ...options, timeZone: "UTC" }).format(date);
}

// Gleiche Offset-Ermittlung wie im Event-JSON-LD auf der Termine-Seite:
// UTC-Offset für Europa/Wien am jeweiligen Datum (Sommer +02:00, Winter +01:00).
function wienerOffset(dateISO: string): string {
  const mittag = new Date(`${dateISO}T12:00:00Z`);
  const teil = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Vienna",
    timeZoneName: "longOffset",
  })
    .formatToParts(mittag)
    .find((p) => p.type === "timeZoneName")?.value;
  return teil?.replace("GMT", "") || "+01:00";
}

function toIcsUtcStamp(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function nextDayCompact(dateISO: string): string {
  const [year, month, day] = dateISO.split("-").map(Number);
  const next = new Date(Date.UTC(year, month - 1, day + 1));
  return next.toISOString().slice(0, 10).replace(/-/g, "");
}

function icsEscape(text: string): string {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

const EVENT_DURATION_HOURS = 3;

function buildIcsDataUri(props: EventRowProps): string {
  const { dateISO, eventName, venue, startTime, note } = props;
  const uid = `${dateISO}-${eventName}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  let dtStart: string;
  let dtEnd: string;
  if (startTime) {
    const start = new Date(`${dateISO}T${startTime}:00${wienerOffset(dateISO)}`);
    const end = new Date(start.getTime() + EVENT_DURATION_HOURS * 60 * 60 * 1000);
    dtStart = `DTSTART:${toIcsUtcStamp(start)}`;
    dtEnd = `DTEND:${toIcsUtcStamp(end)}`;
  } else {
    dtStart = `DTSTART;VALUE=DATE:${dateISO.replace(/-/g, "")}`;
    dtEnd = `DTEND;VALUE=DATE:${nextDayCompact(dateISO)}`;
  }

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Kreiz & Quer//Termine//DE",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${uid}@kreizundquer.at`,
    `DTSTAMP:${toIcsUtcStamp(new Date())}`,
    dtStart,
    dtEnd,
    `SUMMARY:${icsEscape(`Kreiz & Quer live: ${eventName}`)}`,
    `LOCATION:${icsEscape(venue)}`,
    ...(note ? [`DESCRIPTION:${icsEscape(note)}`] : []),
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}

export default function EventRow({
  dateISO,
  eventName,
  venue,
  startTime,
  timeApprox,
  note,
}: EventRowProps) {
  const day = formatDatePart(dateISO, { day: "2-digit" });
  const monthShort = formatDatePart(dateISO, { month: "short" });
  const year = formatDatePart(dateISO, { year: "numeric" });
  const weekday = formatDatePart(dateISO, { weekday: "short" });
  const timeLabel = startTime ? `ab ${timeApprox ? "ca. " : ""}${startTime} Uhr` : undefined;
  const icsHref = buildIcsDataUri({ dateISO, eventName, venue, startTime, timeApprox, note });
  const icsFileName = `${eventName.replace(/[^a-zA-Z0-9]+/g, "-")}.ics`;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.875rem 1.25rem',
        borderRadius: '0.75rem',
        marginBottom: '0.5rem',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        transition: 'box-shadow 0.15s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      {/* Calendar tile */}
      <time
        dateTime={dateISO}
        aria-label={`${weekday}, ${day}. ${monthShort} ${year}`}
        style={{
          flexShrink: 0,
          width: '3.5rem',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          border: '1px solid var(--color-border)',
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        <div style={{ backgroundColor: 'var(--color-amber)', padding: '0.2rem 0' }}>
          <span style={{
            display: 'block',
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#000',
            fontFamily: 'var(--font-ui)',
          }}>
            {monthShort}
          </span>
        </div>
        <div style={{ backgroundColor: 'var(--color-surface)', padding: '0.25rem 0 0.3rem' }}>
          <span style={{
            display: 'block',
            fontSize: '1.375rem',
            fontWeight: 900,
            lineHeight: 1,
            color: 'var(--color-text)',
            fontFamily: 'var(--font-headline)',
          }}>
            {day}
          </span>
          <span style={{
            display: 'block',
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-ui)',
            marginTop: '0.1rem',
          }}>
            {weekday}
          </span>
        </div>
      </time>

      {/* Event info — takes all remaining space */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Row 1: event name */}
        <p style={{
          fontFamily: 'var(--font-headline)',
          fontWeight: 700,
          fontSize: '1rem',
          color: 'var(--color-text)',
          margin: 0,
        }}>
          {eventName}
        </p>
        {/* Row 2: venue */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
          margin: '0.2rem 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }}>
          <span
            className="material-symbols-outlined"
            aria-hidden="true"
            style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}
          >
            location_on
          </span>
          {venue}
        </p>
        {/* Row 3: time (optional) */}
        {timeLabel && (
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)',
            margin: '0.2rem 0 0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}>
            <span
              className="material-symbols-outlined"
              aria-hidden="true"
              style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}
            >
              schedule
            </span>
            {timeLabel}
          </p>
        )}
        {/* Row 4: note (optional) */}
        {note && (
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--color-text-muted)',
            margin: '0.2rem 0 0',
            fontStyle: 'italic',
          }}>
            {note}
          </p>
        )}
      </div>

      {/* Zum Kalender hinzufügen */}
      <a
        href={icsHref}
        download={icsFileName}
        aria-label={`${eventName} am ${day}. ${monthShort} zum Kalender hinzufügen`}
        title="Zum Kalender hinzufügen"
        style={{
          flexShrink: 0,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '2.75rem',
          height: '2.75rem',
          borderRadius: '0.5rem',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text-secondary)',
          textDecoration: 'none',
        }}
      >
        <span
          className="material-symbols-outlined"
          aria-hidden="true"
          style={{ fontSize: '1.25rem' }}
        >
          calendar_month
        </span>
      </a>
    </div>
  );
}
