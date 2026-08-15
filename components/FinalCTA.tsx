"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(196, 147, 63, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative">
        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-12 h-px mx-auto mb-10"
          style={{ backgroundColor: "var(--accent-gold)" }}
        />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-light mb-6 leading-tighter capitalize"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#FAF7F4",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
          }}
        >
          Your skin deserves
          <br />
          <em style={{ color: "var(--accent-gold-light)", fontStyle: "normal" }}>
            a more personal approach.
          </em>
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="text-base mb-12 max-w-md mx-auto leading-relaxed"
          style={{
            color: "rgba(250, 247, 244, 0.55)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Start with a consultation and discover the right approach for your
          skin. We're in Kumaraswamy Layout, Bengaluru — close to home.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/916363114579?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Glow%20Clin%20Aesthetic"
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-book"
            className="btn-gold"
          >
            Book a Consultation
          </a>
          <a
            href="tel:+916363114579"
            id="final-cta-call"
            className="btn-secondary"
          >
            Call Us
          </a>
        </motion.div>

        {/* Address tag */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-xs tracking-widest"
          style={{
            color: "rgba(250, 247, 244, 0.25)",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.14em",
          }}
        >
          50 Feet Main Rd, 1st Stage, Kumaraswamy Layout, Bengaluru 560078
        </motion.p>
      </div>
    </section>
  );
}
