export type EventStatus = 'upcoming' | 'confirmed' | 'past';

export interface Termin {
  id: string;
  dateISO: string;
  day: string;
  monthShort: string;
  year: string;
  weekday: string;
  eventName: string;
  venue: string;
  status: EventStatus;
  statusLabel: string;
}

// Aktuelles Datum: April 2026
// Alle Termine liegen in der Zukunft (Mai–August 2026)
export const TERMINE: Termin[] = [
  {
    id: '2026-05-07-musikfruehling',
    dateISO: '2026-05-07',
    day: '07',
    monthShort: 'Mai',
    year: '2026',
    weekday: 'Do',
    eventName: 'Musikfrühling',
    venue: 'Hoaterwirt, Frohnleiten',
    status: 'confirmed',
    statusLabel: 'Bestätigt',
  },
  {
    id: '2026-05-09-rinthpark-eroeffnung',
    dateISO: '2026-05-09',
    day: '09',
    monthShort: 'Mai',
    year: '2026',
    weekday: 'Sa',
    eventName: 'Eröffnung Rinthpark',
    venue: 'Rinthpark, Frohnleiten',
    status: 'confirmed',
    statusLabel: 'Bestätigt',
  },
  {
    id: '2026-06-21-lesung',
    dateISO: '2026-06-21',
    day: '21',
    monthShort: 'Jun',
    year: '2026',
    weekday: 'So',
    eventName: 'Lesung',
    venue: 'Bibliothek, Frohnleiten',
    status: 'upcoming',
    statusLabel: 'Bald',
  },
  {
    id: '2026-08-01-spoe-sommerfest',
    dateISO: '2026-08-01',
    day: '01',
    monthShort: 'Aug',
    year: '2026',
    weekday: 'Sa',
    eventName: 'SPÖ-Sommerfest',
    venue: 'Rinthpark, Frohnleiten',
    status: 'upcoming',
    statusLabel: 'Bald',
  },
  {
    id: '2026-08-12-akustische-sommernacht',
    dateISO: '2026-08-12',
    day: '12',
    monthShort: 'Aug',
    year: '2026',
    weekday: 'Mi',
    eventName: 'Akustische Sommernacht',
    venue: 'Hauptplatz, Frohnleiten',
    status: 'upcoming',
    statusLabel: 'Bald',
  },
  {
    id: '2026-08-15-teichjubilaeum',
    dateISO: '2026-08-15',
    day: '15',
    monthShort: 'Aug',
    year: '2026',
    weekday: 'Sa',
    eventName: 'Teichjubiläum',
    venue: 'Tieschen',
    status: 'upcoming',
    statusLabel: 'Bald',
  },
  {
    id: '2026-08-29-grillfest',
    dateISO: '2026-08-29',
    day: '29',
    monthShort: 'Aug',
    year: '2026',
    weekday: 'Sa',
    eventName: 'Grillfest',
    venue: 'Trend, Frohnleiten',
    status: 'upcoming',
    statusLabel: 'Bald',
  },
];
