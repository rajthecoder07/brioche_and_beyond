"use client";

import { siteConfig } from "@/config/site-config";
import FadeIn from "./FadeIn";

export default function Visit() {
  return (
    <section id="visit" className="section-padding bg-[#fef9f3]">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-[#c69c6d] text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Come Say Hello
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#2c1810] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Find Us
          </h2>
          <hr className="gold-line mx-auto" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <FadeIn>
            <div className="bg-[#2c1810] rounded-2xl p-8 md:p-10 text-white h-full flex flex-col justify-between">
              {/* Address */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#c69c6d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-[#c69c6d]"
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
                  <div>
                    <p className="font-semibold text-[#c69c6d] text-sm uppercase tracking-wide mb-1">
                      Address
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      {siteConfig.address}
                    </p>
                    <a
                      href={siteConfig.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ddb88c] text-sm mt-2 inline-block hover:underline"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#c69c6d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-[#c69c6d]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#c69c6d] text-sm uppercase tracking-wide mb-1">
                      Call or WhatsApp
                    </p>
                    <a
                      href={`tel:+${siteConfig.whatsappNumber}`}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c69c6d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-[#c69c6d]"
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
                  <div>
                    <p className="font-semibold text-[#c69c6d] text-sm uppercase tracking-wide mb-1">
                      Hours
                    </p>
                    {siteConfig.hours.map((h) => (
                      <p
                        key={h.day}
                        className="text-white/80 text-sm leading-loose"
                      >
                        <span className="font-medium text-white/90">
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
                className="w-full text-center py-4 bg-[#c69c6d] text-white font-semibold rounded-full hover:bg-[#ddb88c] hover:text-[#2c1810] transition-all duration-300 text-base"
              >
                Message Us on WhatsApp
              </a>
            </div>
          </FadeIn>

          {/* Map or Image */}
          <FadeIn delay={150}>
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px] relative bg-[#e8d4b8]">
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brioche and Beyond location"
                className="absolute inset-0"
              />
              {/* Fallback if map does not load */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p
                    className="text-2xl text-[#2c1810]/30"
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
    </section>
  );
}
