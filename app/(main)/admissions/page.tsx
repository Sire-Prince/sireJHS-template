import type { Metadata } from "next";
import AdmissionsContent from "./AdmissionsContent";

export const metadata: Metadata = {
  title: "Admissions | SireSCH Senior High School",
  description: "Apply to SireSCH Senior High School. Learn about CSSPS placement, requirements, and take a virtual tour.",
  keywords: "SireSCH, admissions, apply, CSSPS, requirements, virtual tour",
  alternates: { canonical: "https://sireSCH.edu.gh/admissions" },
};

export default function AdmissionsPage() {
  return <AdmissionsContent />;
}