import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/kreizuquer/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.027 4.388 11.025 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.024 1.792-4.696 4.533-4.696 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.269h3.328l-.532 3.49h-2.796v8.437C19.612 23.098 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kreiz_und_quer/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@kreizquer",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 md:px-8 bg-[var(--color-primary-container)]">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo.png" alt="Kreiz & Quer Logo" width={48} height={48} className="object-contain brightness-[2] opacity-80" />
            <span className="text-xl font-black text-white" style={{ fontFamily: "var(--font-headline)" }}>
              Kreiz &amp; Quer
            </span>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--color-secondary-fixed)]/70 hover:text-[var(--color-secondary-fixed)] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-4 text-sm" style={{ fontFamily: "var(--font-body)" }}>
          <Link href="/leistungen" className="text-[var(--color-on-primary-container)] hover:text-[var(--color-secondary-fixed)] transition-colors">
            Leistungen
          </Link>
          <Link href="/#events" className="text-[var(--color-on-primary-container)] hover:text-[var(--color-secondary-fixed)] transition-colors">
            Öffentliche Events
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
          <a href="tel:+436802378954" className="flex items-center gap-2 hover:text-white transition-colors mb-2">
            <span className="material-symbols-outlined text-base text-[var(--color-secondary-fixed)]">phone</span>
            +43 680 23 78 95 4
          </a>
          <a href="https://wa.me/436802378954" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors mb-4">
            <WhatsAppIcon className="w-4 h-4 text-[var(--color-secondary-fixed)]" />
            WhatsApp
          </a>
          <a href="mailto:info@kreizundquer.com" className="flex items-center gap-2 hover:text-white transition-colors mb-2">
            <span className="material-symbols-outlined text-base text-[var(--color-secondary-fixed)]">mail</span>
            info@kreizundquer.com
          </a>
          <p className="text-[var(--color-secondary-fixed)]/60">© {new Date().getFullYear()} Kreiz &amp; Quer. Live-Band aus der Steiermark.</p>
        </div>
      </div>
    </footer>
  );
}
