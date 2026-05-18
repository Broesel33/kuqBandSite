# Todo — Kreiz & Quer Website
**Erstellt von:** Anna Ahorn
**Datum:** 2026-05-18
**Basis:** Web-Review durch 5-köpfiges Expertenteam

---

## Rote Aufgaben — Sofort (vor nächstem Launch)

- [x] **Kundenstimmen sichtbar auf der Startseite einbauen:** Die drei vorhandenen echten Reviews (Melanie, Daniel, Jakob & Marlene) aus dem JSON-LD als Testimonial-Block zwischen der "Warum Kreiz & Quer?"-Sektion und dem Termine-Block auf der Startseite darstellen. Das Zitat von Jakob & Marlene ("Tage nach der Hochzeit noch so oft von Gästen gehört, dass die Band so cool war") zusätzlich in der Hochzeits-Sektion auf `/leistungen` einsetzen. — *Quelle: Marco (Commercial) + Tim (Content); meistgenannter Einzelbefund des Reviews, direkter Buchungsauslöser*

- [x] **Construction-Banner entfernen oder lokalisieren:** Den globalen Banner von allen Seiten entfernen, da Kontaktformular und Buchungsinfrastruktur vollständig funktionieren. Falls einzelne Bereiche noch unvollständig sind (z. B. Galerie), nur auf der jeweiligen Seite einen lokalisierten Hinweis zeigen. — *Quelle: Marco (Commercial) + Felix (Design); sendet aktiv das Signal "noch nicht bereit" an Buchungsinteressenten*

- [x] **og:image anlegen und in layout.tsx eintragen:** Datei `public/og-image.jpg` (1200×630 px, max. 300 KB) mit Bandmotiv anlegen. In `layout.tsx` im `openGraph`-Objekt als `images`-Array eintragen. Hintergrund: Event-JSON-LD auf `/termine` referenziert bereits `og-image.jpg`, die Datei fehlt aber im `/public`-Ordner — das macht den JSON-LD-Block technisch fehlerhaft und verhindert Vorschaubilder beim Social Sharing auf WhatsApp, Facebook und LinkedIn. — *Quelle: Jana (SEO); betrifft Social-Sharing-Darstellung und strukturierte Daten*

- [x] **Event-JSON-LD Endzeit korrigieren:** In `src/app/termine/page.tsx` alle Endzeiten von `T24:00:00+02:00` auf den Folgetag `T00:00:00+02:00` oder auf `T23:59:59+02:00` ändern. `T24:00:00` ist kein gültiger ISO-8601-Wert und verhindert Event-Rich-Snippets in Google. — *Quelle: Jana (SEO); blockiert Darstellung von Termin-Rich-Snippets in der Google-Suche*

- [x] **Facebook-URL im JSON-LD vereinheitlichen:** In `src/app/page.tsx` im `sameAs`-Array die URL `facebook.com/kreizuquer/` (ohne "und") prüfen und auf die korrekte URL angleichen — alle Social-Links im Footer und auf der Kontaktseite verwenden `kreizundquer` (mit "und"). Die inkonsistente URL schwächt das Entitätssignal im Google Knowledge Graph. — *Quelle: Jana (SEO); betrifft Google-Entitätserkennung*

- [x] **`aria-invalid` vor Validierung entfernen:** In `ContactForm.tsx` alle vier Vorkommen von `aria-invalid={!!errors.fieldname}` auf `aria-invalid={errors.fieldname ? true : undefined}` ändern. Betrifft die Felder `contact-name`, `contact-email`, `contact-anlass`, `contact-nachricht`. Im initialen Render wird sonst `aria-invalid="false"` ausgegeben, was Screenreader irreführend als "explizit geprüft und gültig" ankündigen. — *Quelle: Laura (Accessibility); WCAG 4.1.2 Level A*

- [x] **`<main>` mit `tabindex="-1"` ausstatten:** In `layout.tsx` das `<main id="main-content">`-Element um `tabIndex={-1}` ergänzen. Ohne dieses Attribut funktioniert der Skip-Link in älteren Browsern und bei bestimmten Screenreader-Browser-Kombinationen (Safari/VoiceOver) nicht zuverlässig. — *Quelle: Laura (Accessibility); WCAG 2.4.1 Level A*

