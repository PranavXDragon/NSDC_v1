"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function WhatIsNSDC() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#030303] overflow-hidden py-24 md:py-40"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-nsdc-blue/3 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Label */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-8"
        >
          <div className="w-16 md:w-24 h-px bg-linear-to-r from-nsdc-blue/60 to-transparent" />
          <span
            className="text-[10px] md:text-[11px] font-light tracking-[0.5em] text-white/30 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The Organization
          </span>
        </motion.div>

        {/* Main Content Grid - NSDC Global */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left Column - Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-normal leading-[0.95] mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              WHAT IS{" "}
              <span className="text-nsdc-blue">NSDC</span>
              <span className="text-white/20">?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-base md:text-lg leading-[1.8] mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="text-[var(--foreground)] font-medium">The National Student Data Corps (NSDC)</span> is a community-developed initiative dedicated to helping learners explore and develop skills in data science. NSDC provides educational resources, learning opportunities, mentorship, projects, and career development support to students and educators at different levels.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/40 text-sm md:text-base leading-[1.8] mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Originally launched as the <span className="text-[var(--foreground)] font-medium">Northeast Student Data Corps</span>, NSDC began in 2020 and was launched nationally in 2021. Today, it connects students, educators, researchers, industry professionals, and institutions through a growing data science community. NSDC also supports institutional and regional chapters that bring data science learning, mentorship, research, and career opportunities directly to students.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mb-10"
            >
              {[
                { value: "2020", label: "Founded" },
                { value: "21K+", label: "Community Members" },
                { value: "1,400+", label: "Institutions" },
              ].map((stat, i) => (
                <div key={i} className="border-l border-white/10 pl-4">
                  <div
                    className="text-2xl md:text-3xl font-black text-[var(--foreground)] mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[10px] md:text-xs tracking-normalr text-white/30 uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Link */}
            <motion.a
              href="https://nebigdatahub.org/nsdc/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group inline-flex items-center gap-3 text-sm text-white/50 hover:text-nsdc-blue transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="tracking-normal">Visit Official NSDC</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* NSDC Logo Card */}
            <div className="relative bg-[var(--surface)] border border-white/5 p-12 md:p-16">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-nsdc-blue/40" />
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-nsdc-blue/40" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-nsdc-blue/40" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-nsdc-blue/40" />

              {/* Logo */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                <Image
                  src="/about/Association_for_Computing_Machinery_(NSDC)_logo.webp"
                  alt="NSDC Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-contain"
                />
              </div>

              {/* Tagline */}
              <div className="mt-8 text-center">
                <p
                  className="text-white/30 text-sm tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  DATA SCIENCE • LEARNING • COMMUNITY
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-nsdc-blue px-6 py-3"
            >
              <span
                className="text-[var(--foreground)] text-sm font-medium tracking-normal"
                style={{ fontFamily: "var(--font-body)" }}
              >
                NSDC • 2021
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
