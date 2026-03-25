"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Beaker, Calculator, Globe, Music, Leaf, Users, Trophy, Award, Clock, GraduationCap, Target, BookCheck, Microscope, Briefcase, Palette, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const programs = [
  {
    title: "Preschool",
    description: "Early childhood education focusing on foundational literacy, numeracy, and social skills through play-based learning.",
    subjects: ["Literacy", "Numeracy", "Creative Arts", "Social Skills"],
    careers: ["Kindergarten Teacher", "Childcare Specialist"],
    color: "from-blue-600 to-cyan-500",
    img: "/assets/preschool.jpg",
    stats: "50+ Enrolled",
    id:"preschool"
  },
  {
    title: "Lower Primary School",
    description: "Building strong foundations in English, Mathematics, Science, and Ghanaian Languages (Ewe/Twi).",
    subjects: ["English", "Mathematics", "Science", "Ghanaian Language"],
    careers: ["Primary Teacher", "Education Officer"],
    color: "from-amber-600 to-orange-500",
    img: "/assets/lowprimary.webp",
    stats: "98% Pass Rate",
    id:"lowerprimary"
  },
  {
    title: "Upper Primary School",
    description: "Preparation for BECE with integrated curriculum covering core subjects and practical applications.",
    subjects: ["English", "Math", "Science", "Social Studies", "BECE Prep"],
    careers: ["JHS Teacher", "Education Administrator"],
    color: "from-emerald-600 to-green-500",
    img: "/assets/upprimary.webp",
    stats: "Top BECE Performers",
    id:"upperprimary"
  },
  {
    title: "Senior High School",
    description: "WASSCE preparation with specialized programs in Science, Business, Arts, and Agriculture.",
    subjects: ["Core & Electives", "WASSCE Prep", "Career Guidance"],
    careers: ["University Student", "Professional Career"],
    color: "from-purple-600 to-pink-500",
    img: "/assets/shs.webp",
    stats: "98% WASSCE Pass Rate",
    id:"secondary"
  },

];

const curriculumHighlights = [
  {
    icon: BookCheck,
    title: "Standards-Based Curriculum",
    description: "Full implementation of Ghana's SBC with competency-based assessment.",
  },
  {
    icon: Target,
    title: "WAEC-Aligned Programs",
    description: "Comprehensive preparation for BECE and WASSCE with mock exams.",
  },
  {
    icon: Microscope,
    title: "Practical Learning",
    description: "Hands-on experiments, field trips, and project-based assignments.",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Personalized attention with average class sizes of 25-30 students.",
  },
];

const achievements = [
  {
    value: "98%",
    label: "WASSCE Pass Rate",
    description: "Consistently above national average",
  },
  {
    value: "45+",
    label: "A1 Grades",
    description: "In the 2024 WASSCE examinations",
  },
  {
    value: "100%",
    label: "BECE Pass Rate",
    description: "All candidates placed into SHS",
  },
  {
    value: "95%",
    label: "University Admission",
    description: "Graduates pursuing higher education",
  },
];

export default function AcademicsOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold-dark text-sm font-medium mb-4"
          >
            <GraduationCap className="w-4 h-4" />
            Academic Excellence
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Academic <span className="text-gold">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Following the Standards-Based Curriculum (SBC) with WAEC-aligned programs, 
            we prepare students for success in national examinations and beyond.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-card rounded-2xl border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Program Cards with Image Background */}
        <div className="grid lg:grid-cols-4 gap-4 mb-16 px-2">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer min-h-[420px]"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 ">
                <Image
                  src={program.img}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${program.color} opacity-70 group-hover:opacity-80 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {program.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                </div>
                
                <div>
                  {/* Subjects */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gold mb-2">Key Focus Areas</div>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.slice(0, 3).map((subject) => (
                        <span key={subject} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Career Paths */}
                  <div className="mb-4">
                    <Link href={`acadamics/#programs`}>
                      <Button variant="outline" className="text-white border-white/20 hover:bg-white/20">
                        Explore Career Paths
                      </Button>
                    </Link>
                  </div>

                  {/* Stats Badge */}
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/20">
                    <Trophy className="w-4 h-4 text-gold" />
                    <span className="text-xs text-white/80">{program.stats}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Curriculum Highlights */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
                  <BookOpen className="w-4 h-4" />
                  SBC Curriculum
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Standards-Based <span className="text-gold">Education</span>
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  Ghana's Standards-Based Curriculum (SBC) emphasizes critical thinking, 
                  problem-solving, and competency-based assessment. At sireSCH, we fully 
                  implement this curriculum with modern teaching methodologies.
                </p>
                <Button variant="hero-gold" asChild>
                  <Link href="https://nacca.gov.gh/learning-areas-subjects/new-standards-based-curriculum-2019" target="_blank" rel="noopener noreferrer">
                    Learn About SBC
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {curriculumHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-4 bg-primary-foreground/10 rounded-xl"
                >
                  <item.icon className="w-8 h-8 text-gold mb-3" />
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-primary-foreground/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Ready to Join Our Academic Community?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover which program aligns with your interests and career goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/admissions">
                  Apply for Admission
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/departments">
                  Explore Departments
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}