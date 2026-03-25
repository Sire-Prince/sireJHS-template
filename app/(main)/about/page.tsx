import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | SireSCH Senior High School",
  description: "Learn about the history, vision, mission, and leadership of SireSCH Senior High School (ANSECO).",
  keywords: "SireSCH, about us, history, vision, mission, staff, leadership",
  alternates: { canonical: "https://sireSCH.edu.gh/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}