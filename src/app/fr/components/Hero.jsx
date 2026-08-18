"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import BookDirect from "./BookDirect";
import heroMobile from "@/data/heroMobile.json";
import heroDesktop from "@/data/heroDesktop.json";
import HotelRunnerSearchFR from "./HotelRunnerSearch";

const Hero = () => {
  const [currentIndexDesktop, setCurrentIndexDesktop] = useState(0);
  const [currentIndexMobile, setCurrentIndexMobile] = useState(0);
  const [isBookDirectOpen, setIsBookDirectOpen] = useState(false);

  useEffect(() => {
    // Desktop Image Interval
    const desktopInterval = setInterval(() => {
      setCurrentIndexDesktop((prev) => (prev + 1) % heroDesktop.length);
    }, 5000);

    // Mobile Image Interval
    const mobileInterval = setInterval(() => {
      setCurrentIndexMobile((prev) => (prev + 1) % heroMobile.length);
    }, 5000);

    // Modal Timer
    const modalTimer = setTimeout(() => {
      setIsBookDirectOpen(true);
    }, 2000);

    // Consolidated Cleanup
    return () => {
      clearInterval(desktopInterval);
      clearInterval(mobileInterval);
      clearTimeout(modalTimer);
    };
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero Image Carousel"
      className="relative w-full h-screen bg-gray-900 overflow-hidden"
    >
      <BookDirect
        isOpen={isBookDirectOpen}
        onClose={() => setIsBookDirectOpen(false)}
      />

      {/* --- DESKTOP SLIDER --- */}
      <div className="hidden lg:block w-full h-full">
        {heroDesktop.map((image, index) => {
          const isActive = index === currentIndexDesktop;

          return (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={image.src}
                alt={image.fr.alt}
                title={image.fr.title}
                fill // Replaces width/height for responsive full-screen images
                sizes="100vw"
                priority={index === 0} // CRITICAL FOR LCP: Preloads only the first image
                className={`object-cover ${image.class}`}
              />
            </div>
          );
        })}
      </div>

      {/* --- MOBILE SLIDER --- */}
      <div className="block lg:hidden w-full h-full">
        {heroMobile.map((image, index) => {
          const isActive = index === currentIndexMobile;

          return (
            <div
              key={image.src}
              className={`absolute inset-0 transition-all duration-1000 ${
                isActive
                  ? "opacity-100 blur-0 scale-100 z-10"
                  : "opacity-0 blur-sm scale-105 z-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={image.src}
                alt={image.fr.alt}
                title={image.fr.title}
                fill
                sizes="100vw"
                priority={index === 0} // CRITICAL FOR LCP
                className={`object-cover ${image.class}`}
              />
            </div>
          );
        })}
      </div>

      {/* Overlay (Optional: uncomment if you need text readability over images) */}
      {/* <div className="absolute inset-0 bg-black/30 z-20 pointer-events-none"></div> */}
      {/* HotelRunner */}
      <div className="absolute top-20 left-1/2 z-30 w-full max-w-6xl -translate-x-1/2 px-4">
        <HotelRunnerSearchFR />
      </div>
      {/* --- SCROLL DOWN ARROW --- */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white z-30">
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="p-3 block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce drop-shadow-md"
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
    </section>
  );
};

export default Hero;
