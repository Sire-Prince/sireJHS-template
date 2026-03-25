"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactContent = () => {
  const { toast } = useToast();

const handleWhatsAppSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
  const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
  
  const whatsappMessage = `*New Admission Enquiry from sireJSH Website*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Subject:* ${encodeURIComponent(subject)}%0A*Message:* ${encodeURIComponent(message)}`;
  
  window.open(`https://wa.me/233244546733?text=${whatsappMessage}`, '_blank');
  
  toast({
    title: "Redirecting to WhatsApp!",
    description: "You'll be redirected to WhatsApp to send your admission enquiry.",
  });
  
  form.reset();
};
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["sireJSH Senior High School", "sireJSH, Accra-Ghana", "Ghana, West Africa"],
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
    { icon: Facebook, href: "https://facebook.com/sireJSHJSH", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/sireJSHJSH", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/sireJSHJSH", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@sireJSHJSH", label: "YouTube" },
  ];

  return (
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
              Contact <span className="text-gold">sireJSH</span>
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
<form onSubmit={handleWhatsAppSubmit} className="space-y-6">
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
                <Button type="submit" size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2">
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
<section className="w-full h-[500px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.0!2d-0.033333!3d5.683333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1020e7e2c5b5b5b5%3A0x1234567890abcdef!2sAshaiman%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1732345678901!5m2!1sen!2sgh"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="sireJSH Location - Ashaiman and Tema Area"
  />
</section>
      {/* Quick Links */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Quick Contacts</h2>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href="mailto:admissions@sireJSH.edu.gh"
              className="p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
            >
              <h3 className="font-semibold text-foreground">Admissions</h3>
              <p className="text-sm text-muted-foreground">admissions@sireJSH.edu.gh</p>
            </a>
            <a
              href="mailto:academics@sireJSH.edu.gh"
              className="p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
            >
              <h3 className="font-semibold text-foreground">Academics</h3>
              <p className="text-sm text-muted-foreground">academics@sireJSH.edu.gh</p>
            </a>
            <a
              href="mailto:support@sireJSH.edu.gh"
              className="p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
            >
              <h3 className="font-semibold text-foreground">Support</h3>
              <p className="text-sm text-muted-foreground">support@sireJSH.edu.gh</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactContent;