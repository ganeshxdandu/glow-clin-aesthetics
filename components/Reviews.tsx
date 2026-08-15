"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Asra Fathima Hussain",
    initials: "AF",
    rating: 5,
    text: "I don't usually leave reviews, but Glow Clin Aesthetic genuinely deserves this. I had treatments here and the experience was wonderful — the results were visible and I felt genuinely cared for throughout. Highly recommend to anyone looking for personalised skin care in Bengaluru.",
    context: "Google Review",
  },
  {
    name: "Ruhi Khalid",
    initials: "RK",
    rating: 5,
    text: "Very impressed with my experience at Glow Clin Aesthetic. The consultation was thorough and completely free, the hospitality was excellent, and the results of my treatment were great. Would definitely recommend this clinic to anyone.",
    context: "Google Review",
  },
  {
    name: "Kamanuri Ashifa Anjum",
    initials: "KA",
    rating: 5,
    text: "Very good experience overall. The doctor and staff were extremely friendly and professional, and I was happy with the treatment results. The clinic feels welcoming and comfortable. Glad I chose Glow Clin.",
    context: "Google Review",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 lg:py-36"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <p className="section-label mb-5" style={{ color: "var(--accent-gold)" }}>
              Patient Reviews
            </p>
            <div className="divider-gold mb-8" />
            <h2
              className="section-title capitalize"
              style={{ color: "#FAF7F4" }}
            >
              What our patients
              <br />
              <em style={{ color: "var(--accent-gold)", fontStyle: "normal" }}>
                say.
              </em>
            </h2>
          </div>

          {/* Aggregate rating */}
          <div className="flex items-center gap-6 lg:flex-col lg:items-end">
            <div>
              <div
                className="text-6xl lg:text-7xl font-light leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--accent-gold-light)",
                }}
              >
                4.9
              </div>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-current" style={{ color: "var(--accent-gold)" }} />
                ))}
              </div>
              <div
                className="text-xs mt-2 tracking-wide"
                style={{
                  color: "rgba(250, 247, 244, 0.4)",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                12 Google Reviews
              </div>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(250, 247, 244, 0.08)" }}>
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6 p-8 lg:p-10"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
            >
              {/* Quote icon */}
              <Quote size={28} style={{ color: "var(--accent-gold)", opacity: 0.6 }} />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={12} className="fill-current" style={{ color: "var(--accent-gold)" }} />
                ))}
              </div>

              {/* Review text */}
              <p
                className="text-sm leading-relaxed flex-1 italic"
                style={{
                  color: "rgba(250, 247, 244, 0.72)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-4 pt-4" style={{ borderTop: "1px solid rgba(250, 247, 244, 0.1)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                  style={{
                    backgroundColor: "var(--accent-gold)",
                    color: "var(--bg-dark)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "#FAF7F4", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {review.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(250, 247, 244, 0.35)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {review.context}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Maps link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.google.com/maps/place/Glow+Clin+Aesthetic/@12.9094881,77.5648284,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-70"
            style={{
              color: "rgba(250, 247, 244, 0.4)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            View all reviews on Google
            <span style={{ color: "var(--accent-gold)" }}>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
