type TestimonialVariant = 'light' | 'dark';

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  eventDescription: string;
  variant?: TestimonialVariant;
}

const variantStyles: Record<TestimonialVariant, {
  bg: string; border: string; quoteColor: string;
  text: string; authorText: string; eventText: string; divider: string;
}> = {
  light: {
    bg: 'var(--color-warm-gray)',
    border: 'var(--color-border)',
    quoteColor: 'var(--color-gold-text)',
    text: 'var(--color-text)',
    authorText: 'var(--color-text)',
    eventText: 'var(--color-text-secondary)',
    divider: 'var(--color-border)',
  },
  dark: {
    bg: 'var(--color-navy)',
    border: 'rgba(255,255,255,0.1)',
    quoteColor: 'var(--color-gold)',
    text: 'var(--color-text-on-dark)',
    authorText: 'var(--color-text-on-dark)',
    eventText: 'var(--color-text-muted-on-dark)',
    divider: 'rgba(255,255,255,0.1)',
  },
};

export default function TestimonialCard({
  quote,
  authorName,
  eventDescription,
  variant = 'light',
}: TestimonialCardProps) {
  const s = variantStyles[variant];

  return (
    <figure
      className="flex flex-col rounded-xl p-8 md:p-10"
      style={{
        backgroundColor: s.bg,
        border: `1px solid ${s.border}`,
      }}
    >
      <span
        aria-hidden="true"
        className="block text-6xl font-black leading-none mb-4 select-none"
        style={{ color: s.quoteColor, fontFamily: 'var(--font-headline)', lineHeight: 1 }}
      >
        &ldquo;
      </span>

      <blockquote className="flex-1">
        <p
          className="text-lg leading-relaxed"
          style={{ color: s.text, fontFamily: 'var(--font-body)' }}
        >
          {quote}
        </p>
      </blockquote>

      <figcaption className="mt-6 pt-6 border-t" style={{ borderColor: s.divider }}>
        <cite className="not-italic" style={{ fontFamily: 'var(--font-ui)' }}>
          <span className="block font-semibold text-base" style={{ color: s.authorText }}>
            {authorName}
          </span>
          <span className="block text-sm mt-0.5" style={{ color: s.eventText }}>
            {eventDescription}
          </span>
        </cite>
      </figcaption>
    </figure>
  );
}
