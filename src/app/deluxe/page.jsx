import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

export const metadata = {
  title: "Deluxe Rooms | Pure House Marrakech | Boutique Comfort",
  description:
    "Discover our Deluxe Rooms in the Marrakech Medina. Featuring traditional Tadelakt bathrooms, king-size comfort, and authentic Moroccan decor for a perfect getaway.",
};

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
