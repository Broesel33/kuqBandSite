export const metadata = {
  title: "Impressum – Kreiz & Quer",
};

export default function Impressum() {
  return (
    <div className="min-h-screen">
      <div className="bg-[var(--color-surface-container-low)] py-20 px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="text-5xl font-bold text-[var(--color-on-surface)]">Impressum</h1>
        </div>
      </div>
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-16">
        <div className="max-w-2xl space-y-8 text-[var(--color-on-surface-variant)]" style={{ fontFamily: "var(--font-body)" }}>
          <div>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Angaben gemäß § 5 TMG</h2>
            <p>Kreiz &amp; Quer GbR</p>
            <p>Musterstraße 1</p>
            <p>80331 München</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Kontakt</h2>
            <p>Telefon: +49 89 123 456 78</p>
            <p>E-Mail: info@kreizundquer.de</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Verantwortlich für den Inhalt</h2>
            <p>Kreiz &amp; Quer GbR</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Haftungsausschluss</h2>
            <p className="leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
