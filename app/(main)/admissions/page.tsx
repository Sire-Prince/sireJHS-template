import type { Metadata } from "next";
import AdmissionsContent from "./AdmissionsContent";

export const metadata: Metadata = {
  title: "Admissions | sireJSH Senior High School",
  description: "Apply to sireJSH Senior High School. Learn about CSSPS placement, requirements, and take a virtual tour.",
  keywords: "sireJSH, admissions, apply, CSSPS, requirements, virtual tour",
  alternates: { canonical: "https://sireJSH.edu.gh/admissions" },
};

export default function AdmissionsPage() {
  return <AdmissionsContent />;
}