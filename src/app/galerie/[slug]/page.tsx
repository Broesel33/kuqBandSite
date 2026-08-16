import { notFound } from "next/navigation";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";
import { galerieEvents } from "@/data/galerie";

export function generateStaticParams() {
  return galerieEvents.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = galerieEvents.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: `${event.title} | Galerie — Kreiz & Quer`,
    description: `Fotos und Videos von Kreiz & Quer live — ${event.title}, ${event.dateLabel}.`,
    alternates: { canonical: `https://www.kreizundquer.at/galerie/${slug}` },
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = galerieEvents.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header
        style={{ backgroundColor: "var(--color-dark)" }}
        className="py-20 px-6 md:px-8"
      >
        <div className="max-w-screen-xl mx-auto">
          {/* Back link */}
          <Link
            href="/galerie"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              color: "var(--color-amber-on-dark)",
              fontFamily: "var(--font-ui)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textDecoration: "none",
              marginBottom: "1.5rem",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "1rem" }} aria-hidden="true">
              arrow_back
            </span>
            Alle Veranstaltungen
          </Link>

          <p
            aria-hidden="true"
            style={{
              color: "var(--color-amber-on-dark)",
              fontFamily: "var(--font-ui)",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            {event.dateLabel}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--color-text-on-dark)",
              marginBottom: "0.75rem",
            }}
          >
            {event.title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.9375rem",
              color: "var(--color-text-muted-on-dark)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "1.125rem" }} aria-hidden="true">
              photo_library
            </span>
            {event.mediaCount} Fotos &amp; Videos
          </p>
        </div>
      </header>

      {/* Media Grid */}
      <section
        aria-labelledby="event-galerie-heading"
        style={{
          backgroundColor: "var(--color-surface)",
          padding: "4rem 1.5rem 6rem",
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <h2 id="event-galerie-heading" className="sr-only">
            Fotos und Videos — {event.title}
          </h2>
          <GalleryGrid media={event.media} />
        </div>
      </section>
    </div>
  );
}
