import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Intro from "./Intro";
import Gallery from "./Gallery";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path="/booking" second_path={"/es/reservas"} change={true} />
      <Intro />
      <Gallery />
      <Footer path="/booking" second_path={"/es/reservas"} />
    </div>
  );
};

export default Loader;
