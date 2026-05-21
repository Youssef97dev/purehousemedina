import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";

export const metadata = {
  title: "Gallery | Pure House Marrakech | Luxury Riad & Boutique Stay Medina",
  description:
    "Explore the visual beauty of Pure House Marrakech. View our luxury suites, central courtyard pool, and rooftop terrace. Discover the finest boutique Riad experience in the heart of the Marrakech Medina. Book your oasis today.",
  openGraph: {
    title: "Pure House Marrakech | Adults-Only Luxury Riad in the Medina",
    description:
      "Escape to Pure House Marrakech, an adults-only boutique riad just steps from Jemaa el-Fna. Experience intimate Moroccan elegance, a serene courtyard pool, and a traditional spa.",
    images: [
      "https://purehousemarrakech.com/images/luxury-riad-marrakech.webp",
    ], // Use your best hero image here
  },
};

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar path="/fr/gallery" change={true} />
      <Intro />
      <Gallery />
      <Footer path="/fr/gallery" />
    </div>
  );
};

export default page;
