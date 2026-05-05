"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div
        className="mx-auto max-w-3xl rounded-[var(--radius-xl)] shadow-2xl"
        style={{
          background: "var(--color-dark)",
          color: "var(--color-text-on-dark)",
          border: "1px solid var(--color-dark-mid)",
        }}
      >
        <div className="flex flex-col gap-4 p-5 sm:p-6">
          <div>
            <h2
              id="cookie-title"
              className="mb-1.5 text-base font-semibold leading-snug"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Wir verwenden Cookies
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted-on-dark)" }}>
              Diese Website nutzt Cookies und ähnliche Technologien, um dir die
              bestmögliche Erfahrung zu bieten und unsere Angebote zu verbessern.
              Mehr dazu findest du in unserer{" "}
              <Link
                href="/datenschutz"
                className="underline underline-offset-2 hover:opacity-80 focus-visible:rounded"
                style={{ color: "var(--color-amber)" }}
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <button
              onClick={decline}
              className="rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-75 focus-visible:rounded-[var(--radius-md)]"
              style={{
                background: "transparent",
                color: "var(--color-text-on-dark)",
                border: "1px solid var(--color-dark-mid)",
              }}
            >
              Ablehnen
            </button>
            <button
              onClick={accept}
              className="rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:rounded-[var(--radius-md)]"
              style={{
                background: "var(--color-amber)",
                color: "var(--color-amber-text)",
              }}
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
