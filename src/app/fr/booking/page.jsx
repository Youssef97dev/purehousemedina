import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Réservez un Riad de Luxe à Marrakech | Meilleurs Tarifs Pure House",
  description:
    "Réservez votre séjour au Pure House, un riad de luxe exclusif pour adultes dans la Médina de Marrakech. Réservez en direct pour le meilleur prix garanti et des avantages VIP.",
  alternates: {
    canonical: "https://purehousemarrakech.com/fr/booking/",
    languages: {
      "en-US": "https://purehousemarrakech.com/booking/",
      "fr-FR": "https://purehousemarrakech.com/fr/booking/",
      "es-ES": "https://purehousemarrakech.com/es/reservas/",
      "x-default": "https://purehousemarrakech.com/booking/",
    },
  },
  openGraph: {
    title: "Réservez un Riad de Luxe à Marrakech | Meilleurs Tarifs Pure House",
    description:
      "Réservez votre séjour au Pure House, un riad de luxe exclusif pour adultes dans la Médina de Marrakech. Réservez en direct pour le meilleur prix garanti et des avantages VIP.",
    url: "https://purehousemarrakech.com/fr/booking/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 630,
        alt: "Réservez votre séjour de luxe au Pure House Marrakech Médina",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Réservez un Riad de Luxe à Marrakech | Meilleurs Tarifs Pure House",
    description:
      "Réservez votre séjour au Pure House, un riad de luxe exclusif pour adultes dans la Médina de Marrakech. Réservez en direct pour le meilleur prix garanti.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
