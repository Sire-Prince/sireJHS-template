import type { Metadata } from "next";
import ProgramsContent from "./ProgramsContent";

export const metadata: Metadata = {
  title: "Programs | sireJSH Senior High School",
  description: "Discover the academic Programs at sireJSH Senior High School, including Agriculture, Science, Business, and Arts.",
  keywords: "sireJSH, Programs, agriculture, science, business, arts",
  alternates: { canonical: "https://sireJSH.edu.gh/Programs" },
};

export default function DepartmentsPage() {
  return <ProgramsContent />;
}