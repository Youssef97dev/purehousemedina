"use client";

import Link from "next/link";

const ButtonBook = ({ text }) => {
  return (
    <div className="fixed right-4 top-52 z-[9999] -translate-y-1/2 lg:hidden">
      <Link
        href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
        className="
          flex
          -rotate-90
          origin-right
          items-center
          justify-center
          rounded-t-md
          bg-riad_primary
          px-6
          py-3
          text-xs
          font-medium
          uppercase
          tracking-[0.2em]
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:bg-riad_background
          hover:text-riad_primary
          active:scale-95
        "
      >
        {text}
      </Link>
    </div>
  );
};

export default ButtonBook;
