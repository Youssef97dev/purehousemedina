import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Best Riads in Marrakech | Luxury Medina Riad vs Hotels",
  description:
    "Discover what separates the best riads in Marrakech from standard hotels. See why choosing a luxury riad in the Marrakech Medina offers an unmatched retreat.",
  alternates: {
    canonical: "https://purehousemarrakech.com/blog/best-riads-in-marrakech/",
    languages: {
      "en-US": "https://purehousemarrakech.com/blog/best-riads-in-marrakech/",
    },
  },
  openGraph: {
    title: "Why a Luxury Riad in the Marrakech Medina Beats Traditional Hotels",
    description:
      "Planning a trip to Morocco? Discover why the best riads in Marrakech offer a level of exclusivity, peace, and personalized luxury that traditional hotels simply cannot match.",
    url: "https://purehousemarrakech.com/blog/best-riads-in-marrakech/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/best-riads-marrakech-medina.webp",
        width: 1200,
        height: 630,
        alt: "A wide-angle look inside a tranquil luxury riad Marrakech, offering a private oasis away from the busy Medina streets.",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why a Luxury Riad in the Marrakech Medina Beats Traditional Hotels",
    description:
      "Planning a trip to Morocco? Discover why the best riads in Marrakech offer a level of exclusivity, peace, and personalized luxury that traditional hotels simply cannot match.",
    images: [
      "https://purehousemarrakech.com/images/best-riads-marrakech-medina.webp",
      "https://purehousemarrakech.com/images/best-luxury-riads-marrakech-courtyard.webp",
      "https://purehousemarrakech.com/images/riad-marrakech-medina-peaceful-sanctuary.webp",
      "https://purehousemarrakech.com/images/pure-house-top-luxury-riad-marrakech.webp",
    ],
  },
};

const page = () => {
  return <Loader />;
};

export default page;
