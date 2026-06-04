"use client";

import { faq } from "@/config/content";
import { useState } from "react";
import FadeIn from "./FadeIn";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section-padding bg-[#F9D7E3] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-10 right-[10%] w-40 h-40 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-20 left-[15%] w-48 h-48 rounded-full bg-[#F2D2A9]/20 blur-3xl" />
        <span className="absolute top-16 left-[5%] text-3xl animate-float opacity-15 hidden sm:block">❓</span>
        <span className="absolute bottom-12 right-[8%] text-2xl animate-float-slow opacity-15 hidden sm:block">💡</span>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 sm:mb-14">
          <div className="section-badge">
            <span className="text-base leading-none">🤔</span>
            <p className="text-[#6B4A3A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              Questions
            </p>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#6B4A3A] mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Good to Know
          </h2>
          <hr className="gold-line mx-auto" />
        </FadeIn>

        <div className="flex flex-col gap-6 sm:gap-8">
          {faq.map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div 
                className="bg-white shadow-[0_12px_45px_rgba(107,74,58,0.12)] hover:shadow-[0_20px_50px_rgba(249,215,227,0.65)] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                style={{ borderRadius: "24px" }}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                  style={{ padding: "20px 24px" }}
                >
                  <span className="font-semibold text-[#6B4A3A] text-base sm:text-lg group-hover:text-[#D4A574] transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 transition-transform duration-300 text-[#6B4A3A] group-hover:text-[#D4A574] ${
                      openIdx === i ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400 ease-out"
                  style={{
                    maxHeight: openIdx === i ? "300px" : "0",
                    opacity: openIdx === i ? 1 : 0,
                  }}
                >
                  <div 
                    className="text-left"
                    style={{ padding: "0 24px 20px 24px" }}
                  >
                    <div className="border-t border-[#F9D7E3]/50 pt-4">
                      <p className="text-[#6B4A3A]/60 text-sm leading-relaxed font-medium">
                        {item.answer}
                      </p>
                    </div>
                  </div>
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
            d="M0,30 C240,0 480,50 720,20 C960,0 1200,50 1440,30 L1440,60 L0,60 Z"
            fill="#F2D2A9"
          />
        </svg>
      </div>
    </section>
  );
}
