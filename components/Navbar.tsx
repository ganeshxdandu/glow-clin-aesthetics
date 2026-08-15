"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why Glow", href: "#why-glow" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => document.body.classList.remove("mobile-menu-open");
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? "py-3" : "py-5"
        }`}
        style={{
          backgroundColor: scrolled ? "rgba(250, 247, 244, 0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderColor: scrolled ? "var(--border)" : "rgba(250, 247, 244, 0.08)",
        }}
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-10 flex items-center justify-between w-full">
          {/* Logo column */}
          <div className="flex-1 lg:flex-initial lg:w-60 flex justify-start">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center transition-opacity duration-200 hover:opacity-80"
            >
              <Image
                src="/images/logo.png"
                alt="Glow Clin Aesthetic"
                width={120}
                height={40}
                priority
                className="h-9 lg:h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop nav column */}
          <div className="hidden lg:flex flex-1 justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="nav-link text-sm"
                style={{ color: scrolled ? "var(--text-secondary)" : "rgba(250, 247, 244, 0.85)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA column */}
          <div className="hidden lg:flex lg:w-60 justify-end items-center gap-4">
            <a
              href="https://wa.me/916363114579?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Glow%20Clin%20Aesthetic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
              style={{
                backgroundColor: scrolled ? "var(--bg-dark)" : "rgba(30, 20, 16, 0.85)",
                borderColor: scrolled ? "var(--bg-dark)" : "rgba(250, 247, 244, 0.3)",
              }}
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 -mr-2 transition-opacity duration-200 hover:opacity-70 z-50"
            aria-label="Toggle menu"
            style={{ color: (scrolled || menuOpen) ? "var(--text-primary)" : "#FAF7F4" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-8"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            <div className="flex flex-col gap-1 flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-3xl font-light py-3 border-b transition-colors duration-200 hover:opacity-60"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--text-primary)",
                    borderColor: "var(--border)",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-6">
              <a
                href="https://wa.me/916363114579?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Glow%20Clin%20Aesthetic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center justify-center"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
