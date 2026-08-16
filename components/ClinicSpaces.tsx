"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClinicSpaces() {
    return (
        <section
            className="py-24 lg:py-36"
            style={{ backgroundColor: "var(--bg-primary)" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 lg:mb-16"
                >
                    <p className="section-label mb-5">The Clinic</p>
                    <div className="divider-gold mb-8" />
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
                        <h2 className="section-title max-w-lg">
                            A space designed
                            <br />
                            <em
                                style={{
                                    color: "var(--accent-gold)",
                                    fontStyle: "normal",
                                }}
                            >
                                for your comfort.
                            </em>
                        </h2>
                        <p
                            className="max-w-md text-base leading-relaxed lg:text-right"
                            style={{
                                color: "var(--text-muted)",
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            Every detail of Glow Clin Aesthetic — from the
                            marble reception to the calm treatment rooms — has
                            been designed to make you feel comfortable and at
                            ease.
                        </p>
                    </div>
                </motion.div>

                {/* Editorial image composition */}
                <div
                    className="grid grid-cols-12 grid-rows-2 gap-3 lg:gap-4"
                    style={{ minHeight: "680px" }}
                >
                    {/* Large hero image — reception */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="col-span-12 md:col-span-7 row-span-2 relative overflow-hidden group"
                        style={{ minHeight: "400px" }}
                    >
                        <Image
                            src="/images/reception.jpg"
                            alt="Glow Clin Aesthetic reception — marble desk, gold ring pendants, walnut feature wall"
                            fill
                            quality={75}
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, 58vw"
                        />
                        {/* Caption overlay */}
                        <div
                            className="absolute bottom-0 left-0 right-0 p-6"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(26, 12, 8, 0.75) 0%, transparent 100%)",
                            }}
                        >
                            <span
                                className="text-xs tracking-widest uppercase"
                                style={{
                                    color: "rgba(232, 200, 122, 0.85)",
                                    fontFamily: "'DM Sans', sans-serif",
                                    letterSpacing: "0.18em",
                                }}
                            >
                                Reception
                            </span>
                        </div>
                    </motion.div>

                    {/* Top right — waiting lounge */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                            delay: 0.15,
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="col-span-12 md:col-span-5 row-span-1 relative overflow-hidden group"
                        style={{ minHeight: "200px" }}
                    >
                        <Image
                            src="/images/waiting-lounge.jpg"
                            alt="Glow Clin Aesthetic patient waiting lounge with sage green sofas"
                            fill
                            quality={75}
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, 42vw"
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 p-4"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(26, 12, 8, 0.65) 0%, transparent 100%)",
                            }}
                        >
                            <span
                                className="text-xs tracking-widest uppercase"
                                style={{
                                    color: "rgba(232, 200, 122, 0.8)",
                                    fontFamily: "'DM Sans', sans-serif",
                                    letterSpacing: "0.18em",
                                }}
                            >
                                Waiting Lounge
                            </span>
                        </div>
                    </motion.div>

                    {/* Bottom right — consultation */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                            delay: 0.25,
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden group"
                        style={{ minHeight: "200px" }}
                    >
                        <Image
                            src="/images/consultation-room.jpg"
                            alt="Glow Clin Aesthetic consultation room with credentials"
                            fill
                            quality={75}
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 p-4"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(26, 12, 8, 0.65) 0%, transparent 100%)",
                            }}
                        >
                            <span
                                className="text-xs tracking-widest uppercase"
                                style={{
                                    color: "rgba(232, 200, 122, 0.8)",
                                    fontFamily: "'DM Sans', sans-serif",
                                    letterSpacing: "0.18em",
                                }}
                            >
                                Consultation Room
                            </span>
                        </div>
                    </motion.div>

                    {/* Bottom far right — treatment suite */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                            delay: 0.35,
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="col-span-6 md:col-span-2 row-span-1 relative overflow-hidden group"
                        style={{ minHeight: "200px" }}
                    >
                        <Image
                            src="/images/treatment-suite.jpg"
                            alt="Glow Clin Aesthetic treatment room with professional equipment"
                            fill
                            quality={75}
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 50vw, 17vw"
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 p-4"
                            style={{
                                background:
                                    "linear-gradient(to top, rgba(26, 12, 8, 0.65) 0%, transparent 100%)",
                            }}
                        >
                            <span
                                className="text-xs tracking-widest uppercase"
                                style={{
                                    color: "rgba(232, 200, 122, 0.8)",
                                    fontFamily: "'DM Sans', sans-serif",
                                    letterSpacing: "0.18em",
                                }}
                            >
                                Treatment Suite
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
