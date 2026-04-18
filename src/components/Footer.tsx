import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 md:px-8 bg-[var(--color-primary-container)]">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Kreiz & Quer Logo" width={48} height={48} className="object-contain brightness-[2] opacity-80" />
          <span className="text-xl font-black text-white" style={{ fontFamily: "var(--font-headline)" }}>
            Kreiz &amp; Quer
          </span>
        </div>

        <div className="flex flex-col space-y-4 text-sm" style={{ fontFamily: "var(--font-body)" }}>
          <Link href="/leistungen" className="text-[var(--color-on-primary-container)] hover:text-[var(--color-secondary-fixed)] transition-colors">
            Leistungen
          </Link>
          <Link href="/termine" className="text-[var(--color-on-primary-container)] hover:text-[var(--color-secondary-fixed)] transition-colors">
            Termine
          </Link>
          <Link href="/galerie" className="text-[var(--color-on-primary-container)] hover:text-[var(--color-secondary-fixed)] transition-colors">
            Galerie
          </Link>
          <Link href="/kontakt" className="text-[var(--color-on-primary-container)] hover:text-[var(--color-secondary-fixed)] transition-colors">
            Buchung & Kontakt
          </Link>
          <Link href="/impressum" className="text-[var(--color-on-primary-container)] hover:text-[var(--color-secondary-fixed)] transition-colors">
            Impressum
          </Link>
        </div>

        <div className="text-sm text-[var(--color-on-primary-container)]" style={{ fontFamily: "var(--font-body)" }}>
          <p>© {new Date().getFullYear()} Kreiz &amp; Quer.</p>
          <p className="mt-1 text-[var(--color-secondary-fixed)]/60">The Electric Gallery Experience.</p>
        </div>
      </div>
    </footer>
  );
}
