import React from "react";
import Loader from "./components/Loader";
import { getHomeJsonLd, safeJsonLdReplacer } from "@/lib/jsonLd";

export const metadata = {
  title: {
    absolute: "Riad de lujo solo adultos en Marrakech, Medina | Pure House",
  },
  description:
    "Descubre Pure House, riad de lujo solo adultos en la Medina de Marrakech junto a Jemaa el-Fna. Disfruta de piscina en el patio y terraza panorámica.",
  alternates: {
    canonical: "https://purehousemarrakech.com/es/",
    languages: {
      en: "https://purehousemarrakech.com/",
      fr: "https://purehousemarrakech.com/fr/",
      es: "https://purehousemarrakech.com/es/",
      "x-default": "https://purehousemarrakech.com/",
    },
  },
  openGraph: {
    title: "Riad de lujo solo adultos en Marrakech, Medina | Pure House",
    description:
      "Descubre Pure House, riad de lujo solo adultos en la Medina de Marrakech junto a Jemaa el-Fna. Disfruta de piscina en el patio y terraza panorámica.",
    url: "https://purehousemarrakech.com/es/",
    siteName: "Pure House Marrakech",
    locale: "es_ES",
    alternateLocale: ["en_US", "fr_FR"],
    type: "website",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 630,
        alt: "Riad de lujo solo adultos Pure House en la Medina de Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riad de lujo solo adultos en Marrakech, Medina | Pure House",
    description:
      "Descubre Pure House, riad de lujo solo adultos en la Medina de Marrakech junto a Jemaa el-Fna. Disfruta de piscina en el patio y terraza panorámica.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const Page = () => {
  const jsonLd = getHomeJsonLd("es");

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
