"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, FileText, Maximize2 } from "lucide-react";

export default function AwardSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showMomento, setShowMomento] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const images = [
    { src: "/home/presedent_award.jpg", alt: "President Award" },
    { src: "/home/viceleader_award.jpg", alt: "Vice Leader Award" },
    { src: "/home/secreatly_award.jpg", alt: "Secretary Award" },
    { src: "/home/technical_award.jpg", alt: "Technical Award" },
    { src: "/home/group_photo.jpg", alt: "Award Moment 5 (Featured)" },
    { src: "/home/event_manager_award.jpg", alt: "Event Manager Award" },
    { src: "/home/pr_award.jpg", alt: "PR Award" }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-(--background) z-10"
    >
      {/* Background Text Marquee / Huge Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
        <h1 className="text-[12vw] font-bold whitespace-nowrap leading-none tracking-tighter">
          EMERGING CHAPTER
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 border-[rgba(255,255,255,0.05)] border-y py-16 backdrop-blur-3xl">
        {/* Content Side */}
        <motion.div 
          className="flex flex-col gap-6 lg:gap-8 max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 w-fit backdrop-blur-sm">
            <span className="text-xl">🎓</span>
            <span className="text-sm font-medium text-yellow-500 tracking-wide uppercase">NSDC SCET CHAPTER INAUGURATION 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
            The Beginning of a New Chapter<br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 to-yellow-600 italic font-serif pointer-events-none selection:bg-none">NSDC SCET Inauguration Ceremony</span>
          </h2>
          
          <p className="text-lg md:text-xl text-(--foreground-muted) font-light leading-relaxed">
            A proud milestone marking the official inauguration of the NSDC Student Chapter at Suryodaya College of Engineering & Technology, Nagpur, bringing students together to learn, build, collaborate, and explore the future of Data Science, Artificial Intelligence, Machine Learning, and technology.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-4 relative z-20">
            <div 
              onClick={() => setShowMomento(true)}
              className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-xl font-medium shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <FileText className="w-5 h-5" />
              View Inauguration Details
            </div>
            
            <a 
              href="#featured-image"
              className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent border border-white/20 text-white hover:bg-white/5 rounded-xl font-medium transition-all hover:scale-[1.02] cursor-pointer"
            >
              See the Memories
            </a>
          </div>
        </motion.div>

        {/* Gallery/Images Infinite Marquee */}
        <div className="relative h-[600px] w-full flex gap-4 md:gap-6 justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          {/* Column 1 - Scrolling Up */}
          <motion.div 
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex flex-col gap-4 md:gap-6 w-[45%]"
          >
            {[...Array(2)].map((_, i) => (
              <div key={`col1-${i}`} className="flex flex-col gap-4 md:gap-6 w-full shrink-0">
                <div 
                  className="relative h-[300px] w-full rounded-2xl overflow-hidden group shadow-2xl cursor-pointer shrink-0"
                  onClick={() => setSelectedImage(images[0].src)}
                >
                  <Image src={images[0].src} alt={images[0].alt} fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
                <div 
                  className="relative h-[250px] w-full rounded-2xl overflow-hidden group shadow-2xl cursor-pointer shrink-0"
                  onClick={() => setSelectedImage(images[2].src)}
                >
                  <Image src={images[2].src} alt={images[2].alt} fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
                <div 
                  className="relative h-[350px] w-full rounded-2xl overflow-hidden group shadow-2xl cursor-pointer shrink-0"
                  onClick={() => setSelectedImage(images[5].src)}
                >
                  <Image src={images[5].src} alt={images[5].alt} fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Column 2 - Scrolling Down */}
          <motion.div 
            animate={{ y: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex flex-col gap-4 md:gap-6 w-[45%]"
          >
            {[...Array(2)].map((_, i) => (
              <div key={`col2-${i}`} className="flex flex-col gap-4 md:gap-6 w-full shrink-0">
                <div 
                  className="relative h-[250px] w-full rounded-2xl overflow-hidden group shadow-2xl cursor-pointer shrink-0"
                  onClick={() => setSelectedImage(images[1].src)}
                >
                  <Image src={images[1].src} alt={images[1].alt} fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
                <div 
                  className="relative h-[350px] w-full rounded-2xl overflow-hidden group shadow-2xl cursor-pointer shrink-0"
                  onClick={() => setSelectedImage(images[3].src)}
                >
                  <Image src={images[3].src} alt={images[3].alt} fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover object-right transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
                <div 
                  className="relative h-[300px] w-full rounded-2xl overflow-hidden group shadow-2xl cursor-pointer shrink-0"
                  onClick={() => setSelectedImage(images[6].src)}
                >
                  <Image src={images[6].src} alt={images[6].alt} fill sizes="(max-width: 768px) 50vw, 300px" className="object-cover transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured 2nd Image Section (Full Width / Large Showcase) */}
      <div id="featured-image" className="max-w-[1400px] mx-auto px-6 md:px-12 mt-24 mb-16 relative z-10">
        <motion.div 
          style={{ scale: scaleImage }}
          className="relative w-full aspect-4/3 md:aspect-[2.5/1] rounded-3xl overflow-hidden group border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer"
          onClick={() => setSelectedImage(images[4].src)}
        >
          <Image 
            src={images[4].src} 
            alt={images[4].alt}
            fill
            className="object-cover object-[center_15%] transition-transform duration-[1.5s] group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
            <h3 className="text-2xl md:text-4xl font-semibold text-white max-w-2xl leading-tight">
              A chapter inaugurated, <br/><span className="text-white/70 italic font-serif">a vision set in motion.</span>
            </h3>
            <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-500">
              <Maximize2 className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Momento PDF Preview Modal */}
      <AnimatePresence>
        {showMomento && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 md:p-8"
          >
            <div className="relative w-full max-w-5xl h-[85vh] bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col pointer-events-auto">
              <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/50">
                <h3 className="text-white font-medium flex items-center gap-2">
                  <span className="text-xl">🏆</span> NSDC Momento - Emerging Chapter
                </h3>
                <button 
                  onClick={() => setShowMomento(false)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 w-full bg-[#1a1a1a] relative">
                <iframe 
                  src="/home/NSDC Momento Emerging Chapter.pdf#view=FitH" 
                  className="w-full h-full border-0 absolute inset-0 rounded-b-2xl"
                  title="NSDC Momento Emerging Chapter"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Full Screen Image Modal */}
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage}
                alt="Full size view"
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}