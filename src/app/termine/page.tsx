export const metadata = {
  title: "Termine – Kreiz & Quer",
};

const termine = [
  {
    datum: "14. Juni 2025",
    wochentag: "Samstag",
    veranstaltung: "Sommerfest Kulturpark",
    ort: "München",
    art: "Open Air",
    tickets: true,
  },
  {
    datum: "21. Juni 2025",
    wochentag: "Samstag",
    veranstaltung: "Hochzeit — privat",
    ort: "Augsburg",
    art: "Privatveranstaltung",
    tickets: false,
  },
  {
    datum: "5. Juli 2025",
    wochentag: "Samstag",
    veranstaltung: "Stadtfest Schwabing",
    ort: "München",
    art: "Stadtfest",
    tickets: true,
  },
  {
    datum: "19. Juli 2025",
    wochentag: "Samstag",
    veranstaltung: "Firmen-Gala Techcompany AG",
    ort: "Nürnberg",
    art: "Firmenevent",
    tickets: false,
  },
  {
    datum: "9. August 2025",
    wochentag: "Samstag",
    veranstaltung: "Open Air Konzert",
    ort: "Ingolstadt",
    art: "Open Air",
    tickets: true,
  },
  {
    datum: "30. August 2025",
    wochentag: "Samstag",
    veranstaltung: "Hochzeitsball Residenz",
    ort: "München",
    art: "Ball",
    tickets: true,
  },
  {
    datum: "27. September 2025",
    wochentag: "Samstag",
    veranstaltung: "Herbstfest Konzert",
    ort: "Landsberg am Lech",
    art: "Festival",
    tickets: true,
  },
  {
    datum: "15. November 2025",
    wochentag: "Samstag",
    veranstaltung: "Charity-Gala",
    ort: "München",
    art: "Gala",
    tickets: true,
  },
  {
    datum: "31. Dezember 2025",
    wochentag: "Mittwoch",
    veranstaltung: "Silvesterball",
    ort: "München",
    art: "Ball",
    tickets: true,
  },
];

const artColors: Record<string, string> = {
  "Open Air": "bg-emerald-500/10 text-emerald-600",
  "Privatveranstaltung": "bg-slate-500/10 text-slate-500",
  "Stadtfest": "bg-amber-500/10 text-amber-600",
  "Firmenevent": "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
  "Ball": "bg-violet-500/10 text-violet-600",
  "Festival": "bg-orange-500/10 text-orange-600",
  "Gala": "bg-rose-500/10 text-rose-600",
};

export default function Termine() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[var(--color-surface-container-low)] py-20 px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[var(--color-secondary)] font-semibold uppercase text-[11px] tracking-widest mb-4" style={{ fontFamily: "var(--font-label)" }}>
            Upcoming Shows
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-on-surface)]">Termine</h1>
          <p className="text-xl text-[var(--color-on-surface-variant)] mt-4 max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
            Unsere nächsten Auftritte — seid dabei oder bucht uns für Euren Anlass.
          </p>
        </div>
      </div>

      {/* Termine Liste – Setlist Style */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-16">
        <ul className="space-y-6">
          {termine.map((termin, i) => (
            <li
              key={i}
              className="bg-[var(--color-surface-container-lowest)] rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 shadow-[0_4px_20px_rgba(23,28,31,0.04)] border border-[var(--color-outline-variant)]/10 hover:shadow-[0_8px_30px_rgba(23,28,31,0.07)] transition-shadow"
            >
              {/* Datum */}
              <div className="md:w-48 shrink-0">
                <p
                  className="text-xs text-[var(--color-on-surface-variant)] uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  {termin.wochentag}
                </p>
                <p className="text-2xl font-bold text-[var(--color-on-surface)] mt-1">{termin.datum}</p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-[var(--color-outline-variant)]/20" />

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[var(--color-on-surface)]">{termin.veranstaltung}</h3>
                <div className="flex items-center gap-2 mt-1 text-[var(--color-on-surface-variant)]" style={{ fontFamily: "var(--font-body)" }}>
                  <span className="material-symbols-outlined text-base text-[var(--color-secondary)]">location_on</span>
                  {termin.ort}
                </div>
              </div>

              {/* Badge & CTA */}
              <div className="flex items-center gap-4 shrink-0">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${artColors[termin.art] ?? "bg-slate-100 text-slate-600"}`}
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  {termin.art}
                </span>
                {termin.tickets ? (
                  <a
                    href="/kontakt"
                    className="text-[var(--color-secondary)] font-semibold text-sm hover:underline flex items-center gap-1"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    Tickets <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                ) : (
                  <span className="text-[var(--color-on-surface-variant)] text-sm opacity-50" style={{ fontFamily: "var(--font-label)" }}>
                    Ausverkauft
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Buchungs-CTA */}
        <div className="mt-16 bg-[var(--color-primary-container)] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Euer Event ist nicht dabei?</h3>
            <p className="text-[var(--color-on-primary-container)] mt-1" style={{ fontFamily: "var(--font-body)" }}>
              Fragt direkt an — wir freuen uns auf Euren Anlass.
            </p>
          </div>
          <a
            href="/kontakt"
            className="shrink-0 bg-[var(--color-secondary)] text-white px-8 py-3 rounded-md font-semibold hover:bg-[var(--color-secondary-container)] transition-colors"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Jetzt buchen
          </a>
        </div>
      </section>
    </div>
  );
}
