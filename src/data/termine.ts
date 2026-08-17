export interface Termin {
  id: string;
  dateISO: string;
  eventName: string;
  venue: string;
  /** Beginn im Format HH:MM — speist Anzeige und strukturierte Daten */
  startTime?: string;
  /** true = „ab ca. 19:00 Uhr" statt „ab 19:00 Uhr" */
  timeApprox?: boolean;
  note?: string;
}

// Chronologisch gepflegt. Vergangene Termine werden beim Rendern
// anhand von dateISO ausgefiltert und müssen hier nicht gelöscht werden.
export const TERMINE: Termin[] = [
  {
    id: '2026-05-09-rinthpark-eroeffnung',
    dateISO: '2026-05-09',
    eventName: 'Eröffnung Rinthpark',
    venue: 'Rinthpark, Frohnleiten',
    startTime: '14:00',
    timeApprox: true,
  },
  {
    id: '2026-06-21-lesung',
    dateISO: '2026-06-21',
    eventName: 'Lesung',
    venue: 'Bibliothek, Frohnleiten',
    startTime: '19:00',
    timeApprox: true,
    note: 'Akustische Begleitung zwischen den Lesungen',
  },
  {
    id: '2026-08-01-sommerfest',
    dateISO: '2026-08-01',
    eventName: 'Sommerfest',
    venue: 'Rinthpark, Frohnleiten',
    startTime: '22:00',
  },
  {
    id: '2026-08-12-akustische-sommernacht',
    dateISO: '2026-08-12',
    eventName: 'Akustische Sommernacht',
    venue: 'Hauptplatz, Frohnleiten',
    startTime: '19:00',
  },
  {
    id: '2026-08-21-grillfest',
    dateISO: '2026-08-21',
    eventName: 'Grillfest',
    venue: 'Trend, Frohnleiten',
    startTime: '18:00',
  },
  {
    id: '2026-09-18-modeschau',
    dateISO: '2026-09-18',
    eventName: 'Modeschau',
    venue: 'Hauptplatz, Frohnleiten',
    startTime: '18:00',
  },
];
