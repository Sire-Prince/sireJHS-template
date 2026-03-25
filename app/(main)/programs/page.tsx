import type { Metadata } from "next";
import ProgramsContent from "./ProgramsContent";

export const metadata: Metadata = {
  title: "Programs | SireSCH Senior High School",
  description: "Discover the academic Programs at SireSCH Senior High School, including Agriculture, Science, Business, and Arts.",
  keywords: "SireSCH, Programs, agriculture, science, business, arts",
  alternates: { canonical: "https://sireSCH.edu.gh/Programs" },
};

export default function DepartmentsPage() {
  return <ProgramsContent />;
}