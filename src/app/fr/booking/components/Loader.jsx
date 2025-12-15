import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Intro from "./intro";
import Gallery from "./Gallery";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path="/booking" change={true} />
      <Intro />
      <Gallery />
      <Footer path="/booking" />
    </div>
  );
};

export default Loader;
