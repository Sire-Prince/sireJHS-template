"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  BookOpen,
  Clock,
  ArrowRight,
  Award,
  Users,
  Building,
  Microscope,
  Library,
  Dumbbell,
  CheckCircle,
  Phone,
  Mail,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
const timeline = [
  {
    year: "1963",
    event: "School established as sireJSH Secondary School",
    description:
      "Founded by the visionary leaders of sireJSH Traditional Area, the school began with just 50 students in temporary structures. The founding headmaster, Mr. S.K. Agbeko, led the pioneering staff who shared a dream of bringing quality education to the people of sireJSHland.",
    category: "B",
  },
  {
    year: "1975",
    event: "First graduating class achieves 100% pass rate",
    description:
      "After years of dedication, sireJSH's first Form 5 graduates achieved a remarkable 100% pass rate in the GCE O-Level examinations, establishing the school's reputation for academic excellence throughout the Volta Region.",
    category: "B",
  },
  {
    year: "1987",
    event: "Upgraded to Senior Secondary School status",
    description:
      "Following the educational reforms, sireJSH transitioned to the SSS system. New laboratories were constructed, and the school expanded its capacity to serve more students from across Ghana.",
    category: "B",
  },
  {
    year: "2008",
    event: "Major infrastructure development initiated",
    description:
      "A new era began with the construction of modern dormitory blocks, renovated classrooms, and the school's first computer laboratory. Old students and the PTA contributed significantly to these developments.",
    category: "B",
  },
  {
    year: "2018",
    event: "First NSMQ regional finals appearance",
    description:
      "sireJSH's science quiz team made history by reaching the Volta Regional finals of the National Science and Maths Quiz, inspiring a new generation of science students and earning the school national recognition.",
    category: "B",
  },
  {
    year: "2022",
    event: "Upgraded to Category A institution",
    description:
      "After decades of consistent improvement, the Ghana Education Service officially upgraded sireJSH to Category A status, recognizing its excellent facilities, qualified staff, and outstanding student outcomes.",
    category: "A",
  },
  {
    year: "2025",
    event: "Record WAEC results - 45+ A1 grades",
    description:
      "The school achieved its best WASSCE results in history with over 45 students obtaining A1 grades across subjects, and a 98% pass rate—cementing sireJSH's position as a leading school in Ghana.",
    category: "A",
  },
];

const facilities = [
  {
    icon: Building,
    name: "Modern Dormitories",
    description: "Well-ventilated male and female hostels",
  },
  {
    icon: Microscope,
    name: "Science Laboratories",
    description: "Physics, Chemistry, and Biology labs",
  },
  {
    icon: Library,
    name: "Library & ICT",
    description: "Extensive resources with computer lab",
  },
  {
    icon: Dumbbell,
    name: "Sports Complex",
    description: "Football field, courts, and athletics track",
  },
];

const leadership = [
  {
    name: "Mr. Emmanuel Agbeko",
    role: "Headmaster",
    bio: "20+ years in educational leadership",
    email: "palpha824@gmail.com",
        image: "/assets/leader5.webp",

  },
  {
    name: "Mrs. Grace Adzomani",
    role: "Assistant Head (Academic)",
    bio: "Curriculum development specialist",
        email: "palpha824@gmail.com",
            image: "/assets/leader1.webp",


  },
  {
    name: "Mr. Emmanuel Agbeko",
    role: "Headmaster",
    bio: "20+ years in educational leadership",
    email: "palpha824@gmail.com",
        image: "/assets/leader2.webp",

  },
  {
    name: "Mrs. Grace Adzomani",
    role: "Assistant Head (Academic)",
    bio: "Curriculum development specialist",
        email: "palpha824@gmail.com",
            image: "/assets/leader3.webp",


  },
  {
    name: "Mr. Kofi Senanu",
    role: "Assistant Head (Admin)",
    bio: "Administration and student affairs",
        email: "sireprimce737@gmail.com",
            image: "/assets/leader4.webp",


  },
];

