# Seiten-Inventar: Website „Kreiz & Quer"

**Stand:** 2026-04-26 | **Version:** 1.0  
**Quelle:** Erkundung der Next.js App-Struktur unter `src/app/`

---

## Übersicht

Die Website besteht aus **8 Unterseiten** (inklusive Startseite). Alle Seiten sind statisch geroutet im App Router von Next.js. Es gibt keine dynamischen Segmente (z. B. `/blog/[slug]`) und keine API-Routen außer der Server Action für das Kontaktformular.

---

## Seiten im Detail

### 1. Startseite

| Eigenschaft | Wert |
|---|---|
| **Route** | `/` |
| **Datei** | `src/app/page.tsx` |
| **Priorität im Review** | Hoch |

**Zweck:**  
Ersteindruck und zentraler Einstiegspunkt der Website. Die Startseite bündelt alle wichtigen Inhalte in einer langen Scroll-Seite: Hero-Bereich mit Headline und Call-to-Action-Buttons, Leistungsübersicht (Hochzeiten, Bälle, Firmenfeiern), Kundenstimmen (Testimonials) und eine Vorschau der nächsten öffentlichen Termine. Ziel ist es, Besucher sofort zu überzeugen und zur Kontaktseite weiterzuleiten.

**Wichtige Elemente:**
- Hero-Sektion mit Headline, Subline, zwei CTAs und Kontaktleiste
- Servicekarten (Leistungstypen)
- Testimonial-Karten
- Terminvorschau (max. 4 kommende Auftritte)

---

### 2. Leistungen

| Eigenschaft | Wert |
|---|---|
| **Route** | `/leistungen` |
| **Datei** | `src/app/leistungen/page.tsx` |
| **Priorität im Review** | Hoch |

