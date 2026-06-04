"use client";

import { siteConfig } from "@/config/site-config";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      {/* Pastel gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9D7E3] via-[#FDE8F0] to-[#FFF5E8]" />

      {/* Background Image */}
      <Image
        src="/photos/post_29.jpg"
        alt="Brioche and Beyond food spread"
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
        quality={90}
      />

      {/* Overlay */}
      <div className="hero-gradient absolute inset-0" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <span className="absolute top-24 left-[10%] text-5xl animate-float opacity-50 hidden sm:block">🧁</span>
        <span className="absolute top-40 right-[12%] text-4xl animate-float-slow opacity-40 hidden sm:block" style={{ animationDelay: "1s" }}>🍰</span>
        <span className="absolute top-56 left-[25%] text-3xl animate-float opacity-30 hidden md:block" style={{ animationDelay: "2s" }}>☕</span>
        <span className="absolute bottom-[30%] right-[20%] text-4xl animate-float-slow opacity-40 hidden sm:block" style={{ animationDelay: "0.5s" }}>🍩</span>
        <span className="absolute bottom-[40%] left-[8%] text-3xl animate-float opacity-30 hidden md:block" style={{ animationDelay: "3s" }}>🥐</span>
        <span className="absolute top-[30%] right-[5%] text-2xl animate-twinkle opacity-40 hidden sm:block" style={{ animationDelay: "1.5s" }}>✨</span>
        <span className="absolute top-[20%] left-[45%] text-2xl animate-twinkle opacity-30 hidden md:block" style={{ animationDelay: "2.5s" }}>💖</span>

        {/* Soft decorative circles */}
        <div className="absolute top-20 right-[15%] w-32 h-32 rounded-full bg-[#F9D7E3]/40 blur-xl" />
        <div className="absolute bottom-[25%] left-[10%] w-48 h-48 rounded-full bg-[#F2D2A9]/30 blur-2xl" />
        <div className="absolute top-[40%] right-[30%] w-24 h-24 rounded-full bg-[#FFB6C1]/20 blur-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center pb-24">
        {/* Logo badge */}
        <div className="animate-fade-in-up mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
            <span className="text-lg sm:text-xl animate-wiggle inline-block">🧁</span>
            <span className="text-[#6B4A3A] text-xs sm:text-sm font-bold tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
              {siteConfig.tagline}
            </span>
            <span className="text-lg sm:text-xl animate-wiggle inline-block" style={{ animationDelay: "0.5s" }}>🍰</span>
          </div>
        </div>

        <h1
          className="animate-fade-in-up animate-delay-100 text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#6B4A3A] max-w-4xl leading-[1.1] mb-5 sm:mb-6 px-2"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
        >
          {siteConfig.heroLine}
        </h1>

        <p className="animate-fade-in-up animate-delay-200 text-[#6B4A3A]/70 text-sm sm:text-base md:text-lg max-w-xl mb-2 sm:mb-3 leading-relaxed font-medium px-2">
          {siteConfig.heroSubline}
        </p>

        <p className="animate-fade-in-up animate-delay-200 text-[#6B4A3A]/50 text-sm mb-7 sm:mb-8 flex items-center justify-center gap-2 font-semibold">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {siteConfig.city}
        </p>

        <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href={siteConfig.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta"
            className="btn-cafe text-sm sm:text-base w-full sm:w-auto"
          >
            {siteConfig.ctaText} on WhatsApp 💬
          </a>
          <a
            href={`tel:+${siteConfig.whatsappNumber}`}
            className="btn-cafe-outline text-sm sm:text-base w-full sm:w-auto"
          >
            📞 Call {siteConfig.phone}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up animate-delay-500 mt-8 sm:mt-10 flex flex-col items-center gap-2">
          <span className="text-[#6B4A3A]/40 text-[10px] sm:text-xs tracking-widest uppercase font-semibold">
            Scroll
          </span>
          <div className="w-6 h-9 rounded-full border-2 border-[#6B4A3A]/20 flex justify-center pt-1.5">
            <div className="w-1.5 h-2.5 rounded-full bg-[#6B4A3A]/30 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px]">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="#FFF5E8"
          />
        </svg>
      </div>
    </section>
  );
}
