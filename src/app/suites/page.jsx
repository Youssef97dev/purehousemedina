import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";
import RoomBookingCTA from "@/components/RoomBookingCTA";

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
      "es-ES": "https://purehousemarrakech.com/es/suites/",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "Ultimate Luxury King Suite for Honeymoons",
    description:
      "Our premier King Suites offer the finest luxury in Marrakech. Enjoy spacious layouts, premium amenities, and a deeply romantic atmosphere perfect for your Medina honeymoon.",
    url: "https://purehousemarrakech.com/suites/",
    bed: {
      "@type": "BedDetails",
      typeOfBed: "King",
      numberOfBeds: "1",
    },
    occupancy: {
      "@type": "QuantitativeValue",
      value: 2,
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Premium Luxury Bath Amenities",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Spacious Lounge Area",
        value: true,
      },
    ],
    image: [
      "https://purehousemarrakech.com/images/king-suite-honeymoon-riad-marrakech-pure-house.webp",
    ],
  };
  return (
    <div className="relative flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Navbar path="/fr/suites" second_path={"/es/suites"} change={true} />
      <Intro />
      <RoomBookingCTA
        roomName="Suite"
        fromPrice="From €184"
        text="Check your dates for the best available rate."
        btn="Check Availability"
        night="night"
      />
      <Ameneties />
      <Footer path="/fr/suites" second_path={"/es/suites"} />
    </div>
  );
};

export default page;
