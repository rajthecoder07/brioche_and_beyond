"use client";

import { faq } from "@/config/content";
import { useState } from "react";
import FadeIn from "./FadeIn";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section-padding bg-[#f5ead8]">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-[#c69c6d] text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Questions
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#2c1810] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Good to Know
          </h2>
          <hr className="gold-line mx-auto" />
        </FadeIn>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <span className="font-medium text-[#2c1810] text-[15px] pr-4 group-hover:text-[#c69c6d] transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`text-[#c69c6d] transition-transform duration-300 flex-shrink-0 text-xl ${
                      openIdx === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: openIdx === i ? "300px" : "0",
                    opacity: openIdx === i ? 1 : 0,
                  }}
                >
                  <p className="px-5 pb-5 text-[#4a3228]/70 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
