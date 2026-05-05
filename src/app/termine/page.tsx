import Link from "next/link";
import { TERMINE } from "@/data/termine";
import EventRow from "@/components/EventRow";

export const metadata = {
  title: "Konzerttermine & Live-Auftritte | Steiermark – Kreiz & Quer",
  description:
    "Alle öffentlichen Auftritte von Kreiz & Quer — erlebe die Live-Band aus der Steiermark bei Konzerten in ganz Österreich.",
  alternates: { canonical: "https://www.kreizundquer.at/termine" },
};

function buildEventJsonLd(kommendeTermine: typeof TERMINE) {
  return kommendeTermine.map((t) => {
    const [venueName, addressLocality] = t.venue.includes(", ")
      ? t.venue.split(", ")
      : [t.venue, "Österreich"];

    return {
      "@context": "https://schema.org",
      "@type": "Event",
      name: t.eventName,
      startDate: t.dateISO,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: venueName,
        address: {
          "@type": "PostalAddress",
          addressLocality,
          addressCountry: "AT",
        },
      },
      organizer: {
        "@type": "MusicGroup",
        name: "Kreiz & Quer",
        url: "https://www.kreizundquer.at",
      },
      performer: {
        "@type": "MusicGroup",
        name: "Kreiz & Quer",
        url: "https://www.kreizundquer.at",
      },
    };
  });
}

export default function Termine() {
  const kommendeTermine = TERMINE.filter((t) => t.status !== "past");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildEventJsonLd(kommendeTermine)),
        }}
      />
      {/* 1. Page-Header */}
      <div style={{ background: "var(--color-dark)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <p
            aria-hidden="true"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-amber)",
              fontFamily: "var(--font-ui)",
              marginBottom: "0.75rem",
            }}
          >
            Wann & Wo
          </p>
          <h1
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--color-text-on-dark)",
              marginBottom: "1rem",
            }}
          >
            Termine
          </h1>
          <p
            style={{
              color: "var(--color-text-muted-on-dark)",
              fontFamily: "var(--font-body)",
              fontSize: "1.25rem",
              maxWidth: "640px",
              lineHeight: 1.6,
            }}
          >
            Du willst uns erst einmal live erleben? Schau einfach bei einem unserer öffentlichen Auftritte vorbei — ein Hallo nach dem Set ist immer drin.
          </p>
        </div>
      </div>

      {/* 2. Kommende Termine */}
      <section
        aria-labelledby="kommende-termine-heading"
        style={{ background: "var(--color-surface)", padding: "6rem 0" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <p
              aria-hidden="true"
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-amber-text)",
                fontFamily: "var(--font-ui)",
                marginBottom: "0.75rem",
              }}
            >
              Öffentliche Auftritte
            </p>
            <h2
              id="kommende-termine-heading"
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "var(--color-text)",
              }}
            >
              Kommende Termine
            </h2>
          </div>

          {kommendeTermine.length > 0 ? (
            <div>
              {kommendeTermine.map((t) => (
                <EventRow key={t.id} {...t} />
              ))}
            </div>
          ) : (
            <div
              style={{
                padding: "3rem 2rem",
                borderRadius: "var(--radius-lg)",
                background: "var(--color-warm-gray)",
                border: "1px solid var(--color-border)",
                textAlign: "center",
              }}
            >
              <span
                className="material-symbols-outlined"
                aria-hidden="true"
                style={{
                  fontSize: "2.5rem",
                  color: "var(--color-text-muted)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                event_busy
              </span>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "1.0625rem",
                  marginBottom: "1.5rem",
                }}
              >
                Aktuell sind keine öffentlichen Termine geplant.
              </p>
              <Link
                href="/kontakt"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  color: "var(--color-amber-text)",
                  fontFamily: "var(--font-ui)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  minHeight: "44px",
                }}
              >
                Unverbindlich anfragen <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 3. CTA-Box */}
      <section
        aria-labelledby="private-event-heading"
        style={{ background: "var(--color-warm-gray)", padding: "5rem 0" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div
            style={{
              background: "var(--color-dark)",
              borderRadius: "var(--radius-xl)",
              padding: "3rem 2.5rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div>
              <h2
                id="private-event-heading"
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                  color: "var(--color-text-on-dark)",
                  marginBottom: "0.5rem",
                }}
              >
                Private Veranstaltung planen?
              </h2>
              <p
                style={{
                  color: "var(--color-text-muted-on-dark)",
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  maxWidth: "500px",
                  lineHeight: 1.6,
                }}
              >
                Hochzeiten, Bälle, Firmenfeiern — schreib uns einfach und wir planen gemeinsam dein Event.
              </p>
            </div>
            <Link
              href="/kontakt"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.875rem 2rem",
                backgroundColor: "var(--color-petrol)",
                color: "#ffffff",
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                minHeight: "44px",
                whiteSpace: "nowrap",
              }}
            >
              Unverbindlich anfragen <span aria-hidden="true">→</span>
            </Link>
