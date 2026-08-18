"use client";

import Script from "next/script";

export default function ButtonBook() {
  return (
    <>
      <style>{`
        @import url(https://d2uyahi4tkntqv.cloudfront.net/assets/booking_button.css?v=1.0.0);
      `}</style>

      <div
        id="hr_booking_button"
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-[9999]
          block
          lg:hidden
          bg-white/95
          backdrop-blur-md
          border-t
          border-black/10
          px-4
          pt-3
          pb-[calc(0.75rem+env(safe-area-inset-bottom))]
          shadow-[0_-4px_20px_rgba(0,0,0,0.12)]
        "
      >
        <div className="mx-auto max-w-md">
          {/* HotelRunner injects the booking button here */}
        </div>
      </div>

      <Script
        id="hr_button_script"
        src="https://pure-house-marrakech.hotelrunner.com/widgets/4167ea2abb3c34f130dc/booking_button.js?v=1.0.0"
        strategy="afterInteractive"
      />
    </>
  );
}
