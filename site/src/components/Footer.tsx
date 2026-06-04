"use client";

import { siteConfig } from "@/config/site-config";
import FadeIn from "./FadeIn";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#6B4A3A] text-white relative overflow-hidden">
      {/* Top CTA band */}
      <div 
        className="bg-[#F2D2A9] py-10 sm:py-12 px-4 sm:px-6 relative overflow-hidden"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", width: "100%", paddingLeft: "24px", paddingRight: "24px" }}
      >
        {/* Decorative elements in CTA band */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <span className="absolute top-6 left-[8%] text-3xl animate-float opacity-15 hidden sm:block">🧁</span>
          <span className="absolute bottom-4 right-[10%] text-2xl animate-float-slow opacity-15 hidden sm:block">🎂</span>
          <div className="absolute top-0 right-[20%] w-32 h-32 rounded-full bg-[#F9D7E3]/20 blur-2xl" />
        </div>

        <FadeIn className="max-w-4xl mx-auto relative z-10 w-full flex flex-col items-center justify-center text-center">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", width: "100%" }}>
            <h3
              className="text-2xl sm:text-3xl text-[#6B4A3A] w-full"
              style={{ fontFamily: "var(--font-display)", textAlign: "center", marginBottom: "16px", marginLeft: "auto", marginRight: "auto" }}
            >
              Ready to taste something special? 🍰
            </h3>
            <p 
              className="text-[#6B4A3A]/65 max-w-md font-medium text-sm sm:text-base px-2 w-full"
              style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto", marginBottom: "24px", lineHeight: "1.6" }}
            >
              Drop us a message and we will save a table for you. Or just walk in.
              We love surprises.
            </p>
            <div 
              style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                width: "100%", 
                marginTop: "24px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <div 
                style={{ 
                  display: "flex", 
                  flexWrap: "wrap", 
                  justifyContent: "center", 
                  gap: "20px",
                  padding: "16px 28px",
                  backgroundColor: "rgba(107, 74, 58, 0.08)",
                  borderRadius: "20px",
                  boxShadow: "inset 0 1px 2px rgba(255,255,255,0.4), 0 4px 15px rgba(107,74,58,0.05)"
                }}
              >
                <a
                  href={siteConfig.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cafe inline-flex items-center gap-2"
                  style={{ backgroundColor: "#25D366", color: "white", boxShadow: "0 6px 20px rgba(37,211,102,0.3)" }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.306 0-4.443-.763-6.158-2.052l-.429-.324-2.645.887.887-2.645-.324-.429A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cafe inline-flex items-center gap-2"
                  style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)", color: "white", boxShadow: "0 6px 20px rgba(220,39,67,0.3)" }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Wavy transition */}
      <div className="relative -mt-px leading-[0]">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[20px] sm:h-[30px]">
          <path
            d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z"
            fill="#6B4A3A"
          />
        </svg>
      </div>

      {/* Footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 relative" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-[5%] w-40 h-40 rounded-full bg-[#F9D7E3]/5 blur-3xl" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 relative z-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-2xl sm:text-3xl">🧁</span>
              <span
                className="text-lg sm:text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {siteConfig.brandName}
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-medium">
              Handcrafted treats with local charm and a modern soul. Follow the aroma. 💖
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[#F9D7E3] font-bold text-sm uppercase tracking-wide mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Quick Links
            </h4>
            <div className="space-y-2.5">
              {[
                { label: "Menu", href: "#menu" },
                { label: "Gallery", href: "#gallery" },
                { label: "Our Story", href: "#story" },
                { label: "Find Us", href: "#visit" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/60 text-sm hover:text-[#F9D7E3] hover:translate-x-1 transition-all duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[#F9D7E3] font-bold text-sm uppercase tracking-wide mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get in Touch
            </h4>
            <p className="text-white/60 text-sm mb-2 font-medium leading-relaxed">{siteConfig.address}</p>
            <a
              href={`tel:+${siteConfig.whatsappNumber}`}
              className="text-white/60 text-sm hover:text-[#F9D7E3] transition-colors duration-300 block mb-5 font-medium"
            >
              {siteConfig.phone}
            </a>
            <div className="flex gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F9D7E3] hover:text-[#6B4A3A] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={siteConfig.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.306 0-4.443-.763-6.158-2.052l-.429-.324-2.645.887.887-2.645-.324-.429A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs font-medium">
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved. Made with 💕 in {siteConfig.city}.
          </p>
        </div>
      </div>
    </footer>
  );
}
