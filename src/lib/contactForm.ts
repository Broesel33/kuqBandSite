export const VALID_ANLASS = [
  "Hochzeit",
  "Firmenfeier",
  "Event / Sonstige",
  "Ball / Gala",
  "Presse / Kooperation",
] as const;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const FIELD_LIMITS = {
  name: 200,
  email: 254,
  telefon: 50,
  datum: 30,
  nachricht: 5000,
} as const;
