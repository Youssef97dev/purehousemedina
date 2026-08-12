"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import popupBook from "@/data/popupBook.json";

const BookDirect = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose} // Close modal when clicking the backdrop
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 
        [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white 
        [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:bg-red-500 
        animate-[fadeIn_0.4s_forwards] duration-300"
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
        className="relative w-full max-w-md rounded-lg bg-white overflow-hidden shadow-xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/50"
        >
          <IoCloseSharp size={20} />
        </button>

        {/* Image Carousel */}
        <Swiper modules={[Navigation]} navigation className="w-full">
          {popupBook.map((image, index) => (
            <SwiperSlide key={image.src}>
              <div className="relative w-full h-[35vh] lg:h-[40vh]">
                <Image
                  src={image.src}
                  alt={image.es.alt}
                  title={image.es.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority={index === 0} // CRITICAL: Only preloads the first slide for speed
                  className={`object-cover object-[50%,30%] ${
                    image.class || ""
                  }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content */}
        <div className="p-6 text-center">
          <h2
            id="modal-title"
            className="mb-3 text-xl text-[#b59a5a] font-light"
          >
            ¿Por qué reservar directamente?
          </h2>

          <p className="mb-5 text-sm text-gray-600 text-left font-winthorpe">
            Reserva tu estancia directamente en nuestro sitio web y disfruta de
            beneficios exclusivos :
          </p>

          <ul className="mb-6 space-y-3 text-sm text-gray-700 font-winthorpe">
            <li className="flex items-center justify-start gap-2">
              <span className="text-[#b59a5a]" aria-hidden="true">
                ✓
              </span>
              Mejor tarifa garantizada
            </li>
            <li className="flex items-center justify-start gap-2">
              <span className="text-[#b59a5a]" aria-hidden="true">
                ✓
              </span>
              Ofertas y beneficios exclusivos
            </li>
            <li className="flex items-center justify-start gap-2">
              <span className="text-[#b59a5a]" aria-hidden="true">
                ✓
              </span>
              Servicio prioritario y personalizado
            </li>
          </ul>

          <Link
            href="/es/reservas"
            className="inline-block w-full bg-[#b59a5ab7] py-3 px-7 text-sm font-winthorpe text-white hover:bg-[#a4894f] transition tracking-widest"
          >
            Reserva directa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDirect;
