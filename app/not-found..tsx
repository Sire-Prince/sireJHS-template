
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, Compass, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const NotFound = () => {
  const location = typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location);
  }, [location]);

  const suggestions = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: BookOpen },
    { name: "Academics", href: "/academics", icon: GraduationCap },
    { name: "Admissions", href: "/admissions", icon: Compass },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* 404 Number with Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative inline-block mb-8"
            >
              <h1 className="text-8xl md:text-9xl font-display font-bold bg-gradient-to-r from-gold via-primary to-gold bg-clip-text text-transparent">
                404
              </h1>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-md animate-pulse" />
                  <div className="relative bg-gold rounded-full p-2 md:p-3">
                    <Search className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Oops! Page Not Found
              </h2>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
              </p>
            </motion.div>

            {/* Helpful Suggestions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <p className="text-sm text-muted-foreground mb-4">You might want to try:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {suggestions.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="group hover:border-gold hover:text-gold transition-all"
                    >
                      <Link href={item.href}>
                        <item.icon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                        {item.name}
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="gold"
                size="lg"
                asChild
                className="group"
              >
                <Link href="/">
                  <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Back to Home
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
                className="group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </Button>
            </motion.div>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 pt-8 border-t border-border"
            >
              <p className="text-sm text-muted-foreground">
                Need assistance?{" "}
                <Link href="/contact" className="text-gold hover:underline font-medium">
                  Contact our support team
                </Link>{" "}
                or check our{" "}
                <Link href="/sitemap" className="text-gold hover:underline font-medium">
                  sitemap
                </Link>
              </p>
            </motion.div>
          </motion.div>

          {/* Decorative Illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
          >
            <svg
              className="w-full h-auto"
              viewBox="0 0 1440 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                fillOpacity="0.1"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;