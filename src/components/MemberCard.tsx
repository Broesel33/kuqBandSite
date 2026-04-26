import Image from 'next/image';
import PlaceholderImage from './PlaceholderImage';

interface MemberCardProps {
  name: string;
  instrument: string;
  bio: string;
  photoSrc?: string;
  photoAlt: string;
}

export default function MemberCard({
  name,
  instrument,
  bio,
  photoSrc,
  photoAlt,
}: MemberCardProps) {
  return (
    <article
      className="flex flex-col rounded-xl overflow-hidden"
      style={{
        backgroundColor: 'var(--color-warm-gray)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Photo area — 4:3 aspect ratio */}
      <div
        className="relative w-full aspect-[4/3]"
        style={{ backgroundColor: 'var(--color-warm-gray)' }}
      >
        {photoSrc ? (
          <Image
            src={photoSrc}
            alt={photoAlt}
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <PlaceholderImage
            alt={photoAlt}
            variant="light"
            className="w-full h-full"
          />
        )}
      </div>

      {/* Gold accent bar */}
      <div
        className="h-1 w-full"
        style={{ backgroundColor: 'var(--color-gold)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="flex flex-col gap-3 p-6">
        {/* Instrument label */}
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.15em]"
          style={{ color: 'var(--color-gold-text)', fontFamily: 'var(--font-ui)' }}
        >
          {instrument}
        </p>

        {/* Name */}
        <h3
          className="text-xl font-bold leading-snug"
          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-headline)' }}
        >
          {name}
        </h3>

        {/* Bio */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
        >
          {bio}
        </p>
      </div>
    </article>
  );
}
