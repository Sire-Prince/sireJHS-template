"use client";
import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "News & Events", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  const portalLinks = [
    { label: "Student Portal", href: "/portal/student" },
    { label: "Parent Access", href: "/portal/parent" },
    { label: "Staff Portal", href: "/portal/staff" },
    { label: "GES Integration", href: "/ges" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/sireSCH", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/sireSCH", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/sireSCH", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@sireSCH", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-gold">
                <GraduationCap className="w-7 h-7 text-navy-dark" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">sireSCH</h2>
                <p className="text-sm text-gold"> sireSCH home of excelence</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              sireSCH Senior High School, proudly serving the Volta Region with excellence in education since our establishment. Nurturing future leaders with knowledge, discipline, and integrity.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-navy-dark flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.filter(link => link.href).map((link) => (
                <li key={link.label}>
                  <Link
                   href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portal Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-gold">Portals</h3>
            <ul className="space-y-3">
              {portalLinks.filter(link => link.href).map((link) => (
                <li key={link.label}>
                  <Link
                   href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  sireSCH Senior High School, sireSCHga, Volta Region, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+233000000000"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  +233 244 546 733
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@sireSCH.edu.gh"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
               palpha824@gmail.com
                </a>
              </li>
            </ul>

            {/* MoMo Payment Section */}
            <div className="mt-6 p-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
              <p className="text-sm font-medium text-gold mb-2">PTA Fees Payment</p>
              <p className="text-xs text-primary-foreground/60">
                Pay school fees via Mobile Money. Contact the bursary for details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} sireSCH Senior High School. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <span >Designed and Developed by sireprince</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
