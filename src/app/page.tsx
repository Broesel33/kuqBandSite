import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import YouTubeFacade from "@/components/YouTubeFacade";

export const metadata = {
  title: "Kreiz & Quer – Live-Band Steiermark | Hochzeiten, Bälle & Events",
  alternates: { canonical: "https://www.kreizundquer.at" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kreiz & Quer",
  url: "https://www.kreizundquer.at",
  telephone: "+436802378954",
  email: "info@kreizundquer.com",
  description:
    "Live-Band aus der Steiermark für Hochzeiten, Events, Bälle und Firmenfeiern — vier Musiker, ein Sound, kein Playback.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vormarkt 6",
    postalCode: "8130",
    addressLocality: "Frohnleiten",
    addressRegion: "Steiermark",
    addressCountry: "AT",
  },
  areaServed: [
    { "@type": "State", name: "Steiermark" },
    { "@type": "City", name: "Graz" },
    { "@type": "City", name: "Graz-Umgebung" },
    { "@type": "City", name: "Frohnleiten" },
    { "@type": "City", name: "Bruck an der Mur" },
    { "@type": "City", name: "Leoben" },
    { "@type": "City", name: "Kapfenberg" },
    { "@type": "City", name: "Mürzzuschlag" },
    { "@type": "City", name: "Judenburg" },
    { "@type": "City", name: "Knittelfeld" },
    { "@type": "City", name: "Voitsberg" },
    { "@type": "City", name: "Deutschlandsberg" },
    { "@type": "City", name: "Leibnitz" },
    { "@type": "City", name: "Radkersburg" },
    { "@type": "City", name: "Feldbach" },
    { "@type": "City", name: "Weiz" },
    { "@type": "City", name: "Hartberg" },
    { "@type": "City", name: "Fürstenfeld" },
    { "@type": "City", name: "Liezen" },
    { "@type": "City", name: "Schladming" },
    { "@type": "City", name: "Bad Aussee" },
    { "@type": "City", name: "Murau" },
    { "@type": "City", name: "Wolfsberg" },
    { "@type": "City", name: "Völkermarkt" },
    { "@type": "City", name: "Klagenfurt" },
    { "@type": "City", name: "Villach" },
    { "@type": "City", name: "Oberwart" },
    { "@type": "City", name: "Güssing" },
    { "@type": "City", name: "Wiener Neustadt" },
    { "@type": "City", name: "Neunkirchen" },
    { "@type": "City", name: "Baden" },
    { "@type": "City", name: "Steyr" },
    { "@type": "City", name: "Wels" },
    { "@type": "City", name: "Salzburg" },
    { "@type": "City", name: "Hallein" },
    { "@type": "Country", name: "Österreich" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
    bestRating: "5",
    worstRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jakob & Marlene" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Wir haben nämlich auch Tage nach der Hochzeit noch so oft von Gästen gehört, dass die Band so cool war!",
      datePublished: "2024-10-01",
    },
  ],
  sameAs: [
    "https://www.facebook.com/kreizuquer/",
    "https://www.instagram.com/kreizundquer/",
    "https://www.youtube.com/@kreizquer",
  ],
};

const musicGroupJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Kreiz & Quer",
  url: "https://www.kreizundquer.at",
  description:
    "Live-Band aus der Steiermark für Hochzeiten, Events, Bälle und Firmenfeiern — vier Musiker, ein Sound, kein Playback.",
  foundingDate: "2014",
  foundingLocation: {
    "@type": "Place",
    name: "Steiermark, Österreich",
  },
  genre: ["Pop", "Rock", "Austropop", "Cover"],
  member: [
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Manu" },
      roleName: ["Gesang", "Rhythmus-Gitarre"],
    },
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Robert" },
      roleName: ["Gesang", "E-Gitarre"],
    },
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Steph" },
      roleName: ["Schlagzeug", "Keyboard"],
    },
    {
      "@type": "OrganizationRole",
      member: { "@type": "Person", name: "Gabs" },
      roleName: ["Bass", "Background Vocals"],
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+436802378954",
    email: "info@kreizundquer.com",
    contactType: "booking",
  },
  sameAs: [
    "https://www.facebook.com/kreizuquer/",
    "https://www.instagram.com/kreizundquer/",
    "https://www.youtube.com/@kreizquer",
  ],
};
import ServiceCard from "@/components/ServiceCard";
import EventRow from "@/components/EventRow";
import ScrollReveal from "@/components/ScrollReveal";
import { TERMINE } from "@/data/termine";

