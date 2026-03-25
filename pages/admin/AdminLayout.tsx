"use client";

import { useState, createContext, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import {
  LayoutDashboard,
  UserPlus,
  Users,
  GraduationCap,
  CreditCard,
  Calendar,
  ClipboardList,
  Clock,
  FileText,
  Settings,
  Menu,
  X,
  Sun,
  Moon,
  ArrowRightSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: UserPlus, label: "Admissions", path: "/admin/admissions" },
  { icon: Users, label: "Students", path: "/admin/students" },
  { icon: GraduationCap, label: "Teachers", path: "/admin/teachers" },
  { icon: CreditCard, label: "Fees/Payments", path: "/admin/fees" },
  { icon: Calendar, label: "Attendance", path: "/admin/attendance" },
  { icon: ClipboardList, label: "Exams/Grades", path: "/admin/exams" },
  { icon: Clock, label: "Timetable", path: "/admin/timetable" },
  { icon: FileText, label: "Reports", path: "/admin/reports" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
  { icon: ArrowRightSquare, label: "Go To Website", path: "/" },
];

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {},
});

export const useAdminTheme = () => useContext(ThemeContext);

const AdminLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("admin-theme");
      return saved ? saved === "dark" : true;
    }
    return true; // Default for SSR
  });
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("admin-theme", isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const isActive = (path: string) => {
    if (!pathname) return false; // ✅ Fix: Check if pathname is null
    if (path === "/admin") return pathname === "/admin";
    return pathname.startsWith(path);
  };

  const getPageTitle = () => {
    if (!pathname) return "Dashboard"; // ✅ Fix: Return default if pathname is null
    const current = navItems.find((item) => isActive(item.path));
    return current?.label || "Dashboard";
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div
        className={cn(
          "min-h-screen flex transition-colors duration-300",
          isDarkMode ? "bg-slate-950 text-white" : "bg-gray-100 text-gray-900"
        )}
      >
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 border-r transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
            isDarkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-gray-200"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between p-4 border-b",
              isDarkMode ? "border-slate-800" : "border-gray-200"
            )}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">SMS Admin</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "lg:hidden",
                isDarkMode
                  ? "text-slate-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              )}
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ x: 4 }}
                onClick={() => {
                  router.push(item.path);
                  setSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",
                  isActive(item.path)
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-500 border border-blue-500/30"
                    : isDarkMode
                    ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </nav>
             
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="sticky top-0 z-30 bg-gradient-to-r from-blue-600 to-purple-600 p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:bg-white/10"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </Button>
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold text-white">
                    {getPageTitle()}
                  </h1>
                  <p className="text-white/70 text-sm">
                    Welcome back, Administrator
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Theme toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="text-white hover:bg-white/10"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </Button>
                {/* Ghana flag accent */}
                <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-white/10 rounded-full">
                  <div className="w-4 h-3 flex flex-col overflow-hidden rounded-sm">
                    <div className="flex-1 bg-red-600" />
                    <div className="flex-1 bg-yellow-400" />
                    <div className="flex-1 bg-green-600" />
                  </div>
                  <span className="text-xs text-white/80">Ghana</span>
                </div>
              </div>
            </div>
          </header>

          <div className="p-4 lg:p-6">
            {children}
          </div>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default AdminLayout;