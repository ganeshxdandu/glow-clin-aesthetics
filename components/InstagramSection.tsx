"use client";

import { motion } from "framer-motion";

function InstagramIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill={color} stroke="none" />
    </svg>
  );
}

export default function InstagramSection() {
  return (
    <section
      className="py-24 lg:py-28"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-stretch justify-between gap-10">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg"
          >
            <p className="section-label mb-5">Follow Along</p>
            <div className="divider-gold mb-8" />
            <h2 className="section-title mb-6">
              Stay connected
              <br />
              <em style={{ color: "var(--accent-gold)", fontStyle: "normal" }}>
                on Instagram.
              </em>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{
                color: "var(--text-muted)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Follow{" "}
              <a
                href="https://www.instagram.com/glowclinaesthetic/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: "var(--accent-gold)" }}
              >
                @glowclinaesthetic
              </a>{" "}
              for treatment updates, skin care tips, and a closer look at life
              inside the clinic.
            </p>
            <a
              href="https://www.instagram.com/glowclinaesthetic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-primary"
            >
              <InstagramIcon size={16} color="currentColor" />
              Follow on Instagram
            </a>
          </motion.div>

          {/* Right: Instagram handle visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex-shrink-0 flex w-full lg:w-72"
          >
            <a
              href="https://www.instagram.com/glowclinaesthetic/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center w-full h-64 lg:h-full relative overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
              style={{ backgroundColor: "var(--bg-dark)", border: "1px solid rgba(196, 147, 63, 0.3)" }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(196, 147, 63, 0.4) 0%, transparent 70%)",
                }}
              />

              {/* Instagram icon */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, #C4933F 0%, #E8D090 50%, #A87830 100%)",
                  }}
                >
                  <InstagramIcon size={32} color="#1E1410" />
                </div>

                <div className="text-center">
                  <div
                    className="text-lg font-light"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#FAF7F4",
                    }}
                  >
                    @glowclinaesthetic
                  </div>
                  <div
                    className="text-xs mt-1 tracking-widest uppercase"
                    style={{
                      color: "var(--accent-gold)",
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Follow us
                  </div>
                </div>
              </div>

              {/* Hover reveal */}
              <div
                className="absolute inset-x-0 bottom-0 py-3 text-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: "rgba(196, 147, 63, 0.15)" }}
              >
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--accent-gold)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.15em" }}
                >
                  Open Instagram →
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
