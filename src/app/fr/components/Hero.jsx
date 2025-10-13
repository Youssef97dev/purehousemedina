"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const imagesLarge = [
  {
    src: "/riad/riad-hero-2.jpg",
    class: "object-bottom",
  },
  {
    src: "/riad/riad-hero-3.jpg",
    class: "object-center",
  },
  {
    src: "/riad/riad-hero-6.jpg",
    class: "object-bottom",
  },
];

const imagesSmall = [
  {
    src: "/riad/riad-12.jpg",
    class: "object-center",
  },
  {
    src: "/riad/riad-7.jpg",
    class: "object-center",
  },
  {
    src: "/riad/riad-22.jpg",
    class: "object-bottom",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLarge.length);
    }, 5000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="relative w-full h-screen">
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
              alt={`Image ${index + 1}`}
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
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
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
