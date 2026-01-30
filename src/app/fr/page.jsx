import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Pure House Riad Marrakech | Riad de Luxe & Charme dans la Médina",
  description:
    "Découvrez le Pure House Marrakech, un riad de luxe au cœur de la Médina. Suites de charme, piscine intérieure et terrasse panoramique pour un séjour inoubliable au Maroc.",
  keywords: [
    "Pure House Marrakech",
    "Riad de luxe Marrakech Médina",
    "Hôtel de charme Marrakech avec piscine",
    "Maison d'hôtes de luxe Marrakech",
    "Privatisation Riad Marrakech",
    "Meilleur Riad Marrakech 2026",
  ],
  openGraph: {
    title: "Pure House Marrakech | Riad de Luxe dans la Médina",
    description:
      "Votre oasis privée au cœur de la Ville Ocre. Découvrez nos suites, notre piscine et notre toit-terrasse.",
    url: "https://purehousemarrakech.com/fr",
    siteName: "Pure House Riad Marrakech",
    locale: "fr_FR",
    type: "website",
  },
};

const page = () => {
  return <Loader />;
};

export default page;
