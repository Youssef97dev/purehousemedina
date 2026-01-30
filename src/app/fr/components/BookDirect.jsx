"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const images = [
  {
    src: "/riad-marrakech/traditional-moroccan-riad-experience.webp",
    alt: "Wellness and relaxation area in a Marrakech Riad",
  },
  {
    src: "/riad-marrakech/riad-near-jemaa-el-fna.webp",
    alt: "riad near jemaa el fna",
  },
  {
    src: "/riad-marrakech/hotels-in-marrakech.webp",
    alt: "Quiet space for yoga and meditation in a Marrakech Riad",
  },
  {
    src: "/riad-marrakech/romantic-riad-for-couples-marrakech.webp",
    alt: "The best luxury Riad stay in Marrakech for 2026",
  },
  {
    src: "/riad-marrakech/pure-house-marrakech-riad-medina.webp",
    alt: "Entire Riad available for exclusive private rental in Marrakech",
  },
  {
    src: "/riad-marrakech/exclusive-use-riad-marrakech.webp",
    alt: "Central patio of a traditional Riad with plants and seating",
  },
];

const BookDirect = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 [&_.swiper-button-next]:text-white
  [&_.swiper-button-prev]:text-white
  [&_.swiper-pagination-bullet]:bg-white
  [&_.swiper-pagination-bullet-active]:bg-red-500 animate-[fadeIn_0.4s_forwards] duration-300"
    >
      {/* Modal */}
      <div className="relative w-full max-w-md rounded-lg bg-white overflow-hidden shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full  text-white"
        >
          <IoCloseSharp size={25} />
        </button>

        <Swiper modules={[Navigation]} navigation className="rounded-lg">
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <Image
                src={src.src}
                alt={src.alt}
                width={500}
                height={500}
                className="object-cover h-[35vh] lg:h-[40vh] object-[50%,30%]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content */}
        <div className="p-6 text-center">
          <h2 className="mb-3 font-serif text-xl text-[#b59a5a] font-light">
            {`Pourquoi réserver en direct ?`}
          </h2>

          <p className="mb-5 text-sm text-gray-600 text-left font-winthorpe">
            {`Réservez votre séjour directement sur notre site web et profitez
            d’avantages exclusifs :`}
          </p>

          <ul className="mb-6 space-y-3 text-sm text-gray-700 font-winthorpe">
            <li className="flex items-center justify-start gap-2">
              <span className="text-[#b59a5a]">✓</span>
              Meilleur tarif garanti
            </li>
            <li className="flex items-center justify-start gap-2">
              <span className="text-[#b59a5a]">✓</span>
              Offres et avantages exclusifs
            </li>
            <li className="flex items-center justify-start gap-2">
              <span className="text-[#b59a5a]">✓</span>
              Service prioritaire et personnalisé
            </li>
          </ul>

          <Link
            href="/fr/booking"
            className="w-full bg-[#b59a5a] py-3 px-10 text-sm font-winthorpe text-white hover:bg-[#a4894f] transition tracking-widest"
          >
            Réservation directe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDirect;
