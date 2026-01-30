import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

export const metadata = {
  title: "Standard Rooms | Pure House Marrakech | Authentic Riad Stay",
  description:
    "Experience the soul of Morocco in our Standard Rooms. Elegant, quiet, and perfectly located in the Medina for travelers seeking an authentic Marrakech guest house.",
};

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
