'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { GalerieMedia } from '@/data/galerie';
import { cloudinaryUrl, cloudinaryVideoUrl } from '@/lib/cloudinary';

interface GalleryGridProps {
  media: GalerieMedia[];
}

export default function GalleryGrid({ media }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const gridButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const closeLightbox = useCallback(() => {
    const prevIndex = selectedIndex;
    setSelectedIndex(null);
    if (prevIndex !== null) {
      setTimeout(() => {
        gridButtonRefs.current[prevIndex]?.focus();
      }, 0);
    }
  }, [selectedIndex]);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % media.length
    );
  }, [media.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + media.length) % media.length
    );
  }, [media.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const focusableEls = lightboxRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], [tabindex]:not([tabindex="-1"])'
    );
    const first = focusableEls?.[0];
    const last = focusableEls?.[focusableEls.length - 1];

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closeLightbox(); return; }
      if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); return; }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); return; }
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first?.focus();
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [selectedIndex, closeLightbox, goNext, goPrev]);

  const currentItem = selectedIndex !== null ? media[selectedIndex] : null;

  return (
    <>
      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        aria-label="Galerie-Medien"
      >
        {media.map((item, index) => (
          <button
            key={`${item.publicId}-${index}`}
            ref={(el) => { gridButtonRefs.current[index] = el; }}
            onClick={() => setSelectedIndex(index)}
            className="relative w-full overflow-hidden rounded-xl group focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ display: 'block', aspectRatio: '4/3' }}
            aria-label={`${item.alt} — ${item.type === 'video' ? 'Video abspielen' : 'Bild vergrößern'}`}
            type="button"
          >
            {item.type === 'video' ? (
              <>
                <video
                  src={cloudinaryVideoUrl(item.publicId)}
                  preload="metadata"
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-hidden="true"
                  tabIndex={-1}
                />
                {/* Play overlay always visible for videos */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(13, 27, 42, 0.35)' }}
                  aria-hidden="true"
                >
                  <span
                    className="material-symbols-outlined text-white transition-transform duration-200 group-hover:scale-110"
                    style={{ fontSize: '3rem', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))' }}
                  >
                    play_circle
                  </span>
                </div>
              </>
            ) : (
              <>
                <Image
                  src={cloudinaryUrl(item.publicId, { width: 800 })}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay for images */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: 'rgba(13, 27, 42, 0.5)' }}
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '2rem' }}>
                    zoom_in
                  </span>
                </div>
              </>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && currentItem && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label="Galerie-Lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(delta) < 50) return;
            if (delta < 0) goNext(); else goPrev();
          }}
        >
          {/* Close */}
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

          {/* Prev */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full text-white transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            aria-label="Vorheriges Medium"
            type="button"
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.25)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.15)'; }}
          >
            <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
          </button>

          {/* Content */}
          {currentItem.type === 'video' ? (
            <video
              key={currentItem.publicId}
              src={cloudinaryVideoUrl(currentItem.publicId)}
              className="max-w-4xl w-full"
              style={{ maxHeight: '80vh', objectFit: 'contain' }}
              controls
              autoPlay
              playsInline
            />
          ) : (
            <div className="relative max-w-4xl w-full" style={{ maxHeight: '80vh', aspectRatio: '4/3' }}>
              <Image
                src={cloudinaryUrl(currentItem.publicId, { width: 1600 })}
                alt={currentItem.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          )}

          {/* Caption */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center px-4">
            <p
              className="text-sm"
              style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)' }}
            >
              {currentItem.alt}
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-ui)' }}
              aria-live="polite"
            >
              {selectedIndex + 1} / {media.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full text-white transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            aria-label="Nächstes Medium"
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
