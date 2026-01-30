import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

export const metadata = {
  title: "Chambres Standards | Pure House Marrakech | Séjour Authentique",
  description:
    "Vivez l'authenticité du Maroc dans nos chambres Standards. Élégantes, calmes et idéalement situées dans la Médina pour un séjour traditionnel à Marrakech.",
};

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar path="/standard" change={true} />
      <Intro />
      <Ameneties />
      <Footer path="/standard" />
    </div>
  );
};

export default page;