- [x] **Buchungs-CTA auf der Über-uns-Seite ergänzen:** In `src/app/ueber-uns/page.tsx` in der "Neugierig geworden?"-Abschluss-Sektion einen direkten "Jetzt anfragen"-Button als primäre Aktion hinzufügen. Die emotional stärkste Seite der Website hat aktuell keinen direkten Weg zur Anfrage. — *Quelle: Marco (Commercial) + Felix (Design)*

---

## Gelbe Aufgaben — Kurzfristig (nächste 2–4 Wochen)

- [x] **"Wenige hundert Euro" auf der Leistungsseite ersetzen:** Den Satz aus der Preissektion in `src/app/leistungen/page.tsx` entweder durch eine ehrliche Preisspanne ("Duo ab X Euro, Vollband ab Y Euro — inklusive Equipment") oder durch eine klare Prozesserklärung ersetzen ("Im individuellen Angebot nennen wir den konkreten Preis — abhängig von Spieldauer und Anreise"). Den aktuellen Satz nicht behalten: Er klingt unglaubwürdig für eine professionelle Live-Band und schreckt sowohl preissensible als auch hochpreisige Interessenten ab. — *Quelle: Marco (Commercial) + Tim (Content); beide unabhängig*

- [x] **5-Sterne-Badge im Hero mit externer Quelle verlinken:** Den Badge-Text "★★★★★" oder den Bewertungsblock mit einem echten Link zu den Google Maps- oder Facebook-Bewertungen ausstatten. Ohne externe Verlinkung ist die Behauptung für kritische Käufer nicht verifizierbar. — *Quelle: Marco (Commercial)*

- [x] **H1 auf der Leistungsseite aufwerten:** In `src/app/leistungen/page.tsx` den `<h1>` von "Leistungen" auf "Live-Musik für jeden Anlass" oder "Was wir für dein Event tun" ändern. Besser für SEO und emotionalen Einstieg. — *Quelle: Tim (Content)*

- [x] **"Unverbindlich anfragen"-Textlinks auf der Leistungsseite zu Buttons aufwerten:** In den fünf Leistungssektionen die Textlinks durch Buttons mit Amber-Hintergrund ersetzen (wie beim Preissektions-CTA am Seitenende bereits umgesetzt). Konsistente visuelle Sprache, stärkere Klickrate. — *Quelle: Marco (Commercial)*

- [x] **YouTube-Facade-Button von `type="submit"` auf `type="button"` ändern:** In der YouTubeFacade-Komponente das Button-Attribut korrigieren. Semantisch ist `type="button"` korrekt für eine reine Interaktionsschaltfläche. — *Quelle: Laura (Accessibility); WCAG 4.1.2 Level A*

- [x] **Construction-Banner-Farbe ins Markensystem einpassen:** `#f97316` (hardcodiert) in `src/components/ConstructionBanner.tsx` durch `var(--color-dark)` als Hintergrund mit `var(--color-amber)` als Textfarbe ersetzen, oder eine dedizierte CSS-Variable `--color-warning` einführen. Das aktuelle Orange liegt außerhalb des definierten Farbsystems und wirkt dissonant. — *Quelle: Felix (Design)* — Hinweis: Dieser Punkt wird hinfällig, wenn der Banner gemäß der roten Aufgabe entfernt wird.

- [x] **`/faq` in `sitemap.ts` eintragen:** Die FAQ-Seite mit `changeFrequency: "monthly"` und `priority: 0.7` in die Sitemap aufnehmen. Sie hat FAQPage-Schema und hohes Featured-Snippet-Potenzial, wird ohne Sitemap-Eintrag aber nicht explizit priorisiert. — *Quelle: Jana (SEO)*

- [x] **`datePublished` in Reviews auf vollständiges ISO-8601-Format bringen:** In `src/app/page.tsx` im `localBusinessJsonLd`-Block alle drei Review-Objekte von `"2025-12"` auf `"2025-12-01"` (oder das konkrete Datum) korrigieren. Aktuelles Format ist nicht ISO-8601-konform. — *Quelle: Jana (SEO)*

- [x] **FAQ-Seite fertigstellen oder Navigationslink entfernen:** Wenn `/faq` noch nicht fertig ist, den Link aus der Hauptnavigation und dem Footer entfernen. Sobald die Seite fertig ist: Mindestens 5–6 echte Fragen aufnehmen (Technik, Anreise, Stornierung, Mindesteinsatzzeit, Mikrofon für Brautpaar, Anzahlung). Ein toter oder unvollständiger Link in der Navigation ist ein Absprung-Trigger. — *Quelle: Tim (Content) + Marco (Commercial) + Jana (SEO/Sitemap)*

