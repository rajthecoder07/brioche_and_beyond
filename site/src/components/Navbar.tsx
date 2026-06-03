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
            ? "bg-[#2c1810]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-3 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-2xl">🥐</span>
            <div>
              <span
                className="text-lg font-semibold tracking-wide text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {siteConfig.brandName}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-[#c69c6d] transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-6 py-2.5 bg-[#c69c6d] text-white text-sm font-semibold rounded-full hover:bg-[#ddb88c] hover:text-[#2c1810] transition-all duration-300 tracking-wide"
            >
              {siteConfig.ctaText}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-[#2c1810] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-medium text-white/90 hover:text-[#c69c6d] transition-colors"
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
        <a
          href={siteConfig.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className="mt-4 px-10 py-3.5 bg-[#c69c6d] text-white text-lg font-semibold rounded-full hover:bg-[#ddb88c] hover:text-[#2c1810] transition-all duration-300"
          style={{
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.4s cubic-bezier(0.16,1,0.3,1) 400ms",
          }}
        >
          {siteConfig.ctaText}
        </a>
      </div>
    </>
  );
}
