import Image from "next/image";
import MemberCard from "@/components/MemberCard";

export const metadata = {
  title: "Über uns – Kreiz & Quer",
  description:
    "Lerne Manu, Robert, Steph und Gabs kennen — die vier Musiker hinter Kreiz & Quer.",
};

const mitglieder = [
  {
    name: "Manu",
    instrument: "Gesang · Rhythmus-Gitarre",
    bio: "Manu ist Stimme und Seele in einem. Tagsüber netter Mensch, abends derjenige, der den Raum mit einer einzigen Note zum Schweigen bringen kann — um ihn kurz darauf zum Tanzen zu bringen. Er gibt den Ton an. Buchstäblich.",
    photoSrc: "/manu.png",
    photoAlt: "Manu singt und spielt Rhythmus-Gitarre",
  },
  {
    name: "Robert",
    instrument: "E-Gitarre · Gesang",
    bio: "Robert ist der Mann für die Momente, in denen eine Gitarre spricht, weil Worte nicht reichen. Seine Riffs klingen, als hätte er sie direkt aus den 70ern mitgebracht — und das meinen wir als höchstes Kompliment. Plus: er singt, und zwar gut.",
    photoSrc: "/robert.png",
    photoAlt: "Robert spielt E-Gitarre und singt",
  },
  {
    name: "Steph",
    instrument: "Schlagzeug · Keyboard",
    bio: "Steph ist immer einen Schlag voraus — was irgendwie Sinn ergibt, weil er Schlagzeuger ist. Wenn er nicht gerade den Groove der ganzen Band auf seinen Schultern trägt, setzt er sich ans Keyboard und beweist, dass zwei Instrumente kein Problem sind. Für ihn jedenfalls.",
    photoSrc: "/steph.png",
    photoAlt: "Steph am Schlagzeug und Keyboard",
  },
  {
    name: "Gabs",
    instrument: "Bass · Background Vocals",
    bio: "Gabs ist das Fundament — ohne sie würde der Rest einfach in der Luft hängen. Ihr Bass hält alles zusammen, ihre Stimme gibt dem Ganzen Wärme. Man hört sie vielleicht nicht immer zuerst. Aber wenn sie fehlt, merkt es jeder sofort.",
    photoSrc: "/gabs.png",
    photoAlt: "Gabs spielt Bass und singt",
  },
];

export default function UeberUns() {
  return (
    <>
      {/* 1. Page-Header */}
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
            Die Band
          </p>
          <h1
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--color-text-on-dark)",
              marginBottom: "1rem",
            }}
          >
            Über uns
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
            Vier Persönlichkeiten. Eine gemeinsame Leidenschaft.
          </p>
        </div>
      </div>

      {/* 2. Band-Story */}
      <section
        aria-labelledby="story-heading"
        style={{ background: "var(--color-surface)", padding: "6rem 0" }}
      >
        <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Linke Spalte: Bild */}
            <div
              style={{
                aspectRatio: "4/3",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/band.png"
                alt="Kreiz & Quer — die Band live auf der Bühne"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Rechte Spalte: Text */}
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
                Unsere Geschichte
              </p>
              <h2
                id="story-heading"
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  color: "var(--color-text)",
                  marginBottom: "1.5rem",
                }}
              >
                Vier Persönlichkeiten. Eine gemeinsame Leidenschaft.
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.7,
                  marginBottom: "2.5rem",
                }}
              >
                <p>
                  Kreiz &amp; Quer steht für ehrliche Musik, echte Emotion und unvergessliche
                  Live-Momente. Wir sind Manu, Robert, Steph und Gabs — vier Musiker aus der
                  Steiermark, jeder mit seiner eigenen Handschrift, zusammen mit einem Sound, der
                  verbindet.
                </p>
                <p>
                  Was uns ausmacht? Wir spielen nicht einfach ein Programm ab. Wir fühlen die
                  Energie im Raum und passen unser Set spontan an — wann es leise sein muss, wann
                  die Tanzfläche explodieren soll. Jeder Abend ist anders, und genau das macht ihn
                  besonders.
                </p>
                <p>
                  Über 200 Auftritte in ganz Österreich — Hochzeiten, Bälle, Firmenfeiern, Partys.
                  Und bei jedem einzelnen davon geben wir alles. Nicht weil wir müssen. Sondern
                  weil wir es lieben.
                </p>
              </div>

              {/* Statistiken */}
              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1.5rem",
                }}
              >
                {[
                  { zahl: "200+", label: "Auftritte" },
                  { zahl: "200+", label: "Songs im Repertoire" },
                  { zahl: "4", label: "Bandmitglieder" },
                ].map(({ zahl, label }) => (
                  <div key={label}>
                    <dt
                      style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "var(--color-gold-text)",
                        fontFamily: "var(--font-headline)",
                        lineHeight: 1.1,
                      }}
                    >
                      {zahl}
                    </dt>
                    <dd
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        fontFamily: "var(--font-body)",
                        marginTop: "0.25rem",
                      }}
                    >
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mitglieder-Grid */}
      <section
        aria-labelledby="mitglieder-heading"
        style={{ background: "var(--color-warm-gray)", padding: "6rem 0" }}
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
              Die Crew
            </p>
            <h2
              id="mitglieder-heading"
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "var(--color-text)",
              }}
            >
              Die vier Musiker
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {mitglieder.map((m) => (
              <MemberCard
                key={m.name}
                name={m.name}
                instrument={m.instrument}
                bio={m.bio}
                photoSrc={m.photoSrc}
                photoAlt={m.photoAlt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
