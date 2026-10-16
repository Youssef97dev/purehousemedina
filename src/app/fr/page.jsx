import React from "react";
import Loader from "./components/Loader";
import { getHomeJsonLd, safeJsonLdReplacer } from "@/lib/jsonLd";

export const metadata = {
  title: {
    absolute: "Riad de luxe adults-only à Marrakech, Médina | Pure House",
  },
  description:
    "Découvrez Pure House, riad de luxe adults-only dans la Médina de Marrakech près de Jemaa el-Fna. Cour avec piscine, toit-terrasse et sérénité absolue.",
  alternates: {
    canonical: "https://purehousemarrakech.com/fr/",
    languages: {
      en: "https://purehousemarrakech.com/",
      fr: "https://purehousemarrakech.com/fr/",
      es: "https://purehousemarrakech.com/es/",
      "x-default": "https://purehousemarrakech.com/",
    },
  },
  openGraph: {
    title: "Riad de luxe adults-only à Marrakech, Médina | Pure House",
    description:
      "Découvrez Pure House, riad de luxe adults-only dans la Médina de Marrakech près de Jemaa el-Fna. Cour avec piscine, toit-terrasse et sérénité absolue.",
    url: "https://purehousemarrakech.com/fr/",
    siteName: "Pure House Marrakech",
    locale: "fr_FR",
    alternateLocale: ["en_US", "es_ES"],
    type: "website",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 630,
        alt: "Riad de luxe réservé aux adultes Pure House dans la Médina de Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riad de luxe adults-only à Marrakech, Médina | Pure House",
    description:
      "Découvrez Pure House, riad de luxe adults-only dans la Médina de Marrakech près de Jemaa el-Fna. Cour avec piscine, toit-terrasse et sérénité absolue.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const Page = () => {
  const jsonLd = getHomeJsonLd("fr");

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
};

export default Page;
