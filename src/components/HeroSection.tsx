"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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
  const [isPlaying, setIsPlaying] = useState(false);

  // Replace /sample.mp3 with the actual audio file once ready
  const playAudio = () => {
    if (isPlaying) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = 440;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 2);
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 2100);
  };

  const trustBadge = (
    <p
      className="text-sm font-semibold"
      style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-ui)', letterSpacing: '0.02em' }}
      aria-label="über 200 Events · Fünf Sterne · seit 2019"
    >
      200+ Events · ★★★★★ · seit 2019
    </p>
  );

  const playBtn = (
    <button
      type="button"
      onClick={playAudio}
      disabled={isPlaying}
      className="inline-flex items-center gap-2 text-sm font-semibold min-h-[44px] px-3 transition-opacity rounded"
      style={{
        color: 'var(--color-text-muted-on-dark)',
        fontFamily: 'var(--font-ui)',
        opacity: isPlaying ? 0.6 : 1,
        background: 'transparent',
        border: 'none',
        cursor: isPlaying ? 'default' : 'pointer',
      }}
      aria-label={isPlaying ? 'Hörprobe läuft' : 'Hörprobe abspielen'}
    >
      <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '1.1rem' }}>{isPlaying ? 'graphic_eq' : 'play_circle'}</span>
      {isPlaying ? 'Läuft …' : 'Hörprobe'}
    </button>
  );

  return (
    <section
      className="relative w-full min-h-[100svh] md:h-[calc(100svh-68px)] overflow-hidden flex items-start"
      style={{ backgroundColor: 'var(--color-navy)' }}
      aria-label={eyebrow ? `${eyebrow}: ${headline}` : headline}
    >
      {/* ── MOBILE: Flex-Stack — Text · Foto (frei) · CTAs ── */}
      <div className="md:hidden relative w-full min-h-[100svh] flex flex-col">
        {/* TOP: Eyebrow + Headline + Subline */}
        <div className="px-6 pt-7 pb-2 flex flex-col gap-2.5">
          {eyebrow && (
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-ui)' }}
              aria-hidden="true"
            >
              {eyebrow}
            </p>
          )}
          <h1
            className="text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-headline)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
          >
            {headline}
          </h1>
          <p
            className="text-sm"
            style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}
          >
            {subline}
          </p>
        </div>

        {/* BOTTOM: Foto + Gradient + CTAs — drei unabhängige Ebenen */}
        <div className="relative flex-1 min-h-[420px] -mt-14">
          <Image
            src="/band.png"
            alt={photoAlt}
            fill
            className="object-contain object-top"
            priority
            sizes="100vw"
          />
          {/* Gradient-Ebene: setzt erst bei 58% ein (unterhalb der Hüfte) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #0d1b2a 0px, #0d1b2a 185px, transparent 330px, transparent 100%)' }}
            aria-hidden="true"
          />
          {/* Button-Ebene: unabhängig vom Gradient */}
          <div className="absolute inset-x-0 bottom-0 px-6 pb-3 pt-3 flex flex-col gap-2">
            {trustBadge}
            <div className="flex flex-wrap items-center gap-3 mt-1 pt-2 border-t border-white/10">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold min-h-[44px]"
                style={{ backgroundColor: 'var(--color-gold)', color: '#000', fontFamily: 'var(--font-ui)', boxShadow: '0 4px 14px rgba(200,149,26,0.4)' }}
              >
                {primaryCta.label} <span aria-hidden="true">→</span>
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white border-2 border-white/55 min-h-[44px]"
                  style={{ fontFamily: 'var(--font-ui)', background: 'transparent' }}
                >
                  {secondaryCta.label}
                </Link>
              )}
              {playBtn}
            </div>
            {contactBar && (
              <div
                className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-3 border-t border-white/10"
                aria-label="Direkte Kontaktmöglichkeiten"
              >
                <a
                  href="tel:+436802378954"
                  className="flex items-center gap-2 text-sm min-h-[36px]"
                  style={{ color: 'var(--color-text-muted-on-dark)', fontFamily: 'var(--font-ui)' }}
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">phone</span>
                  <span>+43 680 23 78 95 4</span>
                </a>
                <a
                  href="https://wa.me/436802378954"
                  className="flex items-center gap-2 text-sm min-h-[36px]"
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

      {/* ── DESKTOP: Golden stage glow + Bandfoto rechts ── */}
      <div
        className="hidden md:block absolute right-0 top-6 bottom-6 w-[45%]"
        aria-hidden="true"
      >
        {/* Subtiler Gold-Glow hinter der Band — Bühnen-Atmosphäre */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 80%, rgba(200,149,26,0.18) 0%, rgba(200,149,26,0.06) 40%, transparent 68%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
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
              className="text-[11px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-ui)' }}
              aria-hidden="true"
            >
              {eyebrow}
            </p>
          )}
          <h1
            className="text-7xl lg:text-8xl font-bold text-white"
            style={{ fontFamily: 'var(--font-headline)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            {headline}
          </h1>
          <p
            className="text-xl max-w-lg"
            style={{ color: 'var(--color-text-muted-on-dark)', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            {subline}
          </p>
          {trustBadge}
          <div className="flex flex-wrap items-center gap-4 mt-1">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-opacity min-h-[44px]"
              style={{ backgroundColor: 'var(--color-gold)', color: '#000', fontFamily: 'var(--font-ui)', boxShadow: '0 4px 14px rgba(200,149,26,0.4)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
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
            {playBtn}
          </div>
          {contactBar && (
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-1 pt-6 border-t border-white/10"
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
      </div>
    </section>
  );
}
