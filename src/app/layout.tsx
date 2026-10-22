import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0b0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://esaaero.com"),
  title: "Formation PNC – Personnel Navigant Commercial | E.S.AERO",
  description:
    "Découvrez la formation PNC proposée par E.S.AERO : formation théorique, pratique et coaching pour préparer votre avenir dans le secteur aéronautique.",
  keywords: [
    "Formation PNC",
    "Personnel Navigant Commercial",
    "Hôtesse de l'air",
    "Steward",
    "CSS Aéronautique",
    "E.S.AERO",
    "École Supérieure de l'Aéronautique",
    "Examen national CSS",
    "Recrutement compagnie aérienne",
  ],
  authors: [{ name: "E.S.AERO – École Supérieure de l'Aéronautique" }],
  openGraph: {
    title: "Formation PNC – Personnel Navigant Commercial | E.S.AERO",
    description:
      "Préparez et réussissez votre formation PNC avec E.S.AERO. Programme complet : théorie, pratique et coaching au recrutement des compagnies aériennes.",
    url: "https://esaaero.com",
    siteName: "E.S.AERO",
    images: [
      {
        url: "/images/hero-aircraft.jpg",
        width: 1200,
        height: 630,
        alt: "Formation PNC E.S.AERO",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation PNC – Personnel Navigant Commercial | E.S.AERO",
    description:
      "Préparez et réussissez votre formation PNC avec E.S.AERO. Programme complet : théorie, pratique et coaching au recrutement.",
    images: ["/images/hero-aircraft.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#08111e] text-[#f4f7f9] antialiased selection:bg-[#00A887] selection:text-[#08111e]" style={{ fontFamily: "'Rethink Sans', Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
