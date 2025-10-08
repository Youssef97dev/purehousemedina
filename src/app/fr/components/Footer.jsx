import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = ({ path }) => {
  return (
    <footer className="bg-riad_background text-riad_primary px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center space-y-4 md:space-y-0">
        {/* Left Section */}
        <Image
          src="/riad/riad-logo-gray.png"
          alt="logo pure house riad medina"
          width={100}
          height={100}
          className="object-cover w-40"
        />

        <div className="flex flex-col justify-center items-center md:items-start space-y-2 text-[12px] text-riad_primary">
          <span>
            <Link
              href="mailto:reservations@purehousemarrakech.com"
              className="underline"
            >
              reservations@purehousemarrakech.com
            </Link>
          </span>
          <span>+212 6 82 22 52 35</span>
          <div className="w-full flex justify-center items-center gap-4 lg:hidden text-[14px] font-light">
            <Link rel="alternate" hreflang="fr" href="#">
              {"FR"}
            </Link>
            <Link rel="alternate" hreflang="en" href={`${path}`}>
              {"EN"}
            </Link>
          </div>
        </div>

        {/* Center Section */}
        <div className="text-[12px] text-center text-riad_primary italic">
          <span>
            <FaLocationDot className="inline mr-1" />
            {
              "RIAD PURE HOUSE MARRAKECH 16 Derb Abou El Fdail, Marrakech 40000 Morocco"
            }
          </span>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 mt-4 md:mt-0 text-riad_primary">
          <Link href="#" className="hover:text-riad_secondary">
            <FaInstagram />
          </Link>
          <Link href="#" className="hover:text-riad_secondary">
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
