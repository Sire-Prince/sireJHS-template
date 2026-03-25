"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24-48 hours.",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["sireSCH Senior High School", "sireSCH, Accra-Ghana", "Ghana, West Africa"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+233 244546733", "+233 536386223"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["palpha824@gmail.com"],
    },
    {
      icon: Clock,
      title: "Staff Hours",
      details: ["Monday - Friday: 8AM - 4PM", "Saturday: 9AM - 12PM"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/sireSCHSHS", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/sireSCHSHS", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/sireSCHSHS", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@sireSCHSHS", label: "YouTube" },
  ];

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-12 px-4 sm:px-12 bg-primary">
            <div className="container mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
                  <MessageSquare className="w-4 h-4" />
                  Get in Touch
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
                  Contact <span className="text-gold">sireSCH</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  We'd love to hear from you. Reach out with any questions about 
                  admissions, academics, or general inquiries.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 px-4 sm:px-12 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+233 XX XXX XXXX" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Write your message here..."
                        rows={5}
                        required
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.details.map((detail, index) => (
                            <p key={index} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="p-6 bg-card rounded-2xl border border-border">
                    <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary/10 hover:bg-gold hover:text-navy-dark flex items-center justify-center transition-all"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </div>
            </div>
          </section>

          {/* Full Width Map */}
          <section className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15879.037251619652!2d0.8769!3d5.7935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1020e4f2c5a4b5c7%3A0x1234567890abcdef!2ssireSCHga%2C%20Volta%20Region%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1234567890123!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="sireSCH Location Map"
            />
          </section>

          {/* Quick Links */}
          <section className="py-12 bg-cream">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Quick Contacts</h2>
              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <a
                  href="mailto:admissions@sireSCH.edu.gh"
                  className="p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
                >
                  <h3 className="font-semibold text-foreground">Admissions</h3>
                  <p className="text-sm text-muted-foreground">admissions@sireSCH.edu.gh</p>
                </a>
                <a
                  href="mailto:academics@sireSCH.edu.gh"
                  className="p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
                >
                  <h3 className="font-semibold text-foreground">Academics</h3>
                  <p className="text-sm text-muted-foreground">academics@sireSCH.edu.gh</p>
                </a>
                <a
                  href="mailto:support@sireSCH.edu.gh"
                  className="p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
                >
                  <h3 className="font-semibold text-foreground">Support</h3>
                  <p className="text-sm text-muted-foreground">support@sireSCH.edu.gh</p>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;