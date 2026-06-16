import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

export const metadata = {
  title:
    "Chambres Standards | Riad Authentique à Marrakech Médina | Pure House Medina",
  description:
    "Découvrez l'âme du Maroc dans nos Chambres Standards au Pure House. Profitez d'un séjour calme, élégant et romantique réservé aux adultes, idéalement situé au cœur de la Médina de Marrakech.",
  alternates: {
    canonical: "https://purehousemarrakech.com/fr/standard/",
    languages: {
      "en-US": "https://purehousemarrakech.com/standard/",
      "fr-FR": "https://purehousemarrakech.com/fr/standard/",
      "x-default": "https://purehousemarrakech.com/standard/",
    },
  },
  openGraph: {
    title:
      "Chambres Standards | Riad Authentique à Marrakech Médina | Pure House Medina",
    description:
      "Découvrez l'âme du Maroc dans nos Chambres Standards au Pure House. Profitez d'un séjour calme, élégant et romantique réservé aux adultes, idéalement situé au cœur de la Médina de Marrakech.",
    url: "https://purehousemarrakech.com/fr/standard/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/standard-room-authentic-riad-marrakech-medina.webp",
        width: 1200,
        height: 630,
        alt: "Chambre standard élégante et chaleureuse avec une décoration marocaine authentique au Pure House, un riad calme pour adultes dans la médina de Marrakech.",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chambres Standards | Riad Authentique à Marrakech Médina | Pure House Medina",
    description:
      "Découvrez l'âme du Maroc dans nos Chambres Standards. Un séjour élégant et calme, idéalement situé dans la Médina de Marrakech.",
    images: [
      "https://purehousemarrakech.com/images/standard-room-authentic-riad-marrakech-medina.webp",
    ],
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "Chambre Standard Authentique dans un Riad à Marrakech",
    description:
      "Découvrez l'âme du Maroc dans nos Chambres Standards élégantes et calmes. Parfait pour un séjour authentique réservé aux adultes dans la médina de Marrakech.",
    url: "https://purehousemarrakech.com/fr/standard/",
    bed: {
      "@type": "BedDetails",
      typeOfBed: "Queen",
      numberOfBeds: "1",
    },
    occupancy: {
      "@type": "QuantitativeValue",
      value: 2,
    },
    image: [
      "https://purehousemarrakech.com/images/standard-room-authentic-riad-marrakech-medina.webp",
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
      <Navbar path="/standard" change={true} />
      <Intro />
      <Ameneties />
      <Footer path="/standard" />
    </div>
  );
};

export default page;
