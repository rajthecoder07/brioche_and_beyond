"use client";

import { testimonials } from "@/config/content";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#f5ead8]">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-[#c69c6d] text-sm font-medium tracking-[0.25em] uppercase mb-3">
            What People Say
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#2c1810] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Love Notes
          </h2>
          <hr className="gold-line mx-auto" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow duration-500 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-[#c69c6d]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#4a3228]/80 leading-relaxed flex-1 text-[15px] italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-5 pt-4 border-t border-[#e8d4b8]">
                  <p className="font-semibold text-sm text-[#2c1810]">
                    {t.author}
                  </p>
                  <p className="text-xs text-[#4a3228]/50">{t.source}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
