"use client";

import { storyContent } from "@/config/content";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Story() {
  return (
    <section id="story" className="section-padding bg-[#FFF5E8] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-20 right-[5%] w-48 h-48 rounded-full bg-[#F9D7E3]/15 blur-3xl" />
        <div className="absolute bottom-10 left-[10%] w-36 h-36 rounded-full bg-[#F2D2A9]/15 blur-2xl" />
        <span className="absolute top-16 left-[5%] text-3xl animate-float-slow opacity-15 hidden sm:block">💝</span>
        <span className="absolute bottom-20 right-[8%] text-2xl animate-float opacity-15 hidden sm:block">🥐</span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <FadeIn>
            <div className="relative px-4 sm:px-0 pb-8 sm:pb-6">
              <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_12px_50px_rgba(249,215,227,0.5)]">
                <Image
                  src={storyContent.image}
                  alt="Behind the scenes at Brioche and Beyond"
                  width={600}
                  height={700}
                  className="w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Cute decorative element */}
              <div className="absolute -top-2 left-2 sm:-top-3 sm:-left-3 bg-[#F9D7E3] w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center">
                <span className="text-lg sm:text-xl">💖</span>
              </div>
            </div>
          </FadeIn>

          {/* Text Side */}
          <div>
            <FadeIn>
              <div className="section-badge section-badge-pink">
                <span className="text-base leading-none">✨</span>
                <p className="text-[#6B4A3A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                  How It Started
                </p>
              </div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl text-[#6B4A3A] mb-5 sm:mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {storyContent.title}
              </h2>
              <hr className="gold-line mb-6 sm:mb-8" />
            </FadeIn>

            {storyContent.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <p className="text-[#6B4A3A]/70 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base font-medium">
                  {p}
                </p>
              </FadeIn>
            ))}

            <FadeIn delay={400}>
              <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 bg-white/60 backdrop-blur-sm p-5 sm:p-6 rounded-[20px] sm:rounded-[24px] shadow-[0_6px_25px_rgba(249,215,227,0.3)]">
                <Image
                  src="/photos/profile.jpg"
                  alt="Brioche and Beyond team"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-[#F9D7E3] w-11 h-11 sm:w-14 sm:h-14 object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <p
                    className="font-bold text-[#6B4A3A] text-sm sm:text-base truncate"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Brioche & Beyond
                  </p>
                  <p className="text-xs sm:text-sm text-[#6B4A3A]/50 font-medium">
                    Dehradun, with love. 💕
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[30px] sm:h-[45px]">
          <path
            d="M0,30 C360,0 720,60 1080,20 C1260,5 1380,30 1440,30 L1440,60 L0,60 Z"
            fill="#F2D2A9"
          />
        </svg>
      </div>
    </section>
  );
}
