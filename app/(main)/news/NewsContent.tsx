"use client";

import { motion } from "framer-motion";
import { Calendar, Trophy, Bell, Megaphone, ArrowRight, Clock, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const featuredNews = {
  title: "sireJSH Reaches NSMQ Regional Finals 2025",
  excerpt: "Our brilliant science students showcased exceptional knowledge and teamwork to secure a spot in the regional finals of the National Science & Maths Quiz.",
  date: "January 2, 2026",
  category: "Achievement",
  image: "/assets/hompage1.jpg", 
};

const newsItems = [
  {
    title: "2025/2026 Academic Year Admission Now Open",
    excerpt: "Applications are being accepted for the upcoming academic year through CSSPS. Don't miss this opportunity.",
    date: "December 28, 2025",
    category: "Enrollment",
    icon: Megaphone,
image: "/assets/hompage2.jpg", 
  },
  {
    title: "Inter-School Sports Competition Scheduled",
    excerpt: "Annual inter-school athletics and games week scheduled for February. All schools are preparing vigorously.",
    date: "December 20, 2025",
    category: "Events",
    icon: Calendar,
image: "/assets/hompage3.jpg", 
  },
  {
    title: "PTA Meeting Notice",
    excerpt: "Parents and guardians are invited to the quarterly PTA meeting to discuss student progress and school development.",
    date: "December 15, 2025",
    category: "Notice",
    icon: Bell,
image: "/assets/hompage4.webp", 
  },
  {
    title: "Outstanding WAEC Performance 2024",
    excerpt: "sireJSH records 98% pass rate with 45+ A1 grades in the 2024 WASSCE. Congratulations to all students and teachers.",
    date: "December 10, 2025",
    category: "Achievement",
    icon: Trophy,
image: "/assets/hompage.jpg", 
  },
];

const upcomingEvents = [
  { date: "Feb 15", title: "Inter-House Sports", time: "8:00 AM" },
  { date: "Feb 20", title: "PTA Meeting", time: "10:00 AM" },
  { date: "Mar 1", title: "Speech & Prize Day", time: "9:00 AM" },
  { date: "Mar 15", title: "WAEC Mock Exams", time: "8:00 AM" },
];

export default function NewsContent() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-2 sm:px-12 bg-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
              <Megaphone className="w-4 h-4" />
              Latest Updates
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              News & <span className="text-gold">Announcements</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Stay connected with everything happening at sireJSH.
            </p>
          </motion.div>
        </div>
      </section>

   

      {/* Featured News */}
      <section className="py-12 px-2 sm:px-12 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden border border-border shadow-soft"
          >
            <div className="relative h-64 lg:h-full">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-gold text-navy-dark text-sm font-semibold">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {featuredNews.category}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredNews.date}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                {featuredNews.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {featuredNews.excerpt}
              </p>
              <Link
                href="/news/nsmq-finals-2025"
                className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
              >
                Read Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* News Grid & Events Sidebar */}
      <section className="py-12 px-2 sm:px-12 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* News List */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Recent News</h2>
              {newsItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden border border-border shadow-soft hover:border-gold/30 transition-all group"
                >
                  <Link href={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-40 sm:h-auto flex-shrink-0 relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-gold">{item.category}</span>
                        <span className="text-xs text-muted-foreground">• {item.date}</span>
                      </div>
                      <h3 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Events Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft sticky top-24"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-5 h-5 text-gold" />
                  <h3 className="text-xl font-display font-bold text-foreground">Upcoming Events</h3>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gold/20 flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-xs text-muted-foreground">{event.date.split(' ')[0]}</span>
                        <span className="text-lg font-bold text-gold">{event.date.split(' ')[1]}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/calendar"
                  className="mt-6 inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all w-full justify-center"
                >
                  View Full Calendar
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}