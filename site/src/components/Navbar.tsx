"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site-config";
import Link from "next/link";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Our Story", href: "#story" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FFF5E8]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(249,215,227,0.3)] py-2.5"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-2.5 group flex-shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-2xl sm:text-3xl group-hover:animate-wiggle inline-block">🧁</span>
            <span
              className={`text-lg sm:text-xl font-bold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-[#6B4A3A]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {siteConfig.brandName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-[15px] sm:text-base font-bold rounded-full transition-all duration-300 tracking-wide whitespace-nowrap ${
                  scrolled
                    ? "text-[#6B4A3A] hover:bg-[#F9D7E3]/60 hover:text-[#6B4A3A]"
                    : "text-white/95 hover:bg-white/20 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-lg z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[2px] rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "bg-[#6B4A3A] rotate-45 translate-y-[7px]" : scrolled ? "bg-[#6B4A3A]" : "bg-white"
              }`}
            />
            <span
              className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : scrolled ? "bg-[#6B4A3A]" : "bg-white"
              }`}
            />
            <span
              className={`block w-5 h-[2px] rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "bg-[#6B4A3A] -rotate-45 -translate-y-[7px]" : scrolled ? "bg-[#6B4A3A]" : "bg-white"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-[#FFF5E8] flex flex-col items-center justify-center gap-5 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Decorative floating elements in mobile menu */}
        <span className="absolute top-24 left-8 text-4xl animate-float opacity-20 select-none">🧁</span>
        <span className="absolute top-36 right-12 text-3xl animate-float-slow opacity-20 select-none">🍰</span>
        <span className="absolute bottom-32 left-16 text-3xl animate-float opacity-20 select-none">☕</span>
        <span className="absolute bottom-44 right-10 text-4xl animate-float-slow opacity-20 select-none">🍩</span>

        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-bold text-[#6B4A3A] hover:text-[#FFF5E8] px-8 py-3 rounded-full hover:bg-[#6B4A3A] transition-all duration-300"
            style={{
              fontFamily: "var(--font-display)",
              transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
