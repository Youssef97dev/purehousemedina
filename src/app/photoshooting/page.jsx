import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Shooting from "./components/Shooting";

export const metadata = {
  title: "Photoshoot Location Marrakech | Luxury Riad Studio Medina",
  description:
    "The ultimate photoshoot location in Marrakech. Our Riad offers stunning natural light, traditional Zellige tiles, a courtyard pool, and a panoramic rooftop for fashion, lifestyle, and wedding photography.",
  openGraph: {
    title: "Lifestyle & Glamour Photoshoot | Pure House Marrakech",
    description:
      "Step into the glamour of Pure House Marrakech. Explore our exclusive lifestyle photoshoot capturing the romance, elegance, and vibrant atmosphere of our adults-only luxury riad.",
    images: ["https://purehousemarrakech.com/images/top-riad-marrakech.webp"],
  },
};

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar path="/fr/photoshooting" change={true} />
      <Intro />
      <Shooting />
      <Footer path="/fr/photoshooting" />
    </div>
  );
};

export default page;
