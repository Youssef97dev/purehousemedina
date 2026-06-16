import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Meilleur Riad de Luxe pour Adultes à Marrakech Médina | Pure House",
  description:
    "Évadez-vous au Pure House Marrakech, un riad de luxe exclusif réservé aux adultes dans la Médina. Réservez votre retraite romantique en couple avec piscines paisibles et suites de charme.",
  alternates: {
    canonical: "https://purehousemarrakech.com/fr/adults-only/",
    languages: {
      "en-US": "https://purehousemarrakech.com/adults-only/",
      "fr-FR": "https://purehousemarrakech.com/fr/adults-only/",
      "x-default": "https://purehousemarrakech.com/adults-only/",
    },
  },
  openGraph: {
    title: "Meilleur Riad de Luxe pour Adultes à Marrakech Médina | Pure House",
    description:
      "Évadez-vous au Pure House Marrakech, un riad de luxe exclusif réservé aux adultes dans la Médina. Réservez votre retraite romantique en couple avec piscines paisibles et suites de charme.",
    url: "https://purehousemarrakech.com/fr/adults-only/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 630,
        alt: "Riad de luxe romantique réservé aux adultes dans la médina de Marrakech - Pure House",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meilleur Riad de Luxe pour Adultes à Marrakech Médina | Pure House",
    description:
      "Évadez-vous au Pure House Marrakech, un riad de luxe exclusif réservé aux adultes dans la Médina. Réservez votre retraite romantique en couple avec piscines paisibles et suites de charme.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
