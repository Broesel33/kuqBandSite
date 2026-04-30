import Image from "next/image";
import MemberCard from "@/components/MemberCard";

export const metadata = {
  title: "Über uns – Kreiz & Quer",
  description:
    "Lern Manu, Robert, Steph und Gabs kennen — die vier Musiker hinter Kreiz & Quer, einer Live-Band aus der Steiermark mit über 200 Auftritten in ganz Österreich.",
};

const mitglieder = [
  {
    name: "Manu",
    instrument: "Gesang · Rhythmus-Gitarre",
    bio: "Manu ist der Grund, warum Gäste den letzten Zug verpassen. Mit einer Stimme, die tiefer geht als so manche Erwartung, zieht er einen Raum in seinen Bann — langsam, sicher, und bevor man es merkt, singt der ganze Saal mit. Manche nennen das Talent. Manu nennt es Dienstag.",
    photoSrc: "/Manu.png",
    photoAlt: "Manu singt und spielt Rhythmus-Gitarre",
  },
  {
    name: "Robert",
    instrument: "Gesang · E-Gitarre",
    bio: "Robert singt in Höhen, die Manu freundlich lächelnd an sich vorbeilässt — und zusammen klingt das, als wäre es so geplant gewesen. Seit immer. Wo Worte nicht mehr reichen, lässt er seine Gitarre reden. Manche Menschen haben einfach zu viel Talent für eine einzige Sache — Robert ist einer davon.",
    photoSrc: "/Robert.png",
    photoAlt: "Robert singt und spielt E-Gitarre",
  },
  {
    name: "Steph",
    instrument: "Schlagzeug · Keyboard",
    bio: "Steph ist immer einen Schlag voraus. Bevor jemand anderes auch nur überlegt, ob die Energie im Raum gerade kippt, hat er bereits das Tempo angepasst. Zwischen Schlagzeug und Keyboard wechselt er so selbstverständlich, als wäre beides dasselbe Instrument — und irgendwie klingt es auch so.",
    photoSrc: "/steph.png",
    photoAlt: "Steph am Schlagzeug und Keyboard",
  },
  {
    name: "Gabs",
    instrument: "Bass · Background Vocals",
    bio: "Gabs ist das Fundament — ohne ihn würde der Rest einfach in der Luft hängen. Sein Bass hält alles zusammen, seine Stimme gibt dem Ganzen Wärme. Man hört ihn vielleicht nicht immer zuerst. Aber wenn er fehlt, merkt es jeder sofort.",
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
            Die vier Köpfe hinter dem Sound.
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
                Wie aus vier Musikern eine Band wurde.
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
                  Steiermark, jeder mit seiner eigenen Handschrift, jeder mit über 10 Jahren
                  Bühnenerfahrung im Gepäck. Zusammen ein Sound, der verbindet.
                </p>
                <p>
                  Was uns ausmacht? Wir spielen nicht einfach ein Programm ab. Wir fühlen die
                  Energie im Raum und passen unser Set spontan an — wann es leise sein muss, wann
                  die Tanzfläche explodieren soll. Jeder Auftritt ist anders, und genau das macht ihn
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
                  { zahl: "2019", label: "Gründungsjahr" },
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
              Wir Vier
            </p>
            <h2
              id="mitglieder-heading"
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "var(--color-text)",
              }}
            >
              Wir Vier – Ganz persönlich
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

      {/* 4. ViertelVier */}
      <section
        aria-labelledby="viertelvier-heading"
        style={{ background: "var(--color-surface)", padding: "6rem 0" }}
      >
        <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ maxWidth: "720px" }}>
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
              Eigene Musik
            </p>
            <h2
              id="viertelvier-heading"
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "var(--color-text)",
                marginBottom: "1.5rem",
              }}
            >
              Wir covern nicht nur
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
                Jetzt wisst ihr, wer wir sind. Aber es gibt noch eine Seite von uns, die ihr
                vielleicht noch nicht kennt: Neben Kreiz &amp; Quer machen wir als{" "}
                <strong style={{ color: "var(--color-text)" }}>ViertelVier</strong> eigene Musik —
                modernen Austropop, den wir selbst schreiben, selbst produzieren und der sich
                schlicht nach uns anhört.
              </p>
              <p>
                Keine fremden Songs, keine Vorgaben — nur das, was wir wirklich sagen wollen.
                Wenn ihr neugierig seid, wie wir klingen, wenn wir ganz wir selbst sind, hört
                einfach rein:
              </p>
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                { label: "Moch's Guat", href: "https://music.youtube.com/watch?v=8BaV9QXCqz4&si=nIkO2tHbNYr-mAvL" },
                { label: "Alle 9", href: "https://music.youtube.com/watch?v=CFuDMRsb6Vw&si=w24L7MxnQXgmSdq3" },
                { label: "Farben", href: "https://music.youtube.com/watch?v=NcfB1NRb6FE&si=d3MfE7mzGLAjj8S5" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "var(--color-gold-text)",
                      fontFamily: "var(--font-ui)",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                      style={{ fontSize: "1.25rem" }}
                    >
                      play_circle
                    </span>
                    ViertelVier – {label} <span aria-hidden="true">↗</span>
                    <span className="sr-only">(öffnet in neuem Tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
