import Link from "next/link";

export const metadata = {
  title: "Live-Musik buchen | Hochzeit, Ball & Event – Kreiz & Quer",
  description:
    "Live-Musik für Hochzeiten, Bälle, Firmenfeiern und Events in der Steiermark und ganz Österreich — Kreiz & Quer. 100 % live, individuell abgestimmt.",
  alternates: { canonical: "https://www.kreizundquer.at/leistungen" },
};

interface LeistungItem {
  id: string;
  icon: string;
  title: string;
  body: string;
  checks: string[];
  bg: string;
  dark?: boolean;
}

const leistungen: LeistungItem[] = [
  {
    id: "hochzeiten",
    icon: "favorite",
    title: "Hochzeiten",
    body: "Vom gefühlvollen Ja-Wort bis zur ausgelassenen Party — wir begleiten deinen großen Tag mit Herz, Feingefühl und genau der Musik, die den Moment unvergesslich macht. Jeder Wunsch, jede Stimmung, jeder Tanz.",
    checks: [
      "Akustik-Set",
      "Vollband",
      "Individuelle Songwünsche",
      "Ceremonie-Musik",
      "Empfang & Dinner",
      "Abendprogramm",
    ],
    bg: "var(--color-surface)",
  },
  {
    id: "baelle-gala",
    icon: "celebration",
    title: "Bälle & Gala",
    body: "Eleganter Walzer, zeitlose Evergreens und mitreißende Tanzmusik — wir wissen, wann Eleganz gefragt ist und wann die Tanzfläche explodieren soll. Erfahrung auf unzähligen Bällen in ganz Österreich.",
    checks: [
      "Walzer & Tanzmusik",
      "Mitternachtseinlage",
      "Ballthema-Abstimmung",
      "Elegantes Abendprogramm",
    ],
    bg: "var(--color-warm-gray)",
  },
  {
    id: "firmen-events",
    icon: "business_center",
    title: "Firmen, Partys & Events",
    body: "Professionell auf der Bühne, flexibel im Programm. Vom ruhigen Empfangsambiente bis zum mitreißenden Hauptact — ob Firmenfeier, Stadtfest, Sommernachtsparty oder Vereinsjubiläum: wir passen uns deinem Event an und liefern genau das, was dein Event braucht.",
    checks: [
      "Hintergrundmusik / Empfang",
      "Hauptact / Tanzabend",
      "Vollständiges PA- & Licht-Setup",
      "Flexible Setlänge & Pausengestaltung",
      "Outdoor- & Innenbereich geeignet",
      "Spontane Programmänderungen möglich",
    ],
    bg: "var(--color-surface)",
  },
  {
    id: "duo",
    icon: "mic",
    title: "Duo-Option",
    body: "Für Momente, die Stille brauchen. Akustisch, nah am Publikum und voller Emotionen — das Duo ist perfekt für Empfänge, intime Feiern und Momente, in denen Musik berühren soll, ohne zu überwältigen.",
    checks: [
      "Akustik-Gitarre & Gesang",
      "Perfekt für Empfänge & Hintergrundmusik",
      "Kompaktes Setup",
      "Auch als Überraschungsauftritt",
    ],
    bg: "var(--color-navy)",
    dark: true,
  },
  {
    id: "vollband",
    icon: "groups",
    title: "Vollband",
    body: "Wenn die Tanzfläche brennen soll. Mit vier Musikern, vollem Sound und professioneller Technik entfesseln wir die Tanzfläche — druckvoll, lebendig und mitreißend bis zur letzten Zugabe.",
    checks: [
      "4 Musiker",
      "Vollständiges Equipment",
      "Professionelles Licht-/Sound-Setup",
      "Bis zu 5 Stunden Programm",
    ],
    bg: "var(--color-surface)",
  },
];

