import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import SectionSt from "./SectionSt";
import Footer from "@/components/Footer";
import ButtonWtsp from "@/components/ButtonWtsp";
import SectionNd from "./SectionNd";

const Loader = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "Best Riads in Marrakech: Why Choose a Luxury Medina Riad",
    description:
      "Discover what separates the best riads in Marrakech from standard hotels. Find out why a luxury riad in the Marrakech Medina offers an unmatched, peaceful retreat.",
    url: "https://purehousemarrakech.com/blog/best-riads-in-marrakech/",
    publisher: {
      "@type": "BoutiqueHotel",
      name: "Pure House Marrakech",
    },
    image: [
      "https://purehousemarrakech.com/images/best-riads-marrakech-medina.webp",
      "https://purehousemarrakech.com/images/best-luxury-riads-marrakech-courtyard.webp",
      "https://purehousemarrakech.com/images/riad-marrakech-medina-peaceful-sanctuary.webp",
      "https://purehousemarrakech.com/images/pure-house-top-luxury-riad-marrakech.webp",
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
      <Navbar path={"#"} />
      <Hero />
      <SectionSt />
      <SectionNd />
      <Footer />
      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
