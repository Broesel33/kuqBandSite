"use client";

import Link from 'next/link';

type ServiceCardVariant = 'light' | 'dark' | 'mid';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  linkHref: string;
  linkLabel: string;
  variant?: ServiceCardVariant;
}

const variantStyles: Record<
  ServiceCardVariant,
  { bg: string; text: string; textSecondary: string; border: string }
> = {
  light: {
    bg: 'var(--color-warm-gray)',
    text: 'var(--color-text)',
    textSecondary: 'var(--color-text-secondary)',
    border: 'var(--color-border)',
  },
  dark: {
    bg: 'var(--color-navy)',
    text: 'var(--color-text-on-dark)',
    textSecondary: 'var(--color-text-muted-on-dark)',
    border: 'rgba(255,255,255,0.1)',
  },
  mid: {
    bg: 'var(--color-warm-gray-2)',
    text: 'var(--color-text)',
    textSecondary: 'var(--color-text-secondary)',
    border: 'var(--color-border)',
  },
};

export default function ServiceCard({
  icon,
  title,
  description,
  linkHref,
  linkLabel,
  variant = 'light',
}: ServiceCardProps) {
  const styles = variantStyles[variant];

  return (
    <article
      className="flex flex-col justify-between rounded-xl p-8 md:p-10 transition-shadow duration-200 hover:shadow-lg"
      style={{
        backgroundColor: styles.bg,
        border: `1px solid ${styles.border}`,
      }}
    >
      <div className="flex flex-col gap-4">
        {/* Icon */}
        <span
          className="material-symbols-outlined text-4xl select-none"
          aria-hidden="true"
          style={{ color: 'var(--color-gold)', fontSize: '2.25rem' }}
        >
          {icon}
        </span>

        {/* Title */}
        <h3
          className="text-xl font-bold"
          style={{ color: styles.text, fontFamily: 'var(--font-headline)' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-base leading-relaxed"
          style={{ color: styles.textSecondary, fontFamily: 'var(--font-body)' }}
        >
          {description}
        </p>
      </div>

      {/* Link */}
      <div className="mt-8">
        <Link
          href={linkHref}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors min-h-[44px]"
          style={{ color: variant === 'dark' ? 'var(--color-gold)' : 'var(--color-gold-text)', fontFamily: 'var(--font-ui)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = variant === 'dark'
              ? 'var(--color-gold-light)'
              : 'var(--color-gold-text)';
            (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = variant === 'dark' ? 'var(--color-gold)' : 'var(--color-gold-text)';
            (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none';
          }}
        >
          <span>{linkLabel}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
