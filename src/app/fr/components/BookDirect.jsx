"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

const BookDirect = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      {/* Modal */}
      <div className="relative w-full max-w-md rounded-lg bg-white overflow-hidden shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full  text-white"
        >
          <IoCloseSharp size={25} />
        </button>

        {/* Image */}
        <div className="relative h-52 w-full">
          <Image
            src="/riad/riad-hall.jpeg" // replace with your image
            alt="Book direct"
            fill
            className="object-cover object-right"
          />
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h2 className="mb-3 font-serif text-xl text-[#b59a5a]">
            {`Pourquoi réserver en direct ?`}
          </h2>

          <p className="mb-5 text-sm text-gray-600 text-left">
            {`Réservez votre séjour directement sur notre site web et profitez
            d’avantages exclusifs :`}
          </p>

          <ul className="mb-6 space-y-3 text-sm text-gray-700">
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
            className="w-full bg-[#b59a5a] py-3 px-10 text-sm font-medium text-white hover:bg-[#a4894f] transition font-tntSport tracking-widest"
          >
            RÉSERVATION DIRECTE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDirect;
