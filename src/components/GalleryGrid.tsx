'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { getPlaceholderSvg } from '@/lib/placeholderSvg';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const PLACEHOLDER_COUNT = 12;

function buildPlaceholderImages(): GalleryImage[] {
  return Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
    src: getPlaceholderSvg(800, 600),
    alt: `Auftritt ${i < 4 ? 'Hochzeit' : i < 8 ? 'Ball' : 'Event'} ${2024 + Math.floor(i / 4)} — Foto folgt`,
    width: 800,
    height: 600,
  }));
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const displayImages = images.length > 0 ? images : buildPlaceholderImages();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const gridButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const closeLightbox = useCallback(() => {
    const prevIndex = selectedIndex;
    setSelectedIndex(null);
    // Return focus to the grid button that opened the lightbox
    if (prevIndex !== null) {
      setTimeout(() => {
        gridButtonRefs.current[prevIndex]?.focus();
      }, 0);
    }
  }, [selectedIndex]);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % displayImages.length
    );
  }, [displayImages.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + displayImages.length) % displayImages.length
    );
  }, [displayImages.length]);

  // Focus trap + keyboard navigation inside lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    // Move focus to close button when lightbox opens
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const focusableEls = lightboxRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], [tabindex]:not([tabindex="-1"])'
    );
    const first = focusableEls?.[0];
    const last = focusableEls?.[focusableEls.length - 1];

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
        return;
      }
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [selectedIndex, closeLightbox, goNext, goPrev]);

  const currentImage = selectedIndex !== null ? displayImages[selectedIndex] : null;

  return (
    <>
      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        aria-label="Galerie-Bilder"
      >
        {displayImages.map((img, index) => (
          <button
            key={`${img.src}-${index}`}
            ref={(el) => { gridButtonRefs.current[index] = el; }}
            onClick={() => setSelectedIndex(index)}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-xl group focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ display: 'block' }}
            aria-label={`${img.alt} — Bild vergrößern`}
            type="button"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized={img.src.startsWith('data:')}
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ backgroundColor: 'rgba(13, 27, 42, 0.5)' }}
              aria-hidden="true"
            >
              <span
                className="material-symbols-outlined text-white"
                style={{ fontSize: '2rem' }}
              >
                zoom_in
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && currentImage && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label="Galerie-Lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Close button */}
          <button
            ref={closeButtonRef}
            onClick={closeLightbox}
            className="absolute top-4 right-4 flex items-center justify-center w-11 h-11 rounded-full text-white transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            aria-label="Lightbox schließen"
            type="button"
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.25)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.15)'; }}
          >
            <span className="material-symbols-outlined" aria-hidden="true">close</span>
          </button>

          {/* Prev button */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full text-white transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            aria-label="Vorheriges Bild"
            type="button"
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.25)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.15)'; }}
          >
            <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
          </button>

          {/* Image */}
          <div className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3]">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 896px"
              unoptimized={currentImage.src.startsWith('data:')}
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center px-4">
            <p
              className="text-sm"
              style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)' }}
            >
              {currentImage.alt}
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-ui)' }}
              aria-live="polite"
            >
              {selectedIndex + 1} / {displayImages.length}
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full text-white transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            aria-label="Nächstes Bild"
            type="button"
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.25)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.15)'; }}
          >
            <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
          </button>
        </div>
      )}
    </>
  );
}
