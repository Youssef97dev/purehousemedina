import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar path="/fr/standard" change={true} />
      <Intro />
      <Ameneties />
      <Footer path="/fr/standard" />
    </div>
  );
};

export default page;
