"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import Image from "next/image";

const Menu = ({ setIsOpen, path }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="w-full h-full flex justify-center items-center ">
        <div
          className={`pb-1 cursor-pointer w-[20%] text-[18px] lg:text-[30px] text-riad_primary`}
          onClick={() => setIsOpen(false)}
        >
          <IoIosClose size={35} />
        </div>
        <div className="w-full flex justify-center items-center pb-2">
          <Link href="/">
            <Image
              src="/riad/riad-logo-black.png"
              width={300}
              height={300}
              alt="Logo Pure House Medina"
              className={`mt-2 w-16 lg:w-20`}
            />
          </Link>
        </div>
        <div className="flex justify-start items-center gap-5 w-[20%] ">
          <div className="w-full flex justify-end items-center  text-white cursor-pointer">
            <Link
              href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
              className={`tracking-[0.1em] lg:tracking-[0.2em] font-light text-[10px] lg:text-[12px] leading-[28px] lg:leading-[34px] py-1 px-4 text-riad_background bg-riad_secondary hover:bg-riad_primary`}
            >
              Réserver
            </Link>
          </div>
          <div
            className="relative lg:block hidden"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <button
              className={`font-light tracking-widest flex justify-center items-center text-[12px] gap-2 pb-1 text-riad_primary`}
            >
              <MdLanguage size={20} />
              <div className="">
                <RiArrowDownSLine size={18} />
              </div>
            </button>
            {isDropdownOpen && (
              <ul className="absolute rounded top-8 -left-12 bg-riad_background mt-2 py-1 w-28 shadow-lg flex justify-center items-center">
                <li className="px-4 py-2 rounded-lg cursor-pointer hover:bg-riad_secondary transition-all duration-200 ease-in-out font-light text-riad_primary">
                  <Link rel="alternate" hreflang="en" href={`${path}`}>
                    {"EN"}
                  </Link>
                </li>
                <li className="px-4 py-2 rounded-lg cursor-pointer hover:bg-riad_secondary transition-all duration-200 ease-in-out font-light text-riad_primary">
                  <Link rel="alternate" hreflang="fr" href="#">
                    {"FR"}
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 w-full h-[1px] bg-riad_secondary mx-auto"></div>
    </div>
  );
};

export default Menu;
