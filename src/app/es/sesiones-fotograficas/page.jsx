import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Shooting from "./components/Shooting";

export const metadata = {
  title: "Sesiones Fotográficas en Marrakech | Pure House",
  description:
    "Descubre Pure House Marrakech como escenario privado para sesiones fotográficas exclusivas. Un riad boutique de lujo solo para adultos en la Medina, ideal para bodas, lunas de miel, editoriales y fotografía de lifestyle.",
  keywords: [
    "sesiones fotográficas Marrakech",
    "sesión de fotos Marrakech",
    "fotoshoot Marrakech",
    "sesión fotográfica en un riad Marrakech",
    "sesión de fotos riad Marrakech",
    "fotografía de bodas Marrakech",
    "fotografía editorial Marrakech",
    "fotografía de lifestyle Marrakech",
    "riad de lujo Marrakech",
    "riad boutique solo para adultos Marrakech",
    "Pure House Marrakech",
  ],
  alternates: {
    canonical: "https://purehousemarrakech.com/es/sesiones-fotograficas/",
    languages: {
      en: "https://purehousemarrakech.com/photoshooting/",
      fr: "https://purehousemarrakech.com/fr/photoshooting/",
      es: "https://purehousemarrakech.com/es/sesiones-fotograficas/",
    },
  },
  openGraph: {
    title: "Sesiones Fotográficas en Marrakech | Pure House",
    description:
      "Un escenario privado y elegante para sesiones fotográficas exclusivas en Marrakech. Descubre Pure House, un riad boutique de lujo solo para adultos en la Medina.",
    url: "https://purehousemarrakech.com/es/sesiones-fotograficas/",
    siteName: "Pure House Marrakech",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 800,
        alt: "Escenario de lujo para sesiones fotográficas en Pure House Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sesiones Fotográficas en Marrakech | Pure House",
    description:
      "Descubre Pure House Marrakech como escenario privado para sesiones fotográficas exclusivas, editoriales, bodas y fotografía de lifestyle.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar
        path="/photoshooting"
        second_path="/fr/photoshooting"
        change={true}
      />
      <Intro />
      <Shooting />
      <Footer path="/photoshooting" second_path="/fr/photoshooting" />
    </div>
  );
};

export default page;
