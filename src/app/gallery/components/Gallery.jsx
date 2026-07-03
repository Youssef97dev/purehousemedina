import Image from "next/image";
import Link from "next/link";

const IMAGES_PER_PAGE = 15;

export default function Gallery({ images, currentPage, totalImages }) {
  const totalPages = Math.ceil(totalImages / IMAGES_PER_PAGE);

  return (
    <>
      <section id="gallery" className="px-0 md:px-14 py-12 pt-[1.5px] lg:pt-14">
        <div
          key={currentPage}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1.5px]"
        >
          {images.map((image, index) => (
            <figure key={index} className="flex flex-col">
              <div className="relative w-full h-[65vh]">
                <Image
                  src={image.image}
                  alt={image.alt.en}
                  title={image.alt.en}
                  fill
                  priority={currentPage === 1 && index === 0}
                  loading={currentPage === 1 && index === 0 ? "eager" : "lazy"}
                  sizes="
                    (max-width:768px) 100vw,
                    (max-width:1024px) 50vw,
                    25vw
                  "
                  className={`object-cover lg:rounded-md ${image.class}`}
                />
              </div>

              <figcaption className="sr-only">{image.alt.en}</figcaption>
            </figure>
          ))}
        </div>

        {/* Updated Pagination */}
        <nav className="flex items-center justify-center gap-3 mt-10 text-sm md:text-base text-gray-700">
          {/* Previous Link */}
          {currentPage > 1 ? (
            <Link
              href={
                currentPage === 2
                  ? "/gallery"
                  : `/gallery/page/${currentPage - 1}`
              }
              className="hover:text-black transition-colors"
            >
              &larr; Previous
            </Link>
          ) : (
            <span className="text-gray-400 cursor-not-allowed">
              &larr; Previous
            </span>
          )}

          <span className="text-gray-300">|</span>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (page, index) => [
              <Link
                key={`page-${page}`}
                href={page === 1 ? "/gallery" : `/gallery/page/${page}`}
                className={`transition-colors ${
                  currentPage === page
                    ? "font-bold text-black"
                    : "hover:text-black"
                }`}
              >
                {page}
              </Link>,

              /* Separator between numbers */
              index < totalPages - 1 && (
                <span key={`sep-${page}`} className="text-gray-300">
                  |
                </span>
              ),
            ]
          )}

          <span className="text-gray-300">|</span>

          {/* Next Link */}
          {currentPage < totalPages ? (
            <Link
              href={`/gallery/page/${currentPage + 1}`}
              className="hover:text-black transition-colors"
            >
              Next &rarr;
            </Link>
          ) : (
            <span className="text-gray-400 cursor-not-allowed">
              Next &rarr;
            </span>
          )}
        </nav>
      </section>
    </>
  );
}
