import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/romantic-couple-getaway-medina-marrakech.webp"
          alt="Chambre de luxe au Riad Pure House Marrakech avec décoration marocaine traditionnelle et atmosphère paisible réservée aux adultes"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover hidden lg:block object-bottom`}
        />
        <Image
          src="/images/adults-only-luxury-riad-marrakech-pool.webp"
          alt="Suite de charme romantique au cœur de la Médina de Marrakech, conçue pour un calme absolu et un confort total"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover block lg:hidden`}
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-stone-900/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-lg">
          Un Riad {"d'Exception"} Exclusivement Réservé aux Adultes à Marrakech
        </h1>
        <p className="text-lg md:text-xl text-stone-100 font-light tracking-wide mb-10 drop-shadow-md">
          Paix absolue et romantisme au cœur de la Médina.
        </p>
        <Link
          href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
          className="bg-white text-stone-900 px-4 py-3 uppercase tracking-[0.2em] text-sm hover:bg-stone-100 transition duration-300"
        >
          Vérifier la Disponibilité
        </Link>
      </div>
    </section>
  );
};

export default Hero;
