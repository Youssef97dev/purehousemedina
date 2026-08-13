import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Intro from "./Intro";
import Experience from "./Experience";
import Footer from "@/components/Footer";
import ButtonWtsp from "@/components/ButtonWtsp";

const Loader = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Adults-Only Luxury Riad in Marrakech Medina | Pure House Riad",
    description:
      "Discover a child-free sanctuary. Pure House is an exclusive adults-only boutique hotel in Marrakech designed for romantic couples retreats, honeymoons, and peaceful getaways.",
    url: "https://purehousemarrakech.com/adults-only/",
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
      <Navbar path={"/fr/adults-only"} second_path={"/es/solo-adultos"} />
      <Hero />
      <Intro />
      <Experience />
      <Footer path={"/fr/adults-only"} second_path={"/es/solo-adultos"} />
      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
