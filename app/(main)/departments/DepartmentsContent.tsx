"use client";

import { motion } from "framer-motion";
import { Leaf, Beaker, Calculator, Palette, Users, Award, BookOpen, TrendingUp, Compass, Globe, Music, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const departments = [
  {
    id: "agriculture",
    icon: Leaf,
    title: "Agriculture & Pre-Vocational",
    color: "from-green-600 to-emerald-500",
    description: "Our Agriculture and Pre-Vocational program introduces JHS students to practical agricultural skills and vocational training. Students learn about crop production, animal rearing, and basic vocational skills that prepare them for both further education and entrepreneurial opportunities.",
    highlights: [
      "School demonstration farm for hands-on learning",
      "Crop production and animal husbandry projects",
      "Integration with BECE Agriculture syllabus",
      "Introduction to agribusiness concepts",
    ],
    achievements: [
      "District Agricultural Science Fair Winners 2024",
      "Student-led vegetable gardening project",
      "Best BECE Agriculture results in circuit",
    ],
    hod: "Mr. Kwame Adjei",
    staff: 4,
    subjects: ["Agriculture", "Pre-Vocational Skills", "Integrated Science"],
  },
  {
    id: "science",
    icon: Beaker,
    title: "Integrated Science & Mathematics",
    color: "from-blue-600 to-cyan-500",
    description: "The Science and Mathematics department forms the foundation of our JHS curriculum. We prepare students for the BECE through practical experiments, problem-solving exercises, and a strong focus on understanding core scientific and mathematical concepts.",
    highlights: [
      "Well-equipped science laboratory",
      "Regular practical sessions aligned with BECE requirements",
      "Mathematics clinic for struggling students",
      "Science and Math Club activities",
    ],
    achievements: [
      "Outstanding BECE Science results (85% A-C)",
      "District Mathematics Quiz Champions 2024",
      "Annual Science and Math Fair participation",
    ],
    hod: "Mrs. Ama Korkor",
    staff: 8,
    subjects: ["Integrated Science", "Mathematics", "Basic Science"],
  },
  {
    id: "business",
    icon: Calculator,
    title: "Business & Vocational Skills",
    color: "from-amber-600 to-orange-500",
    description: "Our Business and Vocational Skills program introduces JHS students to foundational concepts in business, economics, and financial literacy. Students develop practical skills in record-keeping, entrepreneurship, and basic accounting.",
    highlights: [
      "Introduction to bookkeeping and basic accounting",
      "Entrepreneurship and small business concepts",
      "Financial literacy and money management",
      "School-based enterprise projects",
    ],
    achievements: [
      "Best BECE Business Studies results",
      "Student savings and investment program",
      "Junior Achievement Ghana partnership",
    ],
    hod: "Mr. Francis Agbodza",
    staff: 5,
    subjects: ["Business Studies", "Social Studies", "ICT"],
  },
  {
    id: "arts",
    icon: Palette,
    title: "Creative Arts & Humanities",
    color: "from-purple-600 to-pink-500",
    description: "The Creative Arts and Humanities department nurtures creativity, cultural awareness, and critical thinking. Students explore Ghanaian and global cultures through visual arts, music, drama, and language studies, preparing them for both BECE examinations and personal development.",
    highlights: [
      "Visual arts studio with basic materials",
      "Cultural dance and music performances",
      "Drama and creative writing opportunities",
      "Ghanaian language (Ewe/Twi) and French options",
    ],
    achievements: [
      "District Cultural Festival Award 2024",
      "Annual arts exhibition and performances",
      "Creative writing competition winners",
    ],
    hod: "Mrs. Dzidzor Amevor",
    staff: 6,
    subjects: ["Creative Arts", "Ghanaian Language", "English Language", "French", "History"],
  },
];

export default function DepartmentsContent() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-2 sm:px-12 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/classroom.jpg"
            alt="JHS Classroom"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-gold mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium">JHS Departments</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Our JHS <span className="text-gold">Departments</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Four specialized departments delivering the Ghanaian JHS curriculum,
              preparing students for BECE and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Grid */}
      {departments.map((dept, index) => (
        <section
          key={dept.id}
          id={dept.id}
          className={`py-20 px-2 sm:px-12 ${index % 2 === 0 ? "bg-background" : "bg-cream"}`}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-6`}>
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {dept.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {dept.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gold" />
                    <span className="text-foreground font-medium">{dept.staff} Teachers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-gold" />
                    <span className="text-foreground font-medium">HOD: {dept.hod}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">Key Subjects</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {dept.subjects.map((subject, i) => (
                    <span key={i} className="px-3 py-1 bg-gold/10 text-gold-dark text-sm rounded-full">
                      {subject}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">Department Highlights</h3>
                <ul className="space-y-2 mb-6">
                  {dept.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`bg-card rounded-2xl p-8 border border-border shadow-soft ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-5 h-5 text-gold" />
                  <h3 className="text-lg font-semibold text-foreground">Recent Achievements</h3>
                </div>
                <ul className="space-y-4">
                  {dept.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${dept.color} flex items-center justify-center flex-shrink-0`}>
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* BECE Preparation Section */}
      <section className="py-20 px-2 sm:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              BECE <span className="text-gold">Excellence</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Our comprehensive JHS program prepares students thoroughly for the Basic Education Certificate Examination, with consistent record of outstanding results and student success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero-gold" size="lg" asChild>
                <Link href="/admissions">Enroll for JHS</Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Contact Academic Office</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}