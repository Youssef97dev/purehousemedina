import Image from "next/image";
import React from "react";

const SectionSt = () => {
  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Text Left */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6">
            The Heart of the City: A Silent Sanctuary
          </h2>
          <div className="leading-relaxed space-y-6 text-riad_primary text-[14px] font-light">
            <p>
              There is an unmatched geographical advantage to staying in a riad
              marrakech medina rather than a standard resort on the outskirts of
              town. You are positioned mere steps away from the vibrant energy
              of Jemaa el-Fnaa and the labyrinthine souks, allowing you to
              easily immerse yourself in the {"city's"} lively pulse.
            </p>
            <p>
              Yet, the true magic happens the moment you step through the heavy,
              carved doors of your riad. The chaotic symphony of the streets
              instantly fades, replaced by the soothing acoustics of a courtyard
              water feature and complete silence. It is this profound
              contrast—immediate access to {"Marrakech's"} beating heart coupled
              with an ultra-private, serene retreat—that makes the authentic
              riad experience so highly sought after.
            </p>
          </div>
        </div>
        {/* Image Right */}
        <div className="w-full md:w-1/2 h-[500px]">
          <Image
            src="/images/riad-marrakech-medina-peaceful-sanctuary.webp"
            alt="A peaceful and quiet riad Marrakech Medina retreat located just steps away from the bustling Jemaa el-Fnaa and local souks."
            title="Find Your Silent Sanctuary in the Marrakech Medina"
            width={1500}
            height={1500}
            className="w-full h-full object-cover object-[50%_80%]"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionSt;
