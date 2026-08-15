"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileBookingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the booking bar once scroll position is past the Hero section (roughly window height - 100px)
      setIsVisible(window.scrollY > (window.innerHeight - 100));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden flex border-t mobile-booking-bar transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border)",
        boxShadow: "0 -4px 24px rgba(26, 12, 8, 0.08)",
      }}
    >
      <a
        href="tel:+916363114579"
        id="mobile-bar-call"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium border-r transition-colors duration-200"
        style={{
          color: "var(--text-secondary)",
          borderColor: "var(--border)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <Phone size={16} style={{ color: "var(--accent-gold)" }} />
        Call Us
      </a>
      <a
        href="https://wa.me/916363114579?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Glow%20Clin%20Aesthetic"
        target="_blank"
        rel="noopener noreferrer"
        id="mobile-bar-book"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors duration-200"
        style={{
          backgroundColor: "var(--bg-dark)",
          color: "var(--accent-gold-light)",
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.06em",
        }}
      >
        <MessageCircle size={16} />
        Book Consultation
      </a>
    </div>
  );
}
