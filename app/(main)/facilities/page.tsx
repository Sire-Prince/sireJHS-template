import type { Metadata } from "next";
import FacilitiesContent from "./FacilitiesContent";

export const metadata: Metadata = {
  title: "Facilities | SireSCH Senior High School",
  description: "Explore the modern facilities at SireSCH Senior High School, including dormitories, labs, sports complex, and library.",
  keywords: "SireSCH, facilities, dormitories, laboratories, sports, library, ICT",
  alternates: { canonical: "https://sireSCH.edu.gh/facilities" },
};

export default function FacilitiesPage() {
  return <FacilitiesContent />;
}