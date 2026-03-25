"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import AcademicsPreview from "@/components/AcademicsPreview";
import AdmissionsPreview from "@/components/AboutPreview";
import NewsSection from "@/components/NewsSection";
import PortalPreview from "@/components/PortalPreview";

// 1. Define Props Type for TypeScript
interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

// 2. Animated Counter Component with Types
const AnimatedCounter = ({ end, suffix = "", duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  // Added HTMLDivElement type to ref
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      // Calculate increment based on 60fps
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white mb-2">
      {count}{suffix}
    </div>
  );
};

export default function HomeContent() {
  return (
    <>
      {/* Note: Ensure HeroSection, NewsSection, etc. are used or removed to avoid unused variable warnings */}
      
      {/* Full Width Animated Counter Banner */}
      <section className="w-full bg-primary/90 py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <AnimatedCounter end={20} suffix="+" />
              <div className="text-primary-foreground/80 text-sm uppercase tracking-wide">
                Years of Excellence
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <AnimatedCounter end={500} suffix="+" />
              <div className="text-primary-foreground/80 text-sm uppercase tracking-wide">
                BECE Graduates
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <AnimatedCounter end={85} suffix="%" />
              <div className="text-primary-foreground/80 text-sm uppercase tracking-wide">
                BECE Average Score
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <AnimatedCounter end={15} suffix="+" />
              <div className="text-primary-foreground/80 text-sm uppercase tracking-wide">
                Staff Excellence
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
