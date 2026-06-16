import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Categories from "./Categories";
import Info from "./Info";
import Features from "./Features";
import Map from "./Map";
import Footer from "./Footer";
import ButtonWtsp from "@/components/ButtonWtsp";

const Loader = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BoutiqueHotel",
    name: "Pure House Marrakech",
    description:
      "Un riad de luxe exclusif réservé aux adultes au cœur de la médina de Marrakech. Réservez votre escapade romantique en couple avec piscine paisible, hammam traditionnel et terrasse panoramique sur le toit.",
    url: "https://purehousemarrakech.com/fr/",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Réservé aux adultes",
        value: true,
      },
      { "@type": "LocationFeatureSpecification", name: "Piscine", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wi-Fi Haut Débit Gratuit",
        value: true,
      },
    ],
    image: [
      "https://purehousemarrakech.com/images/riad-marrakech-with-private-chef.webp",
      "https://purehousemarrakech.com/images/riad-near-koutoubia-mosque.webp",
      "https://purehousemarrakech.com/images/riad-marrakech-medina.webp",
      "https://purehousemarrakech.com/images/hotels-in-marrakech.webp",
      "https://purehousemarrakech.com/images/top-riad-marrakech.webp",
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
      "https://purehousemarrakech.com/images/riad-near-jemaa-el-fna.webp",
      "https://purehousemarrakech.com/images/romantic-riad-for-couples-marrakech.webp",
      "https://purehousemarrakech.com/images/pure-house-marrakech-riad-medina.webp",
      "https://purehousemarrakech.com/images/exclusive-use-riad-marrakech.webp",
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
      <Navbar path={"/"} />
      <Hero />
      <About />
      <Categories />
      <Info />
      <Features />
      <Map />
      <div className="w-[80%] lg:w-full h-[1px] bg-riad_secondary mx-auto"></div>
      <Footer path={"/"} />

      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
