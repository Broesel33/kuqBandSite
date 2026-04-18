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
            Vom intimen Akustik-Set bis zur vollausgestatteten Gala-Band — wir haben das passende Paket für jeden Anlass.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Hochzeiten – groß */}
          <div className="md:col-span-8 bg-[var(--color-surface-container-low)] rounded-xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <PlaceholderImage gradient="from-rose-300/30 to-pink-200/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-low)] via-[var(--color-surface-container-low)]/80 to-transparent" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end min-h-[320px]">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)] mb-6">favorite</span>
              <h2 className="text-4xl font-bold text-[var(--color-on-surface)] mb-4">Hochzeiten</h2>
              <p className="text-lg text-[var(--color-on-surface-variant)] mb-6 max-w-lg" style={{ fontFamily: "var(--font-body)" }}>
                Kuratierte Momente vom ersten Tanz bis zum letzten Encore. Wir passen uns Eurem Stil an — ob romantisch-klassisch oder modern-energetisch.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Akustik-Empfang", "Vollband", "DJ-Service", "Erste-Tanz-Song", "Wunsch-Setlist"].map((tag) => (
                  <span key={tag} className="bg-[var(--color-surface-container-highest)] px-3 py-1 rounded-full text-sm" style={{ fontFamily: "var(--font-label)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Firmenevents – schmal */}
          <div className="md:col-span-4 bg-[var(--color-primary-container)] rounded-xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <PlaceholderImage gradient="from-blue-900/20 to-indigo-900/40" dark />
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-container)]/50 to-[var(--color-primary-container)]" />
            </div>
            <div className="relative z-10 h-full flex flex-col min-h-[320px]">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary-fixed)] mb-6">business_center</span>
              <h2 className="text-3xl font-bold text-[var(--color-on-primary)] mb-4">Firmenevents</h2>
              <p className="text-base text-[var(--color-on-primary-container)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Professionell, pünktlich und erstklassig. Hintergrundambiente oder Hauptact — ganz nach Eurem Bedarf.
              </p>
              <Link href="/kontakt" className="mt-auto self-start text-[var(--color-secondary-fixed)] font-semibold hover:text-white transition-colors flex items-center gap-2" style={{ fontFamily: "var(--font-label)" }}>
                Anfragen <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Bälle & Partys – breit */}
          <div className="md:col-span-12 bg-[var(--color-surface-container-lowest)] rounded-xl p-10 shadow-[0_20px_60px_rgba(23,28,31,0.04)] border border-[var(--color-outline-variant)]/10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)] mb-6">celebration</span>
              <h2 className="text-4xl font-bold text-[var(--color-on-surface)] mb-4">Bälle &amp; Partys</h2>
              <p className="text-lg text-[var(--color-on-surface-variant)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Erstklassige Galas verlangen eine Band, die das Timing beherrscht. Vom eleganten Dinner-Jazz bis zum explosiven Late-Night-Set — wir bauen Spannung auf und lösen sie perfekt auf.
              </p>
              <ul className="space-y-4" style={{ fontFamily: "var(--font-body)" }}>
                {[
                  "Flexible Setlist durch mehrere Jahrzehnte",
                  "Premium Sound- und Lichttechnik inklusive",
                  "Nahtlose Koordination mit Eventplanern",
                  "Moderation auf Wunsch",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[var(--color-on-surface-variant)]">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] text-xl">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 h-64 md:h-96 w-full rounded-lg overflow-hidden relative">
              <PlaceholderImage gradient="from-violet-400/40 to-blue-600/30" />
            </div>
          </div>

          {/* Akustik-Set & Open Air – zwei halbe */}
          <div className="md:col-span-6 bg-[var(--color-surface-container-low)] rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <PlaceholderImage gradient="from-amber-300/30 to-yellow-200/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-low)] to-transparent opacity-80" />
            </div>
            <div className="relative z-10 min-h-[200px] flex flex-col justify-end">
              <span className="material-symbols-outlined text-3xl text-[var(--color-secondary)] mb-4">acoustic_guitar</span>
              <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mb-3">Akustik-Set</h2>
              <p className="text-[var(--color-on-surface-variant)]" style={{ fontFamily: "var(--font-body)" }}>
                Intim und unverstärkt — perfekt für Empfänge, Sektempfänge oder kleine Feiern.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 bg-[var(--color-surface-container-low)] rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <PlaceholderImage gradient="from-sky-400/30 to-cyan-300/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-low)] to-transparent opacity-80" />
            </div>
            <div className="relative z-10 min-h-[200px] flex flex-col justify-end">
              <span className="material-symbols-outlined text-3xl text-[var(--color-secondary)] mb-4">outdoor_garden</span>
              <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mb-3">Open Air</h2>
              <p className="text-[var(--color-on-surface-variant)]" style={{ fontFamily: "var(--font-body)" }}>
                Stadtfeste, Sommerpartys und Freiluftkonzerte — wir bringen die Energie auch unter freiem Himmel.
              </p>
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
                Das Electric Gallery<br />Versprechen
              </h2>
              <div className="w-12 h-1 bg-[var(--color-secondary)] mb-8" />
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { icon: "tune", title: "Anpassungsfähigkeit", text: "Wir spielen kein starres Programm. Wir lesen den Raum und passen uns an." },
                { icon: "verified", title: "Zuverlässigkeit", text: "Pünktlich, professionell und klare Kommunikation — von der Buchung bis zum Abbau." },
                { icon: "headphones", title: "Technische Qualität", text: "Professionelle PA, Monitoring und Lichttechnik — wir bringen alles mit." },
                { icon: "handshake", title: "Faire Preise", text: "Transparente Angebote ohne versteckte Kosten. Auf Anfrage erstellen wir ein individuelles Angebot." },
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
