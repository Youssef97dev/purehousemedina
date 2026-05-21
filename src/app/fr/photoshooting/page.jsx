import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Shooting from "./components/Shooting";

export const metadata = {
  title: "Lieu de Tournage & Shooting Photo Marrakech | Riad de Luxe",
  description:
    "Réservez notre riad pour vos shootings photo et tournages à Marrakech. Un cadre authentique avec lumière naturelle, piscine intérieure et rooftop avec vue Atlas. Idéal pour mode, lifestyle et mariages.",
  openGraph: {
    title: "Shooting Lifestyle & Glamour | Pure House Marrakech",
    description:
      "Plongez dans l'expérience Pure House Marrakech. Découvrez notre shooting exclusif capturant l'élégance, la romance et l'ambiance vibrante de notre riad de luxe réservé aux adultes.",
    images: [
      // Choisissez votre meilleure photo lifestyle mettant en scène des personnes/couples
      "https://purehousemarrakech.com/images/top-riad-marrakech.webp",
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
