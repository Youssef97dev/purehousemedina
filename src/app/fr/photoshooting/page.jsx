import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Shooting from "./components/Shooting";

export const metadata = {
  title:
    "Lieu de Shooting Photo à Marrakech | Riad de Luxe | Pure House Medina",
  description:
    "Réservez le lieu de shooting photo idéal à Marrakech. Notre riad de luxe dans la Médina offre une lumière naturelle, des zelliges traditionnels, une piscine et un rooftop pour la photographie de mode et de mariage.",
  alternates: {
    canonical: "https://purehousemarrakech.com/fr/photoshooting/",
    languages: {
      "en-US": "https://purehousemarrakech.com/photoshooting/",
      "fr-FR": "https://purehousemarrakech.com/fr/photoshooting/",
      "x-default": "https://purehousemarrakech.com/photoshooting/",
    },
  },
  openGraph: {
    title:
      "Lieu de Shooting Photo à Marrakech | Riad de Luxe | Pure House Medina",
    description:
      "Réservez le lieu de shooting photo idéal à Marrakech. Notre riad de luxe dans la Médina offre une lumière naturelle, des zelliges traditionnels, et un rooftop pour la photographie de mode et de mariage.",
    url: "https://purehousemarrakech.com/fr/photoshooting/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/luxury-riad-marrakech.webp",
        width: 1200,
        height: 630,
        alt: "Lieu de shooting photo dans un riad de luxe à Marrakech Médina - Pure House Medina",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lieu de Shooting Photo à Marrakech | Riad de Luxe | Pure House Medina",
    description:
      "Réservez le lieu de shooting photo idéal à Marrakech. Une lumière naturelle exceptionnelle et une architecture traditionnelle pour vos shootings.",
    images: [
      "https://purehousemarrakech.com/images/luxury-riad-marrakech.webp",
    ],
  },
};

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar path="/photoshooting" change={true} />
      <Intro />
      <Shooting />
      <Footer path="/photoshooting" />
    </div>
  );
};

export default page;
