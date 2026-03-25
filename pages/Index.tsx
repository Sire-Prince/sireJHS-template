"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AcademicsPreview from "@/components/AcademicsPreview";
import AdmissionsPreview from "@/components/AboutPreview";
import NewsSection from "@/components/NewsSection";
import PortalPreview from "@/components/PortalPreview";

const Index = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AcademicsPreview />
          <AdmissionsPreview />
          <NewsSection />
          <PortalPreview />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;