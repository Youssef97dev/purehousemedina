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
            Why book direct?
          </h2>

          <p className="mb-5 text-sm text-gray-600 text-left">
            Book your stay directly through our website and enjoy exclusive
            benefits:
          </p>

          <ul className="mb-6 space-y-3 text-sm text-gray-700">
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
            className="w-full bg-[#b59a5a] py-3 px-10 text-sm font-medium text-white hover:bg-[#a4894f] transition font-tntSport tracking-widest"
          >
            BOOK DIRECT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDirect;
