import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Best Adults-Only Luxury Riad in Marrakech Medina | Pure House",
  description:
    "Escape to Pure House Marrakech, an exclusive adults-only luxury riad in the Medina. Book your romantic couples retreat featuring peaceful pools and boutique suites.",
  alternates: {
    canonical: "https://purehousemarrakech.com/adults-only/",
    languages: {
      "en-US": "https://purehousemarrakech.com/adults-only/",
      "fr-FR": "https://purehousemarrakech.com/fr/adults-only/",
      "x-default": "https://purehousemarrakech.com/adults-only/",
    },
  },
  openGraph: {
    title: "Best Adults-Only Luxury Riad in Marrakech Medina | Pure House",
    description:
      "Escape to Pure House Marrakech, an exclusive adults-only luxury riad in the Medina. Book your romantic couples retreat featuring peaceful pools and boutique suites.",
    url: "https://purehousemarrakech.com/adults-only/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 630,
        alt: "Romantic adults-only luxury riad in Marrakech Medina - Pure House",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Adults-Only Luxury Riad in Marrakech Medina | Pure House",
    description:
      "Escape to Pure House Marrakech, an exclusive adults-only luxury riad in the Medina. Book your romantic couples retreat featuring peaceful pools and boutique suites.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
