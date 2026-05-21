import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";

export const metadata = {
  title: "Galerie Photos | Pure House Marrakech | Riad de Luxe & Charme Médina",
  description:
    "Découvrez en images le Pure House Marrakech. Explorez nos suites de luxe, notre piscine intérieure et notre terrasse avec vue sur l'Atlas. Le meilleur de l'hôtellerie de charme au cœur de la Médina. Réservez votre séjour.",
  openGraph: {
    title:
      "Pure House Marrakech | Riad de Luxe Réservé aux Adultes dans la Médina",
    description:
      "Évadez-vous au Pure House Marrakech, un riad boutique réservé aux adultes à quelques pas de Jemaa el-Fna. Découvrez une élégance marocaine intime, un patio paisible avec piscine et un spa traditionnel.",
    images: [
      "https://purehousemarrakech.com/images/luxury-riad-marrakech.webp",
    ], // Use your best hero image here
  },
};

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar path="/gallery" change={true} />
      <Intro />
      <Gallery />
      <Footer path="/gallery" />
    </div>
  );
};

export default page;
