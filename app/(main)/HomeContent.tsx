"use client";

import HeroSection from "@/components/HeroSection";
import AcademicsPreview from "@/components/AcademicsPreview";
import AboutPreview from "@/components/AboutPreview";
import NewsSection from "@/components/NewsSection";
import Testimonials from "@/components/Testimonials";
import PortalPreview from "@/components/PortalPreview";
import Counter from "@/components/Counter";

export default function HomeContent() {
  return (
    <>
      <HeroSection />
      <Counter />
      <AcademicsPreview /> 
      <AboutPreview />
      <Testimonials />
     <NewsSection />
    </>
  );
}
