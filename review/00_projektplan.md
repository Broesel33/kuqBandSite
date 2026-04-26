# Projektplan: Website-Review „Kreiz & Quer"

**Projekt:** Qualitäts- und Nutzbarkeits-Review der Band-Website kuq3-web  
**Auftraggeber:** Band Kreiz & Quer  
**Projektleiter:** Review-Team-Lead  
**Stand:** 2026-04-26  
**Version:** 1.0

---

## 1. Projektziel

Die Website von Kreiz & Quer soll potenzielle Auftraggeber — hauptsächlich Brautpaare, Firmen-Event-Planer und Veranstaltungsorganisatoren — dazu bewegen, die Band für ihren Anlass zu buchen. Das Review prüft, ob die Website dieses Ziel erfüllt.

### Konkrete Ziele des Reviews

- **Professioneller Ersteindruck:** Wirkt die Seite auf Anhieb vertrauenswürdig und hochwertig?
- **Conversionpfad:** Gelangen Besucher intuitiv zur Kontakt-/Buchungsseite?
- **Informationsvollständigkeit:** Finden Interessierte alle relevanten Informationen (Leistungen, Repertoire, Preise, Termine)?
- **Barrierefreiheit & Zugänglichkeit:** Ist die Seite auch für weniger technikaffine Nutzer bedienbar?
- **Mobiloptimierung:** Funktioniert die Seite einwandfrei auf Smartphones (dominant bei dieser Zielgruppe)?
- **Vertrauen & Glaubwürdigkeit:** Wirken Band, Fotos, Texte und Referenzen überzeugend?

---

## 2. Team

| Rolle | Person | Verantwortung |
|---|---|---|
| Projektleiter | Review-Team-Lead | Koordination, Gesamtbewertung, Abschlussbericht |
| Design & Umfrage-Experte | Design-Analyst | UX-Analyse, Farbgebung, Typografie, Umfragedesign |
| Tester — Profil A | Sabrina Koller (Braut) | Nutzerperspektive Hochzeit, Ersteindruck, Emotionalität |
| Tester — Profil B | Markus Pflüger (Firmen-Planer) | Effizienz, Informationsdichte, B2B-Perspektive |
| Tester — Profil C | Gertrude Wallner (Ball-Organisatorin) | Zugänglichkeit, Vertrauen, ältere Nutzergruppe |

---

## 3. Zeitplan (fiktiv, realistisch)

| KW | Datum | Phase | Verantwortlich |
|---|---|---|---|
| KW 18 | 27.04. – 28.04. | Kick-off, Aufgabenverteilung, Zugang zum Dev-Server | Projektleiter |
| KW 18 | 29.04. | Erkundung der Website (alle Seiten, alle Funktionen) | Alle |
| KW 19 | 30.04. – 04.05. | Parallele Tests: Tester A/B/C erstellen Reports, Design-Analyst erstellt UX-Analyse | Tester + Design-Analyst |
| KW 19 | 05.05. | Zwischensitzung: Zwischenfeedback, offene Fragen klären | Alle |
| KW 20 | 06.05. – 08.05. | Konsolidierung: Befunde zusammenführen, Prioritäten setzen | Projektleiter + Design-Analyst |
| KW 20 | 09.05. | Abschlussbericht + Empfehlungskatalog fertigstellen | Projektleiter |
| KW 20 | 12.05. | Präsentation der Ergebnisse an den Auftraggeber | Projektleiter |

**Gesamtdauer:** ca. 2 Wochen

---

## 4. Zu testende Seiten

| Route | Seitenname | Priorität |
|---|---|---|
| `/` | Startseite | Hoch |
| `/leistungen` | Leistungen | Hoch |
| `/kontakt` | Kontakt / Buchungsanfrage | Hoch |
| `/repertoire` | Repertoire | Mittel |
| `/termine` | Termine / Auftritte | Mittel |
| `/ueber-uns` | Über uns / Bandmitglieder | Mittel |
| `/galerie` | Galerie | Niedrig |
| `/impressum` | Impressum | Niedrig |

---

## 5. Testmethoden

- **Lautes Denken (Think-Aloud):** Tester beschreiben während der Navigation ihre Gedanken und Eindrücke.
- **Aufgabenbasiertes Testen:** Vordefinierte Aufgaben (z. B. „Finde heraus, ob die Band für eure Hochzeit verfügbar ist und stelle eine Anfrage.").
- **Heuristische Evaluation:** Design-Analyst bewertet die Seite nach Nielsen-Heuristiken.
- **Screenshot-Dokumentation:** Alle Tester machen Screenshots von auffälligen Stellen (positiv & negativ).
- **Bewertungsbögen:** Standardisierte Fragebögen nach jedem Seitenbesuch (1–5 Skala + Freitext).

---

## 6. Erfolgskriterien

Das Review gilt als erfolgreich, wenn folgende Kriterien erfüllt sind:

| Kriterium | Zielwert |
|---|---|
| Alle 8 Unterseiten vollständig getestet | 100 % |
| Abschlussbericht mit priorisierten Verbesserungsempfehlungen | Vorhanden |
| Schwerwiegende Usability-Probleme identifiziert | Vollständig dokumentiert |
| Durchschnittliche Tester-Bewertung (Gesamteindruck) | ≥ 3,5 / 5 ist Ziel; darunter = kritischer Handlungsbedarf |
| Conversionpfad zur Kontaktseite für alle Tester klar erkennbar | Ja/Nein dokumentiert |
| Mobile Ansicht geprüft (Smartphone-Simulation) | Ja/Nein dokumentiert |

---

## 7. Deliverables (Ergebnisse)

- `03_ux_analyse.md` — Heuristische Evaluation durch Design-Analyst
- `04_tester_a_report.md` — Testbericht Sabrina Koller
- `05_tester_b_report.md` — Testbericht Markus Pflüger
- `06_tester_c_report.md` — Testbericht Gertrude Wallner
- `07_konsolidierter_befund.md` — Zusammenführung aller Befunde
- `08_empfehlungen.md` — Priorisierter Empfehlungskatalog (Must / Should / Nice-to-have)
- `09_abschlussbericht.md` — Executive Summary für den Auftraggeber

---

## 8. Rahmenbedingungen & Hinweise

- Der Dev-Server läuft unter `http://localhost:3000`. Alle Tests erfolgen lokal.
- Der Auftraggeber ist blind und kann die Website nicht selbst beurteilen — alle Beschreibungen und Befunde müssen daher besonders präzise und bildhaft formuliert werden.
- Es werden keine Live-Daten oder echte Kontaktformulareinsendungen erstellt.
- Die Band ist eine österreichische Kapelle (4 Musiker) aus der Steiermark — kultureller Kontext ist bei der Bewertung zu berücksichtigen.
