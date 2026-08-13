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
    name: "Riad de Lujo Solo para Adultos en Marrakech | Pure House",
    description:
      "Descubre Pure House, un riad boutique de lujo solo para adultos en la Medina de Marrakech. Un refugio exclusivo para parejas, lunas de miel y escapadas románticas en un ambiente de calma y privacidad.",
    url: "https://purehousemarrakech.com/es/solo-adultos/",
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
      <Navbar path={"/adults-only"} second_path="/fr/adults-only" />
      <Hero />
      <Intro />
      <Experience />
      <Footer path={"/adults-only"} second_path="/fr/adults-only" />
      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
