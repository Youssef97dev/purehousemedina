import React from "react";

const RoomBookingCTA = ({ roomName, fromPrice, text, btn, night }) => {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 mt-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            {roomName}
          </p>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-light text-neutral-900">
              {fromPrice}
            </span>

            <span className="text-sm text-neutral-500">/ {night}</span>
          </div>

          <p className="mt-1 text-sm text-neutral-500">{text}</p>
        </div>

        <a
          href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
          className="inline-flex min-h-[52px] items-center justify-center bg-riad_secondary px-8 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-neutral-800"
        >
          {btn}
        </a>
      </div>
    </section>
  );
};

export default RoomBookingCTA;
