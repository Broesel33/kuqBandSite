"use client";

import { useState } from "react";

export default function Kontakt() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    telefon: "",
    anlass: "",
    datum: "",
    nachricht: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[var(--color-surface-container-low)] py-20 px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[var(--color-secondary)] font-semibold uppercase text-[11px] tracking-widest mb-4" style={{ fontFamily: "var(--font-label)" }}>
            Schreibt uns
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-on-surface)]">Kontakt</h1>
          <p className="text-xl text-[var(--color-on-surface-variant)] mt-4 max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
            Buchungsanfragen, Fragen, Feedback — wir freuen uns von Euch zu hören.
          </p>
        </div>
      </div>

      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Kontaktformular */}
          <div>
            {sent ? (
              <div className="bg-emerald-50 rounded-xl p-8 flex flex-col items-center text-center gap-4">
                <span className="material-symbols-outlined text-5xl text-emerald-500">check_circle</span>
                <h2 className="text-2xl font-bold text-[var(--color-on-surface)]">Nachricht gesendet!</h2>
                <p className="text-[var(--color-on-surface-variant)]" style={{ fontFamily: "var(--font-body)" }}>
                  Danke für Eure Anfrage. Wir melden uns innerhalb von 48 Stunden bei Euch.
                </p>
                <button
                  onClick={() => { setSent(false); setFormState({ name: "", email: "", telefon: "", anlass: "", datum: "", nachricht: "" }); }}
                  className="text-[var(--color-secondary)] font-semibold hover:underline"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-on-surface-variant)] mb-2" style={{ fontFamily: "var(--font-label)" }}>
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[var(--color-surface-container-high)] border-0 border-b-2 border-[var(--color-outline-variant)] px-0 py-3 text-[var(--color-on-surface)] focus:border-[var(--color-secondary)] focus:outline-none transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                      placeholder="Euer Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-on-surface-variant)] mb-2" style={{ fontFamily: "var(--font-label)" }}>
                      E-Mail *
                    </label>
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[var(--color-surface-container-high)] border-0 border-b-2 border-[var(--color-outline-variant)] px-0 py-3 text-[var(--color-on-surface)] focus:border-[var(--color-secondary)] focus:outline-none transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                      placeholder="eure@email.de"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-on-surface-variant)] mb-2" style={{ fontFamily: "var(--font-label)" }}>
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formState.telefon}
                      onChange={(e) => setFormState({ ...formState, telefon: e.target.value })}
                      className="w-full bg-[var(--color-surface-container-high)] border-0 border-b-2 border-[var(--color-outline-variant)] px-0 py-3 text-[var(--color-on-surface)] focus:border-[var(--color-secondary)] focus:outline-none transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                      placeholder="+49 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-on-surface-variant)] mb-2" style={{ fontFamily: "var(--font-label)" }}>
                      Veranstaltungsdatum
                    </label>
                    <input
                      type="date"
                      value={formState.datum}
                      onChange={(e) => setFormState({ ...formState, datum: e.target.value })}
                      className="w-full bg-[var(--color-surface-container-high)] border-0 border-b-2 border-[var(--color-outline-variant)] px-0 py-3 text-[var(--color-on-surface)] focus:border-[var(--color-secondary)] focus:outline-none transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-on-surface-variant)] mb-2" style={{ fontFamily: "var(--font-label)" }}>
                    Anlass *
                  </label>
                  <select
                    required
                    value={formState.anlass}
                    onChange={(e) => setFormState({ ...formState, anlass: e.target.value })}
                    className="w-full bg-[var(--color-surface-container-high)] border-0 border-b-2 border-[var(--color-outline-variant)] px-0 py-3 text-[var(--color-on-surface)] focus:border-[var(--color-secondary)] focus:outline-none transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <option value="">Bitte auswählen...</option>
                    <option>Hochzeit</option>
                    <option>Firmenevent</option>
                    <option>Ball / Gala</option>
                    <option>Geburtstag / Privatparty</option>
                    <option>Stadtfest / Festival</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-on-surface-variant)] mb-2" style={{ fontFamily: "var(--font-label)" }}>
                    Nachricht *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.nachricht}
                    onChange={(e) => setFormState({ ...formState, nachricht: e.target.value })}
                    className="w-full bg-[var(--color-surface-container-high)] border-0 border-b-2 border-[var(--color-outline-variant)] px-0 py-3 text-[var(--color-on-surface)] focus:border-[var(--color-secondary)] focus:outline-none transition-colors resize-none"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="Erzählt uns von Eurem Event — Ort, Gästeanzahl, besondere Wünsche..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-10 py-4 rounded-md font-semibold hover:bg-[var(--color-primary-container)] transition-colors shadow-[0_10px_30px_rgba(23,28,31,0.08)]"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Anfrage senden
                </button>
              </form>
            )}
          </div>

          {/* Kontakt-Info */}
          <div className="space-y-8">
            <div className="bg-[var(--color-surface-container-low)] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-6">Direkt erreichen</h3>
              <div className="space-y-4">
                {[
                  { icon: "mail", label: "E-Mail", value: "booking@kreizundquer.de" },
                  { icon: "phone", label: "Telefon", value: "+49 89 123 456 78" },
                  { icon: "location_on", label: "Heimatbasis", value: "München, Bayern" },
                  { icon: "schedule", label: "Erreichbarkeit", value: "Mo–Fr, 10–18 Uhr" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] text-xl w-6 shrink-0">{icon}</span>
                    <div>
                      <p className="text-xs text-[var(--color-on-surface-variant)] uppercase tracking-widest" style={{ fontFamily: "var(--font-label)" }}>{label}</p>
                      <p className="text-[var(--color-on-surface)] font-medium" style={{ fontFamily: "var(--font-body)" }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-primary-container)] rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Schnelle Antwort</h3>
              <p className="text-[var(--color-on-primary-container)]" style={{ fontFamily: "var(--font-body)" }}>
                Wir antworten auf Buchungsanfragen in der Regel innerhalb von 24–48 Stunden. Für dringende Anfragen bitte telefonisch melden.
              </p>
            </div>

            <div className="bg-[var(--color-surface-container-lowest)] rounded-xl p-8 border border-[var(--color-outline-variant)]/10">
              <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-3">Folgt uns</h3>
              <div className="flex gap-4 mt-4">
                {["instagram", "facebook", "youtube"].map((platform) => (
                  <button
                    key={platform}
                    className="w-10 h-10 rounded-full bg-[var(--color-surface-container-high)] flex items-center justify-center text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] hover:bg-[var(--color-surface-container)] transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">{platform === "instagram" ? "photo_camera" : platform === "facebook" ? "public" : "play_circle"}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
