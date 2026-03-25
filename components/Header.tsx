"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, GraduationCap, Users, BookOpen, LogIn, Phone, Star, Leaf } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Vision", href: "/about", hash: "#vision", icon: Star },
      { label: "History", href: "/about", hash: "#history", icon: BookOpen },
      { label: "Facilities", href: "/facilities", icon: GraduationCap },
      { label: "Staff Directory", href: "/about", hash: "#staff", icon: Users },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
       { label: "Departments", href:"/academics",   icon: Leaf },
      { label: "Programs", href:"/programs", hash: "#programs", icon: BookOpen },
      { label: "Success Stories", href: "/academics", hash: "#stories", icon: Star },
      { label: "SBC Curriculum", href: "/academics", hash: "#curriculum", icon: GraduationCap },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Apply Now", href: "/admissions", hash: "#apply", icon: GraduationCap },
      { label: "CSSPS Guide", href: "/admissions", hash: "#cssps", icon: BookOpen },
      { label: "Requirements", href: "/admissions", hash: "#requirements", icon: Star },
      { label: "Contact Admission", href: "/admissions", hash: "#tour", icon: Users },
    ],
  },
  
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Phone,
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  const handleNavClick = (href: string, hash?: string) => {
    if (hash) {
      if (pathname === href) {
        // Already on the page, just scroll
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to page with hash
        router.push(href + hash);
      }
    } else {
      router.push(href);
    }
    setIsOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-500 ${
        scrolled
          ? "bg-primary/85 backdrop-blur-lg shadow-elevated py-10"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 ">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-navy-dark" />
            </div>
            <div className="block">
              <h1 className="text-lg font-display text-3xl font-bold text-primary-foreground leading-tight">
                sireJSH
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-xl font-medium text-primary-foreground/90 hover:text-gold transition-colors link-underline"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-elevated border border-border overflow-hidden"
                    >
                      {item.children.map((child, index) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.href, child.hash)}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors w-full text-left"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {child.icon && <child.icon className="w-4 h-4 text-gold" />}
                          {child.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center text-3xl gap-3">
            <Button variant="hero" size="sm" asChild>
              <Link href="/admin">Admin Login</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary-foreground hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 mt-4 bg-primary/95 backdrop-blur-lg rounded-xl px-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleMobileExpanded(item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-primary-foreground hover:text-gold hover:bg-primary-foreground/10 rounded-lg transition-colors font-medium"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileExpanded === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <button
                                  key={child.label}
                                  onClick={() => handleNavClick(child.href, child.hash)}
                                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors text-left"
                                >
                                  {child.icon && <child.icon className="w-4 h-4" />}
                                  {child.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full text-left px-4 py-3 text-primary-foreground hover:text-gold hover:bg-primary-foreground/10 rounded-lg transition-colors font-medium"
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-2 border-t border-primary-foreground/20 mt-2">
                  <Button variant="hero" className="w-full" asChild>
                    <Link href="/admin">Admin Login</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;