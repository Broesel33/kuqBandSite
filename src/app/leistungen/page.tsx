import Link from "next/link";

export const metadata = {
  title: "Leistungen – Kreiz & Quer",
  description:
    "Hochzeiten, Bälle, Firmenfeiern und Events — Kreiz & Quer bietet Live-Musik für jeden Anlass.",
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
    body: "Vom gefühlvollen Ja-Wort bis zur ausgelassenen Party — wir begleiten euren großen Tag mit Herz, Feingefühl und genau der Musik, die den Moment unvergesslich macht. Jeder Wunsch, jede Stimmung, jeder Tanz.",
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
    id: "firmenfeiern",
    icon: "business_center",
    title: "Firmenfeiern",
    body: "Professionell auf der Bühne, flexibel im Programm. Vom ruhigen Empfangsambiente bis zum mitreißenden Hauptact — wir passen uns eurem Event an und liefern genau das, was der Abend braucht.",
    checks: [
      "Hintergrundmusik / Empfang",
      "Hauptact / Tanzabend",
      "Flexible Programmgestaltung",
      "Technische Selbstversorgung",
    ],
    bg: "var(--color-surface)",
  },
  {
    id: "events",
    icon: "campaign",
    title: "Events, Partys und Veranstaltungen",
    body: "Ob Stadtfest, Sommernachtsparty oder Vereinsjubiläum — wenn ein Anlass Livemusik verdient, sind wir dabei. Flexibel, verlässlich und immer auf den Punkt.",
    checks: [
      "Vollständiges PA- & Licht-Setup",
      "Flexible Setlänge & Pausengestaltung",
      "Abstimmung mit Veranstalter & Location",
      "Outdoor- & Innenbereich geeignet",
      "Hintergrundmusik bis Hauptact",
      "Spontane Programmänderungen möglich",
    ],
    bg: "var(--color-warm-gray)",
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
    body: "Wenn die Tanzfläche brennen soll. Mit vier Musikern, vollem Sound und professioneller Technik entfesseln wir den Abend — druckvoll, lebendig und mitreißend bis zur letzten Zugabe.",
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
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "3rem",
                  alignItems: "start",
                  marginBottom: "2rem",
                }}
              >
                {/* Info-Spalte */}
                <div style={{ gridColumn: "span 2" }}>
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
                <div>
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
                    Was ihr bekommt
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
                Unverbindlich anfragen →
              </Link>
            </div>
          </section>
        );
      })}
    </>
  );
}