**Zweck:**  
Detaillierte Beschreibung der Einsatzbereiche der Band. Für jeden Veranstaltungstyp (Hochzeiten, Bälle, Firmenfeiern, weitere Events) gibt es eine eigene Sektion mit beschreibendem Text, einer Liste konkreter Leistungsmerkmale (z. B. „Akustik-Set", „Individuelle Songwünsche", „Empfang & Dinner") und einem Call-to-Action zur Kontaktseite.

**Wichtige Elemente:**
- Leistungskarten pro Veranstaltungstyp mit Icon, Text und Checkliste
- CTA-Buttons zur Kontaktseite je Leistungsblock

---

### 3. Kontakt

| Eigenschaft | Wert |
|---|---|
| **Route** | `/kontakt` |
| **Datei** | `src/app/kontakt/page.tsx` |
| **Server Action** | `src/app/kontakt/actions.ts` |
| **Priorität im Review** | Hoch |

**Zweck:**  
Hauptkonversionspunkt der Website. Hier können Interessierte eine unverbindliche Buchungsanfrage stellen. Die Seite enthält ein Kontaktformular (verarbeitet über eine Next.js Server Action) sowie alternative Kontaktwege (WhatsApp-Button). Laut Metadaten verspricht die Band eine Antwort innerhalb von 24 Stunden.

**Wichtige Elemente:**
- Seitenheader mit Eyebrow „Schreib uns"
- Kontaktformular (Komponente `ContactForm`)
- WhatsApp-Kontakt-Button (`WhatsAppIcon`)

---

### 4. Repertoire

| Eigenschaft | Wert |
|---|---|
| **Route** | `/repertoire` |
| **Datei** | `src/app/repertoire/page.tsx` |
| **Priorität im Review** | Mittel |

**Zweck:**  
Vollständige Songlist der Band, gegliedert nach Genres. Besucher können prüfen, ob ihre Lieblingssongs oder Stilrichtungen abgedeckt sind. Enthält eine interaktive Filter-Komponente (`RepertoireFilter`) zur Anzeige nach Genres wie Austropop, Pop & Rock, Evergreens, Charts und Walzer.

**Wichtige Elemente:**
- Interaktiver Genre-Filter
- Song-Listen mit Titel, Interpret und Jahrzehnt
- Abschnitt für Walzer (relevant für Ball-Veranstaltungen)
- CTA zur Kontaktseite (Songwunsch einreichen)

---

### 5. Termine

| Eigenschaft | Wert |
|---|---|
| **Route** | `/termine` |
| **Datei** | `src/app/termine/page.tsx` |
| **Priorität im Review** | Mittel |

**Zweck:**  
Liste aller kommenden öffentlichen Auftritte der Band. Besucher können hier sehen, wann und wo die Band als nächstes live zu erleben ist. Die Termine werden aus einer zentralen Datendatei (`src/data/termine`) geladen; vergangene Termine werden herausgefiltert. Enthält auch einen CTA für private Buchungsanfragen.

**Wichtige Elemente:**
- Seitenheader mit Eyebrow „Wann & Wo"
- Liste kommender Auftritte (Datum, Location, Status)
- CTA zur Kontaktseite für Buchungsanfragen

---

### 6. Über uns

| Eigenschaft | Wert |
|---|---|
| **Route** | `/ueber-uns` |
| **Datei** | `src/app/ueber-uns/page.tsx` |
| **Priorität im Review** | Mittel |

**Zweck:**  
Stellt die vier Bandmitglieder mit Foto, Name, Instrument und persönlicher Kurz-Biografie vor. Ziel ist der Aufbau von Vertrauen und Sympathie — Interessierte sollen das Gefühl bekommen, die Menschen hinter der Band zu kennen, bevor sie buchen.

**Bandmitglieder:**
- **Manu** — Gesang & Rhythmus-Gitarre
- **Robert** — Gesang & E-Gitarre
- **Steph** — Schlagzeug & Keyboard
- **Gabs** — Bass

**Wichtige Elemente:**
- Bandmitglied-Karten (`MemberCard`-Komponente) mit Foto und Biografie
- Bandfotos (`Next/Image`-Optimierung)

---

### 7. Galerie

| Eigenschaft | Wert |
|---|---|
| **Route** | `/galerie` |
| **Datei** | `src/app/galerie/page.tsx` |
| **Priorität im Review** | Niedrig |

**Zweck:**  
Visuelle Impressionen von Auftritten der Band — Hochzeiten, Bälle, Events. Die Galerie soll die Atmosphäre der Auftritte transportieren und Vertrauen durch authentische Bilder aufbauen.

**Hinweis:** Zum Zeitpunkt der Review-Erkundung ist die Bildliste leer (`GALLERY_IMAGES = []`); die Komponente `GalleryGrid` greift in diesem Fall auf intern generierte Platzhalter-Bilder zurück. Dies ist ein potenziell kritischer Befund — fehlende echte Auftrittsfotografie schwächt den Vertrauensaufbau erheblich.

**Wichtige Elemente:**
- Grid-Layout mit Auftrittsfotografien
- Seitenheader im Band-Design

---

### 8. Impressum

| Eigenschaft | Wert |
|---|---|
| **Route** | `/impressum` |
| **Datei** | `src/app/impressum/page.tsx` |
| **Priorität im Review** | Niedrig |

**Zweck:**  
Gesetzlich vorgeschriebene Pflichtseite mit Angaben zum Anbieter (Name, Adresse, Kontakt) gemäß österreichischem Medienrecht (ECG / MedienG). Für professionelle Wirkung und rechtliche Absicherung erforderlich.

**Wichtige Elemente:**
- Impressumsangaben (Betreiber, Adresse, Kontakt)
- Seitenheader im Band-Design

---

## Zusammenfassung

| Route | Seitenname | Typ | Review-Priorität |
|---|---|---|---|
| `/` | Startseite | Landingpage | Hoch |
| `/leistungen` | Leistungen | Informationsseite | Hoch |
| `/kontakt` | Kontakt | Konversionsseite | Hoch |
| `/repertoire` | Repertoire | Informationsseite (interaktiv) | Mittel |
| `/termine` | Termine | Listenübersicht | Mittel |
| `/ueber-uns` | Über uns | Profilseite | Mittel |
| `/galerie` | Galerie | Medienübersicht | Niedrig |
| `/impressum` | Impressum | Pflichtseite | Niedrig |

**Gesamtzahl Seiten: 8**  
**Davon hohe Priorität: 3** (Startseite, Leistungen, Kontakt)  
**Davon mittlere Priorität: 3** (Repertoire, Termine, Über uns)  
**Davon niedrige Priorität: 2** (Galerie, Impressum)

---

## Technischer Rahmen

- **Framework:** Next.js (App Router)
- **Sprache:** TypeScript / TSX
- **Datenquellen:** Statische Datendateien (z. B. `src/data/termine`), keine externe Datenbank
- **Formulare:** Server Actions (`src/app/kontakt/actions.ts`)
- **Bilder:** Next.js `Image`-Komponente (optimierte Auslieferung)
- **Styling:** CSS-Variablen (Custom Properties), Tailwind-Utility-Klassen ergänzend
