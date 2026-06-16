import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Intro from "./Intro";
import Experience from "./Experience";
import Footer from "../../components/Footer";
import ButtonWtsp from "@/components/ButtonWtsp";

const Loader = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Riad de Luxe pour Adultes à Marrakech Médina | Pure House Riad",
    description:
      "Découvrez un sanctuaire sans enfants. Pure House est un boutique-hôtel exclusif réservé aux adultes à Marrakech, conçu pour les retraites romantiques, les lunes de miel et les escapades paisibles.",
    url: "https://purehousemarrakech.com/fr/adults-only/",
    publisher: {
      "@type": "BoutiqueHotel",
      name: "Pure House Marrakech",
    },
    image: [
      "https://purehousemarrakech.com/images/peaceful-rooftop-terrace-pure-house-marrakech.webp",
      "https://purehousemarrakech.com/images/romantic-couple-getaway-medina-marrakech.webp",
      "https://purehousemarrakech.com/images/adults-only-luxury-riad-marrakech-pool.webp",
    ],
  };
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Navbar path={"/adults-only"} />
      <Hero />
      <Intro />
      <Experience />
      <Footer />
      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
