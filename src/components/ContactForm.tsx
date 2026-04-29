"use client";

import { useState } from "react";
import { sendContactForm, ContactFormData } from "@/app/kontakt/actions";

type FieldErrors = Partial<Record<keyof ContactFormData | "_global", string>>;

function validate(data: ContactFormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim()) errors.name = "Name ist erforderlich.";
  if (!data.email.trim()) {
    errors.email = "E-Mail-Adresse ist erforderlich.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Bitte eine gültige E-Mail-Adresse eingeben.";
  }
  if (!data.anlass) errors.anlass = "Bitte einen Anlass auswählen.";
  if (!data.nachricht.trim()) errors.nachricht = "Nachricht ist erforderlich.";
  return errors;
}

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "0.625rem 0",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  borderBottom: "2px solid var(--color-border)",
  background: "transparent",
  color: "var(--color-text)",
  fontFamily: "var(--font-body)",
  fontSize: "1rem",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    telefon: "",
    datum: "",
    anlass: "",
    nachricht: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clientErrors = validate(form);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      const firstErrorField = Object.keys(clientErrors)[0];
      document.getElementById(`contact-${firstErrorField}`)?.focus();
      return;
    }
    setErrors({});
    setSubmitting(true);
    const result = await sendContactForm(form);
    setSubmitting(false);
    if (result.success) {
      setSent(true);
    } else {
      setErrors(result.errors ?? { _global: "Ein unbekannter Fehler ist aufgetreten." });
    }
  }

  if (sent) {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          background: "var(--color-warm-gray)",
          borderRadius: "0.875rem",
          padding: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        <span
          className="material-symbols-outlined"
          aria-hidden="true"
          style={{ fontSize: "3rem", color: "var(--color-success)" }}
        >
          check_circle
        </span>
        <h2 style={{ fontFamily: "var(--font-headline)", fontSize: "1.5rem", color: "var(--color-text)" }}>
          Danke für deine Anfrage!
        </h2>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--color-text-secondary)" }}>
          Wir melden uns innerhalb von 24 Stunden persönlich bei dir.
        </p>
      </div>
    );
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--color-text-secondary)",
    fontFamily: "var(--font-ui)",
    marginBottom: "0.375rem",
  };

  const errorStyle: React.CSSProperties = {
    color: "var(--color-error)",
    fontSize: "0.8125rem",
    marginTop: "0.375rem",
    fontFamily: "var(--font-ui)",
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Kontaktformular">
      <p style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)", marginBottom: "2rem", fontFamily: "var(--font-ui)" }}>
        Felder mit <abbr title="Pflichtfeld" aria-label="Pflichtfeld">*</abbr> brauchen wir, um dir antworten zu können.
      </p>

      {errors._global && (
        <div role="alert" style={{ ...errorStyle, marginBottom: "1.5rem", padding: "0.75rem 1rem", background: "rgba(220,38,38,0.08)", borderRadius: "0.5rem" }}>
          {errors._global}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" style={labelStyle}>
            Name <abbr title="Pflichtfeld" aria-label="Pflichtfeld">*</abbr>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            aria-required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            value={form.name}
            onChange={set("name")}
            style={{ ...inputBase, borderBottomColor: errors.name ? "var(--color-error)" : "var(--color-border)" }}
          />
          {errors.name && <span id="contact-name-error" role="alert" style={errorStyle}>{errors.name}</span>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" style={labelStyle}>
            E-Mail <abbr title="Pflichtfeld" aria-label="Pflichtfeld">*</abbr>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            value={form.email}
            onChange={set("email")}
            style={{ ...inputBase, borderBottomColor: errors.email ? "var(--color-error)" : "var(--color-border)" }}
          />
          {errors.email && <span id="contact-email-error" role="alert" style={errorStyle}>{errors.email}</span>}
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="contact-telefon" style={labelStyle}>Telefon</label>
          <input
            id="contact-telefon"
            type="tel"
            autoComplete="tel"
            value={form.telefon}
            onChange={set("telefon")}
            style={inputBase}
          />
        </div>

        {/* Datum */}
        <div>
          <label htmlFor="contact-datum" style={labelStyle}>Wunschdatum</label>
          <input
            id="contact-datum"
            type="date"
            value={form.datum}
            onChange={set("datum")}
            style={inputBase}
          />
        </div>

        {/* Anlass */}
        <div className="sm:col-span-2">
          <label htmlFor="contact-anlass" style={labelStyle}>
            Anlass <abbr title="Pflichtfeld" aria-label="Pflichtfeld">*</abbr>
          </label>
          <select
            id="contact-anlass"
            aria-required
            aria-invalid={!!errors.anlass}
            aria-describedby={errors.anlass ? "contact-anlass-error" : undefined}
            value={form.anlass}
            onChange={set("anlass")}
            style={{ ...inputBase, borderBottomColor: errors.anlass ? "var(--color-error)" : "var(--color-border)" }}
          >
            <option value="">Bitte auswählen …</option>
            <option value="Hochzeit">Hochzeit</option>
            <option value="Ball / Gala">Ball / Gala</option>
            <option value="Firmenfeier">Firmenfeier</option>
            <option value="Event / Sonstige">Event / Sonstige</option>
          </select>
          {errors.anlass && <span id="contact-anlass-error" role="alert" style={errorStyle}>{errors.anlass}</span>}
        </div>

        {/* Nachricht */}
        <div className="sm:col-span-2">
          <label htmlFor="contact-nachricht" style={labelStyle}>
            Nachricht <abbr title="Pflichtfeld" aria-label="Pflichtfeld">*</abbr>
          </label>
          <textarea
            id="contact-nachricht"
            rows={5}
            aria-required
            aria-invalid={!!errors.nachricht}
            aria-describedby={errors.nachricht ? "contact-nachricht-error" : undefined}
            value={form.nachricht}
            onChange={set("nachricht")}
            style={{
              ...inputBase,
              resize: "vertical",
              borderBottom: "none",
              border: `1px solid ${errors.nachricht ? "var(--color-error)" : "var(--color-border)"}`,
              borderRadius: "0.5rem",
              padding: "0.75rem",
            }}
          />
          {errors.nachricht && <span id="contact-nachricht-error" role="alert" style={errorStyle}>{errors.nachricht}</span>}
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <button
          type="submit"
          disabled={submitting}
          style={{
            background: "var(--color-navy)",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.875rem 2.5rem",
            fontSize: "1rem",
            fontWeight: 600,
            fontFamily: "var(--font-ui)",
            cursor: submitting ? "not-allowed" : "pointer",
            opacity: submitting ? 0.7 : 1,
            minHeight: "44px",
            transition: "background 0.2s",
          }}
          aria-disabled={submitting}
        >
          {submitting ? "Wird gesendet …" : "Anfrage senden"}
        </button>
      </div>
    </form>
  );
}