- [x] **`/repertoire` prüfen und sicherstellen:** Sicherstellen, dass die Seite erreichbar, vollständig und befüllt ist. Der sekundäre CTA im Hero der Startseite und der Abschluss-CTA auf der Über-uns-Seite zeigen auf `/repertoire` — ein 404 oder leere Seite im Hero-Bereich ist ein direkter Vertrauensverlust. — *Quelle: Marco (Commercial) + Tim (Content)*

- [x] **Emoji im Construction-Banner in aria-hidden-Span auslagern:** In `src/components/ConstructionBanner.tsx` das Emoji 🚧 als `<span aria-hidden="true">🚧</span>` markieren, damit Screenreader nicht "Baustelle Seite im Aufbau ..." vorlesen. — *Quelle: Laura (Accessibility); WCAG 1.3.3 Level A* — Hinweis: Entfällt bei Banner-Entfernung.

- [x] **Unterseiten-Header-Padding vereinheitlichen:** Alle 6 Unterseiten-Header auf dasselbe Padding-System bringen — entweder alle auf `py-12 md:py-20` mit `padding: 0 2rem` oder alle auf `py-20 px-6 md:px-8`. Aktuell existieren zwei konkurrierende Systeme. — *Quelle: Felix (Design)*

- [x] **Favicon anlegen:** `public/favicon.ico` (oder `src/app/icon.svg`) anlegen und in `layout.tsx` im `icons`-Objekt eintragen (`icon: [{ url: '/favicon.ico' }]`). Verbessert Markenwahrnehmung in Browser-Tabs und Lesezeichen. — *Quelle: Jana (SEO)*

- [x] **Datum-Feld im Kontaktformular als optional kennzeichnen:** In `src/app/kontakt/page.tsx` oder `ContactForm.tsx` das Label "Wunschdatum" zu "Wunschdatum (optional)" ändern. Aktuell ist nur das Fehlen des Sternchens der Hinweis auf Optionalität — zu subtil. — *Quelle: Felix (Design)*

- [x] **Termine: Kontext für überregionale Reichweite ergänzen:** Auf der Terminseite einen kurzen Text hinzufügen, der die geografische Reichweite der Band kommuniziert (z. B. "Seit 2014 spielen wir in ganz Österreich — von Graz bis Bregenz"), damit alle aktuellen Frohnleiten-Termine nicht wie eine lokale Kapelle wirken. — *Quelle: Marco (Commercial) + Tim (Content)*

- [x] **Anredekonsistenz auf der Über-uns-Seite herstellen:** In `src/app/ueber-uns/page.tsx` den CTA-Text "Schaut euch an, was wir spielen" von "ihr" auf "du" ändern. Die gesamte Website duzt konsequent — dieser Wechsel ist ein Tonalitätsbruch. — *Quelle: Tim (Content)*

- [x] **Abschluss-CTAs auf der Über-uns-Seite mit `.btn-cta` versehen:** — bewusst nicht umgesetzt: Repertoire/Leistungen sind sekundäre Orientierungslinks, kein Buchungs-CTA. Lift-Effekt nur für primäre Aktionen. In `src/app/ueber-uns/page.tsx` den "Unser Repertoire"- und "Unsere Leistungen"-Buttons in der "Neugierig geworden?"-Sektion die `.btn-cta`-Klasse geben, damit der Hover-Lift-Effekt konsistent mit allen anderen primären CTAs der Seite ist. — *Quelle: Felix (Design)*

- [x] **`aria-disabled` am Submit-Button nur bei `true` setzen:** In `ContactForm.tsx` `aria-disabled={submitting ? true : undefined}` statt `aria-disabled={submitting}` verwenden, damit das Attribut im aktivierten Zustand nicht als `aria-disabled="false"` gerendert wird. — *Quelle: Laura (Accessibility); WCAG 4.1.2 Level A*

- [x] **MusicGroup JSON-LD auf `/ueber-uns` durch seitenspezifisches Schema ersetzen:** Den identischen MusicGroup-Block auf der Über-uns-Seite durch ein `ProfilePage`-Schema mit `mainEntity: MusicGroup` ersetzen, optional mit `Person`-Schemas für die Bandmitglieder. Doppelt identische JSON-LD-Blöcke liefern keinen SEO-Mehrwert. — *Quelle: Jana (SEO)*

