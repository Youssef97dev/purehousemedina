import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Shooting from "./components/Shooting";

export const metadata = {
  title:
    "Photoshoot Location in Marrakech | Luxury Riad Studio | Pure House Medina",
  description:
    "Book the ultimate photoshoot location in Marrakech. Our luxury riad in the Medina offers stunning natural light, traditional Moroccan zellige, a courtyard pool, and a rooftop for fashion and wedding photography.",
  alternates: {
    canonical: "https://purehousemarrakech.com/photoshooting/",
    languages: {
      "en-US": "https://purehousemarrakech.com/photoshooting/",
      "fr-FR": "https://purehousemarrakech.com/fr/photoshooting/",
      "x-default": "https://purehousemarrakech.com/photoshooting/",
    },
  },
  openGraph: {
    title:
      "Photoshoot Location in Marrakech | Luxury Riad Studio | Pure House Medina",
    description:
      "Book the ultimate photoshoot location in Marrakech. Our luxury riad in the Medina offers stunning natural light, traditional Moroccan zellige, and a rooftop for editorial and fashion photography.",
    url: "https://purehousemarrakech.com/photoshooting/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/luxury-riad-marrakech.webp",
        width: 1200,
        height: 630,
        alt: "Luxury riad photoshoot location in Marrakech Medina - Pure House Medina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photoshoot Location in Marrakech | Luxury Riad Studio | Pure House",
    description:
      "Book the ultimate photoshoot location in Marrakech. Stunning natural light, traditional architecture, and a rooftop for fashion photography.",
    images: [
      "https://purehousemarrakech.com/images/luxury-riad-marrakech.webp",
    ],
  },
};

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar path="/fr/photoshooting" change={true} />
      <Intro />
      <Shooting />
      <Footer path="/fr/photoshooting" />
    </div>
  );
};

export default page;
