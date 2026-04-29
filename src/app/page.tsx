import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import EventRow from "@/components/EventRow";
import { TERMINE } from "@/data/termine";

export default function Startseite() {
  const naechsteTermine = TERMINE.filter((t) => t.status !== "past").slice(0, 4);

  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        headline="Kreiz & Quer"
        subline="Live-Musik aus der Steiermark für Hochzeiten, Bälle und Events — vier Musiker, ein Sound, kein Playback."
        eyebrow="Live. Leidenschaftlich. Unvergesslich."
        primaryCta={{ label: "Unverbindlich anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Repertoire ansehen", href: "/repertoire" }}
        contactBar={true}
        photoAlt="Die vier Bandmitglieder von Kreiz & Quer in weißem Hemd, dunkler Hose und Hosenträgern"
      />

      {/* 2. Video */}
      <section
        aria-labelledby="video-heading"
        style={{ background: "var(--color-navy)", padding: "5rem 0" }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 1.5rem" }}>
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
            <iframe
              src="https://www.youtube.com/embed/WW9Yz7XWEPA"
              title="Kreiz & Quer — Live-Vorstellung"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. Leistungen */}
      <section
        aria-labelledby="leistungen-heading"
        style={{ background: "var(--color-surface)", padding: "6rem 0" }}
      >
        <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-gold-text)",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <ServiceCard
              icon="favorite"
              title="Hochzeiten"
              description="Vom gefühlvollen Ja-Wort bis zur ausgelassenen Party — wir begleiten deinen großen Tag mit Herz, Feingefühl und genau der Musik, die den Moment unvergesslich macht."
              linkHref="/leistungen"
              linkLabel="Details ansehen"
              variant="light"
            />
            <ServiceCard
              icon="celebration"
              title="Bälle & Gala"
              description="Eleganter Walzer, zeitlose Evergreens — wir wissen, wann Eleganz gefragt ist und wann die Tanzfläche explodieren soll."
              linkHref="/leistungen"
              linkLabel="Details ansehen"
              variant="dark"
            />
            <ServiceCard
              icon="business_center"
              title="Firmen, Partys & Events"
              description="Professionell auf der Bühne, flexibel im Programm. Vom ruhigen Empfangsambiente bis zum mitreißenden Hauptact."
              linkHref="/leistungen"
              linkLabel="Details ansehen"
              variant="mid"
            />
          </div>
        </div>
      </section>

      {/* 3. Warum Kreiz & Quer */}
      <section
        aria-labelledby="warum-heading"
        style={{ background: "var(--color-navy)", padding: "6rem 0" }}
      >
        <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Linke Spalte */}
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
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
                  backgroundColor: "var(--color-gold)",
                }}
                aria-hidden="true"
              />
            </div>

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
                },
                {
                  icon: "verified",
                  title: "100% Live",
                  text: "Keine Playbacks. Kein Netz. Kein doppelter Boden. Nur ehrliche Musik, live gesungen und mit (E-)Gitarre, Bass, Schlagzeug und Keyboard gespielt.",
                },
                {
                  icon: "music_note",
                  title: "Austropop bis Charts",
                  text: "Von Klassikern über Rock und Pop bis hin zu aktuellen Hits, einfach Kreiz & Quer — wir verbinden Generationen.",
                },
                {
                  icon: "groups",
                  title: "Persönliche Betreuung",
                  text: "Kein Event gleicht dem anderen. Wir nehmen uns Zeit für deine Wünsche. Egal ob ausführliche Mails, persönliche Gespräche oder detaillierte Telefonate. Für uns steht dein Event genauso im Mittelpunkt wie für dich!",
                },
              ].map(({ icon, title, text }) => (
                <div key={title}>
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                    style={{
                      fontSize: "2rem",
                      color: "var(--color-gold)",
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
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Termine */}
      <section
        aria-labelledby="termine-heading"
        style={{ background: "var(--color-warm-gray)", padding: "6rem 0" }}
      >
        <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 2rem" }}>
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
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-gold-text)",
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
              style={{
                color: "var(--color-gold-text)",
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
              }}
            >
              Alle Termine ansehen <span aria-hidden="true">→</span>
            </Link>
          </div>
          {naechsteTermine.map((t) => (
            <EventRow key={t.id} {...t} />
          ))}
        </div>
      </section>

      {/* 5. Testimonials */}
      <section
        aria-labelledby="stimmen-heading"
        style={{ background: "var(--color-surface)", padding: "6rem 0" }}
      >
        <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-gold-text)",
                fontFamily: "var(--font-ui)",
                marginBottom: "0.75rem",
              }}
            >
              Stimmen
            </p>
            <h2
              id="stimmen-heading"
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "var(--color-text)",
              }}
            >
              Was wir nach dem Event hören
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <TestimonialCard
              quote="Ein ganz besonderer Abend mit ganz besonderer Stimmung! Danke!"
              authorName="Melanie"
              eventDescription="Geburtstagsfeier · Dezember 2025"
            />
            <TestimonialCard
              quote="Das machen wir wieder! Es war genial!"
              authorName="Daniel"
              eventDescription="Sommerfest · Juli 2025"
            />
            <TestimonialCard
              quote="Hi, ich muss dir nochmal schreiben: Wir haben nämlich auch Tage nach der Hochzeit noch so oft von Gästen gehört, dass die Band so cool war! Das wollt ich euch nochmal sagen!"
              authorName="Jakob & Marlene"
              eventDescription="Hochzeit · Oktober 2024"
            />
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section
        aria-label="Jetzt anfragen"
        style={{ background: "var(--color-navy)", padding: "6rem 0" }}
      >
        <div
          style={{
            maxWidth: "1536px",
            margin: "0 auto",
            padding: "0 2rem",
            textAlign: "center",
          }}
        >
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
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem 2.5rem",
              backgroundColor: "var(--color-blue)",
              color: "#ffffff",
              fontFamily: "var(--font-ui)",
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              minHeight: "44px",
            }}
          >
            Termin sichern
          </Link>
        </div>
      </section>
    </>
  );
}
