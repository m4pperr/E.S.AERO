import type { Metadata, Viewport } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import AnalyticsTracker from "@/components/AnalyticsTracker";

export const viewport: Viewport = {
  themeColor: "#08111e",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://esaaero.com"),
  title: "Formation PNC – Devenez Hôtesse de l'air ou Steward | E.S.AERO",
  description:
    "E.S.AERO, première école en Algérie de formation PNC. Théorie, pratique sur simulateur et 60 h de vol réel en compagnie aérienne aux standards européens.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Formation PNC – Devenez Hôtesse de l'air ou Steward | E.S.AERO",
    description:
      "Formation PNC aux standards européens : 114 h de théorie, 49 h sur simulateur et 60 h de vol réel en compagnie aérienne.",
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
    title: "Formation PNC – Devenez Hôtesse de l'air ou Steward | E.S.AERO",
    description:
      "Formation PNC aux standards européens : 114 h de théorie, 49 h sur simulateur et 60 h de vol réel en compagnie aérienne.",
    images: ["/images/hero-aircraft.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-[#08111e]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen bg-[#08111e] text-[#f4f7f9] antialiased selection:bg-[#00A887] selection:text-[#08111e]"
        style={{ fontFamily: "'Rethink Sans', Arial, sans-serif" }}
      >
        <AnalyticsTracker />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
