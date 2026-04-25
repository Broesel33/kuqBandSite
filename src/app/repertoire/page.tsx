import RepertoireFilter, { type GenreSection } from "@/components/RepertoireFilter";
import Link from "next/link";

export const metadata = {
  title: "Repertoire – Kreiz & Quer",
  description:
    "Unser Repertoire: Austropop, Pop & Rock, Evergreens, aktuelle Charts und Walzer — alles live gespielt.",
};

const GENRES: GenreSection[] = [
  {
    id: "austropop",
    label: "Austropop",
    songs: [
      { title: "Es lebe der Zentralfriedhof", artist: "Wolfgang Ambros", decade: "70er" },
      { title: "Jö schau", artist: "Georg Danzer", decade: "70er" },
      { title: "I Am From Austria", artist: "Rainhard Fendrich", decade: "80er" },
      { title: "Irgendwann bleib i dann dort", artist: "STS", decade: "80er" },
      { title: "Ja, ja, der Alkohol", artist: "EAV", decade: "80er" },
      { title: "Ham kummst", artist: "Seiler & Speer", decade: "10er" },
      { title: "Cordula Grün", artist: "Josh.", decade: "10er" },
      { title: "Danke, gut", artist: "Pizzera & Jaus", decade: "10er" },
      { title: "Hula Palu", artist: "Andreas Gabalier", decade: "10er" },
    ],
  },
  {
    id: "pop-rock",
    label: "Pop & Rock",
    songs: [
      { title: "Satisfaction", artist: "The Rolling Stones", decade: "60er" },
      { title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd", decade: "70er" },
      { title: "Sultans of Swing", artist: "Dire Straits", decade: "70er" },
      { title: "Nothing Else Matters", artist: "Metallica", decade: "90er" },
      { title: "Wonderwall", artist: "Oasis", decade: "90er" },
      { title: "Knocking on Heaven's Door", artist: "Guns N' Roses", decade: "90er" },
      { title: "Creep", artist: "Radiohead", decade: "90er" },
      { title: "It's My Life", artist: "Bon Jovi", decade: "00er" },
      { title: "Holiday", artist: "Green Day", decade: "00er" },
      { title: "Somebody That I Used to Know", artist: "Gotye", decade: "10er" },
    ],
  },
  {
    id: "evergreens",
    label: "Evergreens",
    songs: [
      { title: "Ain't No Sunshine", artist: "Bill Withers", decade: "70er" },
      { title: "Country Roads", artist: "John Denver", decade: "70er" },
      { title: "Father and Son", artist: "Cat Stevens", decade: "70er" },
      { title: "Have You Ever Seen the Rain", artist: "CCR", decade: "70er" },
      { title: "Über den Wolken", artist: "Reinhard Mey", decade: "70er" },
      { title: "Working Class Hero", artist: "John Lennon", decade: "70er" },
      { title: "Free Fallin'", artist: "Tom Petty", decade: "80er" },
      { title: "Live Is Life", artist: "Opus", decade: "80er" },
      { title: "Halleluja", artist: "Cohen / Buckley", decade: "90er" },
      { title: "Tears in Heaven", artist: "Eric Clapton", decade: "90er" },
    ],
  },
  {
    id: "aktuelle-charts",
    label: "Aktuelle Charts",
    songs: [
      { title: "Ein Kompliment", artist: "Sportfreunde Stiller", decade: "00er" },
      { title: "Sail", artist: "AWOLNATION", decade: "10er" },
      { title: "Little Lion Man", artist: "Mumford & Sons", decade: "10er" },
      { title: "Riptide", artist: "Vance Joy", decade: "10er" },
      { title: "Renegades", artist: "X Ambassadors", decade: "10er" },
      { title: "Gewinner", artist: "Clueso", decade: "10er" },
      { title: "Halt dich an mir fest", artist: "Revolverheld", decade: "10er" },
      { title: "Wolke 4", artist: "Philipp Dittberner", decade: "10er" },
    ],
  },
  {
    id: "walzer",
    label: "Walzer & Tanzmusik",
    songs: [
      { title: "Cheek to Cheek", artist: "Fred Astaire", decade: "30er" },
      { title: "La Vie en Rose", artist: "Édith Piaf", decade: "40er" },
      { title: "Tennessee Waltz", artist: "Patti Page", decade: "50er" },
      { title: "Fly Me to the Moon", artist: "Frank Sinatra", decade: "60er" },
      { title: "Moon River", artist: "Henry Mancini", decade: "60er" },
      { title: "Can't Help Falling in Love", artist: "Elvis Presley", decade: "60er" },
      { title: "Feeling Good", artist: "Nina Simone", decade: "60er" },
      { title: "What a Wonderful World", artist: "Louis Armstrong", decade: "60er" },
    ],
  },
];

export default function RepertoirePage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header
        style={{ backgroundColor: "var(--color-navy)" }}
        className="py-20 px-6 md:px-8"
      >
        <div className="max-w-screen-xl mx-auto">
          <p
            style={{
              color: "var(--color-gold)",
              fontFamily: "var(--font-ui)",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Was wir spielen
          </p>
          <h1
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              color: "var(--color-text-on-dark)",
              marginBottom: "1rem",
            }}
          >
            Repertoire
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              color: "var(--color-text-muted-on-dark)",
              maxWidth: "36rem",
              lineHeight: 1.6,
            }}
          >
            Eine Auswahl aus unserem Repertoire — alles live gespielt, alles mit Herzblut.
          </p>
        </div>
      </header>

      {/* Repertoire Section */}
      <section
        aria-labelledby="repertoire-heading"
        style={{
          backgroundColor: "var(--color-surface)",
          padding: "4rem 1.5rem 6rem",
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <h2 id="repertoire-heading" className="sr-only">
            Songauswahl nach Genre
          </h2>
          <RepertoireFilter genres={GENRES} />
        </div>
      </section>

      {/* CTA Box */}
      <section
        aria-labelledby="cta-heading"
        style={{ backgroundColor: "var(--color-warm-gray)", padding: "0 1.5rem 6rem" }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div
            style={{
              backgroundColor: "var(--color-warm-gray-2)",
              borderRadius: "var(--radius-xl)",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              alignItems: "flex-start",
            }}
          >
            <span
              className="material-symbols-outlined"
              aria-hidden="true"
              style={{ fontSize: "2.5rem", color: "var(--color-gold)" }}
            >
              library_music
            </span>
            <div>
              <h2
                id="cta-heading"
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                }}
              >
                Euer Lieblingssong ist nicht dabei?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                Kein Problem. Schreibt uns — wir lernen gerne neue Songs für euren Anlass.
              </p>
            </div>
            <Link
              href="/kontakt"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--color-navy)",
                color: "var(--color-text-on-dark)",
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                padding: "0.75rem 1.75rem",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                minHeight: "44px",
              }}
            >
              Song anfragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
