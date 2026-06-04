"use client";

import { testimonials } from "@/config/content";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#F2D2A9] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-10 left-[15%] w-40 h-40 rounded-full bg-[#FFF5E8]/30 blur-3xl" />
        <div className="absolute bottom-16 right-[12%] w-48 h-48 rounded-full bg-[#F9D7E3]/20 blur-3xl" />
        <span className="absolute top-8 right-[15%] text-3xl animate-float opacity-15 hidden sm:block">💬</span>
        <span className="absolute bottom-12 left-[10%] text-2xl animate-float-slow opacity-15 hidden sm:block">⭐</span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn className="text-center mb-10 sm:mb-14">
          <div className="section-badge">
            <span className="text-base leading-none">💕</span>
            <p className="text-[#6B4A3A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              What People Say
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#6B4A3A] mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Love Notes
          </h2>
          <hr className="gold-line mx-auto" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 120} className="flex flex-col h-full">
              <div 
                className="cafe-card flex-1 flex flex-col"
                style={{ padding: "30px", borderRadius: "24px" }}
              >
                {/* Stars */}
                <div className="flex gap-1.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A574]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#6B4A3A]/75 leading-relaxed flex-1 text-sm sm:text-[15px] italic font-medium">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-5 pt-4 border-t-2 border-[#F9D7E3]/60">
                  <p className="font-bold text-sm text-[#6B4A3A]">
                    {t.author}
                  </p>
                  <p className="text-xs text-[#6B4A3A]/45 font-medium mt-0.5">{t.source}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[30px] sm:h-[45px]">
          <path
            d="M0,40 C360,10 720,50 1080,20 C1260,10 1380,35 1440,40 L1440,60 L0,60 Z"
            fill="#FFF5E8"
          />
        </svg>
      </div>
    </section>
  );
}
