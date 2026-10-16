import Loader from "@/components/Loader";
import { getHomeJsonLd, safeJsonLdReplacer } from "@/lib/jsonLd";

export const metadata = {
  title: {
    absolute: "Adults-Only Luxury Riad in Marrakech Medina | Pure House",
  },
  description:
    "Experience Pure House, a luxury adults-only boutique riad in Marrakech Medina near Jemaa el-Fna. Relax by the courtyard pool and scenic rooftop terrace.",
  alternates: {
    canonical: "https://purehousemarrakech.com/",
    languages: {
      en: "https://purehousemarrakech.com/",
      fr: "https://purehousemarrakech.com/fr/",
      es: "https://purehousemarrakech.com/es/",
      "x-default": "https://purehousemarrakech.com/",
    },
  },
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
        alt: "Adults-only luxury boutique riad Pure House in the Marrakech Medina",
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
};

export default function Home() {
  const jsonLd = getHomeJsonLd("en");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLdReplacer(jsonLd),
        }}
      />
      <Loader />
    </>
  );
}
