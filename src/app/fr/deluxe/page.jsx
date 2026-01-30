import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

export const metadata = {
  title: "Chambres Deluxe | Pure House Marrakech | Confort Boutique",
  description:
    "Découvrez nos chambres Deluxe au cœur de la Médina. Salles de bain en tadelakt, grand confort et décoration marocaine authentique pour une escapade parfaite.",
};

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar path="/deluxe" change={true} />
      <Intro />
      <Ameneties />
      <Footer path="/deluxe" />
    </div>
  );
};

export default page;
