"use client";

import Script from "next/script";

export default function HotelRunnerSearchFR() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://d2uyahi4tkntqv.cloudfront.net/assets/shared.booknow.css?v=1.0.0"
      />

      <link
        rel="stylesheet"
        href="https://d2uyahi4tkntqv.cloudfront.net/assets/search_widget.css?v=1.0.0"
      />

      <div id="hr_search_widget" />

      <Script
        id="hr_widget_script"
        src="https://pure-house-marrakech.hotelrunner.com/widgets/5b02b83e9190571a9bc6/search_widget.js?v=1.0.0"
        strategy="afterInteractive"
      />
    </>
  );
}
