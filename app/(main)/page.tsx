import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "sireJSH - Sire Senior High School Template",
  description: "sireJSH - Sire Senior High School Template For JSH schools looking to find an online presence.",
  keywords: "Senior High School, Ghana secondary school, WAEC, CSSPS, sireJSH - Sire, Senior High School Template, JSH schools, online presence.",
  alternates: {
    canonical: "https://sireJSH.edu.gh",
  },
};

export default function Home() {
  return <HomeContent />;
}
