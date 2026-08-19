import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";
import RoomBookingCTA from "@/components/RoomBookingCTA";
import WhyBookDirect from "@/components/WhyBookDirect";

export const metadata = {
  title: "Habitaciones Estándar en Marrakech | Pure House",
  description:
    "Descubre las Habitaciones Estándar de Pure House Marrakech, un riad de lujo solo para adultos en la Medina. Disfruta de confort, encanto marroquí, privacidad y una estancia romántica en Marrakech.",
  keywords: [
    "habitaciones estándar Marrakech",
    "habitaciones estándar en Marrakech",
    "riad de lujo Marrakech",
    "habitaciones de lujo Marrakech",
    "riad solo para adultos Marrakech",
    "riad en la Medina de Marrakech",
    "hotel boutique Marrakech",
    "habitaciones románticas Marrakech",
    "riad para parejas Marrakech",
    "Pure House Marrakech",
  ],
  alternates: {
    canonical: "https://purehousemarrakech.com/es/estandar/",
    languages: {
      en: "https://purehousemarrakech.com/standard/",
      fr: "https://purehousemarrakech.com/fr/standard/",
      es: "https://purehousemarrakech.com/es/estandar/",
    },
  },
  openGraph: {
    title: "Habitaciones Estándar en Marrakech | Pure House",
    description:
      "Habitaciones Estándar en un riad de lujo solo para adultos en la Medina de Marrakech, combinando encanto marroquí, confort moderno y privacidad.",
    url: "https://purehousemarrakech.com/es/estandar/",
    siteName: "Pure House Marrakech",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://purehousemarrakech.com/images/traditional-moroccan-riad-experience.webp",
        width: 1200,
        height: 800,
        alt: "Habitación Estándar en Pure House Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habitaciones Estándar en Marrakech | Pure House",
    description:
      "Descubre las Habitaciones Estándar de Pure House, un riad de lujo solo para adultos en la Medina de Marrakech.",
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
    "@id": "https://purehousemarrakech.com/es/estandar#room",
    name: "Habitaciones Estándar - Pure House Marrakech",
    description:
      "Habitaciones Estándar íntimas y acogedoras en Pure House Marrakech, un riad de lujo solo para adultos en la Medina de Marrakech, diseñadas para ofrecer confort, privacidad y una auténtica experiencia de riad.",
    url: "https://purehousemarrakech.com/es/estandar/",
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
        name: "Baño privado con ducha a ras de suelo",
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
      <Navbar path="/standard" second_path={"/fr/standard"} change={true} />
      <Intro />
      <RoomBookingCTA
        roomName="Habitación Estándar"
        fromPrice="Desde 133 €"
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
      <Footer path="/standard" second_path={"/fr/standard"} />
    </div>
  );
};

export default page;
