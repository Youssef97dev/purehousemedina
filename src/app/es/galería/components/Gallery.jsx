"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const IMAGES_PER_PAGE = 12;

export default function Gallery({ images, currentPage, totalImages }) {
  const totalPages = Math.ceil(totalImages / IMAGES_PER_PAGE);

  // Helper to open Pinterest Pin popup
  const handlePin = (e, imageSrc, altText) => {
    e.preventDefault();
    e.stopPropagation();

    // Construct full absolute image URL if relative path is used
    const absoluteImageUrl = imageSrc.startsWith("http")
      ? imageSrc
      : `${
          typeof window !== "undefined" ? window.location.origin : ""
        }${imageSrc}`;

    const currentUrl =
      typeof window !== "undefined" ? window.location.href : "";

    const pinUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      currentUrl
    )}&media=${encodeURIComponent(
      absoluteImageUrl
    )}&description=${encodeURIComponent(altText || "Le Salama Marrakech")}`;

    window.open(pinUrl, "_blank", "width=750,height=600,scrollbars=yes");
  };

  return (
    <section id="gallery" className="px-4 md:px-14 py-12 pt-24 lg:pt-28">
      {/* 4-Images-Per-Row Grid for Vertical Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px]">
        {images.map((image, index) => {
          const isPriority = currentPage === 1 && index < 4;

          return (
            <motion.figure
              key={image.src}
              className="flex flex-col aspect-3/4"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: (index % 4) * 0.1,
              }}
            >
              <div className="group relative w-full h-[60vh] lg:h-[75vh] overflow-hidden rounded-xl bg-[#E5DCC8]/20 border border-[#E5DCC8]/40 shadow-sm">
                <Image
                  src={image.src}
                  alt={image.alt.es}
                  title={image.title.es}
                  fill
                  priority={isPriority}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                    image.class || ""
                  }`}
                />

                {/* Subtle Gradient & Pin Button on Hover */}
                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex justify-end items-start pointer-events-none">
                  <button
                    onClick={(e) =>
                      handlePin(e, image.src, image.alt.es || image.title.es)
                    }
                    aria-label="Save to Pinterest"
                    className="pointer-events-auto flex items-center gap-2 bg-white/90 hover:bg-white text-gray-900 px-3 py-1.5 rounded-full shadow-md backdrop-blur-md transition-all duration-300 transform translate-y-[-8px] group-hover:translate-y-0 text-xs font-medium uppercase tracking-wider hover:scale-105"
                  >
                    {/* Pinterest Icon SVG */}
                    <svg
                      className="w-3.5 h-3.5 fill-[#E60023]"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                    <span>Save</span>
                  </button>
                </div>
              </div>

              <figcaption className="sr-only">{image.title.es}</figcaption>
            </motion.figure>
          );
        })}
      </div>

      {/* Editorial Pagination */}
      <nav className="flex items-center justify-center gap-6 mt-16 text-xs uppercase tracking-widest text-gray-500 font-light">
        {currentPage > 1 ? (
          <Link
            href={
              currentPage === 2
                ? "/es/galería"
                : `/es/galería/page/${currentPage - 1}`
            }
            className="hover:text-black transition-colors"
          >
            &larr; Anterior
          </Link>
        ) : (
          <span className="text-gray-300 cursor-not-allowed">
            &larr; Anterior
          </span>
        )}

        <div className="flex items-center gap-3 px-4 border-x border-[#E5DCC8]">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={`page-${page}`}
              href={page === 1 ? "/es/galería" : `/es/galería/page/${page}`}
              className={`transition-colors px-1 ${
                currentPage === page
                  ? "font-semibold text-black underline underline-offset-8 decoration-1"
                  : "hover:text-black text-gray-400"
              }`}
            >
              {page < 10 ? `0${page}` : page}
            </Link>
          ))}
        </div>

        {currentPage < totalPages ? (
          <Link
            href={`/es/galería/page/${currentPage + 1}`}
            className="hover:text-black transition-colors"
          >
            Siguiente &rarr;
          </Link>
        ) : (
          <span className="text-gray-300 cursor-not-allowed">
            Siguiente &rarr;
          </span>
        )}
      </nav>
    </section>
  );
}
