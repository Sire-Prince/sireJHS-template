"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Bell, Trophy, Megaphone } from "lucide-react";
import Image from "next/image";

const newsItems = [

  {
    category: "Enrollment",
    icon: Megaphone,
    title: "2025/2026 Admission Now Open",
    excerpt: "Applications are now being accepted for the upcoming academic year through registration.",
    date: "Mar 24, 2026",
  },
  {
    category: "Events",
    icon: Calendar,
    title: "Inter-School Sports Competition",
    excerpt: "Annual inter-house athletics and games week scheduled for February.",
    date: "Dec 20, 2025",
  },
  {
    category: "Notice",
    icon: Bell,
    title: "PTA Meeting Announcement",
    excerpt: "Parents are invited to the quarterly PTA meeting to discuss student progress.",
    date: "Dec 15, 2025",
  },
];

const NewsSection = () => {
  return (
    <section className="py-24  px-4 sm:px-12 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <Megaphone className="w-4 h-4" />
              Latest Updates
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground"
            >
              News & <span className="text-gold">Announcements</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
            >
              View All News
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured News */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:row-span-2 group"
          >
            <Link href="/news/nsmq-finals" className="block">
              <div className="relative overflow-hidden  mb-6">
           <Image
  src="/assets/news.jpg"
  alt="sireSCH Students Celebrating"
  width={800}
  height={600}
  className="w-full h-auto object-cover"
  priority
/>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-gold text-navy-dark text-xs font-semibold">
                      {newsItems[0].category}
                    </span>
                    <span className="text-sm text-primary-foreground/80">
                      {newsItems[0].date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary-foreground mb-2 group-hover:text-gold transition-colors">
                    {newsItems[0].title}
                  </h3>
                  <p className="text-primary-foreground/80 line-clamp-2">
                    {newsItems[0].excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Other News */}
          <div className="space-y-6">
            {newsItems.slice(1).map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link
                 href="#"
                  className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-gold/30 transition-all hover:shadow-soft"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-gold">{item.category}</span>
                      <span className="text-xs text-muted-foreground">• {item.date}</span>
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-gold transition-colors mb-1 line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
