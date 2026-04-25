"use server";

export interface ContactFormData {
  name: string;
  email: string;
  telefon: string;
  datum: string;
  anlass: string;
  nachricht: string;
}

export interface ContactFormResult {
  success: boolean;
  errors?: Partial<Record<keyof ContactFormData | "_global", string>>;
}

export async function sendContactForm(
  data: ContactFormData
): Promise<ContactFormResult> {
  if (!data.name.trim() || !data.email.trim() || !data.anlass || !data.nachricht.trim()) {
    return { success: false, errors: { _global: "Bitte alle Pflichtfelder ausfüllen." } };
  }

  if (process.env.NODE_ENV !== "production") {
    return { success: true };
  }

  try {
    // resend is installed before production deployment (npm install resend)
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any
    const { Resend } = require("resend") as any;
    const resend = new Resend(process.env.RESEND_API_KEY) as any;
    await resend.emails.send({
      from: "website@kreizundquer.at",
      to: "info@kreizundquer.com",
      subject: `Neue Anfrage: ${data.anlass} — ${data.name}`,
      html: `
        <h2>Neue Anfrage über kreizundquer.at</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.telefon || "—"}</p>
        <p><strong>Wunschdatum:</strong> ${data.datum || "—"}</p>
        <p><strong>Anlass:</strong> ${data.anlass}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${data.nachricht.replace(/\n/g, "<br/>")}</p>
      `,
    });
    return { success: true };
  } catch {
    return {
      success: false,
      errors: { _global: "E-Mail konnte nicht gesendet werden. Bitte versuche es erneut." },
    };
  }
}
