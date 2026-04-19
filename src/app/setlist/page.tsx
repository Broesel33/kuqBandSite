export const metadata = {
  title: "Setlist – Kreiz & Quer",
};

const genres = [
  {
    name: "Austropop",
    color: "bg-red-500/10 text-red-600",
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
    name: "Pop & Rock",
    color: "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
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
    name: "Disco & Funk",
    color: "bg-amber-500/10 text-amber-600",
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
    name: "Evergreens & Jazz",
    color: "bg-emerald-500/10 text-emerald-600",
    songs: [
      { artist: "Frank Sinatra", title: "New York, New York", decade: "80er" },
      { artist: "Louis Armstrong", title: "What a Wonderful World", decade: "60er" },
      { artist: "Norah Jones", title: "Come Away with Me", decade: "00er" },
      { artist: "Nat King Cole", title: "L-O-V-E", decade: "60er" },
      { artist: "Billie Holiday", title: "The Very Thought of You", decade: "50er" },
    ],
  },
  {
    name: "Aktuelle Charts",
    color: "bg-violet-500/10 text-violet-600",
    songs: [
      { artist: "Harry Styles", title: "As It Was", decade: "20er" },
      { artist: "The Weeknd", title: "Blinding Lights", decade: "20er" },
      { artist: "Olivia Rodrigo", title: "Good 4 U", decade: "20er" },
      { artist: "Lizzo", title: "About Damn Time", decade: "20er" },
      { artist: "Sam Smith", title: "Stay with Me", decade: "10er" },
    ],
  },
];

export default function Setlist() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[var(--color-primary-container)] py-20 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[var(--color-secondary)]/10 to-transparent" />
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <p className="text-[var(--color-secondary-fixed)] font-semibold uppercase text-[11px] tracking-widest mb-4" style={{ fontFamily: "var(--font-label)" }}>
            Repertoire
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Setlist</h1>
          <p className="text-xl text-[var(--color-on-primary-container)] mt-4 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
            Eine Auswahl aus unserem Repertoire — von Austropop-Klassikern über Rock-Hits bis zu aktuellen Charts. Alles live gespielt, alles mit Herzblut. Und habt ihr einen besonderen Wunsch? Fragt einfach.
          </p>
        </div>
      </div>

      {/* Setlist */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {genres.map((genre) => (
            <div key={genre.name}>
              <div className="flex items-center gap-3 mb-8">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${genre.color}`} style={{ fontFamily: "var(--font-label)" }}>
                  {genre.name}
                </span>
                <div className="flex-1 h-px bg-[var(--color-outline-variant)]/20" />
              </div>
              <ul className="space-y-6">
                {genre.songs.map((song) => (
                  <li key={`${song.artist}-${song.title}`} className="flex items-baseline gap-6">
                    <span
                      className="w-10 shrink-0 text-xs text-[var(--color-on-surface-variant)] opacity-60"
                      style={{ fontFamily: "var(--font-label)" }}
                    >
                      {song.decade}
                    </span>
                    <div>
                      <p className="text-lg font-bold text-[var(--color-on-surface)]">{song.title}</p>
                      <p className="text-sm text-[var(--color-on-surface-variant)] mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                        {song.artist}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[var(--color-surface-container-low)] rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
          <span className="material-symbols-outlined text-4xl text-[var(--color-secondary)]">library_music</span>
          <div>
            <h3 className="text-xl font-bold text-[var(--color-on-surface)]">Euer Lieblingssong ist nicht dabei?</h3>
            <p className="text-[var(--color-on-surface-variant)] mt-1" style={{ fontFamily: "var(--font-body)" }}>
              Kein Problem. Schreibt uns — wir lernen gerne neue Songs für euren Anlass. Kein Wunsch ist zu groß, kein Song zu klein.
            </p>
          </div>
          <a
            href="/kontakt"
            className="shrink-0 bg-[var(--color-secondary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-secondary-container)] transition-colors ml-auto"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Anfragen
          </a>
        </div>
      </section>
    </div>
  );
}
