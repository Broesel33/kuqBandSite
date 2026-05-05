import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata = {
  title: "Live-Band anfragen & buchen | Graz, Steiermark – Kreiz & Quer",
  description:
    "Schreib uns für eine unverbindliche Anfrage — Kreiz & Quer, Live-Band aus der Steiermark. Wir antworten innerhalb von 24 Stunden.",
  alternates: { canonical: "https://www.kreizundquer.at/kontakt" },
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header
        style={{ backgroundColor: "var(--color-dark)" }}
        className="py-20 px-6 md:px-8"
      >
        <div className="max-w-screen-xl mx-auto">
          <p
            aria-hidden="true"
            style={{
              color: "var(--color-amber)",
              fontFamily: "var(--font-ui)",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Schreib uns
          </p>
          <h1
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              color: "var(--color-text-on-dark)",
              marginBottom: "1rem",
            }}
          >
            Kontakt
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              color: "var(--color-text-muted-on-dark)",
              maxWidth: "36rem",
              lineHeight: 1.6,
            }}
          >
            Schreib uns, wie du dir dein Event vorstellst — wir melden uns innerhalb von 24 Stunden zurück, meist deutlich schneller.
          </p>
        </div>
      </header>

      {/* Main Section */}
      <section
        aria-labelledby="kontakt-heading"
        style={{
          backgroundColor: "var(--color-surface)",
          padding: "4rem 1.5rem 6rem",
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <h2 id="kontakt-heading" className="sr-only">
            Kontaktformular und Kontaktinformationen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-16">
            {/* Left: Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <aside aria-label="Kontaktinformationen">
              {/* Box 1: Direkt erreichen */}
              <div
                style={{
                  backgroundColor: "var(--color-warm-gray)",
                  borderRadius: "var(--radius-xl)",
                  padding: "2rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginBottom: "1.5rem",
                  }}
                >
                  So erreichst du uns sofort
                </h3>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.125rem",
                  }}
                >
                  {/* Email */}
                  <li style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                      style={{
                        fontSize: "1.25rem",
                        color: "var(--color-amber)",
                        flexShrink: 0,
                        width: "1.5rem",
                        textAlign: "center",
                      }}
                    >
                      mail
                    </span>
                    <a
                      href="mailto:info@kreizundquer.com"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--color-text)",
                        textDecoration: "none",
                        fontSize: "0.9375rem",
                      }}
                    >
                      info@kreizundquer.com
                    </a>
                  </li>

                  {/* Telefon */}
                  <li style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                      style={{
                        fontSize: "1.25rem",
                        color: "var(--color-amber)",
                        flexShrink: 0,
                        width: "1.5rem",
                        textAlign: "center",
                      }}
                    >
                      phone
                    </span>
                    <a
                      href="tel:+436802378954"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--color-text)",
                        textDecoration: "none",
                        fontSize: "0.9375rem",
                      }}
                    >
                      +43 680 23 78 95 4
                    </a>
                  </li>

                  {/* WhatsApp */}
                  <li style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <WhatsAppIcon
                      className="w-5 h-5"
                      style={{ color: "var(--color-amber)", flexShrink: 0 }}
                    />
                    <a
                      href="https://wa.me/436802378954"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp — öffnet in neuem Tab"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--color-text)",
                        textDecoration: "none",
                        fontSize: "0.9375rem",
                      }}
                    >
                      +43 680 23 78 95 4
                      <span className="sr-only"> öffnet in neuem Tab</span>
                    </a>
                  </li>

                  {/* Ort */}
                  <li style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                      style={{
                        fontSize: "1.25rem",
                        color: "var(--color-amber)",
                        flexShrink: 0,
                        width: "1.5rem",
                        textAlign: "center",
                      }}
                    >
                      location_on
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "var(--color-text)",
                        fontSize: "0.9375rem",
                      }}
                    >
                      Frohnleiten, Steiermark
                    </span>
                  </li>
                </ul>
              </div>

              {/* Box 2: Schnelle Antwort */}
              <div
                style={{
                  backgroundColor: "var(--color-dark)",
                  borderRadius: "var(--radius-xl)",
                  padding: "2rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--color-text-on-dark)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Wir lesen das gleich.
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-text-muted-on-dark)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                  }}
                >
                  Wir sind meist innerhalb weniger Stunden erreichbar — am schnellsten per WhatsApp. Spätestens innerhalb von 24 Stunden hörst du von uns.
                </p>
              </div>

              {/* Social Links */}
              <div
                style={{
                  backgroundColor: "var(--color-warm-gray)",
                  borderRadius: "var(--radius-xl)",
                  padding: "2rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Bleib am Ohr
                </h3>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.875rem",
                  }}
                >
                  {/* Instagram */}
                  <li>
                    <a
                      href="https://www.instagram.com/kreizundquer"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Kreiz &amp; Quer auf Instagram — öffnet in neuem Tab"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        color: "var(--color-text)",
                        textDecoration: "none",
                        minHeight: "44px",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                        aria-hidden="true"
                        style={{ color: "var(--color-amber)", flexShrink: 0 }}
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      @kreizundquer
                      <span className="sr-only">öffnet in neuem Tab</span>
                    </a>
                  </li>

                  {/* Facebook */}
                  <li>
                    <a
                      href="https://www.facebook.com/kreizundquer"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Kreiz &amp; Quer auf Facebook — öffnet in neuem Tab"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        color: "var(--color-text)",
                        textDecoration: "none",
                        minHeight: "44px",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                        aria-hidden="true"
                        style={{ color: "var(--color-amber)", flexShrink: 0 }}
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Kreiz &amp; Quer
                      <span className="sr-only">öffnet in neuem Tab</span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
    