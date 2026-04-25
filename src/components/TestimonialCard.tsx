interface TestimonialCardProps {
  quote: string;
  authorName: string;
  eventDescription: string;
}

export default function TestimonialCard({
  quote,
  authorName,
  eventDescription,
}: TestimonialCardProps) {
  return (
    <figure
      className="flex flex-col rounded-xl p-8 md:p-10"
      style={{
        backgroundColor: 'var(--color-warm-gray)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Decorative quotation mark */}
      <span
        aria-hidden="true"
        className="block text-6xl font-black leading-none mb-4 select-none"
        style={{ color: 'var(--color-gold)', fontFamily: 'Georgia, serif', lineHeight: 1 }}
      >
        &ldquo;
      </span>

      <blockquote className="flex-1">
        <p
          className="text-lg leading-relaxed"
          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
        >
          {quote}
        </p>
      </blockquote>

      <figcaption className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <cite
          className="not-italic"
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          <span
            className="block font-semibold text-base"
            style={{ color: 'var(--color-text)' }}
          >
            {authorName}
          </span>
          <span
            className="block text-sm mt-0.5"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {eventDescription}
          </span>
        </cite>
      </figcaption>
    </figure>
  );
}
