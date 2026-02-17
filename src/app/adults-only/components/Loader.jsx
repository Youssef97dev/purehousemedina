import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Intro from "./Intro";
import Experience from "./Experience";
import Footer from "@/components/Footer";
import ButtonWtsp from "@/components/ButtonWtsp";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr"} />
      <Hero />
      <Intro />
      <Experience />
      <Footer />
      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
