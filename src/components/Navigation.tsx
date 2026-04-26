"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

type NavLink = { href: string; label: string };

const navLinks: NavLink[] = [
  { href: "/", label: "Start" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/repertoire", label: "Repertoire" },
  { href: "/galerie", label: "Galerie" },
  { href: "/termine", label: "Termine" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  const openMenu = () => {
    setMenuOpen(true);
    setTimeout(() => firstMenuLinkRef.current?.focus(), 50);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  // Scroll-aware shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape closes mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 w-full z-50 transition-shadow duration-300"
      style={{
        backgroundColor: "#0d1b2a",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-black tracking-tight"
          style={{ fontFamily: "var(--font-headline)", color: "#f0ede8" }}
        >
          Kreiz{" "}
          <span style={{ color: "#c8951a" }}>&amp;</span>{" "}
          Quer
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
                className="pb-0.5 font-semibold uppercase text-[11px] tracking-widest transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-ui)",
                  color: active ? "#c8951a" : "rgba(240,237,232,0.75)",
                  borderBottom: active ? "2px solid #c8951a" : "2px solid transparent",
                }}
              >
                {label}
              </Link>
            );
          })}

          <Link
            href="/kontakt"
            className="ml-2 px-5 py-2 rounded-md font-semibold text-[11px] uppercase tracking-widest transition-colors duration-200"
            style={{
              fontFamily: "var(--font-ui)",
              backgroundColor: "var(--color-gold)",
              color: "#000",
              minHeight: "44px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Anfragen →
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          ref={hamburgerRef}
          className="md:hidden p-2 flex items-center justify-center rounded"
          style={{
            color: "#f0ede8",
            minWidth: "44px",
            minHeight: "44px",
          }}
          onClick={menuOpen ? closeMenu : openMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile Navigation"
        hidden={!menuOpen}
        className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-1"
        style={{ backgroundColor: "#0d1b2a", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        {navLinks.map(({ href, label }, index) => {
          const active = pathname === href;
          const isFirst = index === 0;
          return (
            <Link
              key={href}
              href={href}
              ref={isFirst ? firstMenuLinkRef : undefined}
              onClick={closeMenu}
              aria-current={active ? "page" : undefined}
              className="font-semibold uppercase text-sm tracking-widest transition-colors duration-200 rounded px-3"
              style={{
                fontFamily: "var(--font-ui)",
                color: active ? "#c8951a" : "rgba(240,237,232,0.8)",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {label}
            </Link>
          );
        })}

        <Link
          href="/kontakt"
          onClick={closeMenu}
          className="mt-3 px-5 rounded-md font-semibold text-sm uppercase tracking-widest text-center transition-colors duration-200"
          style={{
            fontFamily: "var(--font-ui)",
            backgroundColor: "var(--color-gold)",
            color: "#fff",
            minHeight: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Anfragen →
        </Link>
      </div>
    </header>
  );
}
