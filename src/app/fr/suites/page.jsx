import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

export const metadata = {
  title: "Suites King | Pure House Marrakech | Luxe & Espace Absolu",
  description:
    "Nos Suites King offrent le summum du luxe à Marrakech. Espaces spacieux, équipements haut de gamme et vues imprenables. Idéal pour une lune de miel ou un séjour d'exception.",
};

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar path="/suites" change={true} />
      <Intro />
      <Ameneties />
      <Footer path="/suites" />
    </div>
  );
};

export default page;
