"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/reception-v2.jpg"
                alt="Glow Clin Aesthetic reception area — marble desk and gold accents"
                fill
                quality={75}
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle warm overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(30, 20, 16, 0.2) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 lg:-right-10 p-6 max-w-[200px]"
              style={{ backgroundColor: "var(--bg-dark)", color: "#FAF7F4" }}
            >
              <div
                className="text-3xl font-light mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--accent-gold-light)" }}
              >
                4.9
              </div>
              <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(250, 247, 244, 0.55)", letterSpacing: "0.15em", fontFamily: "'DM Sans', sans-serif" }}>
                Google Rating
              </div>
              <div className="flex gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="10" height="10" viewBox="0 0 10 10" fill="var(--accent-gold)">
                    <path d="M5 0.5L6.12 3.5H9.31L6.82 5.37L7.7 8.5L5 6.72L2.3 8.5L3.18 5.37L0.69 3.5H3.88L5 0.5Z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <p className="section-label mb-5">About the Clinic</p>
            <div className="divider-gold mb-8" />

            <h2 className="section-title mb-8">
              Personal care,
              <br />
              <em style={{ color: "var(--accent-gold)", fontStyle: "normal" }}>
                close to home.
              </em>
            </h2>

            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)", fontFamily: "'DM Sans', sans-serif" }}
            >
              <p>
                At Glow Clin Aesthetic, we believe that great skin care begins with
                understanding you — your skin, your concerns, and your goals.
                Located on 50 Feet Main Road in Kumaraswamy Layout, we're a neighbourhood
                clinic built around individual attention.
              </p>
              <p>
                We offer a calm, welcoming environment that feels nothing like a
                hospital. Whether you're visiting for a consultation or a treatment,
                you'll find a professional space designed for comfort and care.
              </p>
              <p>
                Our focus is on personalised treatment plans — not one-size-fits-all
                solutions. Every patient receives guidance tailored to their specific
                skin needs.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/916363114579?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Glow%20Clin%20Aesthetic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Consultation
              </a>
              <a
                href="https://www.google.com/maps/place/Glow+Clin+Aesthetic/@12.9094881,77.5648284,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
