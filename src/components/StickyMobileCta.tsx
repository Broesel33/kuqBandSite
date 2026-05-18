"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(total > 0 && scrolled / total >= 0.5);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      style={{
        position: "fixed",
        bottom: "env(safe-area-inset-bottom, 1rem)",
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? "0" : "120%"})`,
        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        zIndex: 40,
        display: "none",
      }}
      className="mobile-sticky-cta"
    >
      <Link
        href="/kontakt"
        tabIndex={visible ? 0 : -1}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          backgroundColor: "var(--color-amber)",
          color: "#000",
          fontFamily: "var(--font-ui)",
          fontWeight: 700,
          fontSize: "0.9375rem",
          padding: "0.875rem 2rem",
          borderRadius: "9999px",
          textDecoration: "none",
          minHeight: "48px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          whiteSpace: "nowrap",
        }}
      >
        <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: "1.1rem" }}>
          mail
        </span>
        Jetzt anfragen
      </Link>
    </div>
  );
}
