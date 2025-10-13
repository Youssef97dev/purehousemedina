import React from "react";
import Image from "next/image";
import Link from "next/link";

const GalleryImage = [
  {
    image: "/riad/guest-4.jpg",
    class: "object-center",
  },
  {
    image: "/riad/guest-6.jpg",
    class: "object-center",
  },
  {
    image: "/riad/guest-7.jpg",
    class: "object-center",
  },
  {
    image: "/riad/guest-8.jpg",
    class: "object-center",
  },
  {
    image: "/riad/guest-9.jpg",
    class: "object-center",
  },
];

const GalleryVideo = [
  {
    video: "/riad/guest-video-3.mp4",
  },
  {
    video: "/riad/guest-video-2.mp4",
  },
];

const Shooting = () => {
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
        {GalleryImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <Image
                src={category.image}
                alt="Shhoting Pure House Medina"
                fill
                className={`object-cover h-full ${category.class}`}
              />
            </div>
          </div>
        ))}
        {GalleryVideo.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <video
                src={category.video} // ton lien ou fichier vidéo
                autoPlay
                muted
                loop
                playsInline
                className={`object-cover w-full h-full `}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shooting;
