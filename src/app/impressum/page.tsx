export const metadata = {
  title: "Impressum – Kreiz & Quer",
};

export default function Impressum() {
  return (
    <div className="min-h-screen">
      <div className="bg-[var(--color-surface-container-low)] py-20 px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="text-5xl font-bold text-[var(--color-on-surface)]">Impressum</h1>
          <p className="text-[var(--color-on-surface-variant)] mt-3" style={{ fontFamily: "var(--font-body)" }}>
            Offenlegung gemäß § 25 MedienG sowie Informationspflicht gemäß § 5 ECG
          </p>
        </div>
      </div>

      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-16">
        <div className="max-w-2xl space-y-10 text-[var(--color-on-surface-variant)]" style={{ fontFamily: "var(--font-body)" }}>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Medieninhaber &amp; Diensteanbieter</h2>
            <p className="font-semibold text-[var(--color-on-surface)]">Kreiz &amp; Quer</p>
            <p>Ing. DI Manuel Lamb, MA</p>
            <p>Vormarkt 6</p>
            <p>8130 Frohnleiten, Steiermark</p>
            <p>Österreich</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Kontakt</h2>
            <p>Telefon: <a href="tel:+436802378954" className="hover:text-[var(--color-secondary)] transition-colors">+43 680 23 78 95 4</a></p>
            <p>WhatsApp: <a href="https://wa.me/436802378954" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-secondary)] transition-colors">+43 680 23 78 95 4</a></p>
            <p>E-Mail: <a href="mailto:info@kreizundquer.com" className="hover:text-[var(--color-secondary)] transition-colors">info@kreizundquer.com</a></p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Unternehmensgegenstand</h2>
            <p>Musikdarbietungen und Livemusik bei Veranstaltungen aller Art (Hochzeiten, Bälle, Firmenfeiern, öffentliche Events).</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Grundlegende Richtung (Blattlinie)</h2>
            <p className="leading-relaxed">
              Diese Website informiert über das Live-Musikangebot von Kreiz &amp; Quer und dient der Kontaktaufnahme für Buchungsanfragen. Es handelt sich um kein periodisches Medienwerk im Sinne des Mediengesetzes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Haftungsausschluss</h2>
            <p className="leading-relaxed">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Als Diensteanbieter sind wir gemäß § 17 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Für Inhalte verlinkter externer Seiten übernehmen wir keine Haftung; für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Urheberrecht</h2>
            <p className="leading-relaxed">
              Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem österreichischen Urheberrecht (UrhG). Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Online-Streitbeilegung</h2>
            <p className="leading-relaxed">
              Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-secondary)] hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
