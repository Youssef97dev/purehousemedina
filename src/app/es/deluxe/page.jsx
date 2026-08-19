import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";
import RoomBookingCTA from "@/components/RoomBookingCTA";
import WhyBookDirect from "@/components/WhyBookDirect";

export const metadata = {
  title: "Habitaciones Deluxe en Marrakech | Pure House",
  description:
    "Descubre las Habitaciones Deluxe de Pure House Marrakech, un riad de lujo solo para adultos en la Medina. Disfruta del encanto marroquí, confort refinado, baño privado y total privacidad.",
  keywords: [
    "habitaciones deluxe Marrakech",
    "habitación deluxe Marrakech",
    "riad de lujo Marrakech",
    "habitaciones de lujo Marrakech",
    "riad solo para adultos Marrakech",
    "hotel boutique Marrakech",
    "riad en la Medina de Marrakech",
    "habitaciones románticas Marrakech",
    "Pure House Marrakech",
  ],
  alternates: {
    canonical: "https://purehousemarrakech.com/es/deluxe/",
    languages: {
      en: "https://purehousemarrakech.com/deluxe/",
      fr: "https://purehousemarrakech.com/fr/deluxe/",
      es: "https://purehousemarrakech.com/es/deluxe/",
    },
  },
  openGraph: {
    title: "Habitaciones Deluxe en Marrakech | Pure House",
    description:
      "Habitaciones Deluxe en un riad de lujo solo para adultos en la Medina de Marrakech, combinando arquitectura marroquí, confort moderno y privacidad.",
    url: "https://purehousemarrakech.com/es/deluxe/",
    siteName: "Pure House Marrakech",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 800,
        alt: "Habitaciones Deluxe de lujo en Pure House Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habitaciones Deluxe en Marrakech | Pure House",
    description:
      "Descubre las Habitaciones Deluxe de Pure House, un riad de lujo solo para adultos en la Medina de Marrakech.",
    images: [
      "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
    ],
  },
};

const benefits = [
  {
    title: "Traslado al aeropuerto incluido",
    description:
      "Disfruta de un traslado gratuito desde el aeropuerto y de un acompañamiento personalizado hasta el riad.",
  },
  {
    title: "Salida tardía",
    description: "Disfruta de una salida más tarde, sujeta a disponibilidad.",
  },
  {
    title: "Pago seguro",
    description:
      "Tu pago se procesa de forma segura a través de nuestro sistema de reservas.",
  },
  {
    title: "Confirmación inmediata",
    description: "Recibe directamente por email la confirmación de tu reserva.",
  },
  {
    title: "Atención personalizada",
    description:
      "Habla directamente con Sara y nuestro equipo antes y durante tu estancia.",
  },
  {
    title: "Asistencia por WhatsApp",
    description:
      "¿Tienes alguna pregunta? Contacta directamente con nuestro equipo por WhatsApp.",
  },
];

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "@id": "https://purehousemarrakech.com/es/deluxe#room",
    name: "Habitaciones Deluxe - Pure House Marrakech",
    description:
      "Habitaciones Deluxe íntimas y cuidadosamente decoradas en Pure House Marrakech, combinando el patrimonio de la Medina con el lujo contemporáneo, confort refinado y privacidad.",
    url: "https://purehousemarrakech.com/es/deluxe/",
    bed: {
      "@type": "BedDetails",
      typeOfBed: "King Size",
    },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: 2,
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Baño privado con ducha",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Aire acondicionado con control individual",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Secador de pelo",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Caja fuerte en la habitación",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "No se permite fumar",
        value: true,
      },
    ],
    containedInPlace: {
      "@type": "Hotel",
      "@id": "https://purehousemarrakech.com/es/#hotel",
      name: "Pure House Marrakech",
      url: "https://purehousemarrakech.com/es/",
    },
  };
  return (
    <div className="relative flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Navbar path="/deluxe" second_path={"/fr/deluxe"} change={true} />
      <Intro />
      <RoomBookingCTA
        roomName="Habitación Deluxe"
        fromPrice="Desde 159 €"
        text="Consulta tus fechas para conocer la mejor tarifa disponible."
        btn="Ver disponibilidad"
        night="noche"
      />
      <WhyBookDirect
        title="Reserva directamente"
        subtitle="¿Por qué reservar directamente con nosotros?"
        text="Disfruta de una experiencia más personalizada al reservar directamente con Pure House Marrakech."
        benefits={benefits}
      />
      <Ameneties />
      <Footer path="/deluxe" second_path={"/fr/deluxe"} />
    </div>
  );
};

export default page;
