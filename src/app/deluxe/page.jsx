import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Ameneties from "./components/Ameneties";
import RoomBookingCTA from "@/components/RoomBookingCTA";
import WhyBookDirect from "@/components/WhyBookDirect";

export const metadata = {
  title: "Deluxe Rooms | Luxury Boutique Riad in Marrakech | Pure House Medina",
  description:
    "Relax in our Deluxe Rooms at Pure House, a luxury adults-only riad in the Marrakech Medina. Enjoy king-size beds, traditional tadelakt bathrooms, and romantic Moroccan decor.",
  alternates: {
    canonical: "https://purehousemarrakech.com/deluxe/",
    languages: {
      "en-US": "https://purehousemarrakech.com/deluxe/",
      "fr-FR": "https://purehousemarrakech.com/fr/deluxe/",
      "es-ES": "https://purehousemarrakech.com/es/deluxe/",
      "x-default": "https://purehousemarrakech.com/deluxe/",
    },
  },
  openGraph: {
    title:
      "Deluxe Rooms | Luxury Boutique Riad in Marrakech | Pure House Medina",
    description:
      "Relax in our Deluxe Rooms at Pure House, a luxury adults-only riad in the Marrakech Medina. Enjoy king-size beds, traditional tadelakt bathrooms, and romantic Moroccan decor.",
    url: "https://purehousemarrakech.com/deluxe/",
    siteName: "Pure House Marrakech",
    images: [
      {
        url: "https://purehousemarrakech.com/images/luxury-deluxe-room-boutique-hotel-marrakech.webp",
        width: 1200,
        height: 630,
        alt: "Spacious luxury deluxe room featuring a plush king bed and traditional tadelakt finishes at the exclusive Pure House boutique hotel.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Deluxe Rooms | Luxury Boutique Riad in Marrakech | Pure House Medina",
    description:
      "Relax in our Deluxe Rooms at Pure House. Enjoy king-size beds, traditional tadelakt bathrooms, and romantic Moroccan decor in the Medina.",
    images: [
      "https://purehousemarrakech.com/images/luxury-deluxe-room-boutique-hotel-marrakech.webp",
    ],
  },
};
const benefits = [
  {
    title: "Complimentary Airport Transfer",
    description:
      "Enjoy a complimentary airport transfer and personal escort to the riad.",
  },
  {
    title: "Late Checkout",
    description: "Enjoy a later departure time, subject to availability.",
  },
  {
    title: "Secure Payment",
    description:
      "Your payment is processed securely through our booking system.",
  },
  {
    title: "Instant Confirmation",
    description: "Receive your booking confirmation directly by email.",
  },
  {
    title: "Personal Assistance",
    description:
      "Speak directly with Sara and our team before and during your stay.",
  },
  {
    title: "WhatsApp Assistance",
    description: "Have a question? Contact our team directly on WhatsApp.",
  },
];

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: "Luxury Deluxe Room in Marrakech Boutique Hotel",
    description:
      "Relax in our spacious Deluxe Rooms featuring king-size beds, traditional Moroccan tadelakt bathrooms, and romantic boutique decor.",
    url: "https://purehousemarrakech.com/deluxe/",
    bed: {
      "@type": "BedDetails",
      typeOfBed: "deluxe",
      numberOfBeds: "1",
    },
    occupancy: {
      "@type": "QuantitativeValue",
      value: 2,
    },
    image: [
      "https://purehousemarrakech.com/images/luxury-deluxe-room-boutique-hotel-marrakech.webp",
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
      <Navbar path="/fr/deluxe" second_path={"/es/deluxe"} change={true} />
      <Intro />
      <RoomBookingCTA
        roomName="Deluxe Room"
        fromPrice="From €159"
        text="Check your dates for the best available rate."
        btn="Check Availability"
        night="night"
      />
      <WhyBookDirect
        title="Book Direct"
        subtitle="Why book direct with us"
        text="Enjoy a more personal experience when you book directly with
            Pure House Marrakech."
        benefits={benefits}
      />
      <Ameneties />
      <Footer path="/fr/deluxe" second_path={"/es/deluxe"} />
    </div>
  );
};

export default page;
