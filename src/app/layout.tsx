import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kreizundquer.com"),
  title: "Die Band aus der Steiermark für dein Event – Live, leidenschaftlich, unvergesslich, Kreiz & Quer",
  description: "Kreiz & Quer: Live-Musik für Hochzeiten, Bälle, Firmenfeiern und Events in ganz Österreich. 4 Musiker, 200+ Auftritte, 100 % live.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${syne.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-text)]">
        <SkipLink />
        <Navigation />
        <main id="main-content" className="flex-grow pt-[68px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
