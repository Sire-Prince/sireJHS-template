"use client";

import { motion } from "framer-motion";
import { BookOpen, Beaker, Calculator, Globe, Music, GraduationCap, Star, ArrowRight, Quote, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Beaker,
    title: "General Science",
    subjects: ["Physics", "Chemistry", "Biology", "Elective Maths"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calculator,
    title: "Business Studies",
    subjects: ["Accounting", "Economics", "Business Management", "Cost Accounting"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: GraduationCap,
    title: "Agriculture",
    subjects: ["Animal Science", "Crop Science", "Agricultural Economics", "Farm Management"],
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

const successStories = [
  {
    name: "Dr. Edem Adzogenu",
    year: "Class of 2008",
    achievement: "Medical Doctor at Korle Bu Teaching Hospital",
    quote: "sireJSH taught me discipline and the value of hard work. The science department gave me a strong foundation that carried me through medical school.",
    program: "General Science",
  },
  {
    name: "Sena Amedorme",
    year: "Class of 2015",
    achievement: "CEO, AgriTech Ghana Ltd",
    quote: "The business skills I learned at sireJSH, combined with our agricultural training, inspired me to start a company that helps farmers across Ghana.",
    program: "Business Studies",
  },
  {
    name: "Kafui Mensah",
    year: "Class of 2012",
    achievement: "Award-winning Journalist, GBC",
    quote: "My love for literature and storytelling was nurtured by incredible teachers in the Arts department. sireJSH believed in me when I was just a dreamer.",
    program: "General Arts",
  },
  {
    name: "Ama Dzokoto",
    year: "Class of 2018",
    achievement: "Visual Artist, International Exhibitions",
    quote: "The Visual Arts department at sireJSH opened my eyes to possibilities I never knew existed. Now my work is shown in galleries across Africa and Europe.",
    program: "Visual Arts",
  },
];

const milestones = [
  { year: "2024", event: "Record 98% WAEC Pass Rate", highlight: true },
  { year: "2023", event: "NSMQ Regional Semi-Finals" },
  { year: "2022", event: "Best Improved School - Volta Region" },
  { year: "2021", event: "New Science Laboratory Commissioned" },
  { year: "2020", event: "Category A Status Achieved", highlight: true },
];

export default function AcademicsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-2 sm:px-12 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/science-lab.jpg"
            alt="sireJSH Science Lab"
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
              Following the Standards-Based Curriculum with WAEC-aligned programs, 
              we prepare students for success in national examinations and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-2 sm:px-12 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <GraduationCap className="w-4 h-4" />
              Study Programs
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Choose Your <span className="text-gold">Path</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-elevated transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{program.title}</h3>
                <ul className="space-y-2 mb-6">
                  {program.subjects.map((subject) => (
                    <li key={subject} className="flex items-center gap-2 text-muted-foreground">
                      <Star className="w-4 h-4 text-gold" />
                      {subject}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/departments#${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
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
              Alumni Stories
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Where <span className="text-gold">Stars</span> Are Made
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Our alumni are making their mark across Ghana and beyond. Here are some of the incredible 
              journeys that started in the halls of sireJSH.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-soft relative"
              >
                <Quote className="w-10 h-10 text-gold/20 absolute top-6 right-6" />
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">{story.name}</h3>
                    <p className="text-gold text-sm font-medium">{story.year}</p>
                    <p className="text-muted-foreground text-sm">{story.achievement}</p>
                  </div>
                </div>
                <blockquote className="text-foreground italic leading-relaxed mb-4">
                  "{story.quote}"
                </blockquote>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground">
                  <GraduationCap className="w-4 h-4" />
                  {story.program}
                </div>
              </motion.div>
            ))}
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
                Our journey from Category B to Category A has been marked by continuous improvement,
                dedicated faculty, and outstanding student achievements.
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
                    <span className="text-sm text-gold font-medium">{milestone.year}</span>
                    <p className="text-foreground font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SBC Curriculum */}
      <section id="curriculum" className="py-20 px-2 sm:px-12 bg-primary text-primary-foreground">
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
              sireJSH fully implements Ghana's Standards-Based Curriculum, ensuring our 
              students receive modern, competency-based education that meets national 
              and international standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero-gold" size="lg" asChild>
                <Link href="/admissions">Join sireJSH</Link>
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