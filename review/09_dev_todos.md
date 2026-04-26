# Dev-ToDo-Liste: Kreiz & Quer Website
**Abgeleitet aus:** Abschlussbericht Review-Team (08_abschlussbericht.md)  
**Stand:** 26. April 2026  
**Legende:** 🔴 Kritisch · 🟡 Wichtig · 🔵 Nice-to-have | 📋 Content nötig · 💻 Code · 🎨 Design

---

## SOFORT — Vor Live-Schaltung (Blocker)

| # | Priorität | Typ | Aufgabe | Details |
|---|---|---|---|---|
| 1 | 🔴 | 📋 | **Galerie: Echte Fotos einstellen** | Mindestens 3–5 echte Fotos (Bühne, Band in Aktion, Event-Atmosphäre) in die Galerie-Seite einbauen. Platzhalter "FOTO FOLGT" sind ein massives Vertrauensproblem. Smartphone-Fotos sind besser als Platzhalter. |
| 2 | 🔴 | 📋 | **Video auf Startseite einbetten** | YouTube-Video (auch Handyaufnahme eines echten Auftritts) direkt auf der Startseite einbetten. Besucher müssen die Band hören/sehen können. Empfehlung: eigener Abschnitt zwischen Hero und Leistungen. |

---

## KURZFRISTIG — Diese Woche

| # | Priorität | Typ | Aufgabe | Details |
|---|---|---|---|---|
| 3 | 🟡 | 💻 | **Walzer/Tanzmusik auf Leistungsseite explizit nennen** | Auf `/leistungen` beim Abschnitt "Bälle & Gala" explizit "Walzer & Tanzmusik" als Stichwort ergänzen. Ball-Organisatoren suchen gezielt danach und finden aktuell keinen klaren Hinweis. |
| 4 | 🟡 | 💻 | **Kontaktformular mobil: einspaltig machen** | Auf Mobile sind "Name" und "E-Mail" nebeneinander (2-spaltig) — zu eng für Touchbedienung. Unterhalb ~640px auf einspaltig umstellen. |
| 5 | 🟡 | 📋 | **Preisorientierung ergänzen** | Auf der Kontakt- oder Leistungsseite einen FAQ-Abschnitt oder Hinweis ergänzen: "Individuelle Angebote — typischerweise ab X €". Genaue Zahl vom Auftraggeber einholen. Ohne jede Preisorientierung verliert man rationale Entscheider. |
| 6 | 🟡 | 📋 | **Repertoire: Audiovorschauen aktivieren** | Sobald Aufnahmen vorliegen: `previewUrl` bei den Song-Objekten in `src/app/repertoire/page.tsx` befüllen. Der Hinweis "Vorschau-Funktion folgt sobald die Aufnahmen vorliegen" kann dann entfernt werden. |

---

## MITTELFRISTIG — Nächste 2–4 Wochen

| # | Priorität | Typ | Aufgabe | Details |
|---|---|---|---|---|
| 7 | 🟡 | 📋💻 | **Über-uns-Seite: Bandmitglieder vorstellen** | Jedes Mitglied mit Foto, Name, Instrument und 2–3 Sätzen. Macht die Band greifbar und menschlich — wichtig für Vertrauen. Content (Fotos + Texte) vom Auftraggeber einholen. |
| 8 | 🟡 | 📋💻 | **Galerie vollständig befüllen** | Nach dem ersten Quick-Fix (ToDo #1) langfristig: professionelles Foto-Shooting planen (Bühne, Band-Portrait, Event-Atmosphäre bei Hochzeit/Ball/Firmenfeier). |
| 9 | 🟡 | 📋 | **Referenzen mit Fotos ergänzen** | Die bestehenden Gäste-Zitate auf der Startseite wirken gut, aber ohne Foto wirken sie weniger authentisch. Wenn möglich: Bild des Brautpaars / der Veranstaltung ergänzen (mit Einverständnis). |
| 10 | 🔵 | 💻 | **Video-Highlight auf eigener Seite oder Galerie-Integration** | Mittelfristig: kurzes Highlight-Video (2–3 Min., echter Auftritt) nicht nur auf Startseite, sondern auch in die Galerie einbinden oder eigene Medien-Seite anlegen. |
| 11 | 🔵 | 💻 | **Walzer-Tab im Repertoire wieder einführen** | War vorhanden und wurde entfernt. Ball-Klientel vermisst ihn. Optional: als separate Kategorie wieder anlegen oder mit "Tanzmusik" zusammenführen. Inhalt wäre z.B. An der schönen blauen Donau, Perfect, A Thousand Years etc. |

---

## QUALITÄT & BUGS

| # | Priorität | Typ | Aufgabe | Details |
|---|---|---|---|---|
| 12 | 🟡 | 💻 | **Alle Navigationslinks auf Funktion prüfen** | Review-Tester meldeten vereinzelt Navigationsprobleme (Hamburger-Menü). Code-Check ergab: Links in `Navigation.tsx` sind korrekt (`/ueber-uns` etc.). Trotzdem: Cross-Browser-Test auf echtem Mobilgerät durchführen (iOS Safari, Android Chrome). |
| 13 | 🔵 | 💻 | **Performance-Audit** | Lighthouse-Audit für alle Hauptseiten durchführen (Performance, Accessibility, SEO). Insbesondere Galerie-Seite wenn echte Bilder eingebunden werden: Bilder mit `next/image` optimieren (WebP, lazy loading, `sizes`-Attribut). |
| 14 | 🔵 | 💻 | **SEO-Metadaten prüfen** | Jede Seite sollte eine eindeutige `title` und `description` in den Metadata-Exports haben. Prüfen ob alle Unterseiten korrekt befüllt sind. |
| 15 | 🔵 | 💻 | **Open Graph / Social Sharing** | `og:image`, `og:title`, `og:description` für Startseite und wichtigste Unterseiten setzen, damit beim Teilen in WhatsApp/Facebook eine ansprechende Vorschau erscheint. |

---

## CONTENT-CHECKLISTE (vom Auftraggeber bereitzustellen)

Diese Punkte sind **keine Code-Aufgaben**, sondern Inhalte, die der Auftraggeber liefern muss:

- [ ] Echte Fotos der Band (min. 5 für Galerie-Sofort-Fix, langfristig 15–20)
- [ ] Video eines echten Auftritts (auch Smartphone-Qualität reicht für den Start)
- [ ] Audio-Previews der Songs (sobald Aufnahmen vorliegen → ToDo #6)
- [ ] Preisspanne / Preisorientierung für FAQ (→ ToDo #5)
- [ ] Kurzvorstellungen und Fotos aller Bandmitglieder (→ ToDo #7)
- [ ] Einverständnis von Referenzkunden für Foto-Nutzung (→ ToDo #9)

---

## ZUSAMMENFASSUNG NACH DRINGLICHKEIT

```
🔴 SOFORT (Blocker):     #1 Fotos, #2 Video
🟡 DIESE WOCHE:          #3 Walzer/Tanzmusik Text, #4 Mobilformular, #5 Preis-FAQ, #6 Audio-URLs vorbereiten
🟡 MITTELFRISTIG:        #7 Über uns, #8 Galerie voll, #9 Referenzfotos
🔵 NICE-TO-HAVE:         #10 Video-Seite, #11 Walzer-Tab, #13 Perf-Audit, #14 SEO, #15 OG-Tags
📋 VOM AUFTRAGGEBER:     Fotos, Video, Audio, Preise, Bandmitglieder-Infos
```

---

*Quelle: review/08_abschlussbericht.md — Tester: Sabrina Koller, Markus Pflüger, Gertrude Wallner*
