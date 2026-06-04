"use client";

import { siteConfig } from "@/config/site-config";
import FadeIn from "./FadeIn";

export default function Visit() {
  return (
    <section id="visit" className="section-padding bg-[#FFF5E8] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-16 right-[5%] w-48 h-48 rounded-full bg-[#F9D7E3]/15 blur-3xl" />
        <div className="absolute bottom-20 left-[8%] w-40 h-40 rounded-full bg-[#F2D2A9]/15 blur-2xl" />
        <span className="absolute top-12 left-[6%] text-3xl animate-float-slow opacity-15 hidden sm:block">📍</span>
        <span className="absolute bottom-16 right-[10%] text-2xl animate-float opacity-15 hidden sm:block">☕</span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 sm:mb-14">
          <div className="section-badge section-badge-pink">
            <span className="text-base leading-none">📍</span>
            <p className="text-[#6B4A3A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              Come Say Hello
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#6B4A3A] mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Find Us
          </h2>
          <hr className="gold-line mx-auto" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Info */}
          <FadeIn>
            <div 
              className="bg-[#6B4A3A] text-white h-full flex flex-col justify-between shadow-[0_12px_50px_rgba(107,74,58,0.35)]"
              style={{ padding: "36px", borderRadius: "24px" }}
            >
              {/* Address */}
              <div className="mb-6 sm:mb-8 space-y-5 sm:space-y-6">
                <div className="flex items-start gap-5 sm:gap-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] bg-[#F9D7E3]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#F9D7E3]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="pt-0.5">
                    <p className="font-bold text-[#F9D7E3] text-xs sm:text-sm uppercase tracking-wide mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      Address
                    </p>
                    <p className="text-white/80 leading-relaxed font-medium text-sm sm:text-base">
                      {siteConfig.address}
                    </p>
                    <a
                      href={siteConfig.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F2D2A9] text-sm mt-1.5 inline-block hover:underline font-semibold"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5 sm:gap-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] bg-[#F9D7E3]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#F9D7E3]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="pt-0.5">
                    <p className="font-bold text-[#F9D7E3] text-xs sm:text-sm uppercase tracking-wide mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      Call or WhatsApp
                    </p>
                    <a
                      href={`tel:+${siteConfig.whatsappNumber}`}
                      className="text-white/80 hover:text-white transition-colors font-medium text-sm sm:text-base"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-5 sm:gap-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] bg-[#F9D7E3]/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#F9D7E3]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="pt-0.5">
                    <p className="font-bold text-[#F9D7E3] text-xs sm:text-sm uppercase tracking-wide mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      Hours
                    </p>
                    {siteConfig.hours.map((h) => (
                      <p
                        key={h.day}
                        className="text-white/80 text-sm leading-relaxed font-medium"
                      >
                        <span className="font-semibold text-white/90">
                          {h.day}:
                        </span>{" "}
                        {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href={siteConfig.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 sm:py-4 bg-[#F9D7E3] text-[#6B4A3A] font-bold rounded-full hover:bg-[#FDE8F0] hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base shadow-md"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Message Us on WhatsApp 💌
              </a>
            </div>
          </FadeIn>

          {/* Map or Image */}
          <FadeIn delay={150}>
            <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_12px_50px_rgba(249,215,227,0.4)] min-h-[350px] sm:min-h-[400px] lg:min-h-0 lg:h-full relative bg-[#F9D7E3]">
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 350 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brioche and Beyond location"
                className="absolute inset-0 w-full h-full"
              />
              {/* Fallback if map does not load */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p
                    className="text-xl sm:text-2xl text-[#6B4A3A]/20"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Flavors Lane, Dehradun
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[30px] sm:h-[45px]">
          <path
            d="M0,20 C240,50 480,10 720,30 C960,50 1200,10 1440,30 L1440,60 L0,60 Z"
            fill="#F9D7E3"
          />
        </svg>
      </div>
    </section>
  );
}
