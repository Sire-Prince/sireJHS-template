"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle, Upload, Calendar, CreditCard, MapPin, ArrowRight, Phone, Mail, Play, BookOpen, Users, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const requirements = [
  "Completed Primary 6 with successful BECE registration",
  "Birth Certificate (Original & Copy)",
  "School Leaving Certificate from Primary School",
  "4 Passport photographs (recent)",
  "NHIS Card (mandatory for JHS students)",
  "Progress report from previous school (P1-P6)",
  "Parent/Guardian National ID",
];

const steps = [
  {
    icon: FileText,
    title: "1. Obtain Admission Forms",
    description: "Get admission forms from the school administration or download from our website.",
  },
  {
    icon: CheckCircle,
    title: "2. Submit Application",
    description: "Fill and submit the application form with all required documents to the admissions office.",
  },
  {
    icon: Calendar,
    title: "3. Assessment & Interview",
    description: "Student will undergo a placement assessment and interview with the admissions committee.",
  },
  {
    icon: CreditCard,
    title: "4. Complete Registration",
    description: "Upon acceptance, pay fees and complete registration before the academic year begins.",
  },
];

const fees = [
  { item: "Tuition Fees", amount: "GHS 1,500", details: "Per term (3 terms per year)" },
  { item: "Development Levy", amount: "GHS 300", details: "Per term" },
  { item: "Library & ICT", amount: "GHS 200", details: "Per term" },
  { item: "Sports & Activities", amount: "GHS 150", details: "Per term" },
  { item: "School Uniform Set", amount: "GHS 400", details: "One-time payment" },
  { item: "Textbooks", amount: "GHS 350", details: "One-time payment" },
];

export default function AdmissionsContent() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const { toast } = useToast();

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We've received your JHS admission application. Our admissions team will contact you shortly.",
    });
    setIsApplyOpen(false);
  };

  return (
    <main>
      {/* Hero Section */}
      <section id="apply" className="relative pt-32 px-4 pb-20 sm:px-12 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/jhs-students.jpg"
            alt="sireSCH JHS Students"
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
              <span className="text-sm font-medium">JHS Admissions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Join Our <span className="text-gold">JHS Family</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Begin your journey to academic excellence at sireSCH Junior High School. 
              We welcome motivated students ready to embrace learning, discipline, and integrity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
                <DialogTrigger asChild>
                  <Button variant="hero-gold" size="xl">
                    Apply Now for JHS
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="font-display text-2xl">JHS Admission Enquiry</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleApplySubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Student's First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Student's Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Parent/Guardian Email</Label>
                      <Input id="email" type="email" placeholder="parent@email.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Parent/Guardian Phone Number</Label>
                      <Input id="phone" placeholder="+233 XX XXX XXXX" required />
                    </div>
                    <div>
                      <Label htmlFor="currentSchool">Current School</Label>
                      <Input id="currentSchool" placeholder="Name of current school" required />
                    </div>
                    <div>
                      <Label htmlFor="grade">Current Grade/Class</Label>
                      <Input id="grade" placeholder="JHS 1, JHS 2, or Primary 6" required />
                    </div>
                    <div>
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea id="message" placeholder="Tell us about yourself or any questions..." rows={3} />
                    </div>
                    <Button type="submit" variant="gold" className="w-full" size="lg">
                      Submit Enquiry
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button variant="hero" size="xl" asChild>
                <Link href="/contact">
                  Contact Admissions Office
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="process" className="py-20 px-4 sm:px-12 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <FileText className="w-4 h-4" />
              Admission Process
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              How to <span className="text-gold">Apply</span> for JHS
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Follow these simple steps to secure your child's place at sireSCH Junior High School
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft relative group hover:border-gold/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-navy-dark transition-colors">
                  <step.icon className="w-6 h-6 text-gold group-hover:text-navy-dark transition-colors" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="py-20 sm:px-12 px-4 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold-dark text-sm font-medium mb-4">
                <CheckCircle className="w-4 h-4" />
                Admission Requirements
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                What You <span className="text-gold">Need</span> for JHS
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Ensure you have all required documents ready before submitting your application 
                to complete the registration process smoothly.
              </p>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border shadow-soft"
            >
              <h3 className="text-xl font-display font-bold text-foreground mb-6">Important Dates</h3>
              <div className="space-y-4">
                {[
                  { date: "January 2025", event: "Admission Forms Available" },
                  { date: "February - April 2025", event: "Application Submission Period" },
                  { date: "May 2025", event: "Placement Assessments & Interviews" },
                  { date: "June 2025", event: "Admission Letters Released" },
                  { date: "September 2025", event: "Academic Year Begins" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <span className="font-medium text-foreground">{item.event}</span>
                    <span className="text-gold font-semibold">{item.date}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fee Structure with PDF Download */}
      <section id="fees" className="py-20 px-4 sm:px-12 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <CreditCard className="w-4 h-4" />
              Fee Structure
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              JHS <span className="text-gold">Fees</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Transparent and affordable fees for quality JHS education
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft mb-6">
              <div className="grid grid-cols-3 bg-muted p-4 font-display font-semibold text-foreground">
                <div>Item</div>
                <div>Amount</div>
                <div>Details</div>
              </div>
              <div className="divide-y divide-border">
                {fees.map((fee, index) => (
                  <div key={index} className="grid grid-cols-3 p-4 text-foreground">
                    <div className="font-medium">{fee.item}</div>
                    <div className="text-gold font-semibold">{fee.amount}</div>
                    <div className="text-sm text-muted-foreground">{fee.details}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download PDF Button */}
            <div className="flex justify-center">
              <a 
                href="/JHS_Fees.pdf"
                 target="_blank"
  rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy-dark hover:bg-gold/90 transition-colors rounded-lg font-semibold shadow-soft group"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Fee Structure (PDF)
              </a>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-4">
              *Additional charges may apply for extracurricular activities and special programs
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Visit */}
      <section id="contact" className="py-20 px-4 sm:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Need <span className="text-gold">Assistance?</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Our admissions team is ready to answer your questions about JHS enrollment,
              fees, and academic programs at sireSCH.
            </p>

            {/* Contact Options */}
            <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <a
                href="tel:+233000000000"
                className="flex items-center justify-center gap-2 p-4 glass rounded-xl hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span>Call Admissions Office</span>
              </a>
              <a
                href="mailto:admissions@sireSCH.edu.gh"
                className="flex items-center justify-center gap-2 p-4 glass rounded-xl hover:bg-primary-foreground/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-gold" />
                <span>Email Admissions</span>
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-gold" />
                <span>sireSCH Campus, Volta Region, Ghana</span>
              </div>
              <p className="text-sm text-primary-foreground/60 mt-4">
                Admissions Office Hours: Monday - Friday, 8:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}