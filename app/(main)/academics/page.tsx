import type { Metadata } from "next";
import AcademicsContent from "./AcademicsContent";

export const metadata: Metadata = {
  title: "Academics | sireJSH Senior High School",
  description: "Explore academic programs, departments, and success stories at sireJSH Senior High School.",
  keywords: "sireJSH, academics, programs, science, business, arts, curriculum, WAEC",
  alternates: { canonical: "https://sireJSH.edu.gh/academics" },
};

export default function AcademicsPage() {
  return <AcademicsContent />;
}