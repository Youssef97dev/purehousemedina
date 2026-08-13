"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Victoria Snedker",
    date: "3 months ago",
    text: "This RIAD is incredible. It’s magical and it’s heavenly. The location is like serenity. Tucked away minutes from the main square, which is an assault on the senses, you would be forgiven when turning into the alleyway for this riad that you were in the middle of nowhere. The sound disappears and your senses calm. Inside it is beautiful, the breakfast was delicious with fresh juices, Morrocan breakfasts and delightful crepes. This impossibly the best hotel I’ve ever stayed in. They even give you a phone so you have data, maps and the ability to contact the team 24/7. The rooftop is glorious. Staff always on hand for whatever you need - beer, mint tea, snacks - whatever you need",
  },
  {
    name: "ANITA TAILOR",
    date: "4 months ago",
    text: "Our stay at Pure House Riad Marrakesh was absolutely perfect — a true 10/10 experience from start to finish. The staff made this trip unforgettable. A special thank you to Sara, Abdul, Hamza, Ahmed, and the rest of the Pure House family, who went above and beyond every single day. Their kindness, professionalism, and attention to detail made us feel completely at home.",
  },
  {
    name: "Patricia Avelar",
    date: "3 months ago",
    text: "We traveled as a group of 4, 2 couples, and we have unanimously loved our experience at Pure House. The building is stunning, everything is well appointed, the breakfast is amazing, and most importantly the staff is absolutely incredible. A special shout out to Abdul, Mohammad (who was brand new) but but simply blew our mind with his curiosity and being an amazi",
  },
  {
    name: "Ashley Thomas",
    date: "4 months ago",
    text: "An incredible experience. Pure House feels magical. It’s a quiet oasis hidden from the hustle and bustle. It’s so quiet there you would never know the full intensity of the medina is around the corner. Ahmed is one of the most attentive people we met on our visit to Marrakech - knowledgeable, helpful and kind, his presence will made us feel calm and safe in the Riad and in the medina streets. We would definitely stay again.",
  },
  {
    name: "Claire Shuster",
    date: "5 months ago",
    text: "We stayed 5 nights at Pure House and it was absolutely beautiful. All of the staff, Sara, Ahmed, Abdul and the rest of the team went above and beyond for us. Stunning interiors, cozy rooms, high standard of cleaning, perfect location only 10 minutes walk from the main square (Jemaa El-Fnaa), however it’s quiet and away from the bustle so it felt like an oasis.",
  },
  {
    name: "Arbnor Nikq (Nooli)",
    date: "3 months ago",
    text: "More than 5 Stars – Pure House Marrakech Redefines Hospitality! We will never forget this vacation, and it’s all because of Pure House Marrakech. This is not a hotel, you truly feel like you are in a Moroccan home.",
  },
  {
    name: "stella campos",
    date: "5 months ago",
    text: "Wonderful stay at Pure House Marrakech! The hotel is beautifully decorated with an elegant Moroccan style and a very peaceful atmosphere. Everything is thoughtfully designed and very charming.",
  },
  {
    name: "Sheila Marsh",
    date: "5 months ago",
    text: "All of the glowing reviews about Pure House Riad were exactly as described. The riad is located within the Medina which can be very busy, dusty and overwhelming. But once you step foot inside, it’s like a peaceful oasis of calm. This hotel is quiet (with soft jazzy music) and that is what we were looking for to balance the chaotic Medina. It is beautiful! Very tastefully minimalist decor with open air and lush vegetation. We booked a room (the letter “I” room) on the third floor which was absolutely spotless! There are lots of stairs for those with mobility issues.",
  },
  {
    name: "Paul Z",
    date: "3 months ago",
    text: "What’s hidden gem. You would never know what a gorgeous place was tucked away here. Stunning inside, great staff, location and amazing breakfast. I’d like to especially thank Ahmed and Abdul the night shift guys. Made me feel like I was staying in the Four Seasons. Will definitely return here again when I come back.",
  },
  {
    name: "Geoff",
    date: "8 months ago",
    text: "Pure House Marrakech is a genuine oasis in the city. From the moment I arrived, Sara set the tone—warm, attentive, and effortlessly welcoming. She’s an exceptional host who makes everything feel personal and seamless.",
  },
];

const Stars = () => {
  return (
    <div className="flex gap-1 text-[13px] text-[#b49763]">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>★</span>
      ))}
    </div>
  );
};

export default function GoogleReviews({ title, subtitle, text_, link_ }) {
  return (
    <section className="bg-[#f8f6f2] py-5 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
            {subtitle}
          </span>

          <h2 className="mt-5 font-serif text-3xl font-light tracking-tight text-neutral-900 md:text-5xl">
            {title}
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3">
            <Stars />

            <span className="text-xs text-neutral-500">{text_}</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={reviews.length > 3}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".reviews-next",
              prevEl: ".reviews-prev",
            }}
            pagination={{
              el: ".reviews-pagination",
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="reviews-swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <article className="flex min-h-[300px] flex-col justify-between border border-neutral-200 bg-white p-7 md:p-8">
                  <div>
                    <Stars />

                    <p className="mt-7 font-serif text-[17px] leading-8 text-neutral-700">
                      “{review.text}”
                    </p>
                  </div>

                  <div className="mt-8 flex items-end justify-between border-t border-neutral-100 pt-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-900">
                        {review.name}
                      </p>

                      <p className="mt-1 text-[11px] text-neutral-400">
                        {review.date}
                      </p>
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                      Google
                    </span>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <button
            type="button"
            aria-label="Previous reviews"
            className="reviews-prev absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-900 hover:text-white md:flex"
          >
            ←
          </button>

          <button
            type="button"
            aria-label="Next reviews"
            className="reviews-next absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-900 hover:text-white md:flex"
          >
            →
          </button>
        </div>

        {/* Pagination */}
        <div className="reviews-pagination mt-5 flex justify-center gap-2" />

        {/* Google link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/travel/search?q=pure%20house%20marrakech%20review&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121762713&hl=en-MA&gl=ma&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4ZGFmZWY1ZTA4NDU5NGI5OjB4NDgyNDhmZjlhZmQwZWY2ZRIaEhQKBwjqDxAIGA0SBwjqDxAIGA4YATICEAA&qs=CAEyE0Nnb0k3dDdEX3ByX281SklFQUU4AkIJCW7v0K_5jyRIQgkJbu_Qr_mPJEg&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiws8KF6J2WAxUAAAAAHQAAAAAQAw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.25em] text-neutral-700 underline underline-offset-8 transition hover:text-neutral-400"
          >
            {link_}
          </a>
        </div>
      </div>

      <style jsx global>{`
        .reviews-pagination .swiper-pagination-bullet {
          width: 5px;
          height: 5px;
          margin: 0 4px !important;
          background: #c8c4bd;
          opacity: 1;
        }

        .reviews-pagination .swiper-pagination-bullet-active {
          background: #292724;
        }

        .reviews-swiper {
          padding: 5px 2px;
        }
      `}</style>
    </section>
  );
}