---

## Grüne Aufgaben — Mittelfristig (nächster Sprint / nice to have)

- [ ] **AudioButton mit `aria-pressed` ausstatten:** In der AudioButton-Komponente `aria-label` zustandsabhängig setzen: `aria-label={playing ? "Hörprobe stoppen" : "Hörprobe abspielen"}` und `aria-pressed={playing}` ergänzen. — *Quelle: Laura (Accessibility); WCAG 4.1.2 Level A*

- [ ] **`lang="de"` auf `lang="de-AT"` präzisieren:** In `layout.tsx` das `lang`-Attribut auf `de-AT` ändern für österreichisches Deutsch. Marginal für SEO, korrekt für Screenreader-Sprachausgabe. — *Quelle: Jana (SEO)*

- [ ] **`/kontakt` Sitemap-Priorität auf 0.8 erhöhen:** In `sitemap.ts` die Priorität der Kontaktseite von 0.6 auf 0.8 anheben — sie ist die primäre Conversion-Seite und sollte nicht gleichauf mit der Galerie (0.6) liegen. — *Quelle: Jana (SEO)*

- [ ] **Galerie: Placeholder-State oder Informationsbox hinzufügen:** Solange weniger als 4 Events in der Galerie vorhanden sind, einen visuellen Hinweis darstellen ("Weitere Fotos folgen nach jedem Auftritt"), damit die leere zweite Grid-Spalte nicht wie ein Fehler wirkt. — *Quelle: Felix (Design)* — Hinweis: Entfällt bei ausreichend befüllter Galerie.

- [ ] **Galerie-CTAs visuell differenzieren:** Den "@kreizundquer"-Instagram-Link als sekundären Button (transparenter Hintergrund, Rahmen) und "Die Band kennenlernen" als primären Button darstellen. Aktuell sind beide identisch gestylt. — *Quelle: Felix (Design)*

- [ ] **Duo-Option sichtbarer positionieren:** Die Duo-Option als eigenständiges Produkt sichtbarer machen — z. B. als vierter ServiceCard auf der Startseite oder mit eigenem Absatz in der Hochzeits-Sektion auf der Leistungsseite. Das Duo ist relevant für standesamtliche Trauungen und Sektempfänge, erscheint aber aktuell nur als Anhang auf der Leistungsseite. — *Quelle: Tim (Content)*

- [ ] **Fallback-Text auf der Terminseite emotionaler gestalten:** In `src/app/termine/page.tsx` den Leerstand-Text von "Aktuell sind keine öffentlichen Termine geplant." auf etwas wie "Gerade keine öffentlichen Auftritte — aber vielleicht spielen wir bald auf deiner Feier?" mit direktem Link zu Kontakt ändern. — *Quelle: Tim (Content)*

- [ ] **Uhrzeit zu Terminen ergänzen:** In `src/app/termine/page.tsx` für öffentliche Auftritte zumindest eine ungefähre Beginnzeit (z. B. "ab ca. 19:00 Uhr") in den Termin-Daten ergänzen und in der EventRow-Komponente anzeigen. — *Quelle: Felix (Design)*

- [ ] **Sticky Mobile CTA einführen:** Einen kleinen schwebenden "Jetzt anfragen"-Button am unteren Bildschirmrand (nur Mobile, nur wenn der Nutzer > 50 % der Seite gescrollt hat) einbauen. Erhöht die mobile Konversion ohne visuell zu stören. — *Quelle: Marco (Commercial)*

- [ ] **"Wir Vier"-Redundanz bereinigen:** In `src/app/ueber-uns/page.tsx` den `aria-hidden`-`p`-Tag "Wir Vier" über dem `h2 "Wir Vier – Ganz persönlich"` entfernen. Der visuelle Eyebrow-Text dupliziert den Heading-Inhalt ohne Mehrwert. — *Quelle: Felix (Design) + Tim (Content)*

- [ ] **Galerie-Subline emotionaler gestalten:** In `src/app/galerie/page.tsx` den Header-Untertitel um einen einladenden Zusatz erweitern, z. B. "Momente, die bleiben — schau selbst, wie es auf der Bühne aussieht, wenn wir spielen." — *Quelle: Tim (Content)*

