"use client";

import { motion } from "framer-motion";
import { Leaf, Beaker, Calculator, Palette, Users, Award, BookOpen, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Departments = () => {
  const departments = [
    {
      id: "agriculture",
      icon: Leaf,
      title: "Agriculture Department",
      color: "from-green-600 to-emerald-500",
      description: "Our Agriculture department equips students with practical farming skills and modern agricultural science knowledge. From crop production to animal husbandry, students gain hands-on experience in our school farm.",
      highlights: [
        "Fully equipped demonstration farm",
        "Greenhouse and nursery facilities",
        "Animal husbandry section with poultry and small ruminants",
        "Partnership with local agricultural extension services",
      ],
      achievements: [
        "Regional Agricultural Science Fair Champions 2024",
        "Sustainable farming practices showcase",
        "Student-run school vegetable garden",
      ],
      hod: "Mr. Kwame Adjei",
      staff: 5,
    },
    {
      id: "science",
      icon: Beaker,
      title: "Science Department",
      color: "from-blue-600 to-cyan-500",
      description: "The Science department is the cornerstone of ANSECO's academic excellence. With well-equipped laboratories and dedicated teachers, we nurture the next generation of scientists, doctors, and engineers.",
      highlights: [
        "Modern Physics, Chemistry, and Biology laboratories",
        "Regular practical sessions and experiments",
        "Science Club and STEM activities",
        "NSMQ training and preparation",
      ],
      achievements: [
        "3x NSMQ Regional Finalists",
        "45+ WAEC A1 grades in sciences (2024)",
        "Annual Science Fair participation",
      ],
      hod: "Mrs. Ama Korkor",
      staff: 12,
    },
    {
      id: "business",
      icon: Calculator,
      title: "Business Department",
      color: "from-amber-600 to-orange-500",
      description: "Our Business department prepares students for careers in commerce, finance, and entrepreneurship. With a focus on practical application and real-world business scenarios, students develop strong analytical and financial skills.",
      highlights: [
        "Financial Accounting and Cost Accounting",
        "Business Management and Economics",
        "ICT integration in business education",
        "Entrepreneurship and start-up workshops",
      ],
      achievements: [
        "Regional Business Quiz Champions 2023",
        "Student-run school store initiative",
        "Partnership with local businesses for internships",
      ],
      hod: "Mr. Francis Agbodza",
      staff: 8,
    },
    {
      id: "arts",
      icon: Palette,
      title: "Arts Department",
      color: "from-purple-600 to-pink-500",
      description: "The Arts department celebrates creativity, culture, and critical thinking. From literature to visual arts, we develop well-rounded individuals who appreciate and contribute to Ghana's rich cultural heritage.",
      highlights: [
        "Literature, History, and Government",
        "Visual Arts studio with modern equipment",
        "Music and cultural performance programs",
        "French and Ewe language options",
      ],
      achievements: [
        "Regional Drama Festival winners",
        "Art exhibitions at district and regional levels",
        "Cultural troupe performances at national events",
      ],
      hod: "Mrs. Dzidzor Amevor",
      staff: 10,
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-12 bg-primary overflow-hidden">
            <div className="absolute inset-0">
              <Image 
                src="/assets/science-lab.jpg" 
                alt="ANSECO Departments" 
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center sm:text-left"
              >
                <div className="flex items-center justify-center sm:justify-start gap-2 text-gold mb-4">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-sm font-medium">Departments</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                  Our Academic <span className="text-gold">Departments</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                  Four distinct departments, each with specialized faculty and resources,
                  working together to deliver comprehensive education.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Departments Grid - Flex Column Layout */}
          <div className="flex flex-col">
            {departments.map((dept, index) => (
              <section
                key={dept.id}
                id={dept.id}
                className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 ${
                  index % 2 === 0 ? "bg-background" : "bg-cream"
                }`}
              >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch">
                    {/* Left Column - Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex-1"
                    >
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-4 sm:mb-6`}>
                        <dept.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4">
                        {dept.title}
                      </h2>
                      <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                        {dept.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-4 sm:mb-6">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                          <span className="text-foreground text-sm sm:text-base font-medium">{dept.staff} Staff Members</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                          <span className="text-foreground text-sm sm:text-base font-medium">HOD: {dept.hod}</span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Department Highlights</h3>
                      <ul className="space-y-1.5 sm:space-y-2 mb-6">
                        {dept.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm sm:text-base">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 sm:mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Right Column - Achievements Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex-1"
                    >
                      <div className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 border border-border shadow-soft h-full">
                        <div className="flex items-center gap-2 mb-4 sm:mb-6">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                          <h3 className="text-base sm:text-lg font-semibold text-foreground">Recent Achievements</h3>
                        </div>
                        <ul className="space-y-3 sm:space-y-4">
                          {dept.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/50">
                              <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${dept.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              </div>
                              <span className="text-foreground text-sm sm:text-base flex-1">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">
                  Find Your <span className="text-gold">Path</span>
                </h2>
                <p className="text-primary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  Not sure which department is right for you? Our admissions team can help guide you 
                  to the program that best matches your interests and career goals.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Button variant="hero-gold" size="lg" asChild className="w-full sm:w-auto">
                    <Link href="/admissions">Apply Now</Link>
                  </Button>
                  <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Departments;
