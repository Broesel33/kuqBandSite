export const metadata = {
  title: "Impressum – Kreiz & Quer",
  description:
    "Impressum von Kreiz & Quer — Anbieterkennzeichnung und Kontaktangaben gemäß § 5 ECG.",
  alternates: { canonical: "https://www.kreizundquer.at/impressum" },
};

export default function Impressum() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header
        style={{ backgroundColor: "var(--color-dark)" }}
        className="py-20 px-6 md:px-8"
      >
        <div className="max-w-screen-xl mx-auto">
          <h1
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              color: "var(--color-text-on-dark)",
              marginBottom: "0.75rem",
            }}
          >
            Impressum
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-text-muted-on-dark)",
              fontSize: "1rem",
            }}
          >
            Offenlegung gemäß § 25 MedienG sowie Informationspflicht gemäß § 5 ECG
          </p>
        </div>
      </header>

      <section
        aria-labelledby="impressum-heading"
        style={{
          backgroundColor: "var(--color-surface)",
          padding: "4rem 1.5rem 6rem",
        }}
      >
        <h2 id="impressum-heading" className="sr-only">
          Impressum Inhalt
        </h2>

        <div
          className="max-w-screen-xl mx-auto"
          style={{ maxWidth: "40rem" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              fontFamily: "var(--font-body)",
              color: "var(--color-text-secondary)",
            }}
          >
            {/* Medieninhaber */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}
              >
                Medieninhaber &amp; Diensteanbieter
              </h2>
              <p style={{ fontWeight: 600, color: "var(--color-text)" }}>Kreiz &amp; Quer</p>
              <p>Ing. DI Manuel Lamb, MA</p>
              <p>Vormarkt 6</p>
              <p>8130 Frohnleiten, Steiermark</p>
              <p>Österreich</p>
            </div>

            {/* Kontakt */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}
              >
                Kontakt
              </h2>
              <p>
                Telefon:{" "}
                <a
                  href="tel:+436802378954"
                  style={{ color: "var(--color-amber-text)", textDecoration: "none" }}
                >
                  +43 680 23 78 95 4
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/436802378954"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-amber-text)", textDecoration: "none" }}
                >
                  +43 680 23 78 95 4
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:kreizundquer@gmail.com"
                  style={{ color: "var(--color-amber-text)", textDecoration: "none" }}
                >
                  kreizundquer@gmail.com
                </a>
              </p>
            </div>

            {/* Unternehmensgegenstand */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}
              >
                Unternehmensgegenstand
              </h2>
              <p>
                Musikdarbietungen und Livemusik bei Veranstaltungen aller Art (Hochzeiten,
                Firmenfeiern, öffentliche Events, Bälle).
              </p>
              <p style={{ marginTop: "0.75rem", lineHeight: 1.7 }}>
                Diese Tätigkeit ist eine Ausübung der schönen Künste im Sinne des § 2 Abs. 1
                Z 7 GewO 1994 und unterliegt damit nicht der Gewerbeordnung. Es besteht daher
                keine Gewerbeberechtigung und keine Mitgliedschaft in der Wirtschaftskammer.
              </p>
            </div>

            {/* Grundlegende Richtung */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}
              >
                Grundlegende Richtung (Blattlinie)
              </h2>
              <p style={{ lineHeight: 1.7 }}>
                Diese Website informiert über das Live-Musikangebot von Kreiz &amp; Quer und
                dient der Kontaktaufnahme für Buchungsanfragen. Es handelt sich um kein
                periodisches Medienwerk im Sinne des Mediengesetzes.
              </p>
            </div>

            {/* Haftungsausschluss */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}
              >
                Haftungsausschluss
              </h2>
              <p style={{ lineHeight: 1.7 }}>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für
                die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine
                Gewähr übernommen. Als Diensteanbieter sind wir gemäß § 17 ECG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Für
                Inhalte verlinkter externer Seiten übernehmen wir keine Haftung; für den
                Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}
              >
                Urheberrecht
              </h2>
              <p style={{ lineHeight: 1.7 }}>
                Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem
                österreichischen Urheberrecht (UrhG). Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                bzw. Erstellers.
              </p>
            </div>

            {/* Online-Streitbeilegung */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}
              >
                Verbraucherschlichtung
              </h2>
              <p style={{ lineHeight: 1.7 }}>
                Wir sind nicht verpflichtet und nicht bereit, an einem
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
