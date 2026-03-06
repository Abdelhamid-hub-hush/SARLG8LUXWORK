// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { LanguageProvider } from "@/components/lang/LanguageProvider";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  metadataBase: new URL("https://g8luxwork.com"),
  title: {
    default: "G8LuxWork | Rénovation, Construction & Aménagement au Maroc",
    template: "%s | G8LuxWork",
  },
  description:
    "Entreprise de rénovation, construction et aménagement au Maroc: plomberie, électricité, peinture, faux plafonds, aluminium, verre trempé, caméras de surveillance. Devis rapide.",
  alternates: {
    canonical: "https://g8luxwork.com",
  },
  openGraph: {
    type: "website",
    url: "https://g8luxwork.com",
    title: "G8LuxWork | Rénovation, Construction & Aménagement au Maroc",
    description:
      "Entreprise de rénovation, construction et aménagement au Maroc: plomberie, électricité, peinture, faux plafonds, aluminium, verre trempé, caméras de surveillance. Devis rapide.",
    siteName: "G8LuxWork",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "G8LuxWork",
    url: "https://g8luxwork.com",
    areaServed: "MA",
    sameAs: ["https://maps.app.goo.gl/agRyJua2JgZr9Tdf9"],
  };

  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />

          {/* SEO: LocalBusiness schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          {/* ✅ Floating buttons (mobile only): Call + WhatsApp */}
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}