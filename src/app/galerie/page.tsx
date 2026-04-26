import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Galerie – Kreiz & Quer",
  description: "Impressionen von Auftritten: Hochzeiten, Bälle, Events und mehr.",
};

const GALLERY_IMAGES: {
  src: string;
  alt: string;
  width: number;
  height: number;
}[] = [
  { src: "/comingSoon.png", alt: "Kreiz & Quer — Event, Einzug mit Musik", width: 800, height: 600 },
  { src: "/comingSoon.png", alt: "Kreiz & Quer — Eröffnungstanz beim Fest", width: 800, height: 600 },
  { src: "/comingSoon.png", alt: "Kreiz & Quer — Tanzfläche beim Event", width: 800, height: 600 },
  { src: "/comingSoon.png", alt: "Kreiz & Quer — Ball, Bühnenauftritt", width: 800, height: 600 },
  { src: "/comingSoon.png", alt: "Kreiz & Quer — Walzer beim Galaball", width: 800, height: 600 },
  { src: "/comingSoon.png", alt: "Kreiz & Quer — Publikum beim Ball", width: 800, height: 600 },
  { src: "/comingSoon.png", alt: "Kreiz & Quer — Firmenfeier, Abendprogramm", width: 800, height: 600 },
  { src: "/comingSoon.png", alt: "Kreiz & Quer — Live-Set Firmen-Event", width: 800, height: 600 },
  { src: "/comingSoon.png", alt: "Kreiz & Quer — Outdoor-Event, Sommerfest", width: 800, height: 600 },
  { src: "/comingSoon.png", alt: "Kreiz & Quer — Bandportrait", width: 800, height: 600 },
  { src: "/comingSoon.png", alt: "Kreiz & Quer — Duo-Auftritt beim Empfang", width: 800, height: 600 },
  { src: "/comingSoon.png", alt: "Kreiz & Quer — Stadtfest, große Bühne", width: 800, height: 600 },
];

export default function GaleriePage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header
        style={{ backgroundColor: "var(--color-navy)" }}
        className="py-20 px-6 md:px-8"
      >
        <div className="max-w-screen-xl mx-auto">
          <p
            style={{
              color: "var(--color-gold)",
              fontFamily: "var(--font-ui)",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Impressionen
          </p>
          <h1
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              color: "var(--color-text-on-dark)",
              marginBottom: "1rem",
            }}
          >
            Galerie
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              color: "var(--color-text-muted-on-dark)",
              maxWidth: "36rem",
              lineHeight: 1.6,
            }}
          >
            Momente, die bleiben.
          </p>
        </div>
      </header>

      {/* Gallery Section */}
      <section
        aria-labelledby="galerie-heading"
        style={{
          backgroundColor: "var(--color-surface)",
          padding: "4rem 1.5rem 6rem",
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <h2 id="galerie-heading" className="sr-only">
            Fotogalerie
          </h2>
          <GalleryGrid images={GALLERY_IMAGES} />
        </div>
      </section>

      {/* Instagram CTA */}
      <section
        aria-labelledby="instagram-heading"
        style={{
          backgroundColor: "var(--color-warm-gray)",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <h2
            id="instagram-heading"
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--color-text)",
              marginBottom: "0.75rem",
            }}
          >
            Mehr Fotos auf Instagram
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-text-secondary)",
              marginBottom: "1.5rem",
            }}
          >
            Folgt uns für aktuelle Impressionen von Auftritten und Events.
          </p>
          <a
            href="https://www.instagram.com/kreizundquer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kreiz &amp; Quer auf Instagram — öffnet in neuem Tab"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--color-navy)",
              color: "var(--color-text-on-dark)",
              fontFamily: "var(--font-ui)",
              fontWeight: 600,
              fontSize: "0.9375rem",
              padding: "0.75rem 1.75rem",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              minHeight: "44px",
              transition: "opacity 0.15s",
            }}
          >
            {/* Instagram SVG icon */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @kreizundquer
            <span className="sr-only">öffnet in neuem Tab</span>
          </a>
        </div>
      </section>
    </div>
  );
}
