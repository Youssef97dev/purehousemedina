import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  metadataBase: new URL("https://purehousemarrakech.com/"),
  title: {
    default: "Adults-Only Luxury Riad in Marrakech Medina | Pure House",
    template: "%s | Pure House",
  },
  description:
    "Experience Pure House, a luxury adults-only boutique riad in Marrakech Medina near Jemaa el-Fna. Relax by the courtyard pool and scenic rooftop terrace.",
  openGraph: {
    title: "Adults-Only Luxury Riad in Marrakech Medina | Pure House",
    description:
      "Experience Pure House, a luxury adults-only boutique riad in Marrakech Medina near Jemaa el-Fna. Relax by the courtyard pool and scenic rooftop terrace.",
    url: "https://purehousemarrakech.com/",
    siteName: "Pure House Marrakech",
    locale: "en_US",
    alternateLocale: ["fr_FR", "es_ES"],
    type: "website",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 630,
        alt: "Pure House Marrakech - Adults-only luxury boutique riad in the Medina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adults-Only Luxury Riad in Marrakech Medina | Pure House",
    description:
      "Experience Pure House, a luxury adults-only boutique riad in Marrakech Medina near Jemaa el-Fna. Relax by the courtyard pool and scenic rooftop terrace.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
  alternates: {
    canonical: "https://purehousemarrakech.com/",
    languages: {
      en: "https://purehousemarrakech.com/",
      fr: "https://purehousemarrakech.com/fr/",
      es: "https://purehousemarrakech.com/es/",
      "x-default": "https://purehousemarrakech.com/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-THT4VYHKCK" />
    </html>
  );
}
