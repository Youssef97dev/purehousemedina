import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Book a Luxury Riad in Marrakech | Pure House Best Rates Direct",
  description:
    "Reserve your stay at Pure House, an exclusive adults-only luxury riad in the Marrakech Medina. Book direct for our best price guarantee, VIP perks, and flexible cancellation.",
  alternates: {
    canonical: "https://purehousemarrakech.com/booking/",
    languages: {
      "en-US": "https://purehousemarrakech.com/booking/",
      "fr-FR": "https://purehousemarrakech.com/fr/booking/",
      "x-default": "https://purehousemarrakech.com/booking/",
    },
  },
  openGraph: {
    title: "Book a Luxury Riad in Marrakech | Pure House Best Rates Direct",
    description:
      "Reserve your stay at Pure House, an exclusive adults-only luxury riad in the Marrakech Medina. Book direct for our best price guarantee, VIP perks, and flexible cancellation.",
    url: "https://purehousemarrakech.com/booking/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp", // A stunning overall shot of the riad works best here
        width: 1200,
        height: 630,
        alt: "Book your luxury stay at Pure House Marrakech Medina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Luxury Riad in Marrakech | Pure House Best Rates Direct",
    description:
      "Reserve your stay at Pure House, an exclusive adults-only luxury riad in the Marrakech Medina. Book direct for our best price guarantee and VIP perks.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
