"use client";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import Menu from "./Menu";
import Footer from "./Footer";

const Navbar = ({ path, change = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <nav
        className={`fixed z-50 w-full transition-colors duration-300 py-0 ${
          scrolled || change
            ? "bg-riad_background text-secondary"
            : "bg-transparent text-white"
        }`}
      >
        <div className="w-full flex justify-center items-center mx-auto px-5 lg:px-10 ">
          <div
            className={`pt-1 lg:pt-0 cursor-pointer w-[25%] lg:w-[20%] text-[18px] lg:text-[30px] ${
              scrolled || change ? "text-riad_primary" : "text-white"
            }`}
            onClick={() => setIsOpen(true)}
          >
            {/*<IoIosMenu />*/}
            <div
              className={`border-b-2 border-t-2 h-3 w-9 ${
                scrolled || change
                  ? "border-riad_primary"
                  : "border-riad_background"
              }`}
            ></div>
          </div>
          <div className="w-[50%] lg:w-[60%] flex justify-center items-center pb-2">
            <Link href="/">
              <Image
                src={
                  scrolled || change
                    ? "/riad/riad-logo-black.png"
                    : "/riad/riad-logo-white.png"
                }
                width={300}
                height={300}
                alt="Logo pure house medina"
                className={`mt-2 w-16 lg:w-20`}
              />
            </Link>
          </div>
          <div className="flex justify-start items-center gap-5 w-[25%] lg:w-[20%]">
            <div className="w-full flex justify-end items-center  text-white cursor-pointer">
              <Link
                href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
                className={`w-full text-center  lg:w-[60%] tracking-[0.1em] lg:tracking-[0.2em]  text-[12px] lg:text-[12px] leading-[28px] lg:leading-[28px] py-1 px-4 lg:px-6 italic transition-all duration-300 ease-in-out ${
                  scrolled || change
                    ? "text-riad_background bg-riad_secondary hover:bg-riad_primary"
                    : "text-riad_primary bg-riad_background hover:bg-riad_primary hover:text-riad_background"
                }`}
              >
                Reserve
              </Link>
            </div>
            <div
              className="relative lg:block hidden"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <button
                className={`font-light tracking-widest flex justify-center items-center text-[12px] gap-2 pb-1 ${
                  scrolled || change ? "text-riad_primary" : "text-white"
                }`}
              >
                <MdLanguage size={20} />
                <div className="">
                  <RiArrowDownSLine size={18} />
                </div>
              </button>
              {isDropdownOpen && (
                <ul className="absolute rounded top-8 -left-12 bg-riad_background mt-2 py-1 w-28 shadow-lg flex justify-center items-center">
                  <li className="px-4 py-2 rounded-lg cursor-pointer hover:bg-riad_secondary transition-all duration-200 ease-in-out font-light text-riad_primary">
                    <Link rel="alternate" hreflang="en" href="#">
                      {"EN"}
                    </Link>
                  </li>
                  <li className="px-4 py-2 rounded-lg cursor-pointer hover:bg-riad_secondary transition-all duration-200 ease-in-out font-light text-riad_primary">
                    <Link rel="alternate" hreflang="fr" href={`${path}`}>
                      {"FR"}
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          {/* Full-screen mobile menu */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-700"
            enterFrom="transform -translate-y-full opacity-0"
            enterTo="transform -translate-y-0 opacity-100"
            leave="transition ease-in duration-500"
            leaveFrom="transform -translate-y-0 opacity-100"
            leaveTo="transform -translate-y-full opacity-0"
          >
            <div className="fixed top-0 left-0 z-10 w-full h-fit lg:h-fit bg-riad_background flex flex-col items-left justify-center gap-4 px-5 mx-auto lg:px-10 py-1">
              <Menu setIsOpen={setIsOpen} path={path} />
              <div className=" px-6 py-5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                  {/* Pure House Medina */}
                  <div className="border-r border-riad_secondary">
                    <h3 className="mb-4 text-riad_primary cursor-pointer ttext-[16px] leading-[28px]">
                      {"Pure House Medina"}{" "}
                      <span className="text-[12px]">{"▼"}</span>
                    </h3>
                    <ul className="space-y-2 text-[12px] text-riad_secondary">
                      <li>
                        <Link
                          href="/standard"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Standard Rooms
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/deluxe"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Deluxe Rooms
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/suites"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Suites
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Photoshooting
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Pure FarmHouse */}
                  <div className="border-r border-riad_secondary">
                    <h3 className="mb-4 text-riad_primary cursor-pointer text-[16px] leading-[28px]">
                      {"Pure FarmHouse"}{" "}
                      <span className="text-[12px]">{"▼"}</span>
                    </h3>
                    <ul className="space-y-2 text-[12px] text-riad_secondary">
                      <li>
                        <Link
                          href="purehousecollection.vercel.app/pure-farmhouse"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://purehousecollection.vercel.app/pure-farmhouse/contact"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Photoshooting
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Pure House On The Lake */}
                  <div className="border-r border-riad_secondary">
                    <h3 className="mb-4 text-riad_primary cursor-pointer text-[16px] leading-[28px]">
                      {"Pure House On The Lake"}{" "}
                      <span className="text-[12px]">{"▼"}</span>
                    </h3>
                    <ul className="space-y-2 text-[12px] text-riad_secondary">
                      <li>
                        <Link
                          href="https://purehousecollection.vercel.app/pure-house-on-the-lake"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://purehousecollection.vercel.app/pure-house-on-the-lake/events"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Photoshooting
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Pure House Ibiza */}
                  {/*<div className="border-r border-riad_secondary">
                    <h3 className="mb-4 text-riad_primary cursor-pointer text-[16px] leading-[28px]">
                      {"Pure House Ibiza"}{" "}
                      <span className="text-[12px]">{"▼"}</span>
                    </h3>
                    <ul className="space-y-2 text-[12px] text-riad_secondary">
                      <li>
                        <Link
                          href="#"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Link 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Link 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-riad_primary transition-all duration-200 ease-in-out"
                        >
                          Link 1
                        </Link>
                      </li>
                    </ul>
                  </div>*/}
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </nav>
    )
  );
};

export default Navbar;
