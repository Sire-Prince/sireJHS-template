"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Building, Microscope, Library, Dumbbell, Home, Wifi, TreePine, Utensils, ArrowRight, Star, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Facilities = () => {
  const mainFacilities = [
    {
      icon: Building,
      name: "Modern Dormitories",
      description: "Our male and female hostels provide safe, well-ventilated accommodation with modern amenities. Each dormitory features study areas, common rooms, and 24-hour security for a comfortable boarding experience.",
      features: ["Separate male and female blocks", "Well-ventilated rooms", "Study areas", "24-hour security"],
      image: "/assets/hero-campus.jpg",
    },
    {
      icon: Microscope,
      name: "Science Laboratories",
      description: "State-of-the-art Physics, Chemistry, and Biology laboratories equipped with modern apparatus for practical experiments. Our labs support hands-on learning aligned with the WAEC syllabus.",
      features: ["Physics lab with optical equipment", "Chemistry lab with fume hoods", "Biology lab with microscopes", "Safety equipment"],
      image: "/assets/science-lab.jpg",
    },
    {
      icon: Dumbbell,
      name: "Sports Complex",
      description: "A full-size football field, basketball and volleyball courts, and athletics track. We believe in holistic education that develops both mind and body.",
      features: ["FIFA-standard football pitch", "Basketball court", "Volleyball court", "Athletics track"],
      image: "/assets/sports-field.jpg",
    },
  ];

  const additionalFacilities = [
    {
      icon: Library,
      name: "Library & ICT Center",
      description: "Extensive collection of academic texts, journals, and a 40-computer ICT lab with internet access.",
    },
    {
      icon: Utensils,
      name: "Dining Hall",
      description: "Modern dining facilities serving nutritious meals prepared by professional catering staff.",
    },
    {
      icon: Home,
      name: "Assembly Hall",
      description: "Large multi-purpose hall for assemblies, events, examinations, and cultural activities.",
    },
    {
      icon: Wifi,
      name: "ICT Infrastructure",
      description: "Campus-wide connectivity supporting digital learning and administrative efficiency.",
    },
    {
      icon: TreePine,
      name: "School Farm",
      description: "Agricultural demonstration plots supporting our agriculture department and practical farming education.",
    },
    {
      icon: Star,
      name: "Staff Quarters",
      description: "On-campus accommodation for teaching staff ensuring round-the-clock academic support.",
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-2 sm:px-12 bg-primary overflow-hidden">
            <div className="absolute inset-0">
              <Image 
                src="/assets/hero-campus.jpg" 
                alt="sireSCH Campus" 
                fill
                className="object-cover opacity-20"
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
                  <Building className="w-5 h-5" />
                  <span className="text-sm font-medium">Our Campus</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                  World-Class <span className="text-gold">Facilities</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Our campus provides everything students need to excel academically, 
                  develop physically, and grow personally in a supportive environment.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Main Facilities */}
          <section className="py-20 px-2 sm:px-12 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold-dark text-sm font-medium mb-4"
                >
                  <Star className="w-4 h-4" />
                  Featured Facilities
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Core <span className="text-gold">Infrastructure</span>
                </h2>
              </div>

              <div className="space-y-20">
                {mainFacilities.map((facility, index) => (
                  <motion.div
                    key={facility.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative rounded-2xl overflow-hidden shadow-elevated h-80">
                        <Image
                          src={facility.image}
                          alt={facility.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                            <facility.icon className="w-5 h-5 text-navy-dark" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                        {facility.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {facility.description}
                      </p>
                      <ul className="space-y-3">
                        {facility.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gold" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Facilities Grid */}
          <section className="py-20 px-2 sm:px-12 bg-cream">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                >
                  <Building className="w-4 h-4" />
                  More Amenities
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Supporting <span className="text-gold">Infrastructure</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalFacilities.map((facility, index) => (
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
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-2 sm:px-12 bg-primary">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6"
                >
                  <MapPin className="w-4 h-4" />
                  Virtual Tour
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
                  Experience Our <span className="text-gold">Campus</span>
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Schedule a visit to see our facilities firsthand and discover why 
                  sireSCH is the preferred choice for education in Ghana.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Tour Video Section */}
          <section id="tour" className="py-20 px-4 sm:px-14 bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-xl overflow-hidden border border-primary-foreground/10"
              >
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                  title="Campus Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Facilities;