import Link from "next/link";
import Image from "next/image";
import MemberCard from "@/components/MemberCard";

const musicGroupJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Kreiz & Quer",
  url: "https://www.kreizundquer.at",
  description:
    "Lern Manu, Robert, Steph und Gabs kennen — die vier Musiker hinter Kreiz & Quer. Live-Band aus der Steiermark, 200+ Auftritte bei Hochzeiten, Events, Bällen und Firmenfeiern.",
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
    "https://www.instagram.com/kreiz_und_quer/",
    "https://www.youtube.com/@kreizquer",
  ],
};

export const metadata = {
  title: "Die Band | Live-Musiker aus der Steiermark – Kreiz & Quer",
  description:
    "Lern Manu, Robert, Steph und Gabs kennen — die vier Musiker hinter Kreiz & Quer. Live-Band aus der Steiermark, 200+ Auftritte bei Hochzeiten, Events, Bällen und Firmenfeiern.",
  alternates: { canonical: "https://www.kreizundquer.at/ueber-uns" },
};

const mitglieder = [
  {
    name: "Manu",
    instrument: "Gesang · Rhythmus-Gitarre",
    bio: "Manu hat eine Stimme, die den Raum ändert, bevor er auch nur die erste Zeile zu Ende gesungen hat — tiefer, voller und irgendwie echter als erwartet. Auf der Bühne ist er komplett bei der Sache: spürt die Stimmung, reagiert auf sie, zieht die Leute rein ohne großes Aufhebens darum zu machen. Bevor man's merkt, singt der halbe Saal mit. Das klingt einfach. Ist es aber nicht.",
    photoSrc: "/Manu.png",
    photoAlt: "Manu singt und spielt Rhythmus-Gitarre",
  },
  {
    name: "Robert",
    instrument: "Gesang · E-Gitarre",
    bio: "Robert trifft Töne, die Manu mit einem freundlichen Lächeln stehen lässt und nie anfasst — und irgendwie klingt das zusammen besser als getrennt. Was er mit seiner Gitarre macht, ist schwer in Worte zu fassen: manchmal nachdenklich und leise, manchmal laut genug, dass die Gespräche am Nebentisch kurz einfrieren. Er ist nicht der Typ, der Aufmerksamkeit sucht. Er kriegt sie trotzdem.",
    photoSrc: "/Robert.png",
    photoAlt: "Robert singt und spielt E-Gitarre",
  },
  {
    name: "Steph",
    instrument: "Schlagzeug · Keyboard",
    bio: "Wer Steph beim Aufbau sieht — ruhig, konzentriert, meistens ein bisschen in sich gekehrt — ahnt nicht, was gleich passiert. Dann setzt er sich ans Schlagzeug, und der Raum ändert sich. Zwischen Drums und Keyboard wechselt er so entspannt, als wäre das eine komplett normale Sache. Ist es aber nicht. Die wenigsten, die Schlagzeug spielen, können auch Keyboard — und die noch wenigeren klingen so, als wäre es nie eine Frage gewesen.",
    photoSrc: "/steph.png",
    photoAlt: "Steph am Schlagzeug und Keyboard",
  },
  {
    name: "Gabs",
    instrument: "Bass · Background Vocals",
    bio: "Gabs ist der, der nach dem Auftritt noch mit allen redet — und der einzige, dem das wirklich gelingt, ohne dass es aufgesetzt wirkt. Auf der Bühne läuft sein Bass als Fundament unter allem durch, eher gespürt als bewusst gehört. Er hält zusammen, was zusammengehört. Und seine Stimme im Hintergrund ist oft der Unterschied zwischen einem guten und einem richtig guten Moment.",
    photoSrc: "/gabs.png",
    photoAlt: "Gabs spielt Bass und singt",
  },
];

export default function UeberUns() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupJsonLd) }}
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
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
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
                Wie aus uns Vieren eine Band wurde.
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
                  Über 200 Auftritte in ganz Österreich — von Hochzeiten in Graz bis zu Bällen, Firmenfeiern und Partys in der ganzen Steiermark und weit darüber hinaus.
                  Und bei jedem einzelnen davon geben wir alles. Nicht weil wir müssen. Sondern
                  weil wir es lieben.
                </p>
              </div>

              {/* Statistiken */}
              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {[
                  { zahl: "200+", label: "Auftritte" },
                  { zahl: "180+", label: "Songs im Repertoire" },
                  { zahl: "2014", label: "Gründungsjahr" },
                ].map(({ zahl, label }) => (
                  <div key={label}>
                    <dt
                      style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "var(--color-amber-text)",
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
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
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
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ maxWidth: "720px" }}>
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
                      color: "var(--color-amber-text)",
                      fontFamily: "var(--font-ui)",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      textDecoration: "none",
                      minHeight: "44px",
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

      {/* Interne Weiterführung */}
      <section
        style={{
          background: "var(--color-dark)",
          padding: "5rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--color-text-on-dark)",
              marginBottom: "1rem",
            }}
          >
            Neugierig geworden?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-text-muted-on-dark)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
            }}
          >
            Schaut euch an, was wir spielen — oder direkt, für welche Anlässe wir buchbar sind.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link
              href="/repertoire"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "var(--color-accent-warm)",
                color: "#000",
                fontFamily: "var(--font-ui)",
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                minHeight: "44px",
              }}
            >
              Unser Repertoire
            </Link>
            <Link
              href="/leistungen"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "transparent",
                color: "var(--color-text-on-dark)",
                border: "1.5px solid var(--color-text-on-dark)",
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                minHeight: "44px",
              }}
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
