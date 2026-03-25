"use client";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>SireSCH - Sire Senior High School Template</title>
        <meta
          name="description"
          content="SireSCH - Sire Senior High School Template For shs schools looking to find an online presence."
        />
        <meta
          name="keywords"
          content=" Senior High School,  Ghana secondary school, WAEC, CSSPS, SireSCH - Sire, Senior High School Template ,shs schools ,online presence."
        />
        <link rel="canonical" href="https://sireSCH.edu.gh" />
      </Helmet>

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
