// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/lang/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://g8luxwork.com"),
  title: {
    default: "G8LuxWork | Rénovation & Travaux à Témara",
    template: "%s | G8LuxWork",
  },
  description:
    "Entreprise de rénovation & travaux à Témara: plomberie, électricité, peinture, faux plafonds, aluminium, verre, caméras. Devis rapide.",
  alternates: {
    canonical: "https://g8luxwork.com",
  },
  openGraph: {
    type: "website",
    url: "https://g8luxwork.com",
    title: "G8LuxWork | Rénovation & Travaux à Témara",
    description:
      "Rénovation & travaux à Témara: plomberie, électricité, peinture, faux plafonds, aluminium, verre, caméras. Devis rapide.",
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
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}