import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import EventsSektion from "@/components/EventsSektion";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Startseite() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[640px] flex items-center bg-[var(--color-surface-container-low)] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 bottom-0 w-[42%]">
            <Image
              src="/band.png"
              alt="Kreiz & Quer live auf der Bühne"
              fill
              className="object-cover object-top opacity-85"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)] from-55% via-[var(--color-surface)]/60 via-65% to-transparent to-80%" />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-8 w-full py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-on-surface)] mb-6 leading-tight">
              Kreiz &amp; Quer –{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary-container)]">
                Hochzeiten, Bälle &amp; Events.
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-[var(--color-on-surface-variant)] mb-10 max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Vier Musiker aus der Steiermark. Ein Versprechen: euren Abend unvergesslich zu machen — bei Hochzeiten, Bällen, Firmenfeiern und Events in ganz Österreich.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="bg-[var(--color-primary-container)] text-white px-8 py-4 rounded-md font-semibold hover:opacity-90 transition-opacity shadow-[0_10px_30px_rgba(23,28,31,0.15)]"
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
            <div className="flex flex-wrap gap-6 mt-4" style={{ fontFamily: "var(--font-body)" }}>
              <a href="tel:+436802378954" className="flex items-center gap-2 text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors text-sm">
                <span className="material-symbols-outlined text-base text-[var(--color-secondary)]">phone</span>
                +43 680 23 78 95 4
              </a>
              <a href="https://wa.me/436802378954" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors text-sm">
                <WhatsAppIcon className="w-4 h-4 text-[var(--color-secondary)]" />
                WhatsApp
              </a>
              <a href="mailto:info@kreizundquer.com" className="flex items-center gap-2 text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)] transition-colors text-sm">
                <span className="material-symbols-outlined text-base text-[var(--color-secondary)]">mail</span>
                info@kreizundquer.com
              </a>
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
              <PlaceholderImage gradient="from-blue-100/60 to-indigo-100/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-low)] via-[var(--color-surface-container-low)]/80 to-transparent" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end min-h-[280px]">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)] mb-6">favorite</span>
              <h2 className="text-4xl font-bold text-[var(--color-on-surface)] mb-4">Hochzeiten</h2>
              <p className="text-lg text-[var(--color-on-surface-variant)] mb-6 max-w-lg" style={{ fontFamily: "var(--font-body)" }}>
                Vom gefühlvollen Ja-Wort bis zur ausgelassenen Party — wir begleiten euren großen Tag mit Herz, Feingefühl und genau der Musik, die den Moment unsterblich macht.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-auto">
                {["Akustik-Set", "Vollband", "Individuelle Songwünsche"].map((tag) => (
                  <span key={tag} className="bg-[var(--color-surface-container-highest)] px-3 py-1 rounded-full text-sm text-[var(--color-on-surface)]" style={{ fontFamily: "var(--font-label)" }}>{tag}</span>
                ))}
                <Link href="/kontakt" className="ml-auto text-[var(--color-secondary)] font-semibold text-sm hover:underline flex items-center gap-1 whitespace-nowrap" style={{ fontFamily: "var(--font-label)" }}>
                  Termin unverbindlich anfragen <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Firmenevents */}
          <div className="md:col-span-4 bg-[var(--color-primary-container)] rounded-xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <PlaceholderImage gradient="from-blue-900/20 to-slate-900/40" dark />
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-container)]/50 to-[var(--color-primary-container)]" />
            </div>
            <div className="relative z-10 h-full flex flex-col min-h-[280px]">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary-fixed)] mb-6">business_center</span>
              <h2 className="text-3xl font-bold text-[var(--color-on-primary)] mb-4">Firmenfeiern</h2>
              <p className="text-base text-[var(--color-on-primary-container)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Professionell auf der Bühne, flexibel im Programm. Vom ruhigen Empfangsambiente bis zum mitreißenden Hauptact — wir passen uns eurem Event an.
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
            <div className="relative z-10 flex flex-col min-h-[280px] justify-end">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)] mb-6">celebration</span>
              <h2 className="text-3xl font-bold text-[var(--color-on-surface)] mb-4">Bälle</h2>
              <p className="text-[var(--color-on-surface-variant)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Eleganter Walzer, zeitlose Evergreens — wir wissen, wann Eleganz gefragt ist und wann die Tanzfläche explodieren soll.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {["Walzer & Tanzmusik", "Mitternachtseinlage", "Ballthema-Abstimmung"].map((tag) => (
                  <span key={tag} className="bg-[var(--color-surface-container-highest)] px-3 py-1 rounded-full text-sm text-[var(--color-on-surface)]" style={{ fontFamily: "var(--font-label)" }}>{tag}</span>
                ))}
                <Link href="/kontakt" className="mt-2 text-[var(--color-secondary)] font-semibold text-sm hover:underline flex items-center gap-1 whitespace-nowrap w-full" style={{ fontFamily: "var(--font-label)" }}>
                  Termin unverbindlich anfragen <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Events & Veranstaltungen */}
          <div className="md:col-span-6 bg-[var(--color-surface-container-low)] rounded-xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
              <PlaceholderImage gradient="from-blue-200/40 to-slate-200/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-low)] via-[var(--color-surface-container-low)]/85 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col min-h-[280px] justify-end">
              <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)] mb-6">campaign</span>
              <h2 className="text-3xl font-bold text-[var(--color-on-surface)] mb-4">Events &amp; Veranstaltungen</h2>
              <p className="text-[var(--color-on-surface-variant)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Eröffnungen, Sommerfeste, Stadtfeste, Vereinsfeiern — wenn ein Anlass Livemusik verdient, sind wir dabei.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {["Eröffnungen", "Sommerfeste", "Stadtfeste", "Vereinsfeiern"].map((tag) => (
                  <span key={tag} className="bg-[var(--color-surface-container-highest)] px-3 py-1 rounded-full text-sm text-[var(--color-on-surface)]" style={{ fontFamily: "var(--font-label)" }}>{tag}</span>
                ))}
                <Link href="/kontakt" className="mt-2 text-[var(--color-secondary)] font-semibold text-sm hover:underline flex items-center gap-1 whitespace-nowrap w-full" style={{ fontFamily: "var(--font-label)" }}>
                  Termin unverbindlich anfragen <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
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
                Das Kreiz &amp; Quer<br />Versprechen
              </h2>
              <div className="w-12 h-1 bg-[var(--color-secondary)] mb-8" />
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { icon: "graphic_eq", title: "Im Takt des Abends", text: "Wir spielen kein starres Programm. Wir lesen die Energie im Raum — und passen unser Set spontan an. Jeder Abend ist anders, und genau das macht ihn besonders." },
                { icon: "verified", title: "100% Live", text: "Keine Playbacks. Kein Netz. Kein doppelter Boden. Nur ehrliche Musik von Manu, Robert, Steph und Gabs — live gespielt, jedes Mal." },
                { icon: "music_note", title: "Austropop bis Charts", text: "Von Austropop-Klassikern über Rock und Pop bis zu aktuellen Hits — wir verbinden Generationen und sorgen dafür, dass jeder seinen Moment hat." },
                { icon: "groups", title: "Persönliche Betreuung", text: "Kein Event gleicht dem anderen. Wir nehmen uns Zeit für eure Wünsche und gestalten den Abend gemeinsam mit euch — von der ersten Anfrage bis zur letzten Zugabe." },
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

      <EventsSektion />

      {/* Kontakt CTA */}
      <section className="bg-[var(--color-primary-container)] py-24 px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Euer nächster Abend verdient die beste Musik.</h2>
              <p className="text-[var(--color-on-primary-container)] text-lg" style={{ fontFamily: "var(--font-body)" }}>
                Schreibt uns unverbindlich — wir melden uns innerhalb von 24 Stunden zurück und besprechen alles persönlich.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="bg-[var(--color-secondary)] text-white px-10 py-4 rounded-md font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shadow-[0_10px_40px_rgba(0,81,213,0.3)]"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Jetzt anfragen
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="tel:+436802378954"
              className="flex items-center gap-4 bg-white/15 hover:bg-white/25 border border-white/20 transition-colors rounded-xl px-6 py-5"
            >
              <span className="material-symbols-outlined text-3xl text-[var(--color-secondary-fixed)]">phone</span>
              <div>
                <p className="text-xs text-[var(--color-on-primary-container)] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-label)" }}>Anrufen</p>
                <p className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-body)" }}>+43 680 23 78 95 4</p>
              </div>
            </a>
            <a
              href="https://wa.me/436802378954"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/15 hover:bg-white/25 border border-white/20 transition-colors rounded-xl px-6 py-5"
            >
              <WhatsAppIcon className="w-8 h-8 text-[var(--color-secondary-fixed)]" />
              <div>
                <p className="text-xs text-[var(--color-on-primary-container)] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-label)" }}>WhatsApp</p>
                <p className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-body)" }}>+43 680 23 78 95 4</p>
              </div>
            </a>
            <a
              href="mailto:info@kreizundquer.com"
              className="flex items-center gap-4 bg-white/15 hover:bg-white/25 border border-white/20 transition-colors rounded-xl px-6 py-5"
            >
              <span className="material-symbols-outlined text-3xl text-[var(--color-secondary-fixed)]">mail</span>
              <div>
                <p className="text-xs text-[var(--color-on-primary-container)] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-label)" }}>Schreiben</p>
                <p className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-body)" }}>info@kreizundquer.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
