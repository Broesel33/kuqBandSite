"use client";

import { useState } from "react";

const termine = [
  { datum: "07.05.2026", wochentag: "Do", name: "Musikfrühling", ort: "Hoaterwirt, Frohnleiten" },
  { datum: "09.05.2026", wochentag: "Sa", name: "Eröffnung Rinthpark", ort: "Rinthpark, Frohnleiten" },
  { datum: "21.06.2026", wochentag: "So", name: "Lesung", ort: "Bibliothek, Frohnleiten" },
  { datum: "01.08.2026", wochentag: "Sa", name: "SPÖ-Sommerfest", ort: "Rinthpark, Frohnleiten" },
  { datum: "12.08.2026", wochentag: "Mi", name: "Akustische Sommernacht", ort: "Hauptplatz, Frohnleiten" },
  { datum: "15.08.2026", wochentag: "Sa", name: "Teichjubiläum", ort: "Tieschen" },
  { datum: "29.08.2026", wochentag: "Sa", name: "Grillfest", ort: "Trend, Frohnleiten" },
];

export default function EventsSektion() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? termine : termine.slice(0, 3);
  const rest = termine.length - 3;

  return (
    <section id="events" className="bg-[var(--color-surface-container-low)] py-24 px-6 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-[var(--color-secondary)] font-semibold uppercase text-[11px] tracking-widest mb-4" style={{ fontFamily: "var(--font-label)" }}>
              Schaut vorbei
            </p>
            <h2 className="text-4xl font-bold text-[var(--color-on-surface)]">Öffentliche Events</h2>
            <p className="text-[var(--color-on-surface-variant)] mt-3 max-w-lg" style={{ fontFamily: "var(--font-body)" }}>
              Ihr wollt uns live erleben, bevor ihr bucht? Kommt einfach vorbei — Eintritt frei.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {visible.map((t, i) => {
            const [tag, monat, jahr] = t.datum.split(".");
            return (
              <div
                key={t.datum}
                className="bg-[var(--color-surface-container-lowest)] rounded-xl px-6 py-5 flex items-center gap-6 border border-[var(--color-outline-variant)]/10 hover:border-[var(--color-secondary)]/30 transition-colors group"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Datum-Block */}
                <div className="flex-shrink-0 w-14 text-center">
                  <p className="text-2xl font-black text-[var(--color-secondary)] leading-none">{tag}</p>
                  <p className="text-xs font-semibold text-[var(--color-on-surface-variant)] uppercase tracking-wider mt-0.5" style={{ fontFamily: "var(--font-label)" }}>
                    {monat}/{jahr.slice(2)}
                  </p>
                </div>

                <div className="w-px h-10 bg-[var(--color-outline-variant)]/30 flex-shrink-0" />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[var(--color-on-surface)] truncate">{t.name}</p>
                  <p className="text-sm text-[var(--color-on-surface-variant)] flex items-center gap-1.5 mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                    <span className="material-symbols-outlined text-sm text-[var(--color-secondary)]">location_on</span>
                    {t.ort}
                  </p>
                </div>

                {/* Wochentag-Badge */}
                <span className="flex-shrink-0 text-xs font-semibold text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-3 py-1 rounded-full hidden sm:block" style={{ fontFamily: "var(--font-label)" }}>
                  {t.wochentag}
                </span>
              </div>
            );
          })}
        </div>

        {!expanded && rest > 0 && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-6 w-full py-4 rounded-xl border-2 border-dashed border-[var(--color-outline-variant)]/40 text-[var(--color-on-surface-variant)] hover:border-[var(--color-secondary)]/50 hover:text-[var(--color-secondary)] transition-colors flex items-center justify-center gap-2 font-semibold text-sm"
            style={{ fontFamily: "var(--font-label)" }}
          >
            <span className="material-symbols-outlined text-base">expand_more</span>
            {rest} weitere Termine anzeigen
          </button>
        )}

        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="mt-6 w-full py-4 rounded-xl border-2 border-dashed border-[var(--color-outline-variant)]/40 text-[var(--color-on-surface-variant)] hover:border-[var(--color-secondary)]/50 hover:text-[var(--color-secondary)] transition-colors flex items-center justify-center gap-2 font-semibold text-sm"
            style={{ fontFamily: "var(--font-label)" }}
          >
            <span className="material-symbols-outlined text-base">expand_less</span>
            Weniger anzeigen
          </button>
        )}
      </div>
    </section>
  );
}
