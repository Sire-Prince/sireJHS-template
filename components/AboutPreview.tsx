"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, FileText, Calendar, CreditCard, Award, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  const steps = [
    {
      icon: FileText,
      title: "CSSPS Placement",
      description: "Select sireSCH as your preferred school during CSSPS registration.",
    },
    {
      icon: Calendar,
      title: "Reporting Date",
      description: "Receive your admission letter and report on the designated date.",
    },
    {
      icon: CheckCircle,
      title: "Complete Registration",
      description: "Submit required documents and complete the enrollment process.",
    },
    {
      icon: CreditCard,
      title: "Fee Payment",
      description: "Pay fees via MoMo or bank transfer. PTA levies apply.",
    },
  ];

  const highlights = [
    {
      icon: Award,
      label: "Category A School",
      description: "Government recognized institution",
    },
    {
      icon: Users,
      label: "500+ Students",
      description: "Growing community of learners",
    },
    {
      icon: MapPin,
      label: "Volta Region",
      description: "Conveniently located in sireSCH",
    },
  ];

  return (
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
             About <span className="text-gold">sireSCH</span> 
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Begin your journey to academic excellence. We welcome motivated students 
              ready to embrace our tradition of discipline, integrity, and achievement.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              sireSCH is a premier educational institution dedicated to providing exceptional 
              learning experiences. We foster a nurturing environment where students can thrive 
              academically and personally.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href="/admissions" className="group">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/admissions#requirements">
                  View Requirements
                </Link>
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
                alt="sireSCH Students Celebrating"
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
              <div className="text-sm text-primary-foreground/80">Admissions Journey</div>
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
                <span className="text-xs font-medium text-foreground">Certification Verified</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;