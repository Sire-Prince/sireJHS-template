"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// YOUR 4 HIGH-QUALITY IMAGES
const heroImages = [   
          // 60 KB - science lab
    "/assets/hompage.jpg", 
  "/assets/hompage1.jpg",           // 402 KB - beautiful campus shot
           // 402 KB - beautiful campus shot
  "/assets/hompage3.webp",  
    "/assets/hompage4.webp",             // 60 KB - science lab
              // 60 KB - science lab
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      {/* Content - Left Aligned with Better White Space */}
      <div className="relative z-10 flex items-center h-full mt-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8"
          >
            <span className="block font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 drop-shadow-2xl">
              Excellence in
            </span>
            <span className="block font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gold drop-shadow-2xl mb-4">
              Education
            </span>
            
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/90 text-lg md:text-xl lg:text-left text-center leading-relaxed mb-12 max-w-2xl drop-shadow-lg"
          >
            SireSCH – An institution nurturing future leaders 
            with academic excellence, discipline, and strong moral values.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-5"
          >
            <Button
              size="lg"
              asChild
              className="bg-[#344A86] hover:bg-[#2a3c6d] text-white px-8 py-6 text-lg font-medium rounded-full shadow-xl hover:scale-105 transition-all duration-300"
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
              className="text-white border-white bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black px-8 py-6 text-lg font-medium rounded-full shadow-xl transition-all duration-300"
            >
              <Link href="/contact">
                Contact us
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection;