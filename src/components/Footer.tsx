"use client";

import { motion, useInView } from "framer-motion";
import { Instagram, Linkedin, Twitter, Mail, ArrowUpRight, Youtube, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const SOCIAL_LINKS: { icon: any; href: string; label: string }[] = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/scetnsdc/about", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/nsdc_scet/", label: "Instagram" },
];

const FOOTER_LINKS = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Events", href: "/events" },
      { label: "Teams", href: "/teams" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join NSDC", href: "https://www.nsdc.org/membership" },
      { label: "Blogs", href: "/blogs" },
      { label: "Resources", href: "https://dl.nsdc.org/" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "NSDC SCET", href: "#" },
      { label: "Suryodaya College of Engineering & Technology, Nagpur", href: "#" },
    ],
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#030303] text-white overflow-hidden overflow-x-hidden"
    >
      {/* Animated Background Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 0.12, scale: 0.8 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0 }}
        className="absolute -right-[10%] -top-[5%] w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] pointer-events-none flex items-center justify-center"
      >
        <span className="text-[200px] md:text-[300px] font-black text-white/50 tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
          NSDC
        </span>
      </motion.div>
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-nsdc-blue/3 blur-[150px] pointer-events-none" />
      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 pt-16 md:pt-24 lg:pt-32 pb-8">
        <div className="max-w-[1400px] mx-auto">

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-20 md:mb-32"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-nsdc-blue/50" />
              <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase" style={{ fontFamily: "var(--font-body)" }}>
                Get Involved
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white tracking-normal leading-[0.95] mb-6 md:mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let&apos;s Build<br />
              <span className="text-nsdc-blue">The Future.</span>
            </h2>

            <a href="https://nebigdatahub.org/nsdc/nsdc-chapters/nsdc-chapter-suryodaya-college-of-engineering-and-technology-nagpur-maharshtra/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-nsdc-blue text-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-nsdc-blue/90 transition-colors cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span>Join the Chapter</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </a>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 py-12 border-t border-white/10"
          >
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/nsdc-logo.png"
                  alt="NSDC Logo"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <div>
                  <span className="block text-lg font-black tracking-normal" style={{ fontFamily: "var(--font-heading)" }}>
                    NSDC
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">Student Chapter</span>
                </div>
              </div>

              <p className="text-white/40 text-sm leading-relaxed max-w-sm" style={{ fontFamily: "var(--font-body)" }}>
                Building a student-driven community focused on Data Science, Artificial Intelligence, Machine Learning, and technology.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:text-nsdc-blue hover:border-nsdc-blue/40 transition-all duration-300"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              {FOOTER_LINKS.map((section, index) => (
                <div key={index}>
                  <span
                    className="block text-[10px] font-medium uppercase tracking-[0.3em] text-white/30 mb-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {section.title}
                  </span>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-white/50 text-sm hover:text-white transition-colors duration-300"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center items-center gap-4 pt-6 md:pt-8 border-t border-white/10"
          >
            <p className="text-white/30 text-[10px] sm:text-xs tracking-normal text-center" style={{ fontFamily: "var(--font-body)" }}>
              © 2026 NSDC SCET. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
