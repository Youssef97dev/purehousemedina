import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/best-riads-marrakech-medina.webp"
          alt="A wide-angle look inside a tranquil luxury riad Marrakech, offering a private oasis away from the busy Medina streets."
          title="Welcome to Pure House: A Premier Marrakech Riad"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover hidden lg:block object-bottom`}
        />
        <Image
          src="/images/best-luxury-riads-marrakech-courtyard.webp"
          alt="A tranquil interior courtyard featuring a central plunge pool and traditional architecture inside one of the best riads in Marrakech."
          title="Discover the Best Luxury Riads in Marrakech"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover block lg:hidden`}
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-stone-900/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl  font-serif text-white mb-6 drop-shadow-lg">
          Why a Luxury Riad in the Marrakech Medina Beats Traditional Hotels
        </h1>
        <p className="text-lg  text-stone-100 font-light tracking-wide mb-10 drop-shadow-md">
          Discover what separates standard accommodations from the best riads in
          Marrakech.
        </p>
        <Link
          href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
          className="bg-white text-stone-900 px-4 py-3 uppercase tracking-[0.2em] text-sm hover:bg-stone-900 hover:text-stone-100 font-light transition duration-300"
        >
          Check Availability
        </Link>
      </div>
    </section>
  );
};

export default Hero;
