import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "SireSCH - Sire Senior High School Template",
  description: "SireSCH - Sire Senior High School Template For JSH schools looking to find an online presence.",
  keywords: "Senior High School, Ghana secondary school, WAEC, CSSPS, SireSCH - Sire, Senior High School Template, JSH schools, online presence.",
  alternates: {
    canonical: "https://sireSCH.edu.gh",
  },
};

export default function Home() {
  return <HomeContent />;
}
