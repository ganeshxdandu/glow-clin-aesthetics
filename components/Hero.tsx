"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden"
        >
            {/* Background image with parallax */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 w-full h-[110%] -top-[5%]"
            >
                <Image
                    src="/images/hero.png"
                    alt="Glow Clin Aesthetic hero"
                    fill
                    priority
                    quality={85}
                    className="object-cover object-center"
                    sizes="100vw"
                />
                {/* Pure black overlay and gradient for superior contrast */}
                <div className="absolute inset-0 bg-black/35 z-[1]" />
                <div
                    className="absolute inset-0 z-[2]"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)",
                    }}
                />
            </motion.div>

            {/* Left vertical text */}
            <div className="absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col items-center">
                <span
                    className="text-[10px] tracking-[0.25em] uppercase text-white/30"
                    style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                >
                    LASER • SKIN • HAIR • WELLNESS
                </span>
            </div>

            {/* Right vertical text */}
            <div className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col items-center gap-4">
                <span
                    className="text-[10px] tracking-[0.25em] uppercase text-white/30"
                    style={{
                        writingMode: "vertical-rl",
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                >
                    SCROLL DOWN
                </span>
                <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 right-0 h-4 bg-white/50"
                        animate={{ y: [-16, 48, -16] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                </div>
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 max-w-8xl mx-auto px-6 lg:px-10 pb-8 lg:pb-12 w-full"
            >
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 lg:gap-16">
                    {/* Headline */}
                    <div className="max-w-2xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.9,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="font-light leading-[1.05] tracking-tight text-left mb-2 lg:mb-0"
                            style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                color: "#FAF7F4",
                                fontSize: "clamp(2.25rem, 5.75vw, 4.75rem)",
                            }}
                        >
                            Clinical Excellence.
                            <br />
                            <span style={{ color: "var(--accent-gold-light)" }}>
                                Artfully Refined.
                            </span>
                        </motion.h1>
                    </div>

                    {/* Paragraph and CTA block */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.7,
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="max-w-md flex flex-col items-start gap-6 lg:gap-8"
                    >
                        <p
                            className="text-sm lg:text-base font-light leading-relaxed text-left"
                            style={{
                                color: "rgba(250, 247, 244, 0.8)",
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            Personalised skin care and advanced medical aesthetics in Bengaluru. We combine clinical precision with artful refinement to reveal your natural radiance.
                        </p>
                        <a
                            href="#treatments"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector("#treatments")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-full text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                borderColor: "rgba(250, 247, 244, 0.25)",
                            }}
                        >
                            Explore Treatments
                            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