- [ ] **Geo-Signale im Hochzeits-Body-Text ergänzen:** In `src/app/leistungen/page.tsx` in der Hochzeits-Sektion einen natürlichen Satz ergänzen, der Graz und die Steiermark als Heimatgebiet nennt (z. B. "Als Hochzeitsband aus Frohnleiten bei Graz sind wir in der gesamten Steiermark zuhause."). — *Quelle: Tim (Content)*

- [ ] **Aggregierte Bewertungen aktiv ausbauen:** Nach jedem Event aktiv um Google-Bewertungen bitten und die JSON-LD-Reviews in `src/app/page.tsx` sukzessive erweitern. Mit nur 3 eingetragenen Reviews ist ein Google-Rich-Snippet mit Sternebewertung unwahrscheinlich (inoffizielle Praxis: 5+ Reviews). — *Quelle: Jana (SEO)*

- [ ] **SR-only-Heading auf der Kontaktseite sprachlich überarbeiten:** In `src/app/kontakt/page.tsx` den visuell versteckten H2-Text von "Kontaktformular und Kontaktinformationen" auf "Anfrage und Kontaktdaten" oder "Anfrage senden" ändern — natürlicher für Screenreader-Navigation. — *Quelle: Laura (Accessibility)*

- [ ] **Termin "Lesung" (Bibliothek, 21. Juni) kontextualisieren:** Für den Termin in der Bibliothek einen kurzen Hinweis ergänzen, der erklärt, warum eine Live-Band dort auftritt — ohne Kontext wirkt dieser Termin für Bandbesucher verwirrend. — *Quelle: Marco (Commercial)*

---

## Bereits gut — nicht anfassen

Diese Punkte sind bewusst so umgesetzt und sollen nicht "verbessert" werden:

- **Play-Buttons / Hörproben spielen einen Beep:** Das ist der gewünschte Zustand, kein Fehler. Nicht als Bug behandeln.
- **Galerie noch dünn befüllt:** Die Struktur und Darstellung der Galerie sind bewertbar und gut. Die geringe Bildmenge ist ein bekannter Zwischenstand, keine strukturelle Lücke.
- **Doppeltes H1 (Desktop/Mobile):** Die jeweils nicht sichtbare H1-Variante hat `display: none` auf dem Container — korrekte Implementierung, kein Accessibility-Problem.
- **Underline-Stil im Kontaktformular:** Das `borderBottom`-only-Styling der Inputfelder ist eine bewusste Designentscheidung. Die Textarea weicht davon ab (mit Rahmen) — das ist ein akzeptierter Stilbruch, der auf das unterschiedliche Skalierungsverhalten von Textareas eingeht.
- **Hero-CTA "Repertoire ansehen" als Ghost-Button:** Der sekundäre CTA im Hero ist bewusst weniger prominent als der primäre CTA. Die Ghost-Button-Darstellung ist korrekte CTA-Hierarchie.
- **Eyebrow-Texte mit `aria-hidden="true"`:** Die rein visuellen Dekorationstexte sind korrekt aus dem Accessibility-Tree ausgeblendet.
- **WhatsApp- und Telefonnummer identisch:** Korrekt, da dieselbe Nummer für beides genutzt wird. Das ist eine inhaltliche Entscheidung der Band, kein Fehler.
- **Contact-Bar auf Mobile zeigt nur Tel + WhatsApp:** Bewusste Priorisierung für mobile Nutzer — kein E-Mail im Hero auf Mobile ist eine korrekte UX-Entscheidung.
- **Sticky Sprungnavigation auf der Leistungsseite:** `overflowX: auto; scrollbarWidth: none` für horizontales Scrollen ohne sichtbare Scrollbar — bewusste, elegante UX-Entscheidung.
- **`<details>`/`<summary>` für das Mobile-Menü:** Native Implementierung ohne JavaScript-Abhängigkeit — bewusste Accessibility-Entscheidung, beibehalten.
- **`<abbr title="Pflichtfeld" aria-label="Pflichtfeld">*</abbr>` im Formular:** Korrekte und sorgfältige Implementierung der Pflichtfeld-Kennzeichnung.
- **Formular-Placeholder-Text im Nachrichtenfeld:** "z. B. Wir heiraten am 20. September 2026 im Glücksgarten in Waldstein…" — vorbildlich konkretes Beispiel, das Hemmungen abbaut. So lassen.
