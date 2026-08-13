import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

export const metadata = {
  title:
    "Standard Rooms | Authentic Boutique Riad in Marrakech | Pure House Medina",
  description:
    "Experience the soul of Morocco in our Standard Rooms at Pure House. Enjoy a quiet, elegant, and romantic adults-only stay perfectly located in the heart of the Marrakech Medina.",
  alternates: {
    canonical: "https://purehousemarrakech.com/standard/",
    languages: {
      "en-US": "https://purehousemarrakech.com/standard/",
      "fr-FR": "https://purehousemarrakech.com/fr/standard/",
      "es-ES": "https://purehousemarrakech.com/es/estandar/",
      "x-default": "https://purehousemarrakech.com/standard/",
    },
  },
  openGraph: {
    title:
      "Standard Rooms | Authentic Boutique Riad in Marrakech | Pure House Medina",
    description:
      "Experience the soul of Morocco in our Standard Rooms at Pure House. Enjoy a quiet, elegant, and romantic adults-only stay perfectly located in the heart of the Marrakech Medina.",
    url: "https://purehousemarrakech.com/standard/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/standard-room-authentic-riad-marrakech-medina.webp", //
        width: 1200,
        height: 630,
        alt: "Elegant and cozy standard room featuring authentic Moroccan decor at Pure House, a quiet adults-only riad in the Marrakech Medina.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Standard Rooms | Authentic Boutique Riad in Marrakech | Pure House Medina",
    description:
      "Experience the soul of Morocco in our Standard Rooms at Pure House. Elegant, quiet, and perfectly located in the Marrakech Medina.",
    images: [
      "https://purehousemarrakech.com/images/standard-room-authentic-riad-marrakech-medina.webp",
    ],
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "Authentic Standard Room in Marrakech Riad",
    description:
      "Experience the soul of Morocco in our elegant and quiet Standard Rooms. Perfect for an authentic adults-only stay in the Marrakech Medina.",
    url: "https://purehousemarrakech.com/standard/",
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
      <Navbar path="/fr/standard" second_path={"/es/estandar"} change={true} />
      <Intro />
      <Ameneties />
      <Footer path="/fr/standard" second_path={"/es/estandar"} />
    </div>
  );
};

export default page;
