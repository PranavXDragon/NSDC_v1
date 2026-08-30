import { Metadata } from "next";
import {
  AboutHero,
  AboutMarquee,
  WhatIsNSDC,
  AboutNSDC,
  AboutChapter,
  FAQSection,
  CTASection,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about NSDC Student Chapter — our mission, history, and the passionate team building Nagpur's leading computing community at Suryodaya College of Engineering & Technology, Nagpur.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-[var(--foreground)]">
      <AboutHero />
      <AboutMarquee />
      <WhatIsNSDC />
      <AboutNSDC />
      <AboutChapter />
      <FAQSection />
      <CTASection />
    </main>
  );
}
