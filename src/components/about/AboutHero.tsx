"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] w-full overflow-hidden bg-[var(--background)]"
    >
      {/* Hero Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Image with Parallax - Subtle blend */}
        <motion.div
          style={{ y: imageY, scale }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <Image
            src="/about/college_photo.jpg"
            alt="Suryodaya College of Engineering & Technology, Nagpur"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center opacity-60"
            sizes="100vw"
          />
        </motion.div>

        {/* Animated Gradient Orbs - Like Home Page */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary Blue Orb - Top Right */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-nsdc-blue/10 blur-[150px]"
          />

          {/* Secondary Orb - Bottom Left */}
          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-1/4 -left-1/4 h-[700px] w-[700px] rounded-full bg-nsdc-blue/5 blur-[180px]"
          />

          {/* Accent Orb - Center */}
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-white/2 blur-[100px]"
          />
        </div>

        {/* Gradient Overlays for Smooth Blending */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/90" />
        <div className="absolute inset-0 bg-linear-to-r from-background/40 via-transparent to-background/40" />
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-background/20 to-background/50" />

        {/* Main Content */}
        <motion.div
          style={{ opacity, y: textY }}
          className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20"
        >
          <div className="max-w-[1400px] mx-auto w-full">
            {/* Top Row - Logo & Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-4 mb-8"
            >
              <Image
                src="/nsdc-logo.png"
                alt="NSDC Logo"
                width={100}
                height={33}
                className="h-8 w-auto" style={{ width: "auto", height: "auto" }}
              />
              <div className="h-px w-8 bg-white/60" />
              <span className="font-mono text-xs tracking-[0.2em] text-white/60">
                NSDC SCET
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-bold text-[var(--foreground)] leading-[0.85] tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                ABOUT
              </motion.h1>
            </motion.div>

            {/* Subtitle with Gradient Fill (Matched to Events) */}
            <motion.div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  background:
                    "linear-gradient(135deg, #0085CA 0%, #00A3FF 50%, #0085CA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                US
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Where <span className="text-[var(--foreground)]">innovation</span> meets{" "}
              <span className="text-[var(--foreground)]">community</span>. Building the future at{" "}
              <span className="text-nsdc-blue">NSDC</span>.
            </motion.p>

            {/* Bottom Info - Matching Home Page Style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 flex flex-wrap items-end justify-between gap-8 border-t border-[var(--border)] pt-8"
            >
              <div className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                  Location
                </p>
                <p className="text-sm font-medium text-white">Suryodaya College of Engineering & Technology, Nagpur</p>
              </div>

              <div className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                  Members
                </p>
                <p className="text-sm font-medium text-white">8 Active</p>
              </div>

              <div className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                  Established
                </p>
                <p className="text-sm font-medium text-white">2026</p>
              </div>


            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[var(--background)] to-transparent pointer-events-none z-30" />
    </section>
  );
}
