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
      "es-ES": "https://purehousemarrakech.com/es/suites/",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "Suite King de Luxe Absolu pour Lune de Miel",
    description:
      "Nos Suites King offrent le luxe le plus raffiné de Marrakech. Profitez de grands espaces, d'équipements haut de gamme et d'une atmosphère profondément romantique parfaite pour votre lune de miel.",
    url: "https://purehousemarrakech.com/fr/suites/",
    bed: {
      "@type": "BedDetails",
      typeOfBed: "King",
      numberOfBeds: "1",
    },
    occupancy: {
      "@type": "QuantitativeValue",
      value: 2,
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Produits de bain de luxe",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Coin salon spacieux",
        value: true,
      },
    ],
    image: [
      "https://purehousemarrakech.com/images/king-suite-honeymoon-riad-marrakech-pure-house.webp",
    ],
  };
  return (
    <div className="relative flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Navbar path="/suites" second_path={"/es/suites"} change={true} />
      <Intro />
      <Ameneties />
      <Footer path="/suites" second_path={"/es/suites"} />
    </div>
  );
};

export default page;
