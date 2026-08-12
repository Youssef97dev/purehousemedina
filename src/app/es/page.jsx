import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Pure House Marrakech | Riad de Lujo Solo para Adultos",
  description:
    "Descubre Pure House Marrakech, un riad de lujo solo para adultos en la Medina. Disfruta de habitaciones elegantes, piscina, hammam, gastronomía marroquí y una experiencia exclusiva en Marrakech.",
  keywords: [
    "riad de lujo en Marrakech",
    "riad solo para adultos Marrakech",
    "hotel boutique Marrakech",
    "riad en la Medina de Marrakech",
    "hotel de lujo Marrakech",
    "riad romántico Marrakech",
    "riad para parejas Marrakech",
    "alojamiento de lujo Marrakech",
    "riad con piscina Marrakech",
    "Pure House Marrakech",
  ],
  alternates: {
    canonical: "https://purehousemarrakech.com/es/",
    languages: {
      en: "https://purehousemarrakech.com/",
      fr: "https://purehousemarrakech.com/fr/",
      es: "https://purehousemarrakech.com/es/",
    },
  },
  openGraph: {
    title: "Pure House Marrakech | Riad de Lujo Solo para Adultos",
    description:
      "Un riad de lujo solo para adultos en la Medina de Marrakech, donde la arquitectura marroquí, el confort y la tranquilidad se unen para una experiencia exclusiva.",
    url: "https://purehousemarrakech.com/es/",
    siteName: "Pure House Marrakech",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 800,
        alt: "Pure House Marrakech, riad de lujo solo para adultos en la Medina de Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure House Marrakech | Riad de Lujo en Marrakech",
    description:
      "Descubre Pure House Marrakech, un riad de lujo solo para adultos en el corazón de la Medina.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://purehousemarrakech.com/es/#hotel",
    name: "Pure House Marrakech",
    description:
      "Pure House Marrakech es un riad de lujo solo para adultos situado en la Medina de Marrakech, que ofrece una experiencia exclusiva con habitaciones elegantes, piscina, hammam, gastronomía marroquí y una hospitalidad personalizada.",
    url: "https://purehousemarrakech.com/es/",
    image: [
      "https://purehousemarrakech.com/images/riad-marrakech-with-private-chef.webp",
      "https://purehousemarrakech.com/images/riad-near-koutoubia-mosque.webp",
      "https://purehousemarrakech.com/images/riad-marrakech-medina.webp",
      "https://purehousemarrakech.com/images/hotels-in-marrakech.webp",
      "https://purehousemarrakech.com/images/top-riad-marrakech.webp",
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
      "https://purehousemarrakech.com/images/riad-near-jemaa-el-fna.webp",
      "https://purehousemarrakech.com/images/romantic-riad-for-couples-marrakech.webp",
      "https://purehousemarrakech.com/images/pure-house-marrakech-riad-medina.webp",
      "https://purehousemarrakech.com/images/exclusive-use-riad-marrakech.webp",
    ],
    telephone: "+212682225235",
    priceRange: "$$$$",
    currenciesAccepted: "MAD",
    checkinTime: "14:00",
    checkoutTime: "12:00",
    petsAllowed: false,
    address: {
      "@type": "PostalAddress",
      streetAddress: "16 Derb Abou El Fdail",
      addressLocality: "Marrakech",
      postalCode: "40000",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.625766455780933",
      longitude: "-7.986577126985101",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Adults only",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Hammam",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air conditioning",
        value: true,
      },
    ],
    hasMap: "",
    servesCuisine: ["Moroccan", "Mediterranean"],
    availableLanguage: ["Spanish", "French", "English"],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Loader />
    </>
  );
};

export default page;
