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
      <section id="gallery" className="section-padding bg-[#2c1810]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-[#c69c6d] text-sm font-medium tracking-[0.25em] uppercase mb-3">
              From Our Kitchen
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Gallery
            </h2>
            <hr className="gold-line mx-auto mb-4" />
            <p className="text-white/50 max-w-lg mx-auto">
              Real photos from our Instagram. Every dish, every moment, every bit of love we put into what we do.
            </p>
          </FadeIn>

          {/* Masonry-style Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {galleryImages.map((img, i) => (
              <FadeIn key={img.src} delay={i * 60}>
                <div
                  className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid"
                  onClick={() => setLightboxIdx(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={i % 3 === 0 ? 500 : i % 3 === 1 ? 400 : 350}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#2c1810]/0 group-hover:bg-[#2c1810]/30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#2c1810]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs">{img.alt}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#c69c6d] text-[#c69c6d] rounded-full font-medium hover:bg-[#c69c6d] hover:text-white transition-all duration-300 text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow us {siteConfig.instagramHandle}
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-10"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10"
          >
            ›
          </button>
          <Image
            src={galleryImages[lightboxIdx].src}
            alt={galleryImages[lightboxIdx].alt}
            width={900}
            height={700}
            className="max-h-[85vh] w-auto object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
