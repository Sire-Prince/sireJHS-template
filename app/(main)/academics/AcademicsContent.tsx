"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Beaker,
  Calculator,
  Globe,
  Music,
  GraduationCap,
  Star,
  ArrowRight,
  Quote,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const studyPrograms = [
  {
    icon: Beaker,
    title: "General Science",
    subjects: ["Physics", "Chemistry", "Biology", "Elective Maths"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calculator,
    title: "Business Studies",
    subjects: [
      "Accounting",
      "Economics",
      "Business Management",
      "Cost Accounting",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: GraduationCap,
    title: "Agriculture",
    subjects: [
      "Animal Science",
      "Crop Science",
      "Agricultural Economics",
      "Farm Management",
    ],
    color: "from-yellow-500 to-gold",
  },
  {
    icon: Globe,
    title: "General Arts",
    subjects: ["Literature", "History", "Government", "French/Ewe"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Music,
    title: "Visual Arts",
    subjects: ["Graphic Design", "Sculpture", "Ceramics", "Textiles"],
    color: "from-orange-500 to-red-500",
  },
];

const parentTestimonials = [
  {
    parentName: "Mrs. Akosua Mensah",
    studentName: "Yaw",
    jhsLevel: "3",
    quote: "Since joining Sire JHS, my son’s confidence and grades have improved dramatically. The teachers are very dedicated and the BECE preparation is excellent."
  },
  {
    parentName: "Mr. Kwame Osei",
    studentName: "Abena",
    jhsLevel: "2",
    quote: "The discipline and moral values taught here are outstanding. My daughter is not only doing well academically but has also developed a strong sense of responsibility."
  },
  {
    parentName: "Mrs. Fatima Ibrahim",
    studentName: "Ahmed",
    jhsLevel: "1",
    quote: "I love how they balance academics with sports and cultural activities. My son looks forward to going to school every day. Best decision we made!"
  },
 
];

const milestones = [
  { year: "2024", event: "Record 98% WAEC Pass Rate", highlight: true },
  { year: "2023", event: "NSMQ Regional Semi-Finals" },
  { year: "2022", event: "Best Improved School - Volta Region" },
  { year: "2021", event: "New Science Laboratory Commissioned" },
  { year: "2020", event: "Category A Status Achieved", highlight: true },
];

export default function AcademicsContent() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-2 sm:px-12 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/science-lab.jpg"
            alt="sireSCH Science Lab"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-gold mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium">Academics</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Academic <span className="text-gold">Excellence</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Following the Standards-Based Curriculum with WAEC-aligned
              , we prepare students for success in national examinations
              and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* departments Section */}
      <section id="" className="py-20 px-2 sm:px-4 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <GraduationCap className="w-4 h-4" />
              Study 
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Choose Your <span className="text-gold">Path</span>
            </h2>
          </div>

          <div id="departments" className="bg-card py-20 px-2 sm:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* 1 Section - Preschool */}
              <div className="relative w-full flex lg:flex-row items-center px-2 sm:px-12">
                <div className="relative w-1/2 group">
                  <Image
                    src="/assets/presch.webp"
                    alt="Preschool Classroom"
                    width={600}
                    height={500}
                    className="object-cover w-full h-auto"
                    priority
                  />
                  {/* Absolute button at bottom right */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="gold" size="default" asChild>
                      <Link href="/admissions?level=preschool" className="group/btn">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="w-1/2 px-2 sm:px-12"> 
                  <div className="w-full mt-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                      Preschool <span className="text-gold">sireSCH</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      Begin your journey to academic excellence. We welcome
                      motivated students ready to embrace our tradition of
                      discipline, integrity, and achievement.
                    </p>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      sireSCH is a premier educational institution dedicated to
                      providing exceptional learning experiences. We foster a
                      nurturing environment where students can thrive academically
                      and personally.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2 Section - Lower Primary */}
              <div className="relative w-full flex lg:flex-row items-center px-2 sm:px-12">
                <div className="w-1/2 px-2 sm:px-12"> 
                  <div className="w-full mt-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                      Lower Primary <span className="text-gold">sireSCH</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      Begin your journey to academic excellence. We welcome
                      motivated students ready to embrace our tradition of
                      discipline, integrity, and achievement.
                    </p>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      sireSCH is a premier educational institution dedicated to
                      providing exceptional learning experiences. We foster a
                      nurturing environment where students can thrive academically
                      and personally.
                    </p>
                  </div>
                </div>
                <div className="relative w-1/2 group">
                  <Image
                    src="/assets/sciencelab.webp"
                    alt="Lower Primary Classroom"
                    width={600}
                    height={500}
                    className="object-cover w-full h-auto"
                    priority
                  />
                  {/* Absolute button at bottom right */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="gold" size="default" asChild>
                      <Link href="/admissions?level=lower-primary" className="group/btn">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* 3 Section - Upper Primary */}
              <div id="upperprimary" className="relative w-full flex lg:flex-row items-center px-2 sm:px-12">
                <div className="relative w-1/2 group">
                  <Image
                    src="/assets/upperprimary.webp"
                    alt="Upper Primary Classroom"
                    width={600}
                    height={500}
                    className="object-cover w-full h-auto"
                    priority
                  />
                  {/* Absolute button at bottom right */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="gold" size="default" asChild>
                      <Link href="/admissions?level=upper-primary" className="group/btn">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="w-1/2 px-2 sm:px-12"> 
                  <div className="w-full mt-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                      Upper Primary <span className="text-gold">sireSCH</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      Begin your journey to academic excellence. We welcome
                      motivated students ready to embrace our tradition of
                      discipline, integrity, and achievement.
                    </p>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      sireSCH is a premier educational institution dedicated to
                      providing exceptional learning experiences. We foster a
                      nurturing environment where students can thrive academically
                      and personally.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Section - Secondary */}
              <div id="secondary" className="relative w-full flex lg:flex-row items-center px-2 sm:px-12">
                <div className="w-1/2 px-2 sm:px-12"> 
                  <div className="w-full mt-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                      Secondary <span className="text-gold">sireSCH</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      Begin your journey to academic excellence. We welcome
                      motivated students ready to embrace our tradition of
                      discipline, integrity, and achievement.
                    </p>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      sireSCH is a premier educational institution dedicated to
                      providing exceptional learning experiences. We foster a
                      nurturing environment where students can thrive academically
                      and personally.
                    </p>
                  </div>
                </div>
                <div className="relative w-1/2 group">
                  <Image
                    src="/assets/secondary.webp"
                    alt="Secondary School Students"
                    width={600}
                    height={500}
                    className="object-cover w-full h-auto"
                    priority
                  />
                  {/* Absolute button at bottom right */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="gold" size="default" asChild>
                      <Link href="/admissions?level=secondary" className="group/btn">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="stories" className="py-20 px-2 sm:px-12 bg-cream">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold-dark text-sm font-medium mb-4"
      >
        <Users className="w-4 h-4" />
        Parent Voices
      </motion.div>

      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
        What <span className="text-gold">Parents Say</span>
      </h2>
      <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
        Real stories from proud parents whose children are thriving at Sire Junior High School
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {parentTestimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-card rounded-3xl p-8 border border-border shadow-soft relative overflow-hidden group"
        >
          {/* Decorative Quote Icon */}
          <Quote className="w-12 h-12 text-gold/10 absolute top-6 right-6 group-hover:text-gold/20 transition-colors" />

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-gold/20 flex items-center justify-center flex-shrink-0">
              <Users className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{testimonial.parentName}</h4>
              <p className="text-sm text-muted-foreground">
                Parent of {testimonial.studentName} • JHS {testimonial.jhsLevel}
              </p>
            </div>
          </div>

          <blockquote className="text-foreground italic leading-relaxed text-[15.5px] mb-6">
            “{testimonial.quote}”
          </blockquote>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-medium">
            <Star className="w-4 h-4 fill-gold" />
            <Star className="w-4 h-4 fill-gold" />
            <Star className="w-4 h-4 fill-gold" />
            <Star className="w-4 h-4 fill-gold" />
            <Star className="w-4 h-4 fill-gold" />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Optional: Add a small note */}
    <div className="text-center mt-12 text-sm text-muted-foreground">
      Over 150+ happy parents have trusted us with their children’s education
    </div>
  </div>
</section>
      {/* Milestones Timeline */}
      <section className="py-20 px-2 sm:px-12 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Recent <span className="text-gold">Milestones</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our journey from Category B to Category A has been marked by
                continuous improvement, dedicated faculty, and outstanding
                student achievements.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link href="/about#history">View Full History</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${
                    milestone.highlight
                      ? "bg-gold/10 border-gold/30"
                      : "bg-card border-border"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center font-display font-bold text-lg ${
                      milestone.highlight
                        ? "bg-gold text-navy-dark"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {milestone.year.slice(2)}
                  </div>
                  <div>
                    <span className="text-sm text-gold font-medium">
                      {milestone.year}
                    </span>
                    <p className="text-foreground font-medium">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SBC Curriculum */}
      <section
        id="curriculum"
        className="py-20 px-2 sm:px-12 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              SBC Curriculum
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Standards-Based <span className="text-gold">Curriculum</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              sireSCH fully implements Ghana's Standards-Based Curriculum,
              ensuring our students receive modern, competency-based education
              that meets national and international standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero-gold" size="lg" asChild>
                <Link href="/admissions">Join sireSCH</Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="/assets/sbc.pdf" download rel="noopener noreferrer">
                  Download SBC
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}