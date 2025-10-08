import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: {
    default: "Pure House Riad Medina",
    template: "%s | Pure House Riad Medina",
  },
  description:
    "Découvrez le meilleur de Marrakech avec des séjours de luxe dans les plus beaux Riads et hôtels tels que La Mamounia, le Mandarin Oriental, le Fairmont, le Savoy Le Grand Hotel Marrakech ou encore l’Hivernage Hotel & Spa",
  keywords: [
    "Pure House Marrakech",
    "Riad Guest House",
    "Riad",
    "Guest House",
    "Ryad",
    "Hotel",
    "Luxury Riad",
    "Moroccan Hospitality",
    "Accommodation",
    "Marrakech",
    "Atlas Mountains",
    "Morocco",
    "Exquisite Cuisine",
    "activities in marrakech",
    "best time to visit marrakech",
    "weather marrakech morocco",
    "flights to marrakech",
    "marrakech hotel booking",
    "marrakech hotel palmeraie",
  ],
  openGraph: {
    title: "Pure House Riad Medina",
    description:
      "Découvrez le meilleur de Marrakech avec des séjours de luxe dans les plus beaux Riads et hôtels tels que La Mamounia, le Mandarin Oriental, le Fairmont, le Savoy Le Grand Hotel Marrakech ou encore l’Hivernage Hotel & Spa",
    url: "https://purehousemarrakech.com/fr",
    siteName: "Pure House Riad Medina",
    images: [
      {
        url: "https://purehousemarrakech.com/riad/riad-slow-living.jpg",
        width: 1200,
        height: 630,
        alt: "Pure House Riad Medina - Slow living Riad",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL("https://purehousemarrakech.com/fr"),
};

const page = () => {
  return <Loader />;
};

export default page;
