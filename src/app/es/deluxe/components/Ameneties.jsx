// components/Amenities.tsx
"use client";
import { FaSnowflake, FaWifi, FaBed, FaShower } from "react-icons/fa";
import { PiHairDryerFill } from "react-icons/pi";
import { BsFillSafeFill } from "react-icons/bs";
import { TbSmokingNo } from "react-icons/tb";

const amenities = [
  { icon: <FaBed />, label: "Cama King Size" },
  { icon: <FaShower />, label: "Baño privado con ducha" },
  { icon: <FaWifi />, label: "Wi-Fi" },
  { icon: <FaSnowflake />, label: "Aire acondicionado con control individual" },
  { icon: <PiHairDryerFill />, label: "Secador de pelo" },
  { icon: <BsFillSafeFill />, label: "Caja fuerte en la habitación" },
  { icon: <TbSmokingNo />, label: "No se permite fumar" },
];

const Ameneties = () => {
  return (
    <section className="px-6 py-12 text-center">
      <h2 className="text-[28px] leading-[34px] text-riad_primary font-light mb-8">
        Servicios y comodidades
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="text-3xl text-riad_secondary">{item.icon}</div>
            <p className="text-sm text-riad_primary">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ameneties;
