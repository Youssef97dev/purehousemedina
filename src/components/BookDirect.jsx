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
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4
        [&_.swiper-button-next]:text-white
        [&_.swiper-button-prev]:text-white
        animate-[fadeIn_0.4s_forwards]"
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-3 top-3 z-20 flex h-8 w-8
            items-center justify-center rounded-full bg-black/30
            text-white transition hover:bg-black/50"
        >
          <IoCloseSharp size={20} />
        </button>

        {/* Image Carousel */}
        <Swiper modules={[Navigation]} navigation className="w-full">
          {popupBook.map((image, index) => (
            <SwiperSlide key={image.src}>
              <div className="relative h-[35vh] w-full lg:h-[40vh]">
                <Image
                  src={image.src}
                  alt={image.en.alt}
                  title={image.en.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority={index === 0}
                  className={`object-cover object-[50%,30%] ${
                    image.class || ""
                  }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content */}
        <div className="px-6 pb-7 pt-6">
          {/* Heading */}
          <div className="text-center">
            <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#b59a5a]">
              Pure House Marrakech
            </p>

            <h2 id="modal-title" className="text-xl font-light text-[#b59a5a]">
              Why book direct?
            </h2>

            <p className="mt-3 text-left text-sm leading-6 text-gray-600 font-winthorpe">
              Book directly through our website and enjoy a more personal
              experience with exclusive direct-booking benefits.
            </p>
          </div>

          {/* Benefits */}
          <ul className="mt-6 space-y-2 text-sm text-gray-700 font-winthorpe">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-[#b59a5a]" aria-hidden="true">
                ✓
              </span>

              <span>
                <strong className="font-medium">
                  Complimentary airport transfer
                </strong>
                <br />
                Personal escort to the riad.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-[#b59a5a]" aria-hidden="true">
                ✓
              </span>

              <span>
                <strong className="font-medium">Late checkout</strong>
                <br />
                Subject to availability.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-[#b59a5a]" aria-hidden="true">
                ✓
              </span>

              <span>
                <strong className="font-medium">Secure payment</strong>
                <br />
                Book with confidence through our secure booking system.
              </span>
            </li>
          </ul>

          {/* CTA */}
          <Link
            href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
            onClick={onClose}
            className="mt-5 flex w-full items-center justify-center
              bg-[#b59a5a] px-7 py-3 text-sm 
              tracking-[0.15em] text-white transition
              hover:bg-[#a4894f]"
          >
            CHECK AVAILABILITY
          </Link>

          {/* Reassurance */}
          <p className="mt-3 text-center text-[10px] tracking-wide text-gray-400">
            Book directly with Pure House Marrakech
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDirect;
