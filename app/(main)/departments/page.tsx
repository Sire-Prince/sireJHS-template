import type { Metadata } from "next";
import DepartmentsContent from "./DepartmentsContent";

export const metadata: Metadata = {
  title: "Departments | SireSCH Senior High School",
  description: "Discover the academic departments at SireSCH Senior High School, including Agriculture, Science, Business, and Arts.",
  keywords: "SireSCH, departments, agriculture, science, business, arts",
  alternates: { canonical: "https://sireSCH.edu.gh/departments" },
};

export default function DepartmentsPage() {
  return <DepartmentsContent />;
}