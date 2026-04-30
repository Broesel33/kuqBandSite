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
  { bg: string; text: string; textSecondary: string; border: string; linkColor: string }
> = {
  light: {
    bg: 'var(--color-warm-gray)',
    text: 'var(--color-text)',
    textSecondary: 'var(--color-text-secondary)',
    border: 'var(--color-border)',
    linkColor: 'var(--color-gold-text)',
  },
  dark: {
    bg: 'var(--color-navy)',
    text: 'var(--color-text-on-dark)',
    textSecondary: 'var(--color-text-muted-on-dark)',
    border: 'rgba(255,255,255,0.1)',
    linkColor: 'var(--color-gold)',
  },
  mid: {
    bg: 'var(--color-warm-gray-2)',
    text: 'var(--color-text)',
    textSecondary: 'var(--color-text-secondary)',
    border: 'var(--color-border)',
    linkColor: 'var(--color-gold-text)',
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
    <Link
      href={linkHref}
      aria-label={`${title} – ${linkLabel}`}
      className="group block rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2"
      style={{ border: `1px solid ${styles.border}` }}
    >
      <article
        className="flex flex-col justify-between rounded-xl p-8 md:p-10 h-full"
        style={{ backgroundColor: styles.bg }}
      >
        <div className="flex flex-col gap-4">
          <span
            className="material-symbols-outlined select-none"
            aria-hidden="true"
            style={{ color: 'var(--color-gold)', fontSize: '2.25rem' }}
          >
            {icon}
          </span>

          <h3
            className="text-xl font-bold"
            style={{ color: styles.text, fontFamily: 'var(--font-headline)' }}
          >
            {title}
          </h3>

          <p
            className="text-base leading-relaxed"
            style={{ color: styles.textSecondary, fontFamily: 'var(--font-body)' }}
          >
            {description}
          </p>
        </div>

        <div className="mt-8">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
            style={{ color: styles.linkColor, fontFamily: 'var(--font-ui)' }}
          >
            {linkLabel} <span aria-hidden="true">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
