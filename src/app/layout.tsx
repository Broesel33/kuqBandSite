import type { Metadata, Viewport } from "next";
import { Syne, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import ConstructionBanner from "@/components/ConstructionBanner";
import StickyMobileCta from "@/components/StickyMobileCta";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const materialSymbols = localFont({
  src: "./fonts/MaterialSymbolsOutlined.woff2",
  variable: "--font-material-symbols",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#3c4748",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kreizundquer.at"),
  title: "Kreiz & Quer – Live-Band Steiermark | Hochzeiten, Events & Bälle",
  description: "Kreiz & Quer: Live-Coverband aus der Steiermark für Hochzeiten, Events, Firmenfeiern und Bälle in ganz Österreich. 4 Musiker, 200+ Auftritte, 100 % live.",
  openGraph: {
    title: "Kreiz & Quer – Live-Band aus der Steiermark",
    description: "Live-Musik für Hochzeiten, Events und Bälle. 4 Musiker, kein Playback, 200+ Auftritte in ganz Österreich.",
    siteName: "Kreiz & Quer",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kreiz & Quer – Live-Band aus der Steiermark",
    description: "Live-Musik für Hochzeiten, Events und Bälle. 4 Musiker, kein Playback, 200+ Auftritte in ganz Österreich.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-AT"
      className={`${syne.variable} ${manrope.variable} ${materialSymbols.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-text)]">
        {/*
          Markiert das Dokument als „JavaScript läuft". Nur dann starten die
          Einblend-Animationen unsichtbar — ohne JavaScript bleibt jeder Inhalt
          von Anfang an sichtbar. Läuft synchron vor dem ersten Rendern.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <SkipLink />
        <ConstructionBanner />
        <Navigation />
        <main id="main-content" tabIndex={-1} className="flex-grow" style={{ paddingTop: "calc(4.25rem + env(safe-area-inset-top))" }}>
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
