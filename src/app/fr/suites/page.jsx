import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

export const metadata = {
  title:
    "Suite avec lit Royal King | Riad de Luxe pour Lune de Miel à Marrakech | Pure House Medina",
  description:
    "Vivez le luxe absolu dans nos Suites King au Pure House Marrakech. Des espaces généreux, des équipements haut de gamme et une décoration romantique, parfaits pour votre lune de miel dans la Médina.",
  alternates: {
    canonical: "https://purehousemarrakech.com/fr/suites/",
    languages: {
      "en-US": "https://purehousemarrakech.com/suites/",
      "fr-FR": "https://purehousemarrakech.com/fr/suites/",
      "x-default": "https://purehousemarrakech.com/suites/",
    },
  },
  openGraph: {
    title:
      "Suite avec lit Royal King | Riad de Luxe pour Lune de Miel à Marrakech | Pure House Medina",
    description:
      "Vivez le luxe absolu dans nos Suites King au Pure House Marrakech. Des espaces généreux, des équipements haut de gamme et une décoration romantique, parfaits pour votre lune de miel dans la Médina.",
    url: "https://purehousemarrakech.com/fr/suites/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/king-suite-honeymoon-riad-marrakech-pure-house.webp",
        width: 1200,
        height: 630,
        alt: "Opulente suite king offrant un luxe absolu, des équipements haut de gamme et une atmosphère romantique parfaite pour les lunes de miel au Pure House Marrakech",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Suite avec lit Royal King | Riad de Luxe pour Lune de Miel à Marrakech | Pure House Medina",
    description:
      "Vivez le luxe absolu dans nos Suites King. Des espaces généreux, des équipements haut de gamme et une décoration romantique dans la Médina.",
    images: [
      "https://purehousemarrakech.com/images/king-suite-honeymoon-riad-marrakech-pure-house.webp",
    ],
  },
};

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar path="/suites" change={true} />
      <Intro />
      <Ameneties />
      <Footer path="/suites" />
    </div>
  );
};

export default page;
