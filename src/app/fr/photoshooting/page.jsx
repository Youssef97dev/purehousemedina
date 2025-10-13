import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Shooting from "./components/Shooting";

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
