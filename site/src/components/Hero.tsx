"use client";

import { siteConfig } from "@/config/site-config";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/photos/post_29.jpg"
        alt="Brioche and Beyond food spread"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={90}
      />

      {/* Overlay */}
      <div className="hero-gradient absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 md:pb-24 px-5 text-center">
        <div className="animate-fade-in-up">
          <p className="text-[#ddb88c] text-sm md:text-base font-medium tracking-[0.25em] uppercase mb-4">
            {siteConfig.tagline}
          </p>
        </div>

        <h1
          className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-[1.1] mb-6"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
        >
          {siteConfig.heroLine}
        </h1>

        <p className="animate-fade-in-up animate-delay-200 text-white/75 text-base md:text-lg max-w-xl mb-3 leading-relaxed">
          {siteConfig.heroSubline}
        </p>

        <p className="animate-fade-in-up animate-delay-200 text-white/50 text-sm mb-8 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {siteConfig.city}
        </p>

        <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={siteConfig.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta"
            className="px-10 py-4 bg-[#c69c6d] text-white font-semibold text-base rounded-full hover:bg-[#ddb88c] hover:text-[#2c1810] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#c69c6d]/30"
          >
            {siteConfig.ctaText} on WhatsApp
          </a>
          <a
            href={`tel:+${siteConfig.whatsappNumber}`}
            className="px-8 py-4 border border-white/30 text-white/90 font-medium text-base rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Call {siteConfig.phone}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up animate-delay-500 mt-10 flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
