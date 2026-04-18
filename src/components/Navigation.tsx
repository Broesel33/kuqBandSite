"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/galerie", label: "Galerie" },
  { href: "/setlist", label: "Setlist" },
  { href: "/termine", label: "Termine" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm transition-all duration-300 glass-effect">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Kreiz & Quer Logo" width={40} height={40} className="object-contain" />
          <span className="text-xl font-black tracking-tight text-[var(--color-primary-container)]" style={{ fontFamily: "var(--font-headline)" }}>
            Kreiz &amp; Quer
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`pb-1 font-semibold uppercase text-[11px] tracking-widest transition-colors duration-300 ${
                  active
                    ? "text-[var(--color-secondary)] border-b-2 border-[var(--color-secondary)]"
                    : "text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)]"
                }`}
                style={{ fontFamily: "var(--font-label)" }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden text-[var(--color-on-surface)] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[var(--color-outline-variant)]/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`font-semibold uppercase text-[11px] tracking-widest transition-colors duration-300 py-2 ${
                  active ? "text-[var(--color-secondary)]" : "text-[var(--color-on-surface-variant)] hover:text-[var(--color-secondary)]"
                }`}
                style={{ fontFamily: "var(--font-label)" }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
