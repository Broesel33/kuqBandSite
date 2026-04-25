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
  confirmed: {
    bg: 'rgba(37, 99, 235, 0.12)',
    text: 'var(--color-blue)',
  },
  upcoming: {
    bg: 'rgba(200, 149, 26, 0.12)',
    text: 'var(--color-gold)',
  },
  past: {
    bg: 'rgba(92, 84, 72, 0.1)',
    text: 'var(--color-text-secondary)',
  },
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
      className="flex items-center gap-4 md:gap-6 px-4 md:px-6 py-4 md:py-5 border-b transition-colors hover:border-l-4 group"
      style={{
        borderColor: 'var(--color-border)',
        opacity: isPast ? 0.6 : 1,
        borderLeftColor: 'transparent',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'var(--color-blue)';
        (e.currentTarget as HTMLDivElement).style.paddingLeft = '20px';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'transparent';
        (e.currentTarget as HTMLDivElement).style.paddingLeft = '';
      }}
    >
      {/* Date block */}
      <time
        dateTime={dateISO}
        className="flex-shrink-0 w-12 md:w-14 text-center"
        aria-label={`${day}. ${monthShort} ${year}`}
      >
        <span
          className="block text-2xl md:text-3xl font-black leading-none"
          style={{ color: 'var(--color-gold-text)', fontFamily: 'var(--font-headline)' }}
        >
          {day}
        </span>
        <span
          className="block text-[11px] font-semibold uppercase tracking-wider mt-0.5"
          style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}
        >
          {monthShort} {year.slice(2)}
        </span>
      </time>

      {/* Divider */}
      <div
        className="flex-shrink-0 w-px h-10 hidden sm:block"
        style={{ backgroundColor: 'var(--color-border)' }}
        aria-hidden="true"
      />

      {/* Event info */}
      <div className="flex-1 min-w-0">
        <p
          className="font-bold text-base leading-snug truncate"
          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-headline)' }}
        >
          {eventName}
        </p>
        <p
          className="flex items-center gap-1 text-sm mt-0.5"
          style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
        >
          <span
            className="material-symbols-outlined"
            aria-hidden="true"
            style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}
          >
            location_on
          </span>
          <span className="truncate">{venue}</span>
        </p>
      </div>

      {/* Badges */}
      <div className="flex-shrink-0 flex flex-col sm:flex-row items-end sm:items-center gap-2">
        {/* Weekday badge */}
        <span
          className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold min-h-[28px]"
          style={{
            backgroundColor: 'rgba(92, 84, 72, 0.08)',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-ui)',
          }}
        >
          {weekday}
        </span>

        {/* Status badge — text + color, never color alone */}
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold min-h-[28px]"
          style={{
            backgroundColor: badge.bg,
            color: badge.text,
            fontFamily: 'var(--font-ui)',
          }}
        >
          {statusLabel}
        </span>
      </div>
    </div>
  );
}
