"use client";

import { MapPin, Phone } from "lucide-react";

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why Glow", href: "#why-glow" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="py-16"
      style={{ backgroundColor: "#130D09", borderTop: "1px solid rgba(250, 247, 244, 0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div
                className="text-2xl font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#FAF7F4" }}
              >
                Glow Clin
              </div>
              <div
                className="text-xs tracking-widest uppercase"
                style={{
                  color: "var(--accent-gold)",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.2em",
                }}
              >
                Aesthetic
              </div>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(250, 247, 244, 0.35)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Skin care & aesthetic clinic
              <br />
              Kumaraswamy Layout, Bengaluru
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="text-xs tracking-widest uppercase mb-5"
              style={{
                color: "rgba(250, 247, 244, 0.3)",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.18em",
              }}
            >
              Navigation
            </div>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-sm transition-colors duration-200 hover:opacity-70"
                  style={{ color: "rgba(250, 247, 244, 0.5)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-xs tracking-widest uppercase mb-5"
              style={{
                color: "rgba(250, 247, 244, 0.3)",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.18em",
              }}
            >
              Contact
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+916363114579"
                className="flex items-start gap-3 transition-opacity duration-200 hover:opacity-70"
                style={{ color: "rgba(250, 247, 244, 0.5)", fontFamily: "'DM Sans', sans-serif" }}
              >
                <Phone size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent-gold)" }} />
                <span className="text-sm">+91 63631 14579</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent-gold)" }} />
                <address
                  className="text-sm not-italic leading-relaxed"
                  style={{ color: "rgba(250, 247, 244, 0.5)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  50 Feet Main Rd, 1st Stage<br />
                  Kumaraswamy Layout<br />
                  Bengaluru 560078
                </address>
              </div>
              <a
                href="https://www.instagram.com/glowclinaesthetic/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-70"
                style={{ color: "rgba(250, 247, 244, 0.5)", fontFamily: "'DM Sans', sans-serif" }}
              >
                <InstagramIcon size={14} />
                <span className="text-sm">@glowclinaesthetic</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Glow+Clin+Aesthetic/@12.9094881,77.5648284,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-70"
                style={{ color: "rgba(250, 247, 244, 0.5)", fontFamily: "'DM Sans', sans-serif" }}
              >
                <MapPin size={14} style={{ color: "var(--accent-gold)" }} />
                <span className="text-sm">View on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(250, 247, 244, 0.06)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(250, 247, 244, 0.2)", fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} Glow Clin Aesthetic. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(250, 247, 244, 0.2)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Kumaraswamy Layout, Bengaluru, Karnataka 560078
          </p>
        </div>
      </div>
    </footer>
  );
}
