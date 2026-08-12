import Image from "next/image";
import React from "react";

const Map = () => {
  return (
    <div className="w-full flex justify-center items-center h-full  md:h-fit">
      <Image
        src="/riad/map-pure-house-medina.png"
        alt="map pure house riad"
        width={500}
        height={500}
        className="object-cover w-full lg:w-[600px]"
      />
    </div>
  );
};

export default Map;
