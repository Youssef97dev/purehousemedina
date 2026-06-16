import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title:
    "Meilleur Riad de Luxe pour Adultes à Marrakech Médina | Pure House Medina",
  description:
    "Découvrez Pure House Marrakech, un riad de luxe exclusif réservé aux adultes dans la Médina. Oasis de calme avec suites de charme, piscine et toit-terrasse romantique.",
  alternates: {
    canonical: "https://purehousemarrakech.com/fr/",
    languages: {
      "en-US": "https://purehousemarrakech.com/",
      "fr-FR": "https://purehousemarrakech.com/fr/",
      "x-default": "https://purehousemarrakech.com/",
    },
  },
  openGraph: {
    title:
      "Meilleur Riad de Luxe pour Adultes à Marrakech Médina | Pure House Medina",
    description:
      "Découvrez Pure House Marrakech, un riad de luxe exclusif réservé aux adultes dans la Médina. Oasis de calme avec suites de charme, piscine et toit-terrasse romantique.",
    url: "https://purehousemarrakech.com/fr/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 630,
        alt: "Riad de luxe réservé aux adultes Pure House dans la Médina de Marrakech",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Meilleur Riad de Luxe pour Adultes à Marrakech Médina | Pure House Medina",
    description:
      "Découvrez Pure House Marrakech, un riad de luxe exclusif réservé aux adultes dans la Médina. Oasis de calme avec suites de charme, piscine et toit-terrasse romantique.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
