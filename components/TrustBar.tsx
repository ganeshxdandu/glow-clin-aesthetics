"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Heart, Sparkles } from "lucide-react";

const trustItems = [
  {
    icon: <Star size={16} className="fill-current" />,
    value: "4.9 / 5",
    label: "Google Rating",
    sub: "12 reviews",
  },
  {
    icon: <MapPin size={16} />,
    value: "Kumaraswamy Layout",
    label: "Bengaluru",
    sub: "50 Feet Main Road",
  },
  {
    icon: <Heart size={16} />,
    value: "Women-Owned",
    label: "Clinic",
    sub: "Personalised care",
  },
  {
    icon: <Sparkles size={16} />,
    value: "Laser · Skin",
    label: "Hair · Wellness",
    sub: "Full aesthetic care",
  },
];

export default function TrustBar() {
  return (
    <section className="w-full border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--marble)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ borderColor: "var(--border)" }}>
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`flex items-center gap-3 lg:gap-4 px-4 lg:px-6 py-5 lg:py-6 ${
                i === 0
                  ? "border-r border-b lg:border-b-0"
                  : i === 1
                  ? "border-b lg:border-b-0 lg:border-r"
                  : i === 2
                  ? "border-r"
                  : ""
              }`}
              style={{ borderColor: "var(--border)" }}
            >
              <div style={{ color: "var(--accent-gold)" }}>{item.icon}</div>
              <div>
                <div
                  className="text-sm font-medium leading-tight"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {item.value}
                </div>
                <div
                  className="text-xs"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {item.label}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
