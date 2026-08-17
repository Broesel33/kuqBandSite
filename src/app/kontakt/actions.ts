"use server";

import { headers } from "next/headers";
import { EMAIL_REGEX, FIELD_LIMITS, VALID_ANLASS } from "@/lib/contactForm";

export interface ContactFormData {
  name: string;
  email: string;
  telefon: string;
  datum: string;
  anlass: string;
  nachricht: string;
  // Honeypot: bleibt für Menschen leer, Bots füllen es meist aus.
  website: string;
}

export interface ContactFormResult {
  success: boolean;
  errors?: Partial<Record<keyof ContactFormData | "_global", string>>;
}

// Modul-weiter Speicher; funktioniert nur pro warmer Serverless-Instanz,
// reicht aber als einfache Bremse gegen wiederholtes Absenden.
const lastSubmissionByIp = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60_000;

function validate(data: ContactFormData): ContactFormResult["errors"] {
  const errors: ContactFormResult["errors"] = {};

  if (!data.name.trim()) errors.name = "Name ist erforderlich.";
  else if (data.name.length > FIELD_LIMITS.name) errors.name = "Name ist zu lang.";

  if (!data.email.trim()) errors.email = "E-Mail-Adresse ist erforderlich.";
  else if (data.email.length > FIELD_LIMITS.email) errors.email = "E-Mail-Adresse ist zu lang.";
  else if (!EMAIL_REGEX.test(data.email)) errors.email = "Bitte eine gültige E-Mail-Adresse eingeben.";

  if (data.telefon.length > FIELD_LIMITS.telefon) errors.telefon = "Telefonnummer ist zu lang.";
  if (data.datum.length > FIELD_LIMITS.datum) errors.datum = "Datum ist ungültig.";

  if (!data.anlass || !(VALID_ANLASS as readonly string[]).includes(data.anlass)) {
    errors.anlass = "Bitte einen Anlass auswählen.";
  }

  if (!data.nachricht.trim()) errors.nachricht = "Nachricht ist erforderlich.";
  else if (data.nachricht.length > FIELD_LIMITS.nachricht) errors.nachricht = "Nachricht ist zu lang.";

  return errors;
}

async function getClientIp(): Promise<string> {
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

export async function sendContactForm(
  data: ContactFormData
): Promise<ContactFormResult> {
  const errors = validate(data);
  if (Object.keys(errors ?? {}).length > 0) {
    return { success: false, errors };
  }

  // Honeypot ausgefüllt → vermutlich Bot. Erfolg vortäuschen, nichts versenden.
  if (data.website.trim()) {
    return { success: true };
  }

  const ip = await getClientIp();
  const lastSubmission = lastSubmissionByIp.get(ip);
  if (lastSubmission && Date.now() - lastSubmission < RATE_LIMIT_WINDOW_MS) {
    return {
      success: false,
      errors: { _global: "Bitte warte kurz, bevor du eine weitere Anfrage sendest." },
    };
  }
  lastSubmissionByIp.set(ip, Date.now());

  if (process.env.NODE_ENV !== "production") {
    return { success: true };
  }

  try {
    // resend is installed before production deployment (npm install resend)
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any
    const { Resend } = require("resend") as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const resend = new Resend(process.env.RESEND_API_KEY) as any;
    await resend.emails.send({
      from: "website@kreizundquer.at",
      to: "kreizundquer@gmail.com",
      replyTo: data.email,
      subject: `Neue Anfrage: ${data.anlass} — ${data.name}`,
      text: [
        `Neue Anfrage über kreizundquer.at`,
        ``,
        `Name: ${data.name}`,
        `E-Mail: ${data.email}`,
        `Telefon: ${data.telefon || "—"}`,
        `Wunschdatum: ${data.datum || "—"}`,
        `Anlass: ${data.anlass}`,
        ``,
        `Nachricht:`,
        data.nachricht,
      ].join("\n"),
    });
    return { success: true };
  } catch {
    return {
      success: false,
      errors: { _global: "E-Mail konnte nicht gesendet werden. Bitte versuche es erneut." },
    };
  }
}
