import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function Startseite() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[640px] flex items-center bg-[var(--color-surface-container-low)] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/band.png"
            alt="Kreiz & Quer live auf der Bühne"
            fill
            className="object-cover opacity-25 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)] via-[var(--color-surface)]/90 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-8 w-full py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-on-surface)] mb-6 leading-tight">
              Der Soundtrack zu{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary-container)]">
                Eurer besten Nacht.
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-[var(--color-on-surface-variant)] mb-10 max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Von intimen Hochzeiten bis zur Firmen-Gala — Kreiz &amp; Quer bringt das Electric Gallery Erlebnis auf jede Bühne.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-primary-container)] transition-colors shadow-[0_10px_30px_rgba(23,28,31,0.08)]"
                style={{ fontFamily: "var(--font-label)" }}
              >
                Jetzt buchen
              </Link>
              <Link
                href="/setlist"
                className="px-8 py-4 rounded-md font-semibold text-[var(--color-secondary)] hover:bg-[var(--color-surface-container)] transition-colors"
                style={{ fontFamily: "var(--font-label)" }}
              >
                Setlist ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen Bento */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Hochzeiten */}
          <div className="md:col-span-8 bg-[var(--color-surface-container-low)] rounded-xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <PlaceholderImage gradient="from-rose-300/30 to-pink-200/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-low)] via-[var(--color-surface-container-low)]/80 to-transparent" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end min-h-[280px]">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)] mb-6">favorite</span>
              <h2 className="text-4xl font-bold text-[var(--color-on-surface)] mb-4">Hochzeiten</h2>
              <p
                className="text-lg text-[var(--color-on-surface-variant)] mb-6 max-w-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Von der ersten Umarmung bis zum letzten Tanz — wir passen uns Eurem Stil an und sorgen dafür, dass die Tanzfläche niemals leer bleibt.
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {["Akustik-Set", "Vollband", "DJ-Service"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-[var(--color-surface-container-highest)] px-3 py-1 rounded-full text-sm text-[var(--color-on-surface)]"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Firmenevents */}
          <div className="md:col-span-4 bg-[var(--color-primary-container)] rounded-xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <PlaceholderImage gradient="from-blue-900/20 to-indigo-900/40" dark />
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-container)]/50 to-[var(--color-primary-container)]" />
            </div>
            <div className="relative z-10 h-full flex flex-col min-h-[280px]">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary-fixed)] mb-6">business_center</span>
              <h2 className="text-3xl font-bold text-[var(--color-on-primary)] mb-4">Firmen&shy;events</h2>
              <p
                className="text-base text-[var(--color-on-primary-container)] mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Professionell, pünktlich und erstklassig. Ob dezentes Hintergrundambiente oder Hauptact — wir liefern genau das.
              </p>
              <Link
                href="/leistungen"
                className="mt-auto self-start text-[var(--color-secondary-fixed)] font-semibold hover:text-white transition-colors flex items-center gap-2"
                style={{ fontFamily: "var(--font-label)" }}
              >
                Mehr erfahren <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Bälle & Partys */}
          <div className="md:col-span-12 bg-[var(--color-surface-container-lowest)] rounded-xl p-10 shadow-[0_20px_60px_rgba(23,28,31,0.04)] border border-[var(--color-outline-variant)]/10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)] mb-6">celebration</span>
              <h2 className="text-4xl font-bold text-[var(--color-on-surface)] mb-4">Bälle &amp; Partys</h2>
              <p
                className="text-lg text-[var(--color-on-surface-variant)] mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Erstklassige Galas verlangen eine Band, die das Timing beherrscht — vom eleganten Dinner-Jazz bis zum explosiven Late-Night-Set.
              </p>
              <ul className="space-y-4 text-[var(--color-on-surface-variant)]" style={{ fontFamily: "var(--font-body)" }}>
                {[
                  "Flexible Setlist durch mehrere Jahrzehnte",
                  "Premium Sound- und Lichttechnik inklusive",
                  "Nahtlose Koordination mit Eventplanern",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
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
        </div>
      </section>

      {/* Versprechen – asymmetrisch */}
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
                { icon: "tune", title: "Anpassungsfähigkeit", text: "Wir spielen kein starres Programm. Wir lesen den Raum, passen das Tempo an und sorgen dafür, dass die Energie immer stimmt." },
                { icon: "verified", title: "Zuverlässigkeit", text: "Professionalität ist unser Maßstab. Pünktliche Ankunft, reibungsloser Aufbau und klare Kommunikation von der Buchung bis zum Abbau." },
                { icon: "music_note", title: "Musikalische Vielfalt", text: "Von Pop und Rock über Funk bis Jazz — unsere Setlist überspannt Jahrzehnte und begeistert jedes Publikum." },
                { icon: "groups", title: "Persönliche Betreuung", text: "Jede Veranstaltung ist einzigartig. Wir nehmen uns Zeit für Eure Wünsche und planen jeden Auftritt individuell." },
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

      {/* Kontakt CTA */}
      <section className="bg-[var(--color-primary-container)] py-24 px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Bereit für Euren Auftritt?</h2>
            <p className="text-[var(--color-on-primary-container)] text-lg" style={{ fontFamily: "var(--font-body)" }}>
              Schreibt uns und wir planen gemeinsam Euren unvergesslichen Abend.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="bg-[var(--color-secondary)] text-white px-10 py-4 rounded-md font-semibold hover:bg-[var(--color-secondary-container)] transition-colors whitespace-nowrap shadow-[0_10px_40px_rgba(0,81,213,0.3)]"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
