import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

export const metadata = {
  title: "King Suites | Pure House Marrakech | Ultimate Luxury & Space",
  description:
    "Our premier King Suites offer the finest luxury in Marrakesh. Spacious layouts, premium amenities, and stunning views. Perfect for honeymoons and exclusive stays.",
};

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar path="/fr/suites" change={true} />
      <Intro />
      <Ameneties />
      <Footer path="/fr/suites" />
    </div>
  );
};

export default page;
