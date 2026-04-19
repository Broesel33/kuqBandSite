import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

export const metadata = {
  title: "Leistungen – Kreiz & Quer",
};

export default function Leistungen() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[var(--color-surface-container-low)] py-20 px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[var(--color-secondary)] font-semibold uppercase text-[11px] tracking-widest mb-4" style={{ fontFamily: "var(--font-label)" }}>
            Was wir bieten
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-on-surface)]">Leistungen</h1>
          <p className="text-xl text-[var(--color-on-surface-variant)] mt-4 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
            Von der emotionalen Trauung bis zur ausgelassenen Feier — wir haben für jeden Moment die passende Musik. Immer live, immer mit Herzblut.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Hochzeiten – groß */}
          <div className="md:col-span-8 bg-[var(--color-surface-container-low)] rounded-xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <PlaceholderImage gradient="from-blue-100/60 to-indigo-100/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-low)] via-[var(--color-surface-container-low)]/80 to-transparent" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end min-h-[320px]">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)] mb-6">favorite</span>
              <h2 className="text-4xl font-bold text-[var(--color-on-surface)] mb-4">Hochzeiten</h2>
              <p className="text-lg text-[var(--color-on-surface-variant)] mb-6 max-w-lg" style={{ fontFamily: "var(--font-body)" }}>
                Euer großer Tag verdient die perfekte Musik. Vom gefühlvollen Ja-Wort über den Sektempfang bis zur Party, die alle in Erinnerung behalten — wir begleiten euch durch jeden Moment.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {["Trauungsbegleitung", "Sektempfang", "Erster Tanz", "Vollband", "Individuelle Songwünsche"].map((tag) => (
                  <span key={tag} className="bg-[var(--color-surface-container-highest)] px-3 py-1 rounded-full text-sm" style={{ fontFamily: "var(--font-label)" }}>{tag}</span>
                ))}
                <Link href="/kontakt" className="mt-2 text-[var(--color-secondary)] font-semibold text-sm hover:underline flex items-center gap-1 whitespace-nowrap w-full" style={{ fontFamily: "var(--font-label)" }}>
                  Termin unverbindlich anfragen <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Firmenevents – schmal */}
          <div className="md:col-span-4 bg-[var(--color-primary-container)] rounded-xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <PlaceholderImage gradient="from-blue-900/20 to-slate-900/40" dark />
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-container)]/50 to-[var(--color-primary-container)]" />
            </div>
            <div className="relative z-10 h-full flex flex-col min-h-[320px]">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary-fixed)] mb-6">business_center</span>
              <h2 className="text-3xl font-bold text-[var(--color-on-primary)] mb-4">Firmenevents</h2>
              <p className="text-base text-[var(--color-on-primary-container)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Professionell auf der Bühne, zuverlässig in der Planung. Vom dezenten Hintergrundprogramm bis zum energiegeladenen Hauptact — wir liefern genau das, was euer Event braucht.
              </p>
              <Link href="/kontakt" className="mt-auto self-start text-[var(--color-secondary-fixed)] font-semibold hover:text-white transition-colors flex items-center gap-2" style={{ fontFamily: "var(--font-label)" }}>
                Termin unverbindlich anfragen <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Bälle */}
          <div className="md:col-span-6 bg-[var(--color-surface-container-lowest)] rounded-xl p-10 shadow-[0_20px_60px_rgba(23,28,31,0.04)] border border-[var(--color-outline-variant)]/10 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <PlaceholderImage gradient="from-blue-900/20 to-blue-800/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-lowest)] via-[var(--color-surface-container-lowest)]/85 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col min-h-[320px] justify-end">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)] mb-6">celebration</span>
              <h2 className="text-3xl font-bold text-[var(--color-on-surface)] mb-4">Bälle</h2>
              <p className="text-[var(--color-on-surface-variant)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Stilvoller Walzer, mitreißende Polka, zeitlose Evergreens — wir wissen, wann Eleganz gefragt ist und wann die Tanzfläche explodieren soll.
              </p>
              <ul className="space-y-3 mb-6" style={{ fontFamily: "var(--font-body)" }}>
                {["Klassische Tanzmusik & Walzer", "Mitternachtseinlage & Late-Night", "Abstimmung auf das Ballthema möglich"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-on-surface-variant)]">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] text-base">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="text-[var(--color-secondary)] font-semibold text-sm hover:underline flex items-center gap-1" style={{ fontFamily: "var(--font-label)" }}>
                Termin unverbindlich anfragen <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Events aller Art */}
          <div className="md:col-span-6 bg-[var(--color-surface-container-low)] rounded-xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <PlaceholderImage gradient="from-blue-200/40 to-slate-200/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-low)] via-[var(--color-surface-container-low)]/85 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col min-h-[320px] justify-end">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)] mb-6">campaign</span>
              <h2 className="text-3xl font-bold text-[var(--color-on-surface)] mb-4">Events &amp; Veranstaltungen</h2>
              <p className="text-[var(--color-on-surface-variant)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Eröffnungen, Sommerfeste, Stadtfeste, Partys, Vereinsfeiern — wenn ein Anlass Livemusik verdient, sind wir dabei. Flexibel, verlässlich, auf den Punkt.
              </p>
              <ul className="space-y-3 mb-6" style={{ fontFamily: "var(--font-body)" }}>
                {["Eröffnungen & Einweihungsfeiern", "Sommerfeste & Open-Air-Events", "Vereins- & Gemeindefeiern", "Stadtfeste & öffentliche Veranstaltungen"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-on-surface-variant)]">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] text-base">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="text-[var(--color-secondary)] font-semibold text-sm hover:underline flex items-center gap-1" style={{ fontFamily: "var(--font-label)" }}>
                Termin unverbindlich anfragen <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Duo vs. Vollband */}
          <div className="md:col-span-6 bg-[var(--color-surface-container-lowest)] rounded-xl p-10 border border-[var(--color-outline-variant)]/10 shadow-[0_4px_20px_rgba(23,28,31,0.04)]">
            <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)] mb-6 block">queue_music</span>
            <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mb-2">Kreiz &amp; Quer zu zweit</h2>
            <p className="text-sm text-[var(--color-secondary)] font-semibold uppercase tracking-wider mb-5" style={{ fontFamily: "var(--font-label)" }}>Akustik-Duo · Gitarre &amp; Gesang</p>
            <p className="text-[var(--color-on-surface-variant)] mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Für Momente, die Stille brauchen. Taufen, freie Trauungen, Sektempfänge, intime Feiern im kleinen Kreis — zu zweit spielen wir nah am Publikum, akustisch und emotional. Kein großer Aufbau, keine Lautstärke, nur Musik, die berührt.
            </p>
            <ul className="space-y-3 mb-6" style={{ fontFamily: "var(--font-body)" }}>
              {["Taufen & Erstkommunionen", "Freie Trauungen & Standesamt", "Sektempfang & Agape", "Private Feiern im kleinen Rahmen"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-on-surface-variant)]">
                  <span className="material-symbols-outlined text-[var(--color-secondary)] text-base">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/kontakt" className="text-[var(--color-secondary)] font-semibold text-sm hover:underline flex items-center gap-1" style={{ fontFamily: "var(--font-label)" }}>
              Termin unverbindlich anfragen <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="md:col-span-6 bg-[var(--color-primary-container)] rounded-xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <PlaceholderImage gradient="from-blue-900/60 to-slate-900/80" dark />
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary-fixed)] mb-6 block">volume_up</span>
              <h2 className="text-2xl font-bold text-white mb-2">Kreiz &amp; Quer zu viert</h2>
              <p className="text-sm text-[var(--color-secondary-fixed)] font-semibold uppercase tracking-wider mb-5" style={{ fontFamily: "var(--font-label)" }}>Vollband · Drums · Bass · Gitarre · Gesang</p>
              <p className="text-[var(--color-on-primary-container)] mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Wenn die Tanzfläche brennen soll. Mit Schlagzeug, Bass, Gitarre und zwei Stimmen entfesseln wir den vollen Sound — druckvoll, lebendig und mitreißend. Die volle Energie für Hochzeiten, Bälle, Firmenfeiern und alles, das eine Nacht unvergesslich macht.
              </p>
              <ul className="space-y-3 mb-6" style={{ fontFamily: "var(--font-body)" }}>
                {["Hochzeitsparty & Abendprogramm", "Firmenfeiern & Galaabende", "Bälle & öffentliche Events", "Open Air & Stadtfeste"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-on-primary-container)]">
                    <span className="material-symbols-outlined text-[var(--color-secondary-fixed)] text-base">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="text-[var(--color-secondary-fixed)] font-semibold text-sm hover:text-white transition-colors flex items-center gap-1" style={{ fontFamily: "var(--font-label)" }}>
                Termin unverbindlich anfragen <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="bg-[var(--color-surface)] py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 pt-12">
              <h2 className="text-3xl font-bold text-[var(--color-on-surface)] mb-4 leading-tight">
                Das Kreiz &amp; Quer<br />Versprechen
              </h2>
              <div className="w-12 h-1 bg-[var(--color-secondary)] mb-8" />
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { icon: "graphic_eq", title: "Im Takt des Abends", text: "Wir spielen kein starres Programm. Wir lesen die Energie im Raum und passen das Set spontan an — denn jeder Abend hat seinen eigenen Rhythmus." },
                { icon: "verified", title: "100% Live", text: "Keine Playbacks, kein doppelter Boden. Nur ehrliche Musik von vier Musikern, die das lieben, was sie tun — live gespielt, jedes Mal." },
                { icon: "headphones", title: "Technische Qualität", text: "Professionelle PA, Monitoring und Lichttechnik — wir bringen alles mit und kümmern uns um den reibungslosen Auf- und Abbau." },
                { icon: "handshake", title: "Persönliche Betreuung", text: "Kein Event gleicht dem anderen. Wir nehmen uns Zeit für eure Wünsche — von der ersten Anfrage bis zur letzten Zugabe." },
              ].map(({ icon, title, text }) => (
                <div key={title}>
                  <h3 className="text-xl font-bold text-[var(--color-on-surface)] mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">{icon}</span>
                    {title}
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)]" style={{ fontFamily: "var(--font-body)" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
