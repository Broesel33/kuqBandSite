"use client";

import Image from 'next/image';
import Link from 'next/link';
import WhatsAppIcon from './WhatsAppIcon';

interface HeroSectionProps {
  headline: string;
  subline: string;
  eyebrow?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  contactBar?: boolean;
  photoAlt: string;
}

export default function HeroSection({
  headline,
  subline,
  eyebrow,
  primaryCta,
  secondaryCta,
  contactBar = false,
  photoAlt,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full min-h-[100svh] flex items-center"
      style={{ backgroundColor: 'var(--color-navy)' }}
      aria-label={eyebrow ? `${eyebrow}: ${headline}` : headline}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-8 py-20 md:py-24 flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
        {/* Left column — text */}
        <div className="flex-1 md:w-[60%] flex flex-col gap-6">
          {eyebrow && (
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-ui)' }}
              aria-hidden="true"
            >
              {eyebrow}
            </p>
          )}

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white"
            style={{ fontFamily: 'var(--font-headline)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            {headline}
          </h1>

          {eyebrow && (
            <p
              className="text-base md:text-lg font-semibold tracking-widest"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-ui)', letterSpacing: '0.12em' }}
            >
              {eyebrow.replace(/\.\s*/g, ' · ').replace(/\s*·\s*$/, '')}
            </p>
          )}

          <p
            className="text-xl max-w-xl"
            style={{ color: 'var(--color-text-muted-on-dark)', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            {subline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white transition-colors min-h-[44px]"
              style={{
                backgroundColor: 'var(--color-blue)',
                fontFamily: 'var(--font-ui)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-blue-dark)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--color-blue)';
              }}
            >
              {primaryCta.label}
            </Link>

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white border border-white/40 hover:border-white hover:bg-white/10 transition-colors min-h-[44px]"
                style={{ fontFamily: 'var(--font-ui)' }}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>

          {/* Contact bar */}
          {contactBar && (
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-2 pt-6 border-t border-white/10"
              aria-label="Direkte Kontaktmöglichkeiten"
            >
              <a
                href="tel:+436802378954"
                className="flex items-center gap-2 text-sm transition-colors min-h-[44px]"
                style={{ color: 'var(--color-text-muted-on-dark)', fontFamily: 'var(--font-ui)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-muted-on-dark)'; }}
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">phone</span>
                <span>+43 680 23 78 95 4</span>
              </a>

              <a
                href="https://wa.me/436802378954"
                className="flex items-center gap-2 text-sm transition-colors min-h-[44px]"
                style={{ color: 'var(--color-text-muted-on-dark)', fontFamily: 'var(--font-ui)' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp — öffnet in neuem Tab"
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-muted-on-dark)'; }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span aria-hidden="true">WhatsApp</span>
                <span className="sr-only">öffnet in neuem Tab</span>
              </a>

              <a
                href="mailto:info@kreizundquer.com"
                className="flex items-center gap-2 text-sm transition-colors min-h-[44px]"
                style={{ color: 'var(--color-text-muted-on-dark)', fontFamily: 'var(--font-ui)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-muted-on-dark)'; }}
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">mail</span>
                <span>info@kreizundquer.com</span>
              </a>
            </div>
          )}
        </div>

        {/* Right column — photo */}
        <div
          className="md:w-[40%] w-full"
          role="presentation"
          aria-hidden="true"
        >
          <div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/band.png"
              alt={photoAlt}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
