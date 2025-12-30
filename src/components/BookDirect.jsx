"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const images = [
  "https://purehousemedina.vercel.app/riad/riad-hall.jpeg",
  "https://purehousemedina.vercel.app/riad/riad-hero-4.jpg",
  "https://purehousemedina.vercel.app/riad/riad-hero-3.jpg",
  "https://purehousemedina.vercel.app/riad/riad-hero-5.jpg",
  "https://purehousemedina.vercel.app/riad/suite-room-riad.jpg",
  "https://purehousemedina.vercel.app/riad/riad-42.jpeg",
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

        {/* Image 
        <div className="relative h-56 w-full">
          <Image
            src="/riad/riad-8.jpg" // replace with your image
            alt="Book direct"
            fill
            className="object-cover object-[50%,30%]"
          />
        </div>*/}

        <Swiper modules={[Navigation]} navigation className="rounded-lg">
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <Image
                src={src}
                alt="Book direct"
                width={500}
                height={500}
                className="object-cover h-[35vh] lg:h-[40vh] object-[50%,30%]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content */}
        <div className="p-6 text-center">
          <h2 className="mb-3 text-xl text-[#b59a5a] font-light">
            Why book direct?
          </h2>

          <p className="mb-5 text-sm text-gray-600 text-left font-winthorpe">
            Book your stay directly through our website and enjoy exclusive
            benefits:
          </p>

          <ul className="mb-6 space-y-3 text-sm text-gray-700 font-winthorpe">
            <li className="flex items-center justify-start gap-2">
              <span className="text-[#b59a5a]">✓</span>
              Best rate guaranteed
            </li>
            <li className="flex items-center justify-start gap-2">
              <span className="text-[#b59a5a]">✓</span>
              Exclusive offers and privileges
            </li>
            <li className="flex items-center justify-start gap-2">
              <span className="text-[#b59a5a]">✓</span>
              Priority and personalised service
            </li>
          </ul>

          <Link
            href="/booking"
            className="w-full bg-[#b59a5ab7] py-3 px-7 text-sm font-winthorpe text-white hover:bg-[#a4894f] transition tracking-widest"
          >
            Book Direct
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDirect;
