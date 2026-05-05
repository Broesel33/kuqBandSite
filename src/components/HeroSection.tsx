import Image from 'next/image';
import Link from 'next/link';
import AudioButton from './AudioButton';
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
  const trustBadge = (
    <p
      className="text-sm font-semibold"
      style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-ui)', letterSpacing: '0.02em' }}
    >
      200+ Events ·{' '}
      <span role="img" aria-label="5 von 5 Sternen">★★★★★</span>
      {' '}· seit 2014
    </p>
  );

  return (
    <section
      className="relative w-full min-h-[100svh] md:h-[calc(100svh-68px)] overflow-hidden flex items-start"
      style={{ backgroundColor: 'var(--color-navy)' }}
      aria-label={eyebrow ? `${eyebrow}: ${headline}` : headline}
    >
      {/* ── MOBILE ── */}
      <div className="md:hidden relative w-full min-h-[100svh] flex flex-col">
        {/* TOP: Eyebrow + Headline + Subline */}
        <div className="px-6 pt-7 pb-2 flex flex-col gap-2.5">
          {eyebrow && (
            <p
              className="hero-item hero-delay-0 text-[11px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-ui)' }}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className="hero-item hero-delay-1 text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-headline)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
          >
            {headline}
          </h1>
          <p
            className="hero-item hero-delay-2 text-sm"
            style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}
          >
            {subline}
          </p>
        </div>

        {/* BOTTOM: Foto + Gradient + CTAs */}
        <div className="relative flex-1 min-h-[420px] -mt-4">
          <Image
            src="/band.png"
            alt={photoAlt}
            fill
            className="object-contain object-top"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, var(--color-navy) 0px, var(--color-navy) 185px, transparent 330px, transparent 100%)' }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-3 pt-3 flex flex-col gap-2">
            <div className="hero-item hero-delay-3">{trustBadge}</div>
            <div className="hero-item hero-delay-4 flex flex-wrap items-center gap-3 mt-1 pt-2 border-t border-white/10">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold min-h-[44px] transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--color-gold)', color: '#000', fontFamily: 'var(--font-ui)', boxShadow: '0 4px 14px rgba(0,0,0,0.2)' }}
              >
                {primaryCta.label} <span aria-hidden="true">→</span>
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white border-2 border-white/55 min-h-[44px] hover:border-white hover:bg-white/10 transition-colors"
                  style={{ fontFamily: 'var(--font-ui)', background: 'transparent' }}
                >
                  {secondaryCta.label}
                </Link>
              )}
              <AudioButton />
            </div>
            {contactBar && (
              <div
                className="hero-item hero-delay-5 flex flex-wrap items-center gap-x-4 gap-y-1 pt-3 border-t border-white/10"
                aria-label="Direkte Kontaktmöglichkeiten"
              >
                <a
                  href="tel:+436802378954"
                  className="flex items-center gap-2 text-sm min-h-[44px] transition-colors hover:text-white"
                  style={{ color: 'var(--color-text-muted-on-dark)', fontFamily: 'var(--font-ui)' }}
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">phone</span>
                  <span>+43 680 23 78 95 4</span>
                </a>
                <a
                  href="https://wa.me/436802378954"
                  className="flex items-center gap-2 text-sm min-h-[44px] transition-colors hover:text-white"
                  style={{ color: 'var(--color-text-muted-on-dark)', fontFamily: 'var(--font-ui)' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp — öffnet in neuem Tab"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span aria-hidden="true">WhatsApp</span>
                  <span className="sr-only">öffnet in neuem Tab</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── DESKTOP: Bandfoto rechts ── */}
      <div
        className="hero-item hero-delay-2 hidden md:block absolute right-0 top-6 bottom-6 w-[45%]"
        aria-hidden="true"
      >
<Image
          src="/band.png"
          alt={photoAlt}
          fill
          className="object-contain object-center"
          priority
          sizes="45vw"
          style={{ position: 'absolute', zIndex: 1 }}
        />
      </div>

      {/* ── DESKTOP: Textinhalt links ── */}
      <div className="hidden md:block relative w-full max-w-screen-2xl mx-auto px-8 pt-12 pb-16">
        <div className="w-[55%] flex flex-col gap-5">
          {eyebrow && (
            <p
              className="hero-item hero-delay-0 text-[11px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-ui)' }}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className="hero-item hero-delay-1 text-7xl lg:text-8xl font-extrabold text-white"
            style={{ fontFamily: 'var(--font-headline)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
          >
            {headline}
          </h1>
          <p
            className="hero-item hero-delay-2 text-xl max-w-lg"
            style={{ color: 'var(--color-text-muted-on-dark)', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            {subline}
          </p>
          <div className="hero-item hero-delay-3">{trustBadge}</div>
          <div className="hero-item hero-delay-4 flex flex-wrap items-center gap-4 mt-1">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-opacity min-h-[44px] hover:opacity-90"
              style={{ backgroundColor: 'var(--color-gold)', color: '#000', fontFamily: 'var(--font-ui)', boxShadow: '0 4px 14px rgba(0,0,0,0.2)' }}
            >
              {primaryCta.label} <span aria-hidden="true">→</span>
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/55 hover:border-white hover:bg-white/10 transition-colors min-h-[44px]"
                style={{ fontFamily: 'var(--font-ui)', background: 'transparent' }}
              >
                {secondaryCta.label}
              </Link>
            )}
            <AudioButton />
          </div>
          {contactBar && (
            <div
              className="hero-item hero-delay-5 flex flex-wrap items-center gap-x-6 gap-y-3 mt-1 pt-6 border-t border-white/10"
              aria-label="Direkte Kontaktmöglichkeiten"
            >
              <a
                href="tel:+436802378954"
                className="flex items-center gap-2 text-sm transition-colors min-h-[44px] hover:text-white"
                style={{ color: 'var(--color-text-muted-on-dark)', fontFamily: 'var(--font-ui)' }}
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">phone</span>
                <span>+43 680 23 78 95 4</span>
              </a>
              <a
                href="https://wa.me/436802378954"
                className="flex items-center gap-2 text-sm transition-colors min-h-[44px] hover:text-white"
                style={{ color: 'var(--color-text-muted-on-dark)', fontFamily: 'var(--font-ui)' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp — öffnet in neuem Tab"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span aria-hidden="true">WhatsApp</span>
                <span className="sr-only">öffnet in neuem Tab</span>
              </a>
              <a
                href="mailto:info@kreizundquer.com"
                className="flex items-center gap-2 text-sm transition-colors min-h-[44px] hover:text-white"
                style={{ color: 'var(--color-text-muted-on-dark)', fontFamily: 'var(--font-ui)' }}
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">mail</span>
                <span>info@kreizundquer.com</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