export default function AboutContent() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 px-2 sm:px-10 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-campus.jpg"
            alt="sireJSH Campus"
            fill
            className="object-cover opacity-80"
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
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Our Story of <span className="text-gold">Excellence</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From humble beginnings to Category A excellence, sireJSH continues
              to shape the future of education in Ghana's Volta Region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 px-2 sm:px-10 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className=" rounded-md p-8 shadow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-gold" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading center of academic excellence in Ghana,
                producing well-rounded individuals who contribute positively to
                national development while upholding the rich cultural heritage
                of the sireJSH people.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className=" rounded-md p-8 shadow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality education through innovative teaching
                methods, state-of-the-art facilities, and a disciplined learning
                environment that nurtures academic, moral, and social
                development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* about Timeline */}

      <section className="py-24 px-4 sm:px-14  relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center ">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex w-[40%] items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold-dark text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                Learn About Us
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                About <span className="text-gold">sireJSH</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Begin your journey to academic excellence. We welcome motivated
                students ready to embrace our tradition of discipline,
                integrity, and achievement.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                sireJSH is a premier educational institution dedicated to
                providing exceptional learning experiences. We foster a
                nurturing environment where students can thrive academically and
                personally.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="gold" size="lg" asChild>
                  <Link href="/admissions" className="group">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/admissions#requirements">View Requirements</Link>
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden shadow-elevated">
                <Image
                  src="/assets/hompage.jpg"
                  alt="sireJSH Students Celebrating"
                  width={700}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-6 -left-6 bg-primary text-primary-foreground p-4 rounded-2xl shadow-elevated"
              >
                <div className="text-lg font-display font-bold">Make Your</div>
                <div className="text-sm text-primary-foreground/80">
                  Admissions Journey
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-4 -right-4 bg-card p-3 rounded-xl shadow-soft border border-border"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-xs font-medium text-foreground">
                    Certification Verified
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* History Timeline */}
      {/*     
      <section id="history" className="py-20 px-2 sm:px-10 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <Clock className="w-4 h-4" />
              Our Journey
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              From Category B to <span className="text-gold">Category A</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-display font-bold flex-shrink-0 ${
                    item.category === "A" ? "bg-gold text-navy-dark" : "bg-primary text-primary-foreground"
                  }`}>
                    {item.year.slice(2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2 min-h-[60px]" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <span className="text-sm font-medium text-gold">{item.year}</span>
                  <h3 className="text-xl font-display font-semibold text-foreground mt-1 mb-2">{item.event}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    item.category === "A" ? "bg-gold/20 text-gold-dark" : "bg-muted text-muted-foreground"
                  }`}>
                    Category {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Facilities */}
      <section id="facilities" className="py-20 px-2 sm:px-12 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold-dark text-sm font-medium mb-4"
            >
              <Building className="w-4 h-4" />
              Campus Facilities
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              World-Class <span className="text-gold">Infrastructure</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-elevated hover:border-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <facility.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {facility.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="gold" size="lg" asChild>
              <Link href="/facilities">View All Facilities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Staff Directory */}
      {/* Staff Directory */}
<section
  id="staff"
  className="py-20 px-2 sm:px-18 bg-primary text-primary-foreground"
>
  <div className="container mx-auto px-14 lg:px-18">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4"
      >
        <Users className="w-4 h-4" />
        Leadership
      </motion.div>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
        Our <span className="text-gold">Leadership</span> Team
      </h2>
      <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
        Meet the dedicated professionals who guide our school towards
        excellence
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {leadership.map((person, index) => (
        <motion.div
          key={person.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative rounded-2xl overflow-hidden group cursor-pointer min-h-[450px]"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Light Primary Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            {/* Name and Role */}
            <div className="text-center mb-3 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="text-xl font-display font-bold mb-1 text-white">
                {person.name}
              </h3>
              <p className="text-gold text-sm font-medium tracking-wide">
                {person.role}
              </p>
            </div>

            {/* Bio and Contact - Hidden initially, appears on hover */}
            <div className="overflow-hidden">
              <div className="transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white/90 leading-relaxed mb-4 text-center">
                  {person.bio}
                </p>
                
                {/* Contact Information */}
                <div className="border-t border-white/30 pt-3">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-3 h-3 text-gold" />
                    <p className="text-xs text-white/80 truncate">
                      {person.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}
