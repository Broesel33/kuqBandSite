import SetlistFilter, { type GenreSection } from "@/components/SetlistFilter";
import Link from "next/link";

export const metadata = {
  title: "Setlist – Kreiz & Quer",
  description:
    "Unser Repertoire: Austropop, Pop & Rock, Disco & Funk, Evergreens und aktuelle Charts — alles live.",
};

const GENRES: GenreSection[] = [
  {
    id: "austropop",
    label: "Austropop",
    badgeColor: "",
    songs: [
      { artist: "Rainhard Fendrich", title: "Wien bei Nacht", decade: "80er" },
      { artist: "STS", title: "Irgendwann bleib i dann dort", decade: "80er" },
      { artist: "Wolfgang Ambros", title: "Schifoan", decade: "80er" },
      { artist: "Georg Danzer", title: "Jö schau", decade: "70er" },
      { artist: "Christina Stürmer", title: "Millionen Lichter", decade: "00er" },
      { artist: "Hubert von Goisern", title: "Hiatamadl", decade: "90er" },
      { artist: "Falco", title: "Rock Me Amadeus", decade: "80er" },
      { artist: "Rainhard Fendrich", title: "Strada del Sole", decade: "80er" },
    ],
  },
  {
    id: "disco-funk",
    label: "Disco & Funk",
    badgeColor: "",
    songs: [
      { artist: "Earth, Wind & Fire", title: "September", decade: "70er" },
      { artist: "Sister Sledge", title: "We Are Family", decade: "70er" },
      { artist: "Chic", title: "Le Freak", decade: "70er" },
      { artist: "Kool & The Gang", title: "Celebration", decade: "80er" },
      { artist: "Michael Jackson", title: "Don't Stop 'Til You Get Enough", decade: "80er" },
      { artist: "James Brown", title: "I Got You", decade: "60er" },
    ],
  },
  {
    id: "pop-rock",
    label: "Pop & Rock",
    badgeColor: "",
    songs: [
      { artist: "The Killers", title: "Mr. Brightside", decade: "00er" },
      { artist: "Coldplay", title: "The Scientist", decade: "00er" },
      { artist: "Dua Lipa", title: "Levitating", decade: "20er" },
      { artist: "Ed Sheeran", title: "Shape of You", decade: "10er" },
      { artist: "Bruno Mars", title: "Uptown Funk", decade: "10er" },
      { artist: "Adele", title: "Rolling in the Deep", decade: "10er" },
      { artist: "Amy Winehouse", title: "Valerie", decade: "00er" },
      { artist: "Red Hot Chili Peppers", title: "Under the Bridge", decade: "90er" },
    ],
  },
  {
    id: "evergreens-jazz",
    label: "Evergreens & Jazz",
    badgeColor: "",
    songs: [
      { artist: "Frank Sinatra", title: "New York, New York", decade: "80er" },
      { artist: "Louis Armstrong", title: "What a Wonderful World", decade: "60er" },
      { artist: "Norah Jones", title: "Come Away with Me", decade: "00er" },
      { artist: "Nat King Cole", title: "L-O-V-E", decade: "60er" },
      { artist: "Billie Holiday", title: "The Very Thought of You", decade: "50er" },
    ],
  },
  {
    id: "aktuelle-charts",
    label: "Aktuelle Charts",
    badgeColor: "",
    songs: [
      { artist: "Harry Styles", title: "As It Was", decade: "20er" },
      { artist: "The Weeknd", title: "Blinding Lights", decade: "20er" },
      { artist: "Olivia Rodrigo", title: "Good 4 U", decade: "20er" },
      { artist: "Lizzo", title: "About Damn Time", decade: "20er" },
      { artist: "Sam Smith", title: "Stay with Me", decade: "10er" },
    ],
  },
  {
    id: "walzer",
    label: "Walzer & Tanzmusik",
    badgeColor: "",
    songs: [
      { artist: "Johann Strauß", title: "An der schönen blauen Donau", decade: "Klassik" },
      { artist: "Johann Strauß", title: "Wiener Blut", decade: "Klassik" },
      { artist: "Josef Strauß", title: "Sphärenklänge", decade: "Klassik" },
      { artist: "Carl Michael Ziehrer", title: "Schönfeld-Marsch", decade: "Klassik" },
      { artist: "Trad.", title: "Steirischer", decade: "Volksmusik" },
    ],
  },
];

export default function SetlistPage() {
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
            Repertoire
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
            Setlist
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

      {/* Setlist Section */}
      <section
        aria-labelledby="setlist-heading"
        style={{
          backgroundColor: "var(--color-surface)",
          padding: "4rem 1.5rem 6rem",
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <h2 id="setlist-heading" className="sr-only">
            Songauswahl nach Genre
          </h2>
          <SetlistFilter genres={GENRES} />
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
                transition: "opacity 0.15s",
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
