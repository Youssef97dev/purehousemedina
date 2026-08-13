import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Riad Solo para Adultos en Marrakech | Pure House",
  description:
    "Descubre Pure House Marrakech, un riad boutique de lujo solo para adultos en la Medina. Un refugio exclusivo para parejas, lunas de miel y escapadas románticas en un ambiente de calma y privacidad.",
  keywords: [
    "riad solo para adultos Marrakech",
    "hotel solo para adultos Marrakech",
    "riad adults only Marrakech",
    "hotel adults only Marrakech",
    "riad de lujo solo para adultos",
    "riad romántico Marrakech",
    "riad para parejas Marrakech",
    "hotel boutique para adultos Marrakech",
    "riad en la Medina de Marrakech",
    "luna de miel Marrakech",
    "escapada romántica Marrakech",
    "Pure House Marrakech",
  ],
  alternates: {
    canonical: "https://purehousemarrakech.com/es/solo-adultos/",
    languages: {
      en: "https://purehousemarrakech.com/adults-only/",
      fr: "https://purehousemarrakech.com/fr/adults-only/",
      es: "https://purehousemarrakech.com/es/solo-adultos/",
    },
  },
  openGraph: {
    title: "Riad Solo para Adultos en Marrakech | Pure House",
    description:
      "Un refugio de lujo solo para adultos en la Medina de Marrakech, diseñado para parejas, lunas de miel y escapadas románticas en un ambiente de tranquilidad y privacidad.",
    url: "https://purehousemarrakech.com/es/solo-adultos/",
    siteName: "Pure House Marrakech",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 800,
        alt: "Riad de lujo solo para adultos Pure House Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riad Solo para Adultos en Marrakech | Pure House",
    description:
      "Descubre Pure House Marrakech, un riad boutique de lujo solo para adultos en la Medina.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