export default function Leistungen() {
  return (
    <>
      {/* Page-Header */}
      <div style={{ background: "var(--color-navy)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 2rem" }}>
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
            Was wir bieten
          </p>
          <h1
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--color-text-on-dark)",
              marginBottom: "1rem",
            }}
          >
            Leistungen
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
            Für jeden Anlass die richtige Musik. Immer 100 % live.
          </p>
        </div>
      </div>

      {/* Leistungs-Sektionen */}
      {leistungen.map((l) => {

        const textColor = l.dark ? "var(--color-text-on-dark)" : "var(--color-text)";
        const bodyColor = l.dark ? "var(--color-text-muted-on-dark)" : "var(--color-text-secondary)";
        const headingSmColor = l.dark ? "var(--color-text-muted-on-dark)" : "var(--color-text-secondary)";
        const checkColor = l.dark ? "var(--color-text-muted-on-dark)" : "var(--color-text-secondary)";
        const borderColor = l.dark ? "rgba(255,255,255,0.12)" : "var(--color-border)";
        const linkColor = l.dark ? "var(--color-gold)" : "var(--color-gold-text)";

        return (
          <section
            key={l.id}
            id={l.id}
            aria-labelledby={`${l.id}-heading`}
            style={{ background: l.bg, padding: "5rem 0" }}
          >
            <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 2rem" }}>
              {/* Zweispaltig: Info (2/3) + Details (1/3) */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "3rem",
                  alignItems: "start",
                  marginBottom: "2rem",
                }}
              >
                {/* Info-Spalte */}
                <div style={{ flex: "2 1 300px", minWidth: 0 }}>
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                    style={{
                      fontSize: "3rem",
                      color: "var(--color-gold)",
                      display: "block",
                      marginBottom: "1rem",
                    }}
                  >
                    {l.icon}
                  </span>
                  <h2
                    id={`${l.id}-heading`}
                    style={{
                      fontFamily: "var(--font-headline)",
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      color: textColor,
                      marginBottom: "1rem",
                    }}
                  >
                    {l.title}
                  </h2>
                  <p
                    style={{
                      color: bodyColor,
                      fontFamily: "var(--font-body)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.75,
                      maxWidth: "600px",
                    }}
                  >
                    {l.body}
                  </p>
                </div>

                {/* Detail-Spalte */}
                <div style={{ flex: "1 1 200px", minWidth: 0 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: headingSmColor,
                      marginBottom: "1rem",
                    }}
                  >
                    Was du bekommst
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {l.checks.map((check) => (
                      <li
                        key={check}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.625rem",
                          color: checkColor,
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9375rem",
                          lineHeight: 1.6,
                          padding: "0.375rem 0",
                          borderBottom: `1px solid ${borderColor}`,
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            color: "var(--color-gold)",
                            fontWeight: 700,
                            flexShrink: 0,
                            marginTop: "0.1em",
                          }}
                        >
                          ✓
                        </span>
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA-Link */}
              <Link
                href="/kontakt"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  color: linkColor,
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
          </section>
        );
      })}

      {/* Preise & Konditionen */}
      <section
        id="preise"
        aria-labelledby="preise-heading"
        style={{ background: "var(--color-navy)", padding: "5rem 0" }}
      >
        <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ maxWidth: "720px" }}>
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
              Transparenz
            </p>
            <h2
              id="preise-heading"
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--color-text-on-dark)",
                marginBottom: "1.5rem",
              }}
            >
              Preise & Konditionen
            </h2>
            <p
              style={{
                color: "var(--color-text-muted-on-dark)",
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                marginBottom: "2rem",
              }}
            >
              Gute Musik hat ihren Preis — und der soll fair und nachvollziehbar sein.
              Unsere Pakete beginnen bereits bei wenigen hundert Euro und werden individuell
              auf deinen Anlass zugeschnitten. Was den genauen Preis beeinflusst? Spieldauer,
              Anreise, Besetzung (Duo oder Vollband), technischer Aufwand und ob du dein
              Event mit ein paar Extras unvergesslich machen möchtest.
            </p>
            <p
              style={{
                color: "var(--color-text-muted-on-dark)",
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              Kein Einheitspaket, kein verstecktes Kleingedrucktes. Schreib uns einfach —
              wir erstellen dir ein unverbindliches Angebot, das wirklich zu deinem Event passt.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              {[
                { icon: "schedule", label: "Spieldauer" },
                { icon: "location_on", label: "Anreise" },
                { icon: "groups", label: "Besetzung" },
                { icon: "speaker", label: "Technik & Equipment" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.875rem 1.125rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                    style={{ fontSize: "1.25rem", color: "var(--color-gold)", flexShrink: 0 }}
                  >
                    {icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-text-on-dark)",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/kontakt"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "var(--color-gold)",
                color: "#000",
                fontFamily: "var(--font-ui)",
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "0.875rem 2rem",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                minHeight: "44px",
              }}
            >
              Kostenloses Angebot anfragen <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
