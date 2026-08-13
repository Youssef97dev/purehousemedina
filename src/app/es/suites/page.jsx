import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";

export const metadata = {
  title: "Suites de Lujo en Marrakech | Pure House",
  description:
    "Descubre las Suites de Lujo de Pure House Marrakech, un riad boutique solo para adultos en la Medina. Espacios amplios para dos, confort refinado, diseño marroquí y privacidad.",
  keywords: [
    "suites de lujo Marrakech",
    "suite de lujo en Marrakech",
    "suite romántica Marrakech",
    "riad de lujo Marrakech",
    "riad boutique Marrakech",
    "riad solo para adultos Marrakech",
    "suite para parejas Marrakech",
    "hotel boutique de lujo Marrakech",
    "riad en la Medina de Marrakech",
    "suite luna de miel Marrakech",
    "Pure House Marrakech",
  ],
  alternates: {
    canonical: "https://purehousemarrakech.com/es/suites/",
    languages: {
      en: "https://purehousemarrakech.com/suites/",
      fr: "https://purehousemarrakech.com/fr/suites/",
      es: "https://purehousemarrakech.com/es/suites/",
    },
  },
  openGraph: {
    title: "Suites de Lujo en Marrakech | Pure House",
    description:
      "Suites amplias y elegantes para dos en Pure House Marrakech, un riad boutique de lujo solo para adultos en la Medina.",
    url: "https://purehousemarrakech.com/es/suites/",
    siteName: "Pure House Marrakech",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://purehousemarrakech.com/images/king-suite-honeymoon-riad-marrakech-pure-house.webp",
        width: 1200,
        height: 800,
        alt: "Suite de lujo en Pure House Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suites de Lujo en Marrakech | Pure House",
    description:
      "Descubre las suites de lujo de Pure House Marrakech, un riad boutique solo para adultos en la Medina.",
    images: [
      "https://purehousemarrakech.com/images/king-suite-honeymoon-riad-marrakech-pure-house.webp",
    ],
  },
};

const page = () => {
  return (
    <div className="relative flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Navbar path="/suites" second_path={"/fr/suites"} change={true} />
      <Intro />
      <Ameneties />
      <Footer path="/suites" second_path={"/fr/suites"} />
    </div>
  );
};

export default page;
