import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata = {
  title: "Über uns – Kreiz & Quer",
};

const mitglieder = [
  {
    name: "Manu",
    rolle: "Gesang · Rhythmusgitarre · Cajon",
    tag: "Stimme & Taktgeber",
    gradient: "from-blue-100/60 to-indigo-100/40",
    bio: "Manu ist die Stimme von Kreiz & Quer. Tief, warm und voller Ausdruck verleiht er jedem Song eine besondere Note. Drei Instrumente, eine Aufgabe: die Band zusammenhalten und das Publikum mitreißen. Er ist der Taktgeber, das Stimmungsbarometer — und der Erste, der weiß, wann es Zeit ist, das Tempo anzuziehen. Besonders im Austropop fühlt er sich zuhause, dort wo Emotion und Ehrlichkeit im Mittelpunkt stehen.",
    zitat: "Wenn Manu singt, wird es ruhig im Raum. Oder laut auf der Tanzfläche.",
  },
  {
    name: "Robert",
    rolle: "Gesang · E-Gitarre · Cajon",
    tag: "Energie & Druck",
    gradient: "from-blue-700/25 to-slate-800/20",
    bio: "Robert bringt die Energie. Mit seiner E-Gitarre und seiner Stimme sorgt er für Druck, Dynamik und genau den Sound, der unter die Haut geht. Roberts Gitarre redet, wenn Worte nicht reichen — mit einem Instinkt für den perfekten Riff und einer Stimme, die sich durch jeden Saal schneidet. Rock und Pop sind sein Element, und das merkt man bei jedem Auftritt.",
    zitat: "Wenn es richtig abgeht, ist Robert mittendrin.",
  },
  {
    name: "Steph",
    rolle: "Drums · Keyboard",
    tag: "Rückgrat der Band",
    gradient: "from-slate-700/20 to-blue-900/20",
    bio: "Steph ist das Rückgrat der Band. Am Schlagzeug gibt er den Takt vor, am Keyboard sorgt er für Tiefe und Atmosphäre. Links hämmert er den Groove, rechts baut er die Melodie auf. Stephan ist das Schweizer Taschenmesser der Band — unverzichtbar, vielseitig und immer einen Schlag voraus. Präzise, ruhig und immer auf den Punkt.",
    zitat: "Er ist derjenige, der alles zusammenhält – oft unauffällig, aber unverzichtbar.",
  },
  {
    name: "Gabs",
    rolle: "Gesang · Bass",
    tag: "Fundament & Groove",
    gradient: "from-indigo-200/40 to-blue-100/30",
    bio: "Gabs liefert das Fundament. Mit seinem Bass sorgt er für den Groove, mit seiner Stimme für zusätzliche Klangfarbe. Der Bass ist das Geheimnis, das man nicht hört — aber sofort vermisst, wenn er fehlt. Gabs legt das Fundament, auf dem alles steht, und hebt mit seiner Stimme das Ganze noch eine Etage höher. Er verbindet Rhythmus und Harmonie und bringt Stabilität in jeden Song.",
    zitat: "Seine Präsenz ist subtil – aber genau das macht den Unterschied.",
  },
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
            Kreiz &amp; Quer — vier Musiker aus der Steiermark, ein Sound, unzählige unvergessliche Abende.
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
              Vier Persönlichkeiten.<br />
              <span className="text-[var(--color-on-surface-variant)] font-normal">Eine gemeinsame Leidenschaft.</span>
            </h2>
            <div className="space-y-4 text-[var(--color-on-surface-variant)]" style={{ fontFamily: "var(--font-body)" }}>
              <p>
                Kreiz &amp; Quer steht für ehrliche Musik, echte Emotion und unvergessliche Live-Momente. Wir sind Manu, Robert, Steph und Gabs — vier Musiker aus der Steiermark, jeder mit seiner eigenen Handschrift, zusammen mit einem Sound, der verbindet.
              </p>
              <p>
                Was uns ausmacht? Wir spielen nicht einfach ein Programm ab. Wir fühlen die Energie im Raum und passen unser Set spontan an — wann es leise sein muss, wann die Tanzfläche explodieren soll. Jeder Abend ist anders, und genau das macht ihn besonders.
              </p>
              <p>
                Über 200 Auftritte in ganz Österreich — Hochzeiten, Bälle, Firmenfeiern, Partys. Und bei jedem einzelnen davon geben wir alles. Nicht weil wir müssen. Sondern weil wir es lieben.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { zahl: "200+", label: "Auftritte gespielt" },
                { zahl: "200+", label: "Songs im Repertoire" },
                { zahl: "4", label: "Bandmitglieder" },
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mitglieder.map((mitglied) => (
              <div key={mitglied.name} className="bg-[var(--color-surface-container-lowest)] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(23,28,31,0.04)] flex flex-col md:flex-row">
                <div className="h-52 md:h-auto md:w-48 md:min-h-[240px] relative flex-shrink-0">
                  <PlaceholderImage gradient={mitglied.gradient} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-slate-400/30">person</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="text-xl font-bold text-[var(--color-on-surface)]">{mitglied.name}</h3>
                      <span className="text-xs text-[var(--color-secondary)] font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-label)" }}>{mitglied.tag}</span>
                    </div>
                    <p className="text-sm text-[var(--color-secondary)] font-medium mb-4" style={{ fontFamily: "var(--font-body)" }}>{mitglied.rolle}</p>
                    <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{mitglied.bio}</p>
                  </div>
                  <p className="mt-4 text-sm italic text-[var(--color-on-surface-variant)] border-l-2 border-[var(--color-secondary)] pl-3 opacity-75" style={{ fontFamily: "var(--font-body)" }}>
                    {mitglied.zitat}
                  </p>
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
              text: "Kreiz & Quer hat unsere Hochzeit zu etwas gemacht, das wir nie vergessen werden. Die Tanzfläche war die ganze Nacht voll — von Oma bis Trauzeugin haben alle mitgemacht. Danke von Herzen!",
              name: "Lisa & Markus W.",
              event: "Hochzeit, Steiermark, August 2024",
            },
            {
              text: "Wir haben Kreiz & Quer für unsere Betriebsfeier gebucht und sind absolut begeistert. Pünktlich, professionell und ein Auftritt, der unsere Mitarbeiter noch Wochen später beschäftigt hat.",
              name: "Thomas R.",
              event: "Firmenfeier, Graz, November 2024",
            },
            {
              text: "Wir hatten Kreiz & Quer bei unserer Gartentrauung — akustisch, leise, unglaublich stimmungsvoll. Die Gäste haben geweint. Wir auch. Die beste Entscheidung, die wir getroffen haben.",
              name: "Julia & Stefan M.",
              event: "Freie Trauung, Leibnitz, Juni 2024",
            },
            {
              text: "Vom Ja-Wort bis zum letzten Tanz — Kreiz & Quer hat unsere Hochzeit musikalisch komplett begleitet. Jeder Song hat gepasst, die Stimmung war perfekt. Wir können die Band nur weiterempfehlen!",
              name: "Sandra & David K.",
              event: "Hochzeit, Weiz, September 2024",
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
