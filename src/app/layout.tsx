import type { Metadata, Viewport } from "next";
import { Syne, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import ConstructionBanner from "@/components/ConstructionBanner";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const materialSymbols = localFont({
  src: "./fonts/MaterialSymbolsOutlined.woff2",
  variable: "--font-material-symbols",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#3c4748",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kreizundquer.at"),
  title: "Die Band aus der Steiermark für dein Event – Live, leidenschaftlich, unvergesslich, Kreiz & Quer",
  description: "Kreiz & Quer: Live-Band aus der Steiermark für Hochzeiten, Events, Bälle und Firmenfeiern in ganz Österreich. 4 Musiker, 200+ Auftritte, 100 % live.",
  openGraph: {
    title: "Kreiz & Quer – Live-Band aus der Steiermark",
    description: "Live-Musik für Hochzeiten, Bälle und Events. 4 Musiker, kein Playback, 200+ Auftritte in ganz Österreich.",
    siteName: "Kreiz & Quer",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kreiz & Quer – Live-Band aus der Steiermark",
    description: "Live-Musik für Hochzeiten, Bälle und Events. 4 Musiker, kein Playback, 200+ Auftritte in ganz Österreich.",
  },
  icons: {
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
      lang="de"
      className={`${syne.variable} ${manrope.variable} ${materialSymbols.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-text)]">
        <SkipLink />
        <ConstructionBanner />
        <Navigation />
        <main id="main-content" className="flex-grow pt-[68px]">
          {children}
        </main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
