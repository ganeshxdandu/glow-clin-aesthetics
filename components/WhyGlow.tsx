"use client";

import { motion } from "framer-motion";
import { UserRound, MapPin, Star, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: <UserRound size={22} />,
    title: "Personalised Treatment",
    description:
      "Every patient receives a treatment plan tailored to their specific skin type, concerns, and goals — not a generic protocol.",
  },
  {
    icon: <Star size={22} />,
    title: "Professional & Caring Staff",
    description:
      "Our patients consistently describe the experience as being in the hands of friendly, professional, and attentive care.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Results You Can See",
    description:
      "Patients report visible results and leave feeling confident about the care they've received and the outcomes they've achieved.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Close to You in Bengaluru",
    description:
      "Conveniently located on 50 Feet Main Road, Kumaraswamy Layout — premium aesthetic care in your neighbourhood.",
  },
];

export default function WhyGlow() {
  return (
    <section
      id="why-glow"
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(196, 147, 63, 0.08) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="section-label mb-5">Why Choose Us</p>
          <div className="divider-gold mb-8 mx-auto" />
          <h2 className="section-title max-w-lg mx-auto">
            Why{" "}
            <em style={{ color: "var(--accent-gold)", fontStyle: "normal" }}>
              Glow Clin?
            </em>
          </h2>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col gap-5 p-8 lg:p-10 transition-all duration-300"
              style={{ backgroundColor: "var(--bg-primary)" }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 flex items-center justify-center rounded-none transition-colors duration-300"
                style={{ color: "var(--accent-gold)" }}
              >
                {reason.icon}
              </div>

              {/* Gold rule */}
              <div
                className="w-8 h-px transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: "var(--accent-gold)" }}
              />

              {/* Title */}
              <h3
                className="text-xl font-medium"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--text-primary)",
                  fontSize: "1.35rem",
                }}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