export default function Startseite() {
  const todayISO = new Date().toISOString().slice(0, 10);
  const naechsteTermine = TERMINE.filter((t) => t.dateISO >= todayISO).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* 1. Hero */}
      <HeroSection
        headline="Kreiz & Quer — Live-Band aus der Steiermark"
        subline="Hochzeiten, Bälle und Events — vier Musiker, ein Sound, kein Playback."
        eyebrow="Live · Leidenschaftlich · Unvergesslich"
        primaryCta={{ label: "Unverbindlich anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Repertoire ansehen", href: "/repertoire" }}
        contactBar={true}
        photoAlt="Die vier Bandmitglieder von Kreiz & Quer in weißem Hemd, dunkler Hose und Hosenträgern"
      />

      {/* 2. Video */}
      <section
        aria-labelledby="video-heading"
        className="py-12 md:py-20"
        style={{ background: "var(--color-dark)" }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 1.5rem" }}>
          <ScrollReveal>
            <h2
              id="video-heading"
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "var(--color-text-on-dark)",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Wer wir sind — und wie wir klingen
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
              }}
            >
              <YouTubeFacade
                videoId="WW9Yz7XWEPA"
                title="Kreiz & Quer — Live-Vorstellung"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link
                href="/galerie"
                className="transition-colors hover:text-[var(--color-amber)]"
                style={{
                  color: "var(--color-amber)",
                  fontFamily: "var(--font-ui)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                Mehr Impressionen in der Galerie <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Leistungen */}
      <section
        aria-labelledby="leistungen-heading"
        className="py-16 md:py-24"
        style={{ background: "var(--color-surface)" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <ScrollReveal>
            <div style={{ marginBottom: "3rem" }}>
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
                Was wir bieten
              </p>
              <h2
                id="leistungen-heading"
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--color-text)",
                }}
              >
                Für jeden Anlass die richtige Musik
              </h2>
            </div>
          </ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <ScrollReveal delay={0}>
              <ServiceCard
                icon="favorite"
                title="Hochzeiten"
                description="Vom gefühlvollen Ja-Wort bis zur ausgelassenen Party — wir begleiten deinen großen Tag mit Herz, Feingefühl und genau der Musik, die den Moment unvergesslich macht."
                linkHref="/leistungen"
                linkLabel="Details ansehen"
                variant="light"
              />
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <ServiceCard
                icon="celebration"
                title="Bälle & Gala"
                description="Eleganter Walzer, zeitlose Evergreens — wir wissen, wann Eleganz gefragt ist und wann die Tanzfläche explodieren soll."
                linkHref="/leistungen"
                linkLabel="Details ansehen"
                variant="dark"
              />
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <ServiceCard
                icon="business_center"
                title="Firmen, Partys & Events"
                description="Professionell auf der Bühne, flexibel im Programm. Vom ruhigen Empfangsambiente bis zum mitreißenden Hauptact."
                linkHref="/leistungen"
                linkLabel="Details ansehen"
                variant="mid"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Warum Kreiz & Quer */}
      <section
        aria-labelledby="warum-heading"
        className="py-16 md:py-24"
        style={{ background: "var(--color-dark)" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Linke Spalte */}
            <ScrollReveal>
              <div>
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
                  Unser Versprechen
                </p>
                <h2
                  id="warum-heading"
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    color: "var(--color-text-on-dark)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Warum Kreiz &amp; Quer?
                </h2>
                <div
                  style={{
                    width: "3rem",
                    height: "3px",
                    backgroundColor: "var(--color-amber)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>

            {/* Rechte Spalte: 2×2 Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "2.5rem",
              }}
            >
              {[
                {
                  icon: "graphic_eq",
                  title: "Im Takt des Abends",
                  text: "Wir spielen kein starres Programm. Du suchst dir deine liebsten Songs aus unserem stetig wachsenden Katalog aus, wir lesen die Stimmung im Raum und passen unser Set spontan an. Musikwünsche auf Zuruf? Kein Problem! Leiser / lauter? Jederzeit möglich. Eine Ansprache? Gerne, hier hast du unser Gäste-Mikrofon!",
                  delay: 0,
                },
                {
                  icon: "verified",
                  title: "100% Live",
                  text: "Keine Playbacks. Kein Netz. Kein doppelter Boden. Nur ehrliche Musik, live gesungen und mit (E-)Gitarre, Bass, Schlagzeug und Keyboard gespielt.",
                  delay: 80,
                },
                {
                  icon: "music_note",
                  title: "Austropop bis Charts",
                  text: "Von Klassikern über Rock und Pop bis hin zu aktuellen Hits, einfach Kreiz & Quer — wir verbinden Generationen.",
                  delay: 160,
                },
                {
                  icon: "groups",
                  title: "Persönliche Betreuung",
                  text: "Kein Event gleicht dem anderen. Wir nehmen uns Zeit für deine Wünsche. Egal ob ausführliche Mails, persönliche Gespräche oder detaillierte Telefonate. Für uns steht dein Event genauso im Mittelpunkt wie für dich!",
                  delay: 240,
                },
              ].map(({ icon, title, text, delay }) => (
                <ScrollReveal key={title} delay={delay}>
                  <div>
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                      style={{
                        fontSize: "2rem",
                        color: "var(--color-amber)",
                        display: "block",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {icon}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-headline)",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        color: "var(--color-text-on-dark)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-text-muted-on-dark)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.7,
                        maxWidth: "32ch",
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Termine */}
      <section
        aria-labelledby="termine-heading"
        className="py-16 md:py-24"
        style={{ background: "var(--color-warm-gray)" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "2.5rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
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
                  Nächste Auftritte
                </p>
                <h2
                  id="termine-heading"
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    color: "var(--color-text)",
                  }}
                >
                  Kreiz &amp; Quer live erleben
                </h2>
              </div>
              <Link
                href="/termine"
                className="transition-colors hover:text-[var(--color-amber)]"
                style={{
                  color: "var(--color-amber-text)",
                  fontFamily: "var(--font-ui)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                Alle Termine ansehen <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
          <ul role="list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {naechsteTermine.map((t) => (
              <li key={t.id}>
                <EventRow {...t} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. CTA */}
      <section
        aria-label="Jetzt anfragen"
        className="py-16 md:py-24"
        style={{
          background: "var(--color-dark)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Atmosphärischer Hintergrund-Akzent */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,149,26,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            textAlign: "center",
            position: "relative",
          }}
        >
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: "var(--color-text-on-dark)",
                marginBottom: "1rem",
              }}
            >
              Erzähl uns von deinem Event.
            </h2>
            <p
              style={{
                color: "var(--color-text-muted-on-dark)",
                fontFamily: "var(--font-body)",
                fontSize: "1.125rem",
                marginBottom: "2.5rem",
                maxWidth: "600px",
                margin: "0 auto 2.5rem",
                lineHeight: 1.7,
              }}
            >
              Schreib uns unverbindlich — wir melden uns innerhalb von 24 Stunden.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 btn-cta"
              style={{
                padding: "1rem 2.5rem",
                backgroundColor: "var(--color-amber)",
                color: "#000",
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                minHeight: "44px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              Unverbindlich anfragen <span aria-hidden="true">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
