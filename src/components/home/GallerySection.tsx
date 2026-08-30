"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

/**
 * HOOK: useScrollInfinite
 * Moves an element based on PAGE SCROLL.
 * Uses modulo (%) to reset the position, creating an infinite loop effect.
 */
const useScrollInfinite = (
    ref: React.RefObject<HTMLDivElement | null>,
    speed: number = 1
) => {
    const [height, setHeight] = useState(0);

    // 1. Measure the height of the content (one set of images)
    useEffect(() => {
        if (ref.current) {
            // We divide by 2 because we duplicated the images in the JSX
            setHeight(ref.current.scrollHeight / 2);
        }

        const handleResize = () => {
            if (ref.current) setHeight(ref.current.scrollHeight / 2);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [ref]);

    // 2. The Scroll Loop
    useEffect(() => {
        // We use requestAnimationFrame to listen to scroll for better performance 
        // than a raw 'scroll' event listener.
        let animationFrameId: number;

        const animate = () => {
            if (!ref.current || height === 0) return;

            const scrollY = window.scrollY;

            // Calculate position based on scroll amount and speed
            // The % height ensures that when we scroll past the image set, it resets.
            let yPos = (scrollY * speed) % height;

            // ADJUSTMENT FOR SMOOTH LOOPING:
            // If moving DOWN (positive speed), we want to start shifted up 
            // and move down towards 0 to avoid gaps appearing at the top.
            if (speed > 0) {
                yPos -= height;
            }

            // If moving UP (negative speed), standard behavior applies, 
            // but if the calculation results in a positive value (rare edge case), fix it.
            if (yPos > 0) {
                yPos -= height;
            }

            ref.current.style.transform = `translate3d(0px, ${yPos}px, 0px)`;

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [height, speed]);
};

/**
 * COMPONENT: MarqueeColumn
 */
const MarqueeColumn = ({
    images,
    speed = 0.5,
    className,
}: {
    images: string[];
    speed?: number;
    className?: string;
}) => {
    const columnRef = useRef<HTMLDivElement>(null);

    // Apply the scroll hook
    useScrollInfinite(columnRef, speed);

    return (
        <div className={`relative h-[120vh] overflow-hidden ${className}`}>
            {/* IMPORTANT: The container for the images must be duplicated.
         This allows the reset logic to happen invisibly.
      */}
            <div ref={columnRef} className="flex flex-col gap-6 pb-6 will-change-transform">
                {/* Set 1 */}
                {images.map((src, index) => (
                    <ImageCard key={`set1-${index}`} src={src} />
                ))}

                {/* Set 2 (The Duplicate) */}
                {images.map((src, index) => (
                    <ImageCard key={`set2-${index}`} src={src} />
                ))}
            </div>
        </div>
    );
};

const ImageCard = ({ src }: { src: string }) => (
    <Image
        src={src}
        alt="Work showcase"
        width={600}
        height={600}
        className="w-full h-auto object-cover rounded-lg shadow-2xl shadow-black/60 opacity-70 hover:opacity-100 transition-all duration-700 ease-out border border-white/5 hover:scale-[1.02] hover:shadow-nsdc-blue/10"
    />
);

/**
 * COMPONENT: MarqueeSection
 */
export default function MarqueeColumnSection() {
    const col1Images = [
        "/events/inugration.jpg",
        "/team/group_photo.jpg",
        "/home/1.webp",
    ];

    const col2Images = [
        "/home/7.webp",
        "/home/EDC-poster.webp",
        "/home/2.webp",
    ];

    const col3Images = [
        "/events/installation.jpg",
        "/home/5.webp",
        "/home/technical_award.jpg",
    ];

    const col4Images = [
        "/home/viceleader_award.jpg",
        "/home/6.webp",
        "/home/presedent_award.jpg",
    ];

    return (
        <div className="bg-[var(--background)] min-h-[300vh] relative z-10">
            {/* Section Header */}
            <div className="relative z-20 pt-20 sm:pt-32 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12 lg:px-20">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex items-center gap-4 sm:gap-6 mb-4">
                        <div className="w-10 sm:w-16 h-px bg-nsdc-blue/50" />
                        <span className="text-[10px] sm:text-[11px] font-light tracking-[0.5em] text-white/60 uppercase" style={{ fontFamily: "var(--font-body)" }}>
                            Gallery
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-normal" style={{ fontFamily: "var(--font-heading)" }}>
                        The Beginning
                    </h2>
                    <p className="mt-4 text-white/50 text-base md:text-lg max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        A first look at the moments that mark the beginning of our journey.
                    </p>
                </div>
            </div>

            <section className="sticky top-0 w-full h-screen overflow-hidden py-8 sm:py-12 z-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mx-auto px-4 sm:px-6 h-full">
                    <MarqueeColumn images={col1Images} speed={-0.4} />
                    <MarqueeColumn images={col2Images} speed={0.25} className="-mt-16 sm:-mt-32" />
                    <MarqueeColumn images={col3Images} speed={-0.5} className="hidden md:block" />
                    <MarqueeColumn images={col4Images} speed={0.35} className="hidden md:block mt-16" />
                </div>

                <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-[var(--background)] via-transparent to-[var(--background)]" />
            </section>

            <div className="h-screen" />
        </div>
    );
}
