"use client";

import { storyContent } from "@/config/content";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Story() {
  return (
    <section id="story" className="section-padding bg-[#fef9f3]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <FadeIn>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={storyContent.image}
                  alt="Behind the scenes at Brioche and Beyond"
                  width={600}
                  height={700}
                  className="w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#2c1810] text-white p-5 rounded-xl shadow-xl max-w-[200px]">
                <p
                  className="text-3xl font-bold text-[#c69c6d] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  93+
                </p>
                <p className="text-xs text-white/70 leading-snug">
                  posts of love, food, and stories shared on our Instagram
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Text Side */}
          <div>
            <FadeIn>
              <p className="text-[#c69c6d] text-sm font-medium tracking-[0.25em] uppercase mb-3">
                How It Started
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl text-[#2c1810] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {storyContent.title}
              </h2>
              <hr className="gold-line mb-8" />
            </FadeIn>

            {storyContent.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <p className="text-[#4a3228]/75 leading-relaxed mb-5 text-base">
                  {p}
                </p>
              </FadeIn>
            ))}

            <FadeIn delay={400}>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src="/photos/profile.jpg"
                  alt="Brioche and Beyond team"
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-[#c69c6d]"
                />
                <div>
                  <p
                    className="font-semibold text-[#2c1810]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Brioche & Beyond
                  </p>
                  <p className="text-sm text-[#4a3228]/50">
                    Dehradun, with love.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
