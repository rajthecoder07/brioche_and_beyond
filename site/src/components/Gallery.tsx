"use client";

import { galleryImages } from "@/config/content";
import { siteConfig } from "@/config/site-config";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { useState } from "react";

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="section-padding bg-[#F9D7E3] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute top-16 left-[8%] w-48 h-48 rounded-full bg-[#FFB6C1]/20 blur-3xl" />
          <div className="absolute bottom-20 right-[10%] w-36 h-36 rounded-full bg-white/20 blur-2xl" />
          <span className="absolute top-12 right-[10%] text-3xl animate-float opacity-15 hidden sm:block">📸</span>
          <span className="absolute bottom-10 left-[12%] text-2xl animate-float-slow opacity-15 hidden sm:block">🎀</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="w-full flex flex-col items-center justify-center text-center mb-10 sm:mb-14">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%" }}>
              <div className="section-badge">
                <span className="text-base leading-none">📷</span>
                <p className="text-[#6B4A3A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                  From Our Kitchen
                </p>
              </div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl text-[#6B4A3A] mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-display)", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
              >
                The Gallery
              </h2>
              <hr className="gold-line" style={{ margin: "12px auto" }} />
              <p 
                className="text-[#6B4A3A]/60 max-w-lg font-medium text-sm sm:text-base px-2"
                style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
              >
                Real photos from our Instagram. Every dish, every moment, every bit of love we put into what we do.
              </p>
            </div>
          </FadeIn>

          {/* Masonry-style Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-5">
            {galleryImages.map((img, i) => (
              <FadeIn key={img.src} delay={i * 60}>
                <div
                  className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] cursor-pointer group break-inside-avoid mb-4 sm:mb-5 shadow-[0_6px_25px_rgba(107,74,58,0.12)] hover:shadow-[0_14px_40px_rgba(249,215,227,0.5)] transition-shadow duration-500"
                  onClick={() => setLightboxIdx(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={i % 3 === 0 ? 500 : i % 3 === 1 ? 400 : 350}
                    className="w-full block object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#F9D7E3]/0 group-hover:bg-[#F9D7E3]/25 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#6B4A3A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-medium">{img.alt}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="w-full flex flex-col items-center justify-center text-center mt-10 sm:mt-12">
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cafe-outline bg-white/50 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Follow us {siteConfig.instagramHandle}
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Wavy bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[30px] sm:h-[45px]">
            <path
              d="M0,20 C360,60 720,0 1080,40 C1260,55 1380,30 1440,20 L1440,60 L0,60 Z"
              fill="#FFF5E8"
            />
          </svg>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[#6B4A3A]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white text-lg z-10 transition-colors duration-300"
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((prev) =>
                prev !== null
                  ? (prev - 1 + galleryImages.length) % galleryImages.length
                  : null
              );
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white text-xl sm:text-2xl z-10 transition-colors duration-300"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((prev) =>
                prev !== null ? (prev + 1) % galleryImages.length : null
              );
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white text-xl sm:text-2xl z-10 transition-colors duration-300"
            aria-label="Next image"
          >
            ›
          </button>
          <Image
            src={galleryImages[lightboxIdx].src}
            alt={galleryImages[lightboxIdx].alt}
            width={900}
            height={700}
            className="max-h-[80vh] sm:max-h-[85vh] w-auto max-w-[calc(100vw-5rem)] object-contain rounded-[20px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
