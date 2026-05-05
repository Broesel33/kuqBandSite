import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "FAQ – Häufige Fragen zur Buchung | Kreiz & Quer Live-Band",
  description:
    "Alle Antworten rund um Buchung, Preise, Equipment, Anreise und Ablauf — Kreiz & Quer, deine Live-Band aus der Steiermark.",
  alternates: { canonical: "https://www.kreizundquer.at/faq" },
};

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqKategorie {
  id: string;
  icon: string;
  title: string;
  items: FaqItem[];
}

const kategorien: FaqKategorie[] = [
  {
    id: "buchung",
    icon: "calendar_month",
    title: "Buchung & Ablauf",
    items: [
      {
        question: "Wie läuft die Buchung ab?",
        answer:
          "Ganz entspannt: Du schreibst uns über das Kontaktformular oder per E-Mail — wir melden uns innerhalb von 24 Stunden. Wir klären in einem kurzen Gespräch (telefonisch oder per Mail) alle Details: Datum, Location, gewünschte Besetzung, Programmlänge und deine Wünsche. Danach bekommst du ein unverbindliches Angebot. Wenn alles passt, fixieren wir den Termin mit einem Buchungsvertrag.",
      },
      {
        question: "Wie weit im Voraus sollte ich buchen?",
        answer:
          "Für Hochzeiten empfehlen wir eine Buchung mindestens 6–12 Monate im Voraus — beliebte Sommerwochenenden sind oft früh vergeben. Für Firmenfeiern, Bälle oder Partys reichen in der Regel 2–4 Monate. Für kurzfristige Anfragen gilt: einfach fragen — manchmal klappt es auch mit wenig Vorlauf!",
      },
      {
        question: "Kann ich einen Termin provisorisch reservieren?",
        answer:
          "Ja. Wenn du noch nicht sicher bist, können wir dir deinen Wunschtermin für eine kurze Zeit freihalten — einfach in der Anfrage vermerken. So hast du Zeit für deine Planung, ohne dass dir der Termin wegschnappt.",
      },
      {
        question: "Was passiert, wenn ich stornieren muss?",
        answer:
          "Stornierungsbedingungen regeln wir individuell im Buchungsvertrag. Generell gilt: je kurzfristiger die Absage, desto höher der vereinbarte Stornierungsanteil — das ist notwendig, weil wir den Termin für andere nicht mehr anbieten konnten. Bitte sprich uns bei unvorhergesehenen Situationen so früh wie möglich an — gemeinsam finden wir immer eine faire Lösung.",
      },
    ],
  },
  {
    id: "programm",
    icon: "music_note",
    title: "Programm & Musik",
    items: [
      {
        question: "Was für Musik spielt ihr?",
        answer:
          "Unser Repertoire reicht von Austropop-Klassikern über Rock und Pop der letzten Jahrzehnte bis hin zu aktuellen Chart-Hits. Wir verbinden Generationen auf der Tanzfläche — von Wolfgang Ambros bis Ed Sheeran, von Die Toten Hosen bis Taylor Swift. Eine genaue Übersicht findest du auf unserer Repertoire-Seite.",
      },
      {
        question: "Kann ich Musikwünsche äußern?",
        answer:
          "Unbedingt! Wir lesen die Stimmung im Raum und passen unser Set spontan an. Du kannst uns vor dem Event eine Wunschliste schicken, und auch auf Zuruf während des Auftritts reagieren wir gerne — solange der Song in unserem Repertoire ist (oder wir ihn rechtzeitig einüben können).",
      },
      {
        question: "Gibt es Songs, die ihr nicht spielt?",
        answer:
          "Wir haben ein stetig wachsendes Repertoire — was wir aktuell nicht dabei haben, können wir bei ausreichend Vorlaufzeit oft noch einstudieren. Schick uns einfach deine Wunschliste, und wir sagen dir ehrlich, was machbar ist.",
      },
      {
        question: "Spielt ihr Walzer für Bälle?",
        answer:
          "Ja, auf jeden Fall. Auf Bällen und Gala-Veranstaltungen spielen wir klassische Tanzmusik, Walzer und zeitlose Evergreens — und wissen, wann Eleganz gefragt ist und wann die Tanzfläche zum Kochen gebracht werden soll.",
      },
      {
        question: "Spielt ihr auch Zeremonien- oder Hintergrundmusik?",
        answer:
          "Ja. Für Hochzeiten bieten wir neben dem Party-Programm auch Musik für den Einzug, die Zeremonie, den Empfang und das Dinner an — akustisch und stimmungsvoll. Unser Duo ist besonders für leise, intime Momente ideal.",
      },
    ],
  },
  {
    id: "besetzung",
    icon: "groups",
    title: "Besetzung & Band",
    items: [
      {
        question: "Wie viele Musiker seid ihr?",
        answer:
          "Als Vollband sind wir zu viert: Manu (Gesang & Rhythmus-Gitarre), Robert (Gesang & E-Gitarre), Steph (Schlagzeug & Keyboard) und Gabs (Bass & Background Vocals). Für kleinere Events oder intimere Atmosphären bieten wir auch ein Duo-Konzept an.",
      },
      {
        question: "Was ist die Duo-Option?",
        answer:
          "Das Duo besteht aus Gesang und akustischer Gitarre — perfekt für Empfänge, Hintergrundmusik, intime Feiern oder Momente, in denen Musik berühren soll, ohne zu überwältigen. Das Setup ist kompakt und auch für kleinere Locations ideal.",
      },
      {
        question: "Was passiert, wenn ein Bandmitglied ausfällt?",
        answer:
          "Wir haben über die Jahre ein Netzwerk an versierten Ersatz-Musikern aufgebaut. Im unwahrscheinlichen Fall eines kurzfristigen Ausfalls sorgen wir dafür, dass dein Event in vollem Umfang stattfindet — du wirst es kaum bemerken. Selbstverständlich informieren wir dich in diesem Fall.",
      },
      {
        question: "Seit wann gibt es Kreiz & Quer?",
        answer:
          "Kreiz & Quer wurde 2014 in der Steiermark gegründet. Seitdem haben wir auf Hunderten von Hochzeiten, Bällen, Firmenfeiern und Events in ganz Österreich gespielt.",
      },
    ],
  },
  {
    id: "technik",
    icon: "speaker",
    title: "Technik & Equipment",
    items: [
      {
        question: "Bringt ihr euer eigenes Equipment mit?",
        answer:
          "Ja, komplett. Wir bringen unser volles PA-System (Lautsprecher, Mischpult, Mikrofone), Instrumente und professionelles Licht-Setup mit. Du musst dir um Technik keine Gedanken machen — wir kümmern uns um alles.",
      },
      {
        question: "Wie viel Platz braucht ihr für die Bühne?",
        answer:
          "Als Vollband benötigen wir mindestens ca. 4 × 5 Meter Bühnenraum. Für das Duo reichen ca. 2 × 3 Meter. Wenn du unsicher bist, ob deine Location passt, schick uns einfach die Maße — wir schauen uns das an und finden eine Lösung.",
      },
      {
        question: "Wie lange dauert Auf- und Abbau?",
        answer:
          "Für die Vollband planen wir ca. 2–3 Stunden für den Aufbau und Soundcheck ein. Der Abbau dauert ca. 1–1,5 Stunden. Bitte berücksichtige das bei der Planung der Location-Verfügbarkeit — oder sprich uns an, wir koordinieren das gerne direkt mit deiner Location.",
      },
      {
        question: "Könnt ihr auch outdoor spielen?",
        answer:
          "Ja. Wir sind sowohl für Indoor- als auch Outdoor-Events ausgerüstet. Bei Open-Air-Veranstaltungen benötigen wir einen witterungsgeschützten Bereich für das Equipment (Überdachung). Details klären wir individuell.",
      },
    ],
  },
  {
    id: "anreise",
    icon: "location_on",
    title: "Anreise & Region",
    items: [
      {
        question: "Wo spielt ihr auf?",
        answer:
          "Wir kommen aus der Steiermark und spielen österreichweit — von Wien bis Vorarlberg. Auf Anfrage reisen wir auch nach Deutschland, in die Schweiz oder nach Südtirol.",
      },
      {
        question: "Verrechnet ihr Fahrtkosten?",
        answer:
          "Anreisekosten werden ab einem gewissen Radius zum Bandstandort verrechnet — das variiert je nach Event und Entfernung. In unserem Angebot ist die Anreisepauschale immer transparent ausgewiesen, damit du keine bösen Überraschungen erlebst.",
      },
    ],
  },
  {
    id: "preise",
    icon: "euro",
    title: "Preise & Konditionen",
    items: [
      {
        question: "Was kostet eine Buchung?",
        answer:
          "Der Preis hängt von mehreren Faktoren ab: Besetzung (Duo oder Vollband), Spieldauer, Entfernung und gewünschtem Programm. Unsere Pakete starten bereits im niedrigen vierstelligen Bereich. Wir erstellen dir auf Anfrage ein unverbindliches, individuelles Angebot — ohne verstecktes Kleingedrucktes.",
      },
      {
        question: "Was ist im Preis enthalten?",
        answer:
          "Im Angebot enthalten sind in der Regel: alle Musiker, vollständiges Equipment inkl. PA und Licht, Soundcheck, das vereinbarte Programm sowie An- und Abfahrt (je nach Distanz). Eventuelle Zusatzleistungen wie ein besonders langer Aufbau, zusätzliche Technik oder außergewöhnliche Reisedistanzen werden separat ausgewiesen.",
      },
      {
        question: "Gibt es Pakete oder fixe Preislisten?",
        answer:
          "Wir arbeiten bewusst ohne starre Pakete, weil kein Event dem anderen gleicht. Statt eines Einheitspreises bekommst du ein Angebot, das wirklich zu deiner Feier passt. Schreib uns einfach mit den groben Eckdaten — wir melden uns schnell.",
      },
      {
        question: "Wie wird bezahlt?",
        answer:
          "Nach Buchungsbestätigung wird üblicherweise eine Anzahlung fällig, der Restbetrag vor oder nach dem Event (je nach Vereinbarung). Wir stellen eine ordentliche Rechnung aus. Details klären wir immer individuell und transparent.",
      },
    ],
  },
];

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: kategorien.flatMap((kat) =>
    kat.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />

      {/* Page-Header */}
      <div style={{ background: "var(--color-navy)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <p
            aria-hidden="true"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              fontFamily: "var(--font-ui)",
              marginBottom: "0.75rem",
            }}
          >
            Häufige Fragen
          </p>
          <h1
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--color-text-on-dark)",
              marginBottom: "1rem",
            }}
          >
            FAQ
          </h1>
          <p
            style={{
              color: "var(--color-text-muted-on-dark)",
              fontFamily: "var(--font-body)",
              fontSize: "1.25rem",
              maxWidth: "640px",
              lineHeight: 1.6,
            }}
          >
            Alles rund um Buchung, Programm, Technik und Preise — damit du bestens
            vorbereitet bist.
          </p>
        </div>
      </div>

      {/* FAQ-Kategorien */}
      <section
        aria-label="Häufige Fragen"
        style={{ background: "var(--color-surface)", padding: "5rem 0" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          {kategorien.map((kat, katIdx) => (
            <ScrollReveal key={kat.id} delay={katIdx * 40}>
              <div
                style={{
                  marginBottom: "3.5rem",
                }}
              >
                {/* Kategorie-Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                    paddingBottom: "0.875rem",
                    borderBottom: "2px solid var(--color-warm-gray-2)",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--color-gold-text)",
                    }}
                  >
                    {kat.icon}
                  </span>
                  <h2
                    id={`kat-${kat.id}`}
                    style={{
                      fontFamily: "var(--font-headline)",
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                    }}
                  >
                    {kat.title}
                  </h2>
                </div>

                {/* FAQ-Items als <details> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {kat.items.map((item, idx) => (
                    <details
                      key={idx}
                      className="faq-item"
                      style={{
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid var(--color-border)",
                        background: "#fff",
                        overflow: "hidden",
                      }}
                    >
                      <summary
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "1rem",
                          padding: "1.125rem 1.375rem",
                          cursor: "pointer",
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                          fontSize: "1rem",
                          color: "var(--color-text)",
                          listStyle: "none",
                          WebkitAppearance: "none" as React.CSSProperties["WebkitAppearance"],
                          userSelect: "none",
                        }}
                      >
                        <span>{item.question}</span>
                        <span
                          className="material-symbols-outlined faq-chevron"
                          aria-hidden="true"
                          style={{
                            fontSize: "1.25rem",
                            color: "var(--color-gold-text)",
                            flexShrink: 0,
                            transition: "transform 0.25s ease",
                          }}
                        >
                          expand_more
                        </span>
                      </summary>
                      <div
                        style={{
                          padding: "0 1.375rem 1.25rem",
                          borderTop: "1px solid var(--color-warm-gray)",
                        }}
                      >
                        <p
                          style={{
                            paddingTop: "1rem",
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9375rem",
                            color: "var(--color-text-secondary)",
                            lineHeight: 1.75,
                            margin: 0,
                          }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        aria-label="Noch Fragen? Jetzt anfragen."
        style={{ background: "var(--color-navy)", padding: "5rem 0" }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,149,26,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: "var(--color-text-on-dark)",
                marginBottom: "1rem",
                position: "relative",
              }}
            >
              Noch offene Fragen?
            </h2>
            <p
              style={{
                color: "var(--color-text-muted-on-dark)",
                fontFamily: "var(--font-body)",
                fontSize: "1.125rem",
                maxWidth: "500px",
                margin: "0 auto 2.5rem",
                lineHeight: 1.7,
                position: "relative",
              }}
            >
              Schreib uns einfach — wir antworten innerhalb von 24 Stunden und
              freuen uns auf deine Anfrage.
            </p>
            <Link
              href="/kontakt"
              className="btn-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "var(--color-gold)",
                color: "#000",
                fontFamily: "var(--font-ui)",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "1rem 2.5rem",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                minHeight: "44px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                position: "relative",
              }}
            >
              Unverbindlich anfragen <span aria-hidden="true">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Inline-CSS für <details>-Chevron-Animation */}
      <style>{`
        .faq-item[open] .faq-chevron {
          transform: rotate(180deg);
        }
        .faq-item summary:hover {
          background: var(--color-gold-light);
        }
        .faq-item summary::-webkit-details-marker { display: none; }
      `}</style>
    </>
  );
}
