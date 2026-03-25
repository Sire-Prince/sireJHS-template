"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Clock,
    title: "Attendance Management",
    description: "Real-time student attendance tracking with instant parent SMS notifications for absences.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Comprehensive academic tracking with WAEC mock results and performance trends.",
  },
  {
    icon: Users,
    title: "Teacher Scheduling",
    description: "Automated timetable generation and teacher duty roster management.",
  },
  {
    icon: Shield,
    title: "Secure Portals",
    description: "Role-based access for administrators, teachers, students, and parents.",
  },
];

const PortalPreview = () => {
  return (
    <section className="py-24 px-4 sm:px-14 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6"
          >
            <Shield className="w-4 h-4" />
            Digital Infrastructure
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            Smart School <span className="text-gold">Management</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/80 text-lg"
          >
            Our integrated portal system streamlines school operations, from attendance 
            tracking to academic performance monitoring, solving key administrative challenges.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 cursor-pointer" >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-navy-dark transition-colors">
                <feature.icon className="w-6 h-6 text-gold group-hover:text-navy-dark transition-colors" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero-gold" size="lg" asChild>
              <Link href="/portal" className="group">
                Access Portal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link href="/portal/parent">
                Parent SMS Signup
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortalPreview;
