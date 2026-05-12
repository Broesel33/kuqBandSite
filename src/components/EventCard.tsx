import Image from 'next/image';
import Link from 'next/link';
import type { GalerieEvent } from '@/data/galerie';
import { cloudinaryUrl } from '@/lib/cloudinary';

export default function EventCard({ event }: { event: GalerieEvent }) {
  return (
    <Link
      href={`/galerie/${event.slug}`}
      className="group block relative overflow-hidden rounded-2xl focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{ aspectRatio: '4/3', display: 'block' }}
      aria-label={`${event.title}, ${event.dateLabel} — ${event.mediaCount} Fotos & Videos ansehen`}
    >
      <Image
        src={cloudinaryUrl(event.previewImage, { width: 1200, crop: 'fill', gravity: 'auto', aspectRatio: '4:3' })}
        alt={event.previewAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(13,27,42,0.15) 0%, transparent 35%, rgba(13,27,42,0.75) 100%)',
          transition: 'opacity 0.3s',
        }}
        aria-hidden="true"
      />

      {/* Date badge */}
      <span
        className="absolute top-4 left-4"
        style={{
          backgroundColor: 'var(--color-amber)',
          color: 'var(--color-dark)',
          fontFamily: 'var(--font-ui)',
          fontSize: '0.6875rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '0.3rem 0.75rem',
          borderRadius: '999px',
        }}
        aria-hidden="true"
      >
        {event.dateLabel}
      </span>

      {/* Title + count */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h2
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.25,
            marginBottom: '0.375rem',
          }}
        >
          {event.title}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.8125rem',
            color: 'rgba(255,255,255,0.65)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '1rem' }} aria-hidden="true">
            photo_library
          </span>
          {event.mediaCount} Fotos &amp; Videos
        </p>
      </div>

      {/* Hover CTA */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--color-amber)',
            color: 'var(--color-dark)',
            fontFamily: 'var(--font-ui)',
            fontWeight: 700,
            fontSize: '0.875rem',
            padding: '0.625rem 1.25rem',
            borderRadius: '999px',
            letterSpacing: '0.05em',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>collections</span>
          Alle ansehen
        </span>
      </div>
    </Link>
  );
}
