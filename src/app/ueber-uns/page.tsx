import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata = {
  title: "Über uns – Kreiz & Quer",
};

const mitglieder = [
  { name: "Anna Berger", rolle: "Gesang & Gitarre", seit: "Gründungsmitglied", gradient: "from-rose-300/40 to-pink-200/30" },
  { name: "Markus Huber", rolle: "Gitarre & Backing Vocals", seit: "Gründungsmitglied", gradient: "from-blue-400/40 to-indigo-300/30" },
  { name: "Stefan Gruber", rolle: "Bass", seit: "Seit 2019", gradient: "from-amber-400/40 to-orange-300/30" },
  { name: "Lisa Maier", rolle: "Keys & Synthesizer", seit: "Seit 2020", gradient: "from-violet-400/40 to-purple-300/30" },
  { name: "Thomas Weiß", rolle: "Schlagzeug", seit: "Seit 2021", gradient: "from-emerald-400/40 to-teal-300/30" },
];

export default function UeberUns() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[var(--color-primary-container)] py-20 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 h-full w-1/3 bg-gradient-to-l from-[var(--color-secondary)]/10 to-transparent" />
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <p className="text-[var(--color-secondary-fixed)] font-semibold uppercase text-[11px] tracking-widest mb-4" style={{ fontFamily: "var(--font-label)" }}>
            Die Band
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Über uns</h1>
          <p className="text-xl text-[var(--color-on-primary-container)] mt-4 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
            Kreiz &amp; Quer — fünf Musiker, ein Sound, unzählige unvergessliche Abende.
          </p>
        </div>
      </div>

      {/* Story – asymmetrisch */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/band.png"
              alt="Kreiz & Quer – Bandphoto"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[var(--color-secondary)] font-semibold uppercase text-[11px] tracking-widest mb-6" style={{ fontFamily: "var(--font-label)" }}>
              Unsere Geschichte
            </p>
            <h2 className="text-4xl font-bold text-[var(--color-on-surface)] mb-6 leading-tight">
              Musik, die verbindet.<br />
              <span className="text-[var(--color-on-surface-variant)] font-normal">Seit 2017.</span>
            </h2>
            <div className="space-y-4 text-[var(--color-on-surface-variant)]" style={{ fontFamily: "var(--font-body)" }}>
              <p>
                Kreiz &amp; Quer entstand 2017 aus einer gemeinsamen Leidenschaft für Live-Musik und dem Wunsch, Partys und Events in etwas Besonderes zu verwandeln. Was als Garagen-Jam begann, entwickelte sich schnell zu einer der gefragtesten Livebands der Region.
              </p>
              <p>
                Unser Name ist Programm: Wir spielen quer durch alle Stile und Epochen — von den 60ern bis zu aktuellen Charts, von Jazz über Funk bis hin zu Rock und Pop. Dabei verlieren wir nie unseren eigenen Bandklang.
              </p>
              <p>
                In den letzten Jahren haben wir über 300 Veranstaltungen gespielt — Hochzeiten, Firmenfeiern, Stadtfeste, Bälle und private Partys. Jedes Event ist für uns einzigartig.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { zahl: "300+", label: "Events gespielt" },
                { zahl: "8", label: "Jahre Erfahrung" },
                { zahl: "5", label: "Bandmitglieder" },
              ].map(({ zahl, label }) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-[var(--color-secondary)]">{zahl}</p>
                  <p className="text-sm text-[var(--color-on-surface-variant)] mt-1" style={{ fontFamily: "var(--font-body)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bandmitglieder */}
      <section className="bg-[var(--color-surface-container-low)] py-24 px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[var(--color-secondary)] font-semibold uppercase text-[11px] tracking-widest mb-4" style={{ fontFamily: "var(--font-label)" }}>
                Die Crew
              </p>
              <h2 className="text-4xl font-bold text-[var(--color-on-surface)]">Bandmitglieder</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {mitglieder.map((mitglied) => (
              <div key={mitglied.name} className="bg-[var(--color-surface-container-lowest)] rounded-xl overflow-hidden group shadow-[0_4px_20px_rgba(23,28,31,0.04)]">
                <div className="h-48 relative">
                  <PlaceholderImage gradient={mitglied.gradient} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-5xl text-slate-400/30">person</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[var(--color-on-surface)]">{mitglied.name}</h3>
                  <p className="text-sm text-[var(--color-secondary)] font-medium mt-0.5" style={{ fontFamily: "var(--font-body)" }}>{mitglied.rolle}</p>
                  <p className="text-xs text-[var(--color-on-surface-variant)] mt-1 opacity-60" style={{ fontFamily: "var(--font-label)" }}>{mitglied.seit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-24">
        <div className="mb-12">
          <p className="text-[var(--color-secondary)] font-semibold uppercase text-[11px] tracking-widest mb-4" style={{ fontFamily: "var(--font-label)" }}>
            Was Kunden sagen
          </p>
          <h2 className="text-4xl font-bold text-[var(--color-on-surface)]">Stimmen</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              text: "Kreiz & Quer hat unsere Hochzeit zu einem absoluten Traumabend gemacht. Die Tanzfläche war die ganze Nacht voll — alle Gäste waren begeistert!",
              name: "Sarah & Tobias M.",
              event: "Hochzeit, Juni 2024",
            },
            {
              text: "Professionell von Anfang an. Perfekte Vorbereitung, pünktlich vor Ort und ein Auftritt, der unsere Gäste zum Staunen gebracht hat.",
              name: "Andrea K.",
              event: "Firmenevent, März 2024",
            },
            {
              text: "Der Silvesterball war ein voller Erfolg — maßgeblich dank Kreiz & Quer. Wir buchen die Band definitiv wieder!",
              name: "Organisationsteam",
              event: "Silvesterball, Dezember 2023",
            },
          ].map(({ text, name, event }) => (
            <div key={name} className="bg-[var(--color-surface-container-lowest)] rounded-xl p-8 shadow-[0_4px_20px_rgba(23,28,31,0.04)] border border-[var(--color-outline-variant)]/10">
              <span className="material-symbols-outlined text-3xl text-[var(--color-secondary)] mb-4 block">format_quote</span>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {text}
              </p>
              <div className="mt-6 pt-4 border-t border-[var(--color-outline-variant)]/20">
                <p className="font-bold text-[var(--color-on-surface)] text-sm">{name}</p>
                <p className="text-xs text-[var(--color-on-surface-variant)] mt-0.5" style={{ fontFamily: "var(--font-label)" }}>{event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
