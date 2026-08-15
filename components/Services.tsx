"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "laser",
    category: "01",
    title: "Laser",
    tagline: "Precision treatments.",
    description:
      "Professional laser-based treatments for targeted skin and hair concerns, administered in a controlled clinical environment.",
    accent: "#C4933F",
    bg: "var(--bg-dark)",
    textColor: "#FAF7F4",
  },
  {
    id: "skin",
    category: "02",
    title: "Skin",
    tagline: "Healthy, radiant skin.",
    description:
      "Personalised skin consultations and treatments addressing your individual skin type and concerns. Your skin, your plan.",
    accent: "var(--accent-gold)",
    bg: "var(--bg-secondary)",
    textColor: "var(--text-primary)",
  },
  {
    id: "hair",
    category: "03",
    title: "Hair",
    tagline: "Care from the root.",
    description:
      "Dedicated hair care treatments to address a range of hair and scalp concerns with professional guidance and care.",
    accent: "var(--accent-gold)",
    bg: "var(--bg-dark-mid)",
    textColor: "#FAF7F4",
  },
  {
    id: "wellness",
    category: "04",
    title: "Wellness",
    tagline: "Inside out approach.",
    description:
      "Holistic wellness care that complements your aesthetic journey, addressing overall skin health and wellbeing.",
    accent: "var(--accent-gold-light)",
    bg: "#F0E8DF",
    textColor: "var(--text-primary)",
  },
];

export default function Services() {
  return (
    <section
      id="treatments"
      className="py-24 lg:py-36"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-5">Treatments & Services</p>
            <div className="divider-gold mb-8" />
            <h2 className="section-title max-w-md">
              What we
              <br />
              <em style={{ color: "var(--accent-gold)", fontStyle: "normal" }}>offer</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base max-w-sm leading-relaxed lg:text-right"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Each treatment is tailored to your individual needs — not a
            one-size-fits-all protocol.
          </motion.p>
        </div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-10 lg:p-12 flex flex-col gap-6 transition-all duration-500 cursor-default"
              style={{ backgroundColor: service.bg }}
            >
              {/* Category number */}
              <div
                className="text-xs tracking-widest font-medium"
                style={{
                  color: service.textColor === "#FAF7F4"
                    ? "rgba(250, 247, 244, 0.4)"
                    : "var(--text-muted)",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.2em",
                }}
              >
                {service.category}
              </div>

              {/* Title */}
              <h3
                className="text-5xl lg:text-6xl font-light leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: service.accent,
                }}
              >
                {service.title}
              </h3>

              {/* Tagline */}
              <div
                className="text-sm font-medium tracking-wide"
                style={{
                  color: service.textColor === "#FAF7F4"
                    ? "rgba(250, 247, 244, 0.7)"
                    : "var(--text-secondary)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {service.tagline}
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: service.textColor === "#FAF7F4"
                    ? "rgba(250, 247, 244, 0.55)"
                    : "var(--text-muted)",
                  fontFamily: "'DM Sans', sans-serif",
                  maxWidth: "340px",
                }}
              >
                {service.description}
              </p>

              {/* CTA */}
              <a
                href="https://wa.me/916363114579?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20treatments%20at%20Glow%20Clin%20Aesthetic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase mt-2 transition-all duration-300 group-hover:gap-3"
                style={{
                  color: service.accent,
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.12em",
                }}
              >
                Enquire <ArrowRight size={13} />
              </a>

              {/* Hover glow line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: service.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p
            className="text-sm mb-5"
            style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Not sure which treatment is right for you?
          </p>
          <a
            href="https://wa.me/916363114579?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Glow%20Clin%20Aesthetic"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
