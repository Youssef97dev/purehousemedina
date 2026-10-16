"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight, FaCalendarAlt, FaClock, FaCheck, FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Real Google Review Stars Component
const ReviewStars = () => (
  <div className="flex gap-1 text-[14px] text-[#b49763]" aria-hidden="true">
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star}>★</span>
    ))}
  </div>
);

export default function NewYearBlogPost({ data, locale = "en" }) {
  const [tocOpen, setTocOpen] = useState(false);

  // Cross-lingual paths for the navigation and footer language switcher
  const enPath = data.alternateUrls.en;
  const frPath = data.alternateUrls.fr;
  const esPath = data.alternateUrls.es;

  return (
    <div className="relative min-h-screen bg-riad_background text-riad_primary selection:bg-riad_secondary selection:text-white">
      {/* Top Navbar with reciprocal localized routes */}
      <Navbar
        en_path={enPath}
        path={frPath}
        second_path={esPath}
        change={true}
      />

      {/* 1. HERO SECTION */}
      <header className="relative w-full pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 md:px-12 bg-gradient-to-b from-[#2a2725] to-[#1f1d1b] text-white overflow-hidden">
        {/* Background Image with WCAG AA compliant dark gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src={data.heroImage}
            alt={data.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f1d1b] via-[#1f1d1b]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#e4e0dc]/80">
              {data.breadcrumbs.map((crumb, idx) => (
                <li key={crumb.name} className="flex items-center gap-2">
                  {idx > 0 && <span className="opacity-40">/</span>}
                  {idx === data.breadcrumbs.length - 1 ? (
                    <span className="text-[#e4e0dc] font-medium" aria-current="page">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      href={crumb.url}
                      className="hover:text-white transition-colors underline-offset-4 hover:underline"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* H1 Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light font-serif tracking-tight leading-[1.15] text-[#f7f5f2] mb-6">
            {data.h1}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl font-light text-[#e4e0dc]/90 max-w-2xl leading-relaxed mb-8">
            {data.heroSubtitle}
          </p>

          {/* Editorial Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-light text-[#e4e0dc]/70 mb-10 pb-6 border-b border-white/10 w-full max-w-xl">
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="opacity-60" /> {data.updatedDate}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-2">
              <FaClock className="opacity-60" /> {data.readingTime}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="uppercase tracking-widest text-[#e4e0dc]">
              Pure House Marrakech
            </span>
          </div>

          {/* Hero CTA Button */}
          <div>
            <Link
              href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 bg-riad_background text-riad_primary px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>{data.ctaCheckAvailability}</span>
              <FaArrowRight size={11} />
            </Link>
          </div>
        </div>
      </header>

      {/* 2. TRUST BAR */}
      <section className="border-b border-riad_secondary/25 bg-[#eae7e3] py-4 px-6" aria-label="Guest Ratings and Trust">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-y-3 gap-x-6 md:gap-x-12 text-xs md:text-sm text-riad_primary/90 font-light text-center">
          {data.trustBar.map((item, idx) => (
            <div key={item.platform} className="flex items-center gap-2">
              {idx > 0 && <span className="hidden sm:inline text-riad_secondary/50">|</span>}
              <span className="font-medium text-riad_primary">{item.platform}</span>
              <span className="bg-[#dfdbd6] px-2 py-0.5 rounded text-[11px] font-semibold text-riad_primary">
                {item.score}
              </span>
              <span className="text-riad_secondary text-xs">({item.count})</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MAIN EDITORIAL CONTENT CONTAINER */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-12 lg:py-20 pb-28 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Table of Contents (Sticky on desktop, collapsible on mobile) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 order-2 lg:order-1">
            <div className="bg-[#edeae6] border border-riad_secondary/30 rounded-lg p-6 shadow-sm">
              <div
                className="flex items-center justify-between cursor-pointer lg:cursor-default"
                onClick={() => setTocOpen(!tocOpen)}
              >
                <h2 className="text-xs uppercase tracking-[0.25em] font-medium text-riad_primary">
                  {data.tocTitle}
                </h2>
                <button
                  type="button"
                  aria-label="Toggle Table of Contents"
                  className="lg:hidden text-riad_secondary p-1"
                >
                  <FaChevronDown
                    className={`transition-transform duration-200 ${
                      tocOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <nav
                className={`mt-4 ${
                  tocOpen ? "block" : "hidden lg:block"
                }`}
                aria-label="Article Table of Contents"
              >
                <ol className="space-y-2.5 text-xs text-riad_primary/80 font-light border-l border-riad_secondary/30 pl-4">
                  {data.toc.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setTocOpen(false)}
                        className="block hover:text-riad_primary hover:translate-x-1 transition-all duration-200 leading-snug"
                      >
                        <span className="text-riad_secondary mr-1">{index + 1}.</span> {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="hidden lg:block mt-8 pt-6 border-t border-riad_secondary/25">
                <p className="text-xs text-riad_secondary italic mb-4 leading-relaxed">
                  Adults-only tranquility in Marrakech Medina · Steps from Jemaa el-Fna
                </p>
                <Link
                  href="https://pure-house-marrakech.hotelrunner.com/bv3/search"
                  target="_blank"
                  rel="noopener"
                  className="block text-center bg-riad_primary text-white text-[11px] uppercase tracking-[0.2em] py-2.5 px-4 rounded hover:bg-riad_secondary transition-colors"
                >
                  {data.ctaCheckAvailability}
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Body */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-16">
            
            {/* INTRO SECTION */}
            <section className="space-y-6 text-[15px] md:text-[16px] leading-[1.8] font-light text-riad_primary/95 border-b border-riad_secondary/25 pb-12">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-light first-letter:float-left first-letter:mr-3 first-letter:text-riad_primary leading-relaxed">
                {data.introParagraphs[0]}
              </p>
              <p>{data.introParagraphs[1]}</p>
              <p>{data.introParagraphs[2]}</p>
            </section>

            {/* SECTION 1: WHY MARRAKECH */}
            <section id={data.whyMarrakech.id} className="space-y-8 scroll-mt-28">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-riad_secondary font-medium">
                  Winter Sun & Culture
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-riad_primary leading-tight">
                  {data.whyMarrakech.h2}
                </h2>
              </div>

              <div className="relative w-full h-[320px] sm:h-[420px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={data.whyMarrakech.image}
                  alt={data.whyMarrakech.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-5 text-[15px] md:text-[16px] leading-[1.8] font-light text-riad_primary/95">
                {data.whyMarrakech.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* SECTION 2: MEDINA ATMOSPHERE */}
            <section id={data.medinaAtmosphere.id} className="space-y-8 scroll-mt-28 border-t border-riad_secondary/25 pt-14">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-riad_secondary font-medium">
                  The Medina on New Year&apos;s Eve
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-riad_primary leading-tight">
                  {data.medinaAtmosphere.h2}
                </h2>
              </div>

              <div className="relative w-full h-[320px] sm:h-[420px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={data.medinaAtmosphere.image}
                  alt={data.medinaAtmosphere.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-5 text-[15px] md:text-[16px] leading-[1.8] font-light text-riad_primary/95">
                {data.medinaAtmosphere.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* SECTION 3: ROMANTIC ITINERARY */}
            <section id={data.romanticPlan.id} className="space-y-8 scroll-mt-28 border-t border-riad_secondary/25 pt-14">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-riad_secondary font-medium">
                  An Exclusive Retreat
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-riad_primary leading-tight">
                  {data.romanticPlan.h2}
                </h2>
              </div>

              {/* Alternating image grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative h-[280px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={data.romanticPlan.image}
                    alt={data.romanticPlan.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 350px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative h-[280px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={data.romanticPlan.secondaryImage}
                    alt={data.romanticPlan.secondaryImageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 350px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="space-y-5 text-[15px] md:text-[16px] leading-[1.8] font-light text-riad_primary/95">
                {data.romanticPlan.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* PULL-QUOTE / REAL GOOGLE REVIEW BLOCK */}
            <section id="guest-reviews" className="my-14 scroll-mt-28">
              <div className="bg-[#edeae6] border-l-4 border-riad_primary p-8 md:p-10 rounded-r-lg shadow-sm space-y-5">
                <ReviewStars />
                <blockquote className="text-base sm:text-lg italic font-serif leading-relaxed text-riad_primary">
                  &ldquo;{data.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between text-xs pt-3 border-t border-riad_secondary/25">
                  <span className="font-medium tracking-wider uppercase text-riad_primary">
                    {data.testimonial.author}
                  </span>
                  <span className="text-riad_secondary">
                    {data.testimonial.source} · Verified Stay
                  </span>
                </div>
              </div>
            </section>

            {/* SECTION 4: NEARBY CULTURAL LANDMARKS */}
            <section id={data.nearbyPlaces.id} className="space-y-8 scroll-mt-28 border-t border-riad_secondary/25 pt-14">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-riad_secondary font-medium">
                  Walkable Medina Highlights
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-riad_primary leading-tight">
                  {data.nearbyPlaces.h2}
                </h2>
                <p className="text-[15px] text-riad_primary/80 font-light">
                  {data.nearbyPlaces.intro}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.nearbyPlaces.items.map((place) => (
                  <div
                    key={place.name}
                    className="bg-[#edeae6]/70 border border-riad_secondary/30 p-5 rounded-lg flex flex-col justify-between hover:border-riad_primary/50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-riad_primary text-base">
                          {place.name}
                        </h3>
                        <span className="text-[10px] uppercase tracking-wider bg-riad_secondary/20 text-riad_primary px-2 py-0.5 rounded font-mono">
                          {place.badge}
                        </span>
                      </div>
                      <p className="text-xs text-riad_primary/80 font-light leading-relaxed">
                        {place.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5: ROOMS & SUITES SHOWCASE */}
            <section className="space-y-8 border-t border-riad_secondary/25 pt-14">
              <div className="space-y-3 text-center sm:text-left">
                <span className="text-xs uppercase tracking-[0.25em] text-riad_secondary font-medium">
                  Adults-Only Accommodations
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-riad_primary leading-tight">
                  {data.roomsShowcase.title}
                </h2>
                <p className="text-[15px] text-riad_primary/80 font-light max-w-2xl">
                  {data.roomsShowcase.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.roomsShowcase.items.map((room) => (
                  <div
                    key={room.title}
                    className="bg-[#edeae6] border border-riad_secondary/30 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={room.image}
                        alt={room.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="font-serif text-lg font-light text-riad_primary mb-2">
                          {room.title}
                        </h3>
                        <p className="text-xs text-riad_primary/80 font-light leading-relaxed">
                          {room.description}
                        </p>
                      </div>
                      <Link
                        href={room.url}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-riad_primary hover:text-riad_secondary transition-colors pt-2 border-t border-riad_secondary/20"
                      >
                        <span>Explore {room.title}</span>
                        <FaArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 6: PRACTICAL TIPS */}
            <section id={data.practicalTips.id} className="space-y-8 scroll-mt-28 border-t border-riad_secondary/25 pt-14">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-riad_secondary font-medium">
                  Medina Travel Essentials
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-riad_primary leading-tight">
                  {data.practicalTips.h2}
                </h2>
              </div>

              <div className="space-y-6">
                {data.practicalTips.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#edeae6]/60 border border-riad_secondary/30 rounded-lg p-6 space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-riad_primary text-white flex items-center justify-center text-[10px] font-mono shrink-0">
                        {idx + 1}
                      </span>
                      <h3 className="font-medium text-base text-riad_primary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-riad_primary/85 font-light leading-relaxed pl-8">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 7: FAQ ACCORDION (Mirrors JSON-LD exactly) */}
            <section id={data.faq.id} className="space-y-8 scroll-mt-28 border-t border-riad_secondary/25 pt-14">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-riad_secondary font-medium">
                  Answers to Common Queries
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-riad_primary leading-tight">
                  {data.faq.h2}
                </h2>
              </div>

              <div className="space-y-4">
                {data.faq.items.map((item, index) => (
                  <details
                    key={index}
                    className="group bg-[#edeae6] border border-riad_secondary/30 rounded-lg p-5 open:shadow-sm transition-all duration-200"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-sm md:text-base text-riad_primary gap-4">
                      <span>{item.question}</span>
                      <span className="text-riad_secondary group-open:rotate-180 transition-transform duration-200 shrink-0">
                        <FaChevronDown size={14} />
                      </span>
                    </summary>
                    <div className="mt-4 pt-3 border-t border-riad_secondary/20 text-xs md:text-sm font-light text-riad_primary/85 leading-relaxed">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 8: FINAL CTA BAND */}
            <section className="bg-gradient-to-br from-[#2f2b28] to-[#211f1e] text-white rounded-xl p-8 md:p-12 shadow-xl space-y-6">
              <div className="space-y-3 max-w-2xl">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#d6cfc7] font-medium">
                  Pure House Marrakech · Medina
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[#f7f5f2] leading-tight">
                  {data.finalCta.title}
                </h2>
                <p className="text-xs sm:text-sm font-light text-[#e4e0dc]/80 leading-relaxed">
                  {data.finalCta.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={data.finalCta.bookingUrl}
                  target="_blank"
                  rel="noopener"
                  className="bg-riad_background text-riad_primary px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:shadow-lg transition-all"
                >
                  {data.finalCta.bookButton}
                </Link>

                <Link
                  href={data.finalCta.whatsappUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-light hover:bg-white/10 transition-all"
                >
                  <FaWhatsapp size={16} />
                  <span>{data.finalCta.whatsappButton}</span>
                </Link>
              </div>

              {/* Internal Links to Room Types */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#d6cfc7]">
                <span className="uppercase tracking-widest text-[11px] opacity-60">Accommodations:</span>
                <Link href="/suites" className="hover:text-white underline underline-offset-4 transition-colors">
                  {data.finalCta.suitesLink}
                </Link>
                <Link href="/deluxe" className="hover:text-white underline underline-offset-4 transition-colors">
                  {data.finalCta.deluxeLink}
                </Link>
                <Link href="/standard" className="hover:text-white underline underline-offset-4 transition-colors">
                  {data.finalCta.standardLink}
                </Link>
              </div>
            </section>

          </article>
        </div>
      </main>

      {/* 4. STICKY MOBILE CTA BAR (Bottom, does not cover content) */}
      <aside
        aria-label="Mobile quick booking"
        className="fixed bottom-0 inset-x-0 z-40 bg-riad_background/95 backdrop-blur-md border-t border-riad_secondary/30 p-3 shadow-lg lg:hidden"
      >
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <Link
            href={data.finalCta.bookingUrl}
            target="_blank"
            rel="noopener"
            className="flex-1 bg-riad_primary text-white text-center py-2.5 px-4 text-xs uppercase tracking-[0.15em] font-medium rounded shadow hover:bg-riad_secondary transition-colors"
          >
            {data.finalCta.bookButton}
          </Link>
          <Link
            href={data.finalCta.whatsappUrl}
            target="_blank"
            rel="noopener"
            aria-label="Contact Pure House Marrakech on WhatsApp"
            className="bg-[#25D366] text-white p-2.5 rounded shadow flex items-center justify-center shrink-0"
          >
            <FaWhatsapp size={18} />
          </Link>
        </div>
      </aside>

      {/* Footer */}
      <Footer
        en_path={enPath}
        path={frPath}
        second_path={esPath}
      />
    </div>
  );
}
