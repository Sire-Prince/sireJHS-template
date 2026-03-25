"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, PenTool, Target, Trophy, Music, Users, 
  Clock, Award, CheckCircle2, Sparkles, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import ParentTestimonials from "@/components/Testimonials";
type Program = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
  features: string[];
  duration: string;
  color: string;
};

const academicPrograms: Program[] = [
  {
    id: "core",
    title: "Core Subjects",
    description: "Strong academic foundation aligned with NaCCA Common Core Programme",
    image: "/assets/homepage4.webp",
    icon: BookOpen,
    features: [
      "English Language", "Mathematics", "Integrated Science",
      "Social Studies", "Religious & Moral Education (RME)", "Ghanaian Language (Ewe)"
    ],
    duration: "JHS 1 - 3",
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: "electives",
    title: "Elective Subjects",
    description: "Practical skill-based subjects for well-rounded development",
    image: "/assets/science-lab.jpg",
    icon: PenTool,
    features: [
      "Information & Communication Technology (ICT)", "French Language",
      "Basic Design & Technology (BDT)", "Home Economics",
      "Visual Arts", "Agricultural Science"
    ],
    duration: "JHS 1 - 3",
    color: "from-purple-600 to-violet-500"
  },
  {
    id: "bece-prep",
    title: "BECE Preparation",
    description: "Intensive exam readiness program with proven results",
    image: "https://picsum.photos/id/201/800/600",
    icon: Target,
    features: [
      "Weekly Mock Examinations", "Past Questions Analysis",
      "Remedial Support Classes", "Exam Techniques Training",
      "Individual Academic Mentoring"
    ],
    duration: "Focused in JHS 3",
    color: "from-amber-600 to-orange-500"
  }
];

const extracurriculars = [
  {
    id: "sports",
    title: "Sports & Athletics",
    description: "Developing fitness, teamwork and discipline",
    icon: Trophy,
    features: ["Football", "Athletics", "Basketball", "Volleyball", "Handball", "Table Tennis"],
    duration: "Year-round",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "arts",
    title: "Creative & Cultural Arts",
    description: "Nurturing talent and celebrating Ghanaian culture",
    icon: Music,
    features: ["Traditional Dance & Drumming", "Choir", "Drama & Theatre", "Art & Crafts", "Cultural Festivals"],
    duration: "Year-round",
    color: "from-rose-500 to-pink-500"
  },
  {
    id: "clubs",
    title: "Clubs & Societies",
    description: "Building leadership and social responsibility",
    icon: Users,
    features: ["Debate Club", "Science Club", "Literary Club", "Environmental Club", "Scripture Union"],
    duration: "Year-round",
    color: "from-indigo-500 to-purple-500"
  }
];

const ProgramImageCard = ({ program, index }: { program: Program; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <Card className="group overflow-hidden h-full border-0 shadow-md hover:shadow-2xl transition-all duration-500">
      <div className="relative h-56">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className={`absolute top-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg z-10`}>
          <program.icon className="w-7 h-7 text-white" />
        </div>
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>

        <div className="space-y-2.5 mb-8">
          {program.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="font-medium px-4 py-1">
            <Clock className="w-4 h-4 mr-1.5" />
            {program.duration}
          </Badge>
          <Button variant="ghost" className="group-hover:text-amber-600">
            Explore <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  </motion.div>
);

export default function ProgramsContent() {
  const [activeTab, setActiveTab] = useState("academic");

  return (
<>

  <section className="relative pt-32 pb-20 px-2 sm:px-12 bg-primary overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/assets/science-lab.jpg"
                  alt="sireSCH Science Lab"
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
                    <span className="text-sm font-medium">Academics</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
                    Academic <span className="text-gold">Excellence</span>
                  </h1>
                  <p className="text-xl text-primary-foreground/80 leading-relaxed">
                    Following the Standards-Based Curriculum with WAEC-aligned
                    programs, we prepare students for success in national examinations
                    and beyond.
                  </p>
                </motion.div>
              </div>
            </section>
  <div className="py-20 space-y-24 bg-gray-50">
     
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto px-6">
        <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200 px-5 py-1.5 text-sm">
          <Sparkles className="w-4 h-4 mr-2" />
          NaCCA Common Core Programme
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Our <span className="text-amber-600">JHS Programs</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Quality education that builds strong academic foundations, character, and skills for BECE success and Senior High School.
        </p>
      </div>


      {/* Tabs Section */}
      <div className="container mx-auto px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-white shadow-sm">
              <TabsTrigger value="academic" className="text-base py-4">Academic Programs</TabsTrigger>
              <TabsTrigger value="extracurricular" className="text-base py-4">Activities & Clubs</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="academic" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {academicPrograms.map((program, index) => (
                <ProgramImageCard key={program.id} program={program} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="extracurricular" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extracurriculars.map((prog, index) => (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full p-8 hover:shadow-xl transition-all group">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <prog.icon className="w-9 h-9 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{prog.title}</h3>
                    <p className="text-muted-foreground mb-6">{prog.description}</p>
                    
                    <div className="space-y-2 mb-8">
                      {prog.features.map((f, i) => (
                        <div key={i} className="flex gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <Badge variant="outline">
                      <Clock className="w-4 h-4 mr-1" /> {prog.duration}
                    </Badge>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Final CTA */}
      <ParentTestimonials/>
    </div>
</>
  
  );
}