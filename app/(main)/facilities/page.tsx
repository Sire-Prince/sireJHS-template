import type { Metadata } from "next";
import FacilitiesContent from "./FacilitiesContent";

export const metadata: Metadata = {
  title: "Facilities | sireJSH Senior High School",
  description: "Explore the modern facilities at sireJSH Senior High School, including dormitories, labs, sports complex, and library.",
  keywords: "sireJSH, facilities, dormitories, laboratories, sports, library, ICT",
  alternates: { canonical: "https://sireJSH.edu.gh/facilities" },
};

export default function FacilitiesPage() {
  return <FacilitiesContent />;
}