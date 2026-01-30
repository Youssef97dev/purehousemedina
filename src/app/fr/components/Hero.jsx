"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BookDirect from "./BookDirect";

const imagesLarge = [
  {
    src: "/riad-marrakech/luxury-riad-marrakech.webp",
    alt: "The charming street view leading to the Riad in the Medina",
    class: "object-bottom",
  },
  {
    src: "/riad-marrakech/hotels-in-marrakech.webp",
    alt: "Luxury travel inspiration for a trip to Marrakech, Morocco",
    class: "object-center",
  },
  {
    src: "/riad-marrakech/top-riad-marrakech.webp",
    alt: "Private chef dining experience at a luxury Marrakech Riad",
    class: "object-bottom",
  },
  {
    src: "/riad-marrakech/traditional-moroccan-riad-experience.webp",
    alt: "Beautiful traditional Moroccan lanterns providing warm lighting",
    class: "object-bottom",
  },
];

const imagesSmall = [
  {
    src: "/riad-marrakech/riad-marrakech-with-private-chef.webp",
    alt: "A peaceful courtyard stay in the center of Marrakech",
    class: "object-center",
  },
  {
    src: "/riad-marrakech/riad-near-koutoubia-mosque.webp",
    alt: "Stylish and trendy interior of riad Marrakech",
    class: "object-center",
  },
  {
    src: "/riad-marrakech/accommodation-near-majorelle-garden.webp",
    alt: "A peaceful and quiet bedroom tucked away in the Medina",
    class: "object-center",
  },
  {
    src: "/riad-marrakech/boutique-hotel-marrakech.webp",
    alt: "Pool garden area inside a luxury Marrakech Medina Riad",
    class: "object-bottom",
  },
  {
    src: "/riad-marrakech/riad-marrakech-medina.webp",
    alt: "Award-winning luxury guest house in the Marrakech Medina",
    class: "object-bottom",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexSmall, setCurrentIndexSmall] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLarge.length);
    }, 5000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexSmall((prevIndex) => (prevIndex + 1) % imagesSmall.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000); // show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="hero" className="relative w-full h-screen">
      <BookDirect isOpen={open} onClose={() => setOpen(false)} />
      <div className="w-full h-full hidden lg:block">
        {imagesLarge.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1500}
              height={1500}
              className={`w-full h-full object-cover ${image.class}`}
            />
          </div>
        ))}
      </div>

      <div className="w-full h-full block lg:hidden">
        {imagesSmall.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndexSmall ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1500}
              height={1500}
              className={`w-full h-full object-cover ${image.class}`}
            />
          </div>
        ))}
      </div>
      {/* Overlay 
      <div className="absolute inset-0 bg-black bg-opacity-30 hidden lg:block"></div>*/}

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white z-40">
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7 7 7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
