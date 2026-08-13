import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./intro";
import Gallery from "./Gallery";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path="/fr/booking" second_path={"/es/reservas"} change={true} />
      <Intro />
      <Gallery />
      <Footer path="/fr/booking" second_path={"/es/reservas"} />
    </div>
  );
};

export default Loader;
