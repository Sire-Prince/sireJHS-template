"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// YOUR 4 HIGH-QUALITY IMAGES
const heroImages = [
  "/assets/hero-campus.jpg",           // 402 KB - beautiful campus shot
  "/assets/sports-field.jpg",           // 107 KB - sports field action
  "/assets/students-celebrating.jpg",   // 86 KB - happy students
  "/assets/science-lab.jpg",            // 60 KB - science lab
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Smooth transition every 5 seconds
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image Slideshow with Smooth Crossfade */}
      {heroImages.map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImage === index ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={src}
            alt={`SireSCH Campus View ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="100vw"
            quality={95}
          />
        </motion.div>
      ))}

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-balance"
        >
          <span className="block font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 drop-shadow-2xl">
            Excellence in
          </span>
          <span className="block font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gold drop-shadow-2xl">
            Education
          </span>
          <span className="block font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 drop-shadow-2xl">
            Pride of Ghana
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
        >
          SireSCH – An institution nurturing future leaders 
          with academic excellence, discipline, and strong moral values.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap gap-4 items-center justify-center mt-12"
        >
          <Button
            size="lg"
            asChild
            className="bg-[#344A86] hover:bg-[#2a3c6d] text-white px-8 py-6 text-lg font-medium rounded-full shadow-xl hover:scale-105 transition-all"
          >
            <Link href="/admissions" className="flex items-center gap-2">
              Apply for Admission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="text-white border-white bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black px-8 py-6 text-lg font-medium rounded-full shadow-xl transition-all"
          >
            <Link href="/about">
              Explore Our School
            </Link>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-xs tracking-[0.2em] uppercase mb-2">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side Accent (optional) */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        <span className="text-white/60 text-xs tracking-[0.2em] rotate-90 origin-center whitespace-nowrap">
          EST. 1963
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;