"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-36"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-5">Location & Contact</p>
            <div className="divider-gold mb-8" />
            <h2 className="section-title mb-10">
              Find us in
              <br />
              <em style={{ color: "var(--accent-gold)", fontStyle: "normal" }}>
                Bengaluru.
              </em>
            </h2>

            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0" style={{ color: "var(--accent-gold)" }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div
                    className="text-sm font-medium mb-1"
                    style={{ color: "var(--text-primary)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Glow Clin Aesthetic
                  </div>
                  <address
                    className="text-sm not-italic leading-relaxed"
                    style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    50 Feet Main Rd, 1st Stage<br />
                    Kumaraswamy Layout<br />
                    Bengaluru, Karnataka 560078
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent-gold)" }}>
                  <Phone size={18} />
                </div>
                <div>
                  <a
                    href="tel:+916363114579"
                    className="text-sm transition-colors duration-200"
                    style={{
                      color: "var(--text-secondary)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    +91 63631 14579
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/916363114579?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Glow%20Clin%20Aesthetic"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-cta-book"
                className="btn-primary"
              >
                Book a Consultation
              </a>
              <a
                href="https://www.google.com/maps/place/Glow+Clin+Aesthetic/@12.9094881,77.5648284,17z/"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-cta-directions"
                className="btn-outline-dark inline-flex items-center gap-2"
              >
                Get Directions
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right: map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative overflow-hidden w-full min-h-[350px] lg:h-full"
            style={{ border: "1px solid var(--border)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8978297987067!2d77.5648284!3d12.9094881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15bae68aba2d%3A0x5a5fd53a1b21c55d!2sGlow%20Clin%20Aesthetic!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Glow Clin Aesthetic location map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
