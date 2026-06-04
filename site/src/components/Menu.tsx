"use client";

import { menuCategories } from "@/config/content";
import { siteConfig } from "@/config/site-config";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Menu() {
  return (
    <section id="menu" className="section-padding bg-[#FFF5E8] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-10 right-[5%] w-40 h-40 rounded-full bg-[#F9D7E3]/20 blur-2xl" />
        <div className="absolute bottom-20 left-[5%] w-56 h-56 rounded-full bg-[#F2D2A9]/15 blur-3xl" />
        <span className="absolute top-20 right-[8%] text-3xl animate-float-slow opacity-15 hidden sm:block">🍪</span>
        <span className="absolute bottom-16 left-[6%] text-2xl animate-float opacity-15 hidden sm:block">🧁</span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <FadeIn className="w-full flex flex-col items-center justify-center text-center pb-8">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%" }}>
            <div className="section-badge section-badge-pink">
              <span className="text-base leading-none">🍽️</span>
              <p className="text-[#6B4A3A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                What We Serve
              </p>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-[#6B4A3A] mb-3 sm:mb-4"
              style={{ fontFamily: "var(--font-display)", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
            >
              The Menu
            </h2>
            <hr className="gold-line" style={{ margin: "12px auto" }} />
            <p 
              className="text-[#6B4A3A]/60 max-w-lg font-medium text-sm sm:text-base px-2 mb-0"
              style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
            >
              From our signature brioche to hearty mains and refreshing coolers.
              Every dish is crafted with care.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category, i) => (
            <FadeIn key={category.name} delay={i * 100} className="flex flex-col h-full">
              <div className="group menu-card flex-1 flex flex-col">
                {/* Category Image */}
                <div className="relative h-52 sm:h-56">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-chocolate/85 backdrop-blur-xs"
                    style={{ padding: "10px 14px" }}
                  >
                    <h3
                      className="text-base sm:text-lg text-white font-bold drop-shadow-md"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Items */}
                <div 
                  className="flex-1 flex flex-col"
                  style={{ padding: "16px 20px" }}
                >
                  <p className="text-sm text-[#6B4A3A]/55 mb-4 sm:mb-5 leading-relaxed font-medium">
                    {category.description}
                  </p>
                  <div className="flex flex-col flex-1">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between gap-2 last:mb-0"
                        style={{ padding: "6px 0", marginBottom: "4px" }}
                      >
                        <span className="text-sm font-semibold text-[#6B4A3A] flex-shrink-0">
                          {item.name}
                        </span>
                        <span className="flex-1 border-b-2 border-dotted border-[#F9D7E3] min-w-[16px] mx-1 self-end mb-1" />
                        <span className="text-sm font-bold text-[#D4A574] flex-shrink-0 text-right whitespace-nowrap">
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

        <FadeIn className="w-full flex flex-col items-center justify-center text-center mt-16 sm:mt-24">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <a
                href={siteConfig.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cafe"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.306 0-4.443-.763-6.158-2.052l-.429-.324-2.645.887.887-2.645-.324-.429A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                See Full Menu on WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[30px] sm:h-[45px]">
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="#F9D7E3"
          />
        </svg>
      </div>
    </section>
  );
}
