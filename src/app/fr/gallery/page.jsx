import React from "react";
import Container from "./components/Container";

export const metadata = {
  title: "Galerie Photos | Riad de Luxe à Marrakech Médina | Pure House Medina",
  description:
    "Découvrez en images la beauté du Pure House Marrakech. Explorez les photos de nos suites de luxe pour adultes, notre piscine sereine et notre superbe terrasse sur le toit.",
  alternates: {
    canonical: "https://purehousemarrakech.com/fr/gallery/",
    languages: {
      "en-US": "https://purehousemarrakech.com/gallery/",
      "fr-FR": "https://purehousemarrakech.com/fr/gallery/",
      "x-default": "https://purehousemarrakech.com/gallery/",
    },
  },
  openGraph: {
    title:
      "Galerie Photos | Riad de Luxe à Marrakech Médina | Pure House Medina",
    description:
      "Découvrez en images la beauté du Pure House Marrakech. Explorez les photos de nos suites de luxe pour adultes, notre piscine sereine et notre superbe terrasse sur le toit.",
    url: "https://purehousemarrakech.com/fr/gallery/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/luxury-riad-marrakech.webp",
        width: 1200,
        height: 630,
        alt: "Galerie photos du riad de luxe Pure House dans la médina de Marrakech",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galerie Photos | Riad de Luxe à Marrakech Médina | Pure House",
    description:
      "Découvrez en images la beauté du Pure House Marrakech. Explorez les photos de nos suites de luxe pour adultes, notre piscine sereine et notre terrasse sur le toit.",
    images: [
      "https://purehousemarrakech.com/images/luxury-riad-marrakech.webp",
    ],
  },
};

const page = () => {
  return <Container />;
};

export default page;
