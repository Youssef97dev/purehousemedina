import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

export const metadata = {
  title:
    "Royal King Bed Suite | Luxury Honeymoon Riad in Marrakech | Pure House Medina",
  description:
    "Experience ultimate luxury in our premier King Suites at Pure House Marrakech. Featuring spacious layouts, premium amenities, and romantic decor, perfect for your Medina honeymoon.",
  alternates: {
    canonical: "https://purehousemarrakech.com/suites/",
    languages: {
      "en-US": "https://purehousemarrakech.com/suites/",
      "fr-FR": "https://purehousemarrakech.com/fr/suites/",
      "x-default": "https://purehousemarrakech.com/suites/",
    },
  },
  openGraph: {
    title:
      "Royal King Bed Suite | Luxury Honeymoon Riad in Marrakech | Pure House Medina",
    description:
      "Experience ultimate luxury in our premier King Suites at Pure House Marrakech. Featuring spacious layouts, premium amenities, and romantic decor, perfect for your Medina honeymoon.",
    url: "https://purehousemarrakech.com/suites/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/king-suite-honeymoon-riad-marrakech-pure-house.webp",
        width: 1200,
        height: 630,
        alt: "Opulent king suite offering ultimate luxury, premium amenities, and a romantic atmosphere perfect for honeymooners at Pure House Marrakech.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Royal King Bed Suite | Luxury Honeymoon Riad in Marrakech | Pure House Medina",
    description:
      "Experience ultimate luxury in our premier King Suites. Spacious layouts, premium amenities, and romantic decor in the Marrakech Medina.",
    images: [
      "https://purehousemarrakech.com/images/king-suite-honeymoon-riad-marrakech-pure-house.webp",
    ],
  },
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
