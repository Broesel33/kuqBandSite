export const metadata = {
  title: "Datenschutzerklärung – Kreiz & Quer",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-headline)",
  fontSize: "1.125rem",
  fontWeight: 700,
  color: "var(--color-text)",
  marginBottom: "0.75rem",
};

const linkStyle: React.CSSProperties = {
  color: "var(--color-gold-text)",
  textDecoration: "none",
};

const paraStyle: React.CSSProperties = { lineHeight: 1.7 };

const listStyle: React.CSSProperties = {
  ...{ lineHeight: 1.7 },
  paddingLeft: "1.25rem",
  marginTop: "0.75rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header
        style={{ backgroundColor: "var(--color-navy)" }}
        className="py-20 px-6 md:px-8"
      >
        <div className="max-w-screen-xl mx-auto">
          <h1
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              color: "var(--color-text-on-dark)",
              marginBottom: "0.75rem",
            }}
          >
            Datenschutzerklärung
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-text-muted-on-dark)",
              fontSize: "1rem",
            }}
          >
            Informationen gemäß DSGVO (EU 2016/679) und DSG (Österreich)
          </p>
        </div>
      </header>

      <section
        aria-labelledby="datenschutz-heading"
        style={{
          backgroundColor: "var(--color-surface)",
          padding: "4rem 1.5rem 6rem",
        }}
      >
        <h2 id="datenschutz-heading" className="sr-only">
          Datenschutzerklärung Inhalt
        </h2>

        <div className="max-w-screen-xl mx-auto" style={{ maxWidth: "40rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              fontFamily: "var(--font-body)",
              color: "var(--color-text-secondary)",
            }}
          >
            {/* Verantwortlicher */}
            <div>
              <h2 style={h2Style}>Verantwortlicher</h2>
              <p style={{ fontWeight: 600, color: "var(--color-text)" }}>Kreiz &amp; Quer</p>
              <p>Ing. DI Manuel Lamb, MA</p>
              <p>Vormarkt 6</p>
              <p>8130 Frohnleiten, Steiermark</p>
              <p>Österreich</p>
              <p style={{ marginTop: "0.75rem" }}>
                E-Mail:{" "}
                <a href="mailto:info@kreizundquer.com" style={linkStyle}>
                  info@kreizundquer.com
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a href="tel:+436802378954" style={linkStyle}>
                  +43 680 23 78 95 4
                </a>
              </p>
            </div>

            {/* Grundsätze */}
            <div>
              <h2 style={h2Style}>Grundsätze unserer Datenverarbeitung</h2>
              <p style={paraStyle}>
                Wir nehmen den Schutz deiner persönlichen Daten ernst und behandeln diese
                vertraulich, entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
                Datenschutzerklärung. Unsere Website verwendet <strong>keine Tracking-Cookies,
                keine Analyse-Tools und kein Remarketing</strong>. Es werden keine
                Nutzerprofile erstellt und kein Verhalten über verschiedene Websites hinweg
                verfolgt.
              </p>
            </div>

            {/* Erhebung und Verarbeitung */}
            <div>
              <h2 style={h2Style}>Erhebung und Verarbeitung personenbezogener Daten</h2>
              <p style={paraStyle}>
                Wir erheben personenbezogene Daten nur, soweit dies für die Bereitstellung
                unserer Website und die Bearbeitung von Anfragen erforderlich ist:
              </p>

              <p style={{ ...paraStyle, marginTop: "1rem", fontWeight: 600, color: "var(--color-text)" }}>
                Serverlogdaten / Hosting
              </p>
              <p style={paraStyle}>
                Beim Aufruf unserer Website speichert unser Hosting-Anbieter automatisch
                Zugriffsdaten (IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Seite,
                übertragene Datenmenge, Browsertyp und Betriebssystem). Diese Daten dienen
                ausschließlich der technischen Bereitstellung und Sicherheit der Website und
                werden nach spätestens 30 Tagen gelöscht. Rechtsgrundlage: Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).
              </p>

              <p style={{ ...paraStyle, marginTop: "1rem", fontWeight: 600, color: "var(--color-text)" }}>
                Kontaktformular
              </p>
              <p style={paraStyle}>
                Wenn du uns über das Kontaktformular kontaktierst, verarbeiten wir deinen
                Namen, deine E-Mail-Adresse, deine Telefonnummer (optional), dein
                Wunschdatum (optional), den Anlass sowie deine Nachricht. Die Daten werden
                ausschließlich zur Bearbeitung deiner Anfrage verwendet. Rechtsgrundlage:
                Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
              </p>

              <p style={{ ...paraStyle, marginTop: "1rem", fontWeight: 600, color: "var(--color-text)" }}>
                Kontaktaufnahme per E-Mail oder Telefon
              </p>
              <p style={paraStyle}>
                Wenn du uns per E-Mail oder Telefon kontaktierst, verarbeiten wir die von
                dir übermittelten Daten (Name, E-Mail-Adresse, Telefonnummer, Inhalt der
                Nachricht) zur Bearbeitung deines Anliegens. Rechtsgrundlage: Art. 6 Abs. 1
                lit. b bzw. lit. f DSGVO.
              </p>
            </div>

            {/* Speicherdauer */}
            <div>
              <h2 style={h2Style}>Speicherdauer</h2>
              <p style={paraStyle}>
                Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen
                Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
                Anfragedaten aus dem Kontaktformular und per E-Mail/Telefon werden nach
                abschließender Bearbeitung gelöscht, spätestens jedoch nach drei Jahren.
                Soweit aus einer Anfrage ein Vertragsverhältnis entsteht und buchhalterische
                Unterlagen anfallen, gelten die gesetzlichen Aufbewahrungsfristen (bis zu
                7 Jahre gemäß § 132 BAO).
              </p>
            </div>

            {/* Externe Dienste */}
            <div>
              <h2 style={h2Style}>Eingebundene externe Dienste</h2>

              <p style={{ ...paraStyle, marginTop: "0.75rem", fontWeight: 600, color: "var(--color-text)" }}>
                Google Fonts (Syne, Manrope) — selbst gehostet
              </p>
              <p style={{ ...paraStyle, marginBottom: "0.75rem" }}>
                Die Schriftarten Syne und Manrope werden über Next.js beim Build-Prozess
                einmalig von Google-Servern heruntergeladen und anschließend von unserem
                eigenen Server ausgeliefert. Bei deinem Besuch findet <strong>keine
                Verbindung zu Google-Servern</strong> statt.
              </p>

              <p style={{ ...paraStyle, marginTop: "0.75rem", fontWeight: 600, color: "var(--color-text)" }}>
                Google Material Symbols (Icons)
              </p>
              <p style={{ ...paraStyle, marginBottom: "0.75rem" }}>
                Für Icons auf dieser Website wird die Schriftart „Material Symbols" direkt
                von Google-Servern (fonts.googleapis.com, fonts.gstatic.com) geladen. Dabei
                wird deine IP-Adresse an Google LLC (USA) übermittelt. Google ist unter dem
                EU-US Data Privacy Framework zertifiziert, das die Europäische Kommission
                als angemessenes Datenschutzniveau anerkannt hat (Angemessenheitsbeschluss
                vom 10. Juli 2023). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an einheitlicher Darstellung). Googles Datenschutzerklärung:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  policies.google.com/privacy
                </a>
              </p>

              <p style={{ ...paraStyle, marginTop: "0.75rem", fontWeight: 600, color: "var(--color-text)" }}>
                E-Mail-Versand über Resend
              </p>
              <p style={{ ...paraStyle, marginBottom: "0.75rem" }}>
                Zur Weiterleitung von Kontaktformular-Anfragen nutzen wir den Dienst Resend
                (Resend Inc., San Francisco, USA). Die von dir im Formular eingegebenen Daten
                (Name, E-Mail, Telefon, Datum, Anlass, Nachricht) werden dabei über
                Resend-Server verarbeitet und an unsere E-Mail-Adresse zugestellt. Resend
                fungiert als Auftragsverarbeiter gemäß Art. 28 DSGVO. Für Übermittlungen in
                die USA stützen wir uns auf die Standardvertragsklauseln der EU-Kommission
                (Art. 46 Abs. 2 lit. c DSGVO). Datenschutzerklärung von Resend:{" "}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  resend.com/legal/privacy-policy
                </a>
              </p>

              <p style={{ ...paraStyle, marginTop: "0.75rem", fontWeight: 600, color: "var(--color-text)" }}>
                WhatsApp-Kontaktmöglichkeit
              </p>
              <p style={{ ...paraStyle, marginBottom: "0.75rem" }}>
                Auf unserer Website befindet sich ein Link zu WhatsApp. Wenn du diesen Link
                anklickst und über WhatsApp Kontakt aufnimmst, werden die ausgetauschten
                Nachrichten von WhatsApp Ireland Limited (für EU-Nutzer) bzw. Meta Platforms
                (USA) verarbeitet. Für die Datenverarbeitung innerhalb von WhatsApp ist
                WhatsApp verantwortlich. Bitte beachte die{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy-eea"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Datenschutzerklärung von WhatsApp
                </a>
                . Rechtsgrundlage für unsere Verarbeitung der übermittelten Nachrichteninhalte:
                Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
              </p>

              <p style={{ ...paraStyle, marginTop: "0.75rem", fontWeight: 600, color: "var(--color-text)" }}>
                Links zu Social-Media-Plattformen
              </p>
              <p style={paraStyle}>
                Unsere Website enthält Links zu Facebook (Meta Platforms Ireland Ltd.),
                Instagram (Meta Platforms Ireland Ltd.) und YouTube (Google Ireland Ltd.).
                Diese Links sind einfache Hyperlinks — es werden <strong>keine
                Social-Media-Plug-ins oder eingebetteten Inhalte</strong> verwendet. Erst
                wenn du auf einen Link klickst und die jeweilige Plattform besuchst, werden
                dort Daten erhoben. Für diese Datenverarbeitung sind die jeweiligen
                Plattformbetreiber verantwortlich. Wir empfehlen, deren Datenschutzerklärungen
                zu lesen.
              </p>
            </div>

            {/* Weitergabe */}
            <div>
              <h2 style={h2Style}>Weitergabe an Dritte und Auftragsverarbeiter</h2>
              <p style={paraStyle}>
                Wir geben personenbezogene Daten grundsätzlich nicht an Dritte weiter,
                es sei denn, dies ist zur Vertragserfüllung erforderlich, du hast ausdrücklich
                eingewilligt oder wir sind gesetzlich dazu verpflichtet. Folgende
                Auftragsverarbeiter (Art. 28 DSGVO) unterstützen uns beim Betrieb der Website:
              </p>
              <ul style={listStyle}>
                <li>
                  <strong>Hosting-Anbieter:</strong> Verarbeitung von Serverlogdaten zur
                  technischen Bereitstellung der Website.
                </li>
                <li>
                  <strong>Resend Inc. (USA):</strong> E-Mail-Versand von
                  Kontaktformular-Anfragen (nur in Produktion).
                </li>
              </ul>
            </div>

            {/* Drittlandübermittlungen */}
            <div>
              <h2 style={h2Style}>Übermittlungen in Drittländer (außerhalb der EU/EWR)</h2>
              <p style={paraStyle}>
                Beim Betrieb dieser Website können Daten in die USA übermittelt werden
                (Google für Material Symbols Icons; Resend für E-Mail-Versand; ggf.
                Hosting-Anbieter). Für diese Übermittlungen bestehen geeignete Garantien:
              </p>
              <ul style={listStyle}>
                <li>
                  <strong>EU-US Data Privacy Framework:</strong> Google ist unter diesem
                  Angemessenheitsbeschluss der EU-Kommission (Juli 2023) zertifiziert.
                </li>
                <li>
                  <strong>Standardvertragsklauseln (SCC):</strong> Für Resend stützen wir uns
                  auf die Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.
                </li>
              </ul>
            </div>

            {/* Betroffenenrechte */}
            <div>
              <h2 style={h2Style}>Deine Rechte</h2>
              <p style={{ ...paraStyle, marginBottom: "0.75rem" }}>
                Du hast als betroffene Person folgende Rechte gemäß DSGVO:
              </p>
              <ul style={listStyle}>
                <li>
                  <strong>Auskunft</strong> (Art. 15 DSGVO) — Welche Daten wir über dich
                  speichern
                </li>
                <li>
                  <strong>Berichtigung</strong> (Art. 16 DSGVO) — Korrektur unrichtiger Daten
                </li>
                <li>
                  <strong>Löschung</strong> (Art. 17 DSGVO) — Löschung deiner Daten
                </li>
                <li>
                  <strong>Einschränkung</strong> (Art. 18 DSGVO) — Einschränkung der
                  Verarbeitung
                </li>
                <li>
                  <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO) — Erhalt deiner Daten
                  in maschinenlesbarem Format
                </li>
                <li>
                  <strong>Widerspruch</strong> (Art. 21 DSGVO) — Widerspruch gegen die
                  Verarbeitung auf Basis berechtigter Interessen
                </li>
                <li>
                  <strong>Widerruf einer Einwilligung</strong> (Art. 7 Abs. 3 DSGVO) —
                  Soweit die Verarbeitung auf einer Einwilligung beruht, kannst du diese
                  jederzeit mit Wirkung für die Zukunft widerrufen.
                </li>
              </ul>
              <p style={{ ...paraStyle, marginTop: "0.75rem" }}>
                Zur Ausübung deiner Rechte wende dich bitte an:{" "}
                <a href="mailto:info@kreizundquer.com" style={linkStyle}>
                  info@kreizundquer.com
                </a>
              </p>
            </div>

            {/* Beschwerderecht */}
            <div>
              <h2 style={h2Style}>Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p style={paraStyle}>
                Du hast das Recht, bei der österreichischen Datenschutzbehörde Beschwerde
                einzulegen, wenn du der Ansicht bist, dass die Verarbeitung deiner Daten gegen
                die DSGVO verstößt (Art. 77 DSGVO i. V. m. § 24 DSG):
              </p>
              <p style={{ ...paraStyle, marginTop: "0.75rem" }}>
                <strong>Datenschutzbehörde Österreich</strong>
                <br />
                Barichgasse 40–42, 1030 Wien
                <br />
                <a
                  href="https://www.dsb.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  www.dsb.gv.at
                </a>
              </p>
            </div>

            {/* Aktualität */}
            <div>
              <h2 style={h2Style}>Aktualität dieser Datenschutzerklärung</h2>
              <p style={paraStyle}>
                Diese Datenschutzerklärung gilt ab Mai 2026. Wir behalten uns vor, sie bei
                Bedarf anzupassen, um stets den aktuellen rechtlichen Anforderungen zu
                entsprechen. Die jeweils aktuelle Version ist auf dieser Seite abrufbar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
