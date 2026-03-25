import type { Metadata } from "next";
import AcademicsContent from "./AcademicsContent";

export const metadata: Metadata = {
  title: "Academics | SireSCH Senior High School",
  description: "Explore academic programs, departments, and success stories at SireSCH Senior High School.",
  keywords: "SireSCH, academics, programs, science, business, arts, curriculum, WAEC",
  alternates: { canonical: "https://sireSCH.edu.gh/academics" },
};

export default function AcademicsPage() {
  return <AcademicsContent />;
}