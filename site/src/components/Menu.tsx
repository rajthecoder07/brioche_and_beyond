"use client";

import { menuCategories } from "@/config/content";
import { siteConfig } from "@/config/site-config";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Menu() {
  return (
    <section id="menu" className="section-padding bg-[#fef9f3]">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-[#c69c6d] text-sm font-medium tracking-[0.25em] uppercase mb-3">
            What We Serve
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#2c1810] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Menu
          </h2>
          <hr className="gold-line mx-auto mb-4" />
          <p className="text-[#4a3228]/70 max-w-lg mx-auto">
            From our signature brioche to hearty mains and refreshing coolers.
            Every dish is crafted with care.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category, i) => (
            <FadeIn key={category.name} delay={i * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Category Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/50 to-transparent" />
                  <h3
                    className="absolute bottom-4 left-5 text-xl text-white font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Items */}
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-sm text-[#4a3228]/60 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-3 flex-1">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-baseline justify-between gap-2"
                      >
                        <span className="text-sm font-medium text-[#2c1810]">
                          {item.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-[#e8d4b8] min-w-[20px] translate-y-[-4px]" />
                        <span className="text-sm font-semibold text-[#c69c6d]">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <p className="text-sm text-[#4a3228]/50 mb-4">
            Prices marked with ⚠️ in our files are estimates. Message us for the full menu with exact pricing.
          </p>
          <a
            href={siteConfig.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2c1810] text-white rounded-full font-medium hover:bg-[#4a3228] transition-all duration-300 text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.306 0-4.443-.763-6.158-2.052l-.429-.324-2.645.887.887-2.645-.324-.429A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
            </svg>
            See Full Menu on WhatsApp
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
