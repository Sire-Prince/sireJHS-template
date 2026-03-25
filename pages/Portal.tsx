"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, User, GraduationCap, Users, Briefcase, ArrowRight, Eye, EyeOff, Shield, Bell, BookOpen, BarChart3 } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Portal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<"student" | "parent" | "staff">("student");
  const { toast } = useToast();

  const portalTypes = [
    {
      id: "student" as const,
      icon: GraduationCap,
      title: "Student Portal",
      description: "Access your grades, timetables, and academic resources",
      color: "bg-blue-500",
    },
    {
      id: "parent" as const,
      icon: Users,
      title: "Parent Access",
      description: "Monitor your child's progress and receive updates",
      color: "bg-green-500",
    },
    {
      id: "staff" as const,
      icon: Briefcase,
      title: "Staff Portal",
      description: "Manage classes, attendance, and administrative tasks",
      color: "bg-purple-500",
    },
  ];

  const features = [
    { icon: BarChart3, title: "View Results", description: "Check WAEC mock and terminal exam results" },
    { icon: Bell, title: "SMS Alerts", description: "Receive instant notifications on attendance" },
    { icon: BookOpen, title: "Timetables", description: "Access class schedules and exam calendars" },
    { icon: Shield, title: "Secure Access", description: "Role-based authentication for data privacy" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Portal Access",
      description: "Portal login requires backend integration. This is a demo.",
      variant: "destructive",
    });
  };

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-12 px-2 sm:px-10 bg-primary">
            <div className="container mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
                  <Lock className="w-4 h-4" />
                  Secure Access
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
                  sireJSH <span className="text-gold">Portal</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  Access your personalized dashboard for academic information, 
                  attendance tracking, and real-time updates.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Portal Selection & Login */}
          <section className="py-16 px-2 sm:px-10 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                {/* Portal Type Tabs */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {portalTypes.map((portal) => (
                    <motion.button
                      key={portal.id}
                      onClick={() => setActiveTab(portal.id)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        activeTab === portal.id
                          ? "border-gold bg-gold/10"
                          : "border-border hover:border-gold/30"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-lg ${portal.color} flex items-center justify-center mx-auto mb-3`}>
                        <portal.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm">{portal.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 hidden sm:block">{portal.description}</p>
                    </motion.button>
                  ))}
                </div>

                {/* Login Card */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="shadow-elevated border-border">
                    <CardHeader className="text-center">
                      <CardTitle className="font-display text-2xl">
                        {portalTypes.find((p) => p.id === activeTab)?.title} Login
                      </CardTitle>
                      <CardDescription>
                        Enter your credentials to access your dashboard
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                          <Label htmlFor="username">
                            {activeTab === "student" ? "Student ID" : activeTab === "parent" ? "Phone Number" : "Staff ID"}
                          </Label>
                          <div className="relative mt-1">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="username"
                              placeholder={
                                activeTab === "student"
                                  ? "e.g., ANS/2024/001"
                                  : activeTab === "parent"
                                  ? "e.g., 024 XXX XXXX"
                                  : "e.g., STF/001"
                              }
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="password">Password</Label>
                          <div className="relative mt-1">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              className="pl-10 pr-10"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="flex items-center gap-2 text-sm text-muted-foreground">
                            <input type="checkbox" className="rounded border-input" />
                            Remember me
                          </label>
                          <Link href="/forgot-password" className="text-sm text-gold hover:underline">
                            Forgot Password?
                          </Link>
                        </div>

                        <Button type="submit" variant="gold" className="w-full" size="lg">
                          Sign In
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </form>

                      {activeTab === "parent" && (
                        <div className="mt-6 p-4 bg-muted rounded-lg">
                          <h4 className="font-semibold text-sm text-foreground mb-2">New Parent?</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Sign up to receive SMS alerts about your child's attendance and progress.
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/portal/parent-signup">Register for SMS Alerts</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 px-2 sm:px-10 bg-cream">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  Portal <span className="text-gold">Features</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 text-center border border-border shadow-soft"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Help Section */}
          <section className="py-16 px-2 sm:px-10 bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-display font-bold mb-4">Need Help Accessing Your Portal?</h2>
              <p className="text-primary-foreground/80 mb-6">
                Contact the ICT department or visit the administration office for login credentials.
              </p>
              <Button variant="hero-gold" size="lg" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portal;