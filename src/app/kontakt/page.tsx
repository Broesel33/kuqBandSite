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
            Plant ihr ein Event und sucht die passende Live-Band? Schreibt uns — wir melden uns innerhalb von 24 Stunden zurück und besprechen alles persönlich.
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
                  Danke für eure Nachricht. Wir melden uns innerhalb von 24 Stunden zurück und besprechen alles persönlich.
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
                      placeholder="eure@email.at"
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
                      placeholder="+43 ..."
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
                  { icon: "mail", label: "E-Mail", value: "info@kreizundquer.com", href: "mailto:info@kreizundquer.com" },
                  { icon: "phone", label: "Telefon", value: "+43 680 23 78 95 4", href: "tel:+436802378954" },
                  { icon: "whatsapp", label: "WhatsApp", value: "+43 680 23 78 95 4", href: "https://wa.me/436802378954" },
                  { icon: "location_on", label: "Heimatbasis", value: "Steiermark, Österreich", href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    {icon === "whatsapp" ? (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--color-secondary)] shrink-0" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ) : (
                      <span className="material-symbols-outlined text-[var(--color-secondary)] text-xl w-6 shrink-0">{icon}</span>
                    )}
                    <div>
                      <p className="text-xs text-[var(--color-on-surface-variant)] uppercase tracking-widest" style={{ fontFamily: "var(--font-label)" }}>{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith("https") ? "_blank" : undefined} rel={href.startsWith("https") ? "noopener noreferrer" : undefined} className="text-[var(--color-on-surface)] font-medium hover:text-[var(--color-secondary)] transition-colors" style={{ fontFamily: "var(--font-body)" }}>{value}</a>
                      ) : (
                        <p className="text-[var(--color-on-surface)] font-medium" style={{ fontFamily: "var(--font-body)" }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-primary-container)] rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Schnelle Antwort</h3>
              <p className="text-[var(--color-on-primary-container)]" style={{ fontFamily: "var(--font-body)" }}>
                Wir melden uns in der Regel innerhalb von 24 Stunden zurück. Kein Auftrag zu klein, kein Event zu groß — schreibt uns einfach.
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
