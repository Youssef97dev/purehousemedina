import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

export const metadata = {
  title:
    "Chambres Deluxe | Riad Boutique de Luxe à Marrakech | Pure House Medina",
  description:
    "Détendez-vous dans nos Chambres Deluxe au Pure House, un riad de luxe pour adultes dans la Médina de Marrakech. Profitez de lits king-size, de salles de bains en tadelakt et d'une décoration marocaine romantique.",
  alternates: {
    canonical: "https://purehousemarrakech.com/fr/deluxe/",
    languages: {
      "en-US": "https://purehousemarrakech.com/deluxe/",
      "fr-FR": "https://purehousemarrakech.com/fr/deluxe/",
      "es-ES": "https://purehousemarrakech.com/es/deluxe/",
      "x-default": "https://purehousemarrakech.com/deluxe/",
    },
  },
  openGraph: {
    title:
      "Chambres Deluxe | Riad Boutique de Luxe à Marrakech | Pure House Medina",
    description:
      "Détendez-vous dans nos Chambres Deluxe au Pure House, un riad de luxe pour adultes dans la Médina de Marrakech. Profitez de lits king-size, de salles de bains en tadelakt et d'une décoration marocaine romantique.",
    url: "https://purehousemarrakech.com/fr/deluxe/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/luxury-deluxe-room-boutique-hotel-marrakech.webp",
        width: 1200,
        height: 630,
        alt: "Spacieuse chambre deluxe comprenant un lit king-size moelleux et des finitions traditionnelles en tadelakt au boutique-hôtel exclusif Pure House.",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chambres Deluxe | Riad Boutique de Luxe à Marrakech | Pure House Medina",
    description:
      "Détendez-vous dans nos Chambres Deluxe au Pure House. Lits king-size, salles de bains en tadelakt et décoration romantique dans la Médina.",
    images: [
      "https://purehousemarrakech.com/images/luxury-deluxe-room-boutique-hotel-marrakech.webp",
    ],
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "Chambre Deluxe dans un Boutique-Hôtel de Luxe à Marrakech",
    description:
      "Détendez-vous dans nos spacieuses Chambres Deluxe équipées de lits king-size, de salles de bains traditionnelles en tadelakt marocain et d'une décoration romantique.",
    url: "https://purehousemarrakech.com/fr/deluxe/",
    bed: {
      "@type": "BedDetails",
      typeOfBed: "deluxe",
      numberOfBeds: "1",
    },
    occupancy: {
      "@type": "QuantitativeValue",
      value: 2,
    },
    image: [
      "https://purehousemarrakech.com/images/luxury-deluxe-room-boutique-hotel-marrakech.webp",
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
      <Navbar path="/deluxe" second_path={"/es/deluxe"} change={true} />
      <Intro />
      <Ameneties />
      <Footer path="/deluxe" second_path={"/es/deluxe"} />
    </div>
  );
};

export default page;
