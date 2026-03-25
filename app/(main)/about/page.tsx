import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | sireJSH Senior High School",
  description: "Learn about the history, vision, mission, and leadership of sireJSH Senior High School (ANSECO).",
  keywords: "sireJSH, about us, history, vision, mission, staff, leadership",
  alternates: { canonical: "https://sireJSH.edu.gh/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}