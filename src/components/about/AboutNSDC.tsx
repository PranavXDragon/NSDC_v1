"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin, Building2, GraduationCap, Database, Brain, Code, Users } from "lucide-react";
import Image from "next/image";

export default function AboutNSDC() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: Building2,
      title: "AI & DATA SCIENCE",
      description: "Student-driven community focused on AI, ML, Data Science and Analytics.",
    },
    {
      icon: GraduationCap,
      title: "20+ MEMBERS",
      description: "Active students building the NSDC SCET community.",
    },
    {
      icon: MapPin,
      title: "NAGPUR",
      description: "Suryodaya College of Engineering & Technology, Maharashtra.",
    },
  ];

  const focusAreas = [
    {
      icon: Database,
      abbr: "DATA SCIENCE",
      name: "Data Analytics & Fundamentals",
      description: "Learn analytics, data science fundamentals and practical tools.",
    },
    {
      icon: Brain,
      abbr: "ARTIFICIAL INTELLIGENCE",
      name: "AI & Machine Learning",
      description: "Explore AI/ML through practical learning and real-world applications.",
    },
    {
      icon: Code,
      abbr: "BUILD & COMPETE",
      name: "Projects & Hackathons",
      description: "Build solutions through projects, challenges and hackathons.",
    },
    {
      icon: Users,
      abbr: "LEARN & CONNECT",
      name: "Community & Mentorship",
      description: "Collaborate, learn from mentors and connect with the NSDC community.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[var(--background)] overflow-hidden py-24 md:py-40"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[400px] bg-nsdc-blue/3 rounded-full blur-[200px] pointer-events-none" />

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
            Our Institution
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-normal leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          NSDC
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-white/30 mb-16 max-w-3xl"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Suryodaya College of Engineering & Technology, Nagpur
        </motion.p>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - NSDC Logo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-[var(--surface)] border border-white/5 p-12 md:p-16">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-nsdc-blue/40" />
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-nsdc-blue/40" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-nsdc-blue/40" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-nsdc-blue/40" />

              {/* NSDC Logo */}
              <div className="relative w-full aspect-4/3 max-w-[280px] mx-auto">
                <Image
                  src="/nsdc-logo.png"
                  alt="NSDC SCET Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-contain"
                />
              </div>

              {/* Tagline */}
              <div className="mt-6 text-center">
                <p
                  className="text-white/30 text-sm tracking-normal uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  SURYODAYA COLLEGE OF ENGINEERING & TECHNOLOGY, NAGPUR
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
                EST. JULY 2026
              </span>
            </motion.div>
          </motion.div>

          {/* Right - Main Description */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p
                className="text-white/50 text-base md:text-lg leading-[1.8]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="text-[var(--foreground)] font-medium">NSDC SCET</span> is the NSDC Institutional Chapter at Suryodaya College of Engineering & Technology, Nagpur, building an inclusive, student-driven community focused on Data Science, Artificial Intelligence, Machine Learning, and Analytics.
              </p>

              <p
                className="text-white/40 text-sm md:text-base leading-[1.8]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The chapter aims to make data science and AI accessible to students across departments through hands-on workshops, projects, mentorship, hackathons, and collaborative learning. Students are encouraged to work on real-world problems, develop practical skills, and connect with the wider NSDC community.
              </p>

              <p
                className="text-white/40 text-sm md:text-base leading-[1.8]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Through learning initiatives, technical events, projects, and cross-chapter collaboration, NSDC SCET aims to build a strong student ecosystem for AI and Data Science at the college.
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="https://nebigdatahub.org/nsdc/nsdc-chapters/nsdc-chapter-suryodaya-college-of-engineering-and-technology-nagpur-maharshtra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 hover:border-nsdc-blue/50 bg-white/2 transition-all duration-300"
                >
                  <span
                    className="text-sm text-white/60 group-hover:text-[var(--foreground)] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    NSDC Official
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-nsdc-blue transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://scetngp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 hover:border-nsdc-blue/50 bg-white/2 transition-all duration-300"
                >
                  <span
                    className="text-sm text-white/60 group-hover:text-[var(--foreground)] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    SCET Website
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-nsdc-blue transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlights Row */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative bg-[var(--surface)] border border-white/5 p-6 transition-all duration-300 hover:border-white/10"
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-nsdc-blue/30 group-hover:bg-nsdc-blue/60 transition-colors duration-300" />

              <div className="flex items-start gap-4 mt-2">
                <div className="p-2 bg-white/2 border border-white/5">
                  <item.icon className="w-5 h-5 text-nsdc-blue" strokeWidth={1.5} />
                </div>
                <div>
                  <h4
                    className="text-lg font-bold text-[var(--foreground)] mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-sm text-white/40"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Four Schools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3
            className="text-xl md:text-2xl font-black text-[var(--foreground)] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            OUR <span className="text-nsdc-blue">FOCUS AREAS</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {focusAreas.map((school, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative bg-[var(--surface)] border border-white/5 p-6 md:p-8 transition-all duration-300 hover:border-nsdc-blue/20"
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-nsdc-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-nsdc-blue/10 border border-nsdc-blue/20 shrink-0">
                    <school.icon className="w-6 h-6 text-nsdc-blue" strokeWidth={1.5} />
                  </div>

                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        className="text-2xl md:text-3xl font-black text-[var(--foreground)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {school.abbr}
                      </span>
                    </div>

                    <h4
                      className="text-sm text-nsdc-blue/80 mb-3"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {school.name}
                    </h4>

                    <p
                      className="text-sm text-white/40 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {school.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
