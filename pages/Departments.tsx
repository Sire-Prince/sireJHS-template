"use client";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Leaf, Beaker, Calculator, Palette, Users, Award, BookOpen, Microscope, TrendingUp, Brush } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import scienceLabImg from "@/assets/science-lab.jpg";

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
      <Helmet>
        <title>Departments | Academic Departments - Anlo Senior High School</title>
        <meta
          name="description"
          content="Explore ANSECO's academic departments: Agriculture, Science, Business, and Arts. Each department offers specialized programs with experienced faculty."
        />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-2 sm:px-12  bg-primary overflow-hidden">
            <div className="absolute inset-0">
              <img src={scienceLabImg} alt="ANSECO Departments" className="w-full h-full object-cover opacity-20" />
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
                  <span className="text-sm font-medium">Departments</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                  Our Academic <span className="text-gold">Departments</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Four distinct departments, each with specialized faculty and resources,
                  working together to deliver comprehensive education.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Departments Grid */}
          {departments.map((dept, index) => (
            <section
              key={dept.id}
              id={dept.id}
              className={`py-20 px-2 sm:px-12  ${index % 2 === 0 ? "bg-background" : "bg-cream"}`}
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

                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-gold" />
                        <span className="text-foreground font-medium">{dept.staff} Staff Members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-gold" />
                        <span className="text-foreground font-medium">HOD: {dept.hod}</span>
                      </div>
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

          {/* CTA Section */}
          <section className="py-20 px-2 sm:px-12  bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Find Your <span className="text-gold">Path</span>
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  Not sure which department is right for you? Our admissions team can help guide you 
                  to the program that best matches your interests and career goals.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="hero-gold" size="lg" asChild>
                    <Link href="/admissions">Apply Now</Link>
                  </Button>
                  <Button variant="hero" size="lg" asChild>
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
