"use client";

import type { EventStatus } from '@/data/termine';

interface EventRowProps {
  dateISO: string;
  day: string;
  monthShort: string;
  year: string;
  weekday: string;
  eventName: string;
  venue: string;
  status: EventStatus;
  statusLabel: string;
}

const statusStyles: Record<EventStatus, { bg: string; text: string }> = {
  confirmed: { bg: 'rgba(37, 99, 235, 0.12)', text: 'var(--color-blue)' },
  upcoming:  { bg: 'rgba(200, 149, 26, 0.12)', text: 'var(--color-gold-text)' },
  past:      { bg: 'rgba(92, 84, 72, 0.1)',    text: 'var(--color-text-secondary)' },
};

export default function EventRow({
  dateISO,
  day,
  monthShort,
  year,
  weekday,
  eventName,
  venue,
  status,
  statusLabel,
}: EventRowProps) {
  const isPast = status === 'past';
  const badge = statusStyles[status];

  return (
    <div
      role="listitem"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.875rem 1.25rem',
        borderRadius: '0.75rem',
        marginBottom: '0.5rem',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        opacity: isPast ? 0.55 : 1,
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
          width: '3.25rem',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          border: '1px solid var(--color-border)',
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        <div style={{ backgroundColor: 'var(--color-gold)', padding: '0.2rem 0' }}>
          <span style={{
            display: 'block',
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-navy)',
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
            fontSize: '0.55rem',
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
      </div>
    </div>
  );
}
