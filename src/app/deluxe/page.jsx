import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar path="/fr/deluxe" change={true} />
      <Intro />
      <Ameneties />
      <Footer path="/fr/deluxe" />
    </div>
  );
};

export default page;
