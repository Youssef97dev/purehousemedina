import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Reservas | Riad de Lujo en Marrakech | Pure House",
  description:
    "Reserva tu estancia en Pure House Marrakech, un riad boutique de lujo solo para adultos en la Medina. Disfruta de habitaciones elegantes, piscina, Wi-Fi gratuito y una ubicación privilegiada en Marrakech.",
  keywords: [
    "reservar riad Marrakech",
    "reservas riad Marrakech",
    "hotel boutique Marrakech reservas",
    "riad de lujo Marrakech",
    "riad solo para adultos Marrakech",
    "reservar hotel Marrakech Medina",
    "alojamiento de lujo Marrakech",
    "riad para parejas Marrakech",
    "Pure House Marrakech",
  ],
  alternates: {
    canonical: "https://purehousemarrakech.com/es/reservas/",
    languages: {
      en: "https://purehousemarrakech.com/booking/",
      fr: "https://purehousemarrakech.com/fr/booking/",
      es: "https://purehousemarrakech.com/es/reservas/",
    },
  },
  openGraph: {
    title: "Reservas | Pure House Marrakech",
    description:
      "Reserva tu estancia en Pure House Marrakech, un riad boutique de lujo solo para adultos en el corazón de la Medina.",
    url: "https://purehousemarrakech.com/es/reservas/",
    siteName: "Pure House Marrakech",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 800,
        alt: "Pure House Marrakech - Riad de lujo en la Medina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reservas | Pure House Marrakech",
    description:
      "Reserva tu estancia en Pure House Marrakech, un riad boutique de lujo solo para adultos en la Medina de Marrakech.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://purehousemarrakech.com/es/reservas#webpage",
    url: "https://purehousemarrakech.com/es/reservas/",
    name: "Reservas | Pure House Marrakech",
    description:
      "Reserva tu estancia en Pure House Marrakech, un riad boutique de lujo solo para adultos en la Medina de Marrakech.",
    inLanguage: "es",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://purehousemarrakech.com/#website",
      name: "Pure House Marrakech",
      url: "https://purehousemarrakech.com/",
    },
    about: {
      "@type": "Hotel",
      "@id": "https://purehousemarrakech.com/es/#hotel",
      name: "Pure House Marrakech",
      description:
        "Riad boutique de lujo solo para adultos situado en la Medina de Marrakech.",
      url: "https://purehousemarrakech.com/es/",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Piscina exterior de temporada",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Wi-Fi gratuito",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Habitaciones con aire acondicionado",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Patio",
          value: true,
        },
      ],
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Loader />
    </>
  );
};

export default page;
