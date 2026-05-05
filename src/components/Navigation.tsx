"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/faq", label: "FAQ" },
  { href: "/repertoire", label: "Repertoire" },
  { href: "/galerie", label: "Galerie" },
  { href: "/termine", label: "Termine" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Close on route change
  useEffect(() => {
    if (detailsRef.current) detailsRef.current.open = false;
  }, [pathname]);

  // Scroll-aware shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When menu opens, make background inert so VoiceOver/TalkBack and touch
  // can't reach the page content behind it. Reverse on close.
  useEffect(() => {
    const details = detailsRef.current;
    if (!details) return;
    const setBackgroundHidden = (hidden: boolean) => {
      const main = document.getElementById("main-content");
      const footer = document.querySelector("footer");
      for (const el of [main, footer]) {
        if (!el) continue;
        if (hidden) {
          el.setAttribute("inert", "");
          el.setAttribute("aria-hidden", "true");
        } else {
          el.removeAttribute("inert");
          el.removeAttribute("aria-hidden");
        }
      }
      document.body.style.overflow = hidden ? "hidden" : "";
    };
    const onToggle = () => setBackgroundHidden(details.open);
    details.addEventListener("toggle", onToggle);
    return () => {
      details.removeEventListener("toggle", onToggle);
      setBackgroundHidden(false);
    };
  }, []);

  const closeMenu = () => {
    if (detailsRef.current) detailsRef.current.open = false;
  };

  // Escape-to-close für Mobile-Menü
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && detailsRef.current?.open) {
        detailsRef.current.open = false;
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50"
      style={{
        backgroundColor: "var(--color-navy)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.35)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-3 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          aria-label="Kreiz & Quer – Startseite"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Kreiz & Quer"
            width={71}
            height={40}
            priority
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Hauptnavigation">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className="pb-0.5 font-semibold uppercase text-[11px] tracking-widest"
                style={{
                  fontFamily: "var(--font-ui)",
                  color: active ? "var(--color-gold)" : "rgba(232,242,243,0.75)",
                  borderBottom: active ? "2px solid var(--color-gold)" : "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "rgba(232,242,243,1)";
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "rgba(232,242,243,0.75)";
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            className="ml-2 px-5 py-2 rounded-xl font-semibold text-[11px] uppercase tracking-widest btn-cta"
            style={{
              fontFamily: "var(--font-ui)",
              backgroundColor: "var(--color-gold)",
              color: "#000",
              minHeight: "44px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Unverbindlich anfragen <span aria-hidden="true">→</span>
          </Link>
        </nav>

        {/*
          Mobile: native <details>/<summary> disclosure.
          Browsers handle the toggle natively — no JS click handlers, no React state.
          Works reliably with touch, VoiceOver, TalkBack, keyboard.
          The <summary> sits in the flex row; the menu drops below the header bar.
        */}
        <details ref={detailsRef} className="md:hidden mobile-nav-details">
          <summary
            aria-label="Menü"
            className="mobile-nav-summary flex items-center justify-center cursor-pointer"
            style={{
              width: "44px",
              height: "44px",
              color: "#e8f2f3",
              listStyle: "none",
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
              userSelect: "none",
            }}
          >
            <span
              className="material-symbols-outlined mobile-nav-icon-menu"
              aria-hidden="true"
            >
              menu
            </span>
            <span
              className="material-symbols-outlined mobile-nav-icon-close"
              aria-hidden="true"
            >
              close
            </span>
          </summary>

          <nav
            id="mobile-menu"
            aria-label="Mobile Navigation"
            className="mobile-nav-menu"
            style={{
              backgroundColor: "var(--color-navy)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              padding: "0.5rem 1.5rem 1.5rem",
            }}
          >
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: active ? "var(--color-gold)" : "rgba(240,237,232,0.8)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 0.75rem",
                    borderRadius: "0.375rem",
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              onClick={closeMenu}
              className="btn-cta"
              style={{
                marginTop: "0.75rem",
                backgroundColor: "var(--color-gold)",
                color: "#000",
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.375rem",
                overflow: "hidden",
              }}
            >
              Unverbindlich anfragen <span aria-hidden="true" style={{ marginLeft: "0.25rem" }}>→</span>
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
