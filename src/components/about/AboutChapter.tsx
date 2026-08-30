"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Code, Palette, Users, Rocket, Calendar, Hash, Shield, ArrowUpRight, Building2 } from "lucide-react";
import Image from "next/image";

export default function AboutChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  const pillars = [
    {
      icon: Code,
      title: "TECHNICAL EXCELLENCE",
      description: "Build strong foundations in Data Science, AI, Machine Learning, analytics, and emerging technologies through hands-on learning and practical projects.",
    },
    {
      icon: Rocket,
      title: "INNOVATION & BUILDING",
      description: "Turn ideas into real-world solutions through projects, experimentation, problem-solving, hackathons, and technical challenges.",
    },
    {
      icon: Users,
      title: "COMMUNITY & COLLABORATION",
      description: "Create a supportive student community where members share knowledge, collaborate across disciplines, learn from mentors, and grow together.",
    },
    {
      icon: Target,
      title: "CAREER & GROWTH",
      description: "Develop practical, professional, and industry-ready skills through mentorship, events, competitions, networking, and real-world experiences.",
    },
  ];

  // Official chapter details from NSDC
  const chapterDetails = [
    { icon: Building2, label: "CHAPTER", value: "Suryodaya College" },
    { icon: Target, label: "FOCUS", value: "Data Science • AI • ML" },
    { icon: Users, label: "MEMBERS", value: "8 Active Members" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#030303] overflow-hidden py-24 md:py-40"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nsdc-blue/3 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[150px]" />
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
            Our Chapter
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
          NSDC SCET
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-white/30 mb-10 max-w-3xl"
          style={{ fontFamily: "var(--font-body)" }}
        >
          National Student Data Corps — Suryodaya College Chapter
        </motion.p>

        {/* Official Chapter Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-6 mb-16"
        >
          {chapterDetails.map((detail, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 bg-white/2 border border-white/5"
            >
              <detail.icon className="w-4 h-4 text-nsdc-blue" strokeWidth={1.5} />
              <span
                className="text-xs text-white/40"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {detail.label}:
              </span>
              <span
                className="text-sm text-[var(--foreground)] font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {detail.value}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-4 py-2 bg-nsdc-blue/10 border border-nsdc-blue/20">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span
              className="text-sm text-[var(--foreground)] font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Active Chapter
            </span>
          </div>
        </motion.div>

        {/* Content Grid - Description and Logo */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Chapter Description */}
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
                <span className="text-[var(--foreground)] font-medium">NSDC SCET</span> is the Suryodaya College of Engineering & Technology chapter of the National Student Data Corps, bringing together students passionate about Data Science, Artificial Intelligence, Machine Learning, and technology.
              </p>

              <p
                className="text-white/40 text-sm md:text-base leading-[1.8]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Our chapter creates opportunities for students to learn, build, and experiment through workshops, technical sessions, projects, hackathons, competitions, and collaborative activities. We encourage students from different backgrounds and departments to explore data-driven technologies and develop practical skills.
              </p>

              <p
                className="text-white/40 text-sm md:text-base leading-[1.8]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Through NSDC SCET, students can collaborate with peers, learn from mentors, work on real-world problems, and connect with the broader NSDC community while building a strong foundation in Data Science and AI.
              </p>

              {/* Join NSDC Link */}
              <div className="pt-4">
                <a
                  href="https://nebigdatahub.org/nsdc/nsdc-chapters/nsdc-chapter-suryodaya-college-of-engineering-and-technology-nagpur-maharshtra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 border border-nsdc-blue/30 hover:border-nsdc-blue bg-nsdc-blue/10 hover:bg-nsdc-blue/20 transition-all duration-300"
                >
                  <span
                    className="text-sm text-white/80 group-hover:text-[var(--foreground)] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Join the NSDC Community
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-nsdc-blue transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right - Chapter Logo Card */}
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

              {/* NSDC Logo with White Text */}
              <div className="relative w-full aspect-4/3 max-w-[250px] mx-auto">
                <Image
                  src="/nsdc-logo.png"
                  alt="NSDC Student Chapter Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, 250px"
                  className="object-contain"
                />
              </div>

              {/* Tagline */}
              <div className="mt-6 text-center">
                <p
                  className="text-white/30 text-sm tracking-normal uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Suryodaya College Chapter
                </p>
              </div>
            </div>

            {/* Floating Badge - matching NSDC theme */}
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
                Est. 2026
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-[var(--surface)] border border-white/5 p-8 md:p-10"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-nsdc-blue/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-nsdc-blue/50" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-nsdc-blue/10 border border-nsdc-blue/20">
                <Target className="w-6 h-6 text-nsdc-blue" strokeWidth={1.5} />
              </div>
              <h3
                className="text-2xl md:text-3xl font-black text-[var(--foreground)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                OUR MISSION
              </h3>
            </div>

            <p
              className="text-white/50 text-sm md:text-base leading-[1.8]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              To empower students with practical knowledge and opportunities in Data Science, Artificial Intelligence, and Machine Learning through hands-on learning, projects, workshops, mentorship, and collaborative experiences.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-[var(--surface)] border border-white/5 p-8 md:p-10"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-nsdc-blue/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-nsdc-blue/50" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-nsdc-blue/10 border border-nsdc-blue/20">
                <Eye className="w-6 h-6 text-nsdc-blue" strokeWidth={1.5} />
              </div>
              <h3
                className="text-2xl md:text-3xl font-black text-[var(--foreground)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                OUR VISION
              </h3>
            </div>

            <p
              className="text-white/50 text-sm md:text-base leading-[1.8]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              To build a strong student-driven ecosystem where curiosity becomes innovation, ideas become real-world solutions, and students are prepared to shape the future of Data Science and AI.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-nsdc-blue/10 border border-nsdc-blue/20">
              <Heart className="w-6 h-6 text-nsdc-blue" strokeWidth={1.5} />
            </div>
            <h3
              className="text-2xl md:text-3xl font-black text-[var(--foreground)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              OUR VALUES
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-6">
            {[
              { title: "Curiosity", desc: "Never stop learning, exploring, and asking meaningful questions." },
              { title: "Collaboration", desc: "Learn together, share knowledge, and build stronger solutions as a community." },
              { title: "Innovation", desc: "Think beyond conventions and turn ideas into meaningful solutions." },
              { title: "Inclusivity", desc: "Create an environment where every student has an opportunity to learn and contribute." },
              { title: "Excellence", desc: "Strive for quality, continuous improvement, and meaningful impact." },
              { title: "Integrity", desc: "Be responsible, honest, ethical, and transparent in everything we build." },
            ].map((value, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-nsdc-blue mt-2 shrink-0" />
                <div>
                  <span
                    className="text-[var(--foreground)] font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {value.title}
                  </span>
                  <span className="text-white/40 text-sm"> — {value.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3
            className="text-xl md:text-2xl font-black text-[var(--foreground)] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            OUR FOUR PILLARS
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group relative bg-[var(--surface)] border border-white/5 p-6 transition-all duration-300 hover:border-nsdc-blue/20"
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-nsdc-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <pillar.icon className="w-8 h-8 text-nsdc-blue mb-4" strokeWidth={1.5} />

                <h4
                  className="text-lg font-bold text-[var(--foreground)] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {pillar.title}
                </h4>

                <p
                  className="text-sm text-white/40 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
