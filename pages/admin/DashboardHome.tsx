"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase"; 
import {
  UserPlus,
  Users,
  CreditCard,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  Plus,
  Eye,
  Calendar,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAdminTheme } from "./AdminLayout";
import { createClient } from "@supabase/supabase-js";

// Types
type Admission = {
  id: number;
  name: string;
  contact: string;
  date: string;
  status: "pending" | "approved" | "rejected";
};

const DashboardHome = () => {
  const { isDarkMode } = useAdminTheme();
  const router = useRouter();
  
  // State
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [totalStudents, setTotalStudents] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Fetch Data from Supabase
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // 1. Fetch Recent Admissions
      const { data: recentAdmissions } = await supabase
        .from("admissions")
        .select("*")
        .order("date", { ascending: false })
        .limit(5);

      // 2. Fetch Total Student Count
      const { count } = await supabase
        .from("students")
        .select("*", { count: 'exact', head: true });

      setAdmissions(recentAdmissions || []);
      setTotalStudents(count || 0);
    } catch (error) {
      console.error("Dashboard Load Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Stats Logic
  const statsCards = [
    {
      title: "Total Admissions",
      value: admissions.length.toString(),
      change: "+12%",
      trend: "up",
      icon: UserPlus,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Active Students",
      value: totalStudents.toString(),
      change: "+5%",
      trend: "up",
      icon: Users,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "Pending Fees",
      value: "GH₵45,200",
      change: "+8%",
      trend: "up",
      icon: CreditCard,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Today's Attendance",
      value: "95%",
      change: "+2%",
      trend: "up",
      icon: CheckCircle,
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const filteredAdmissions = admissions.filter((admission) => {
    const matchesSearch = admission.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || admission.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-amber-500/20 text-amber-500 border-amber-500/30",
      approved: "bg-emerald-500/20 text-emerald-500 border-emerald-500/30",
      rejected: "bg-red-500/20 text-red-500 border-red-500/30",
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  // Static Chart Data
  const attendanceChartData = [
    { day: "Mon", attendance: 92 },
    { day: "Tue", attendance: 95 },
    { day: "Wed", attendance: 88 },
    { day: "Thu", attendance: 96 },
    { day: "Fri", attendance: 94 },
  ];

  const feesChartData = [
    { month: "Sep", collected: 45000 },
    { month: "Oct", collected: 52000 },
    { month: "Nov", collected: 48000 },
    { month: "Dec", collected: 61000 },
    { month: "Jan", collected: 55000 },
  ];

  const cardBg = isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-gray-200 text-gray-900";
  const textMuted = isDarkMode ? "text-slate-400" : "text-gray-500";
  const inputBg = isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-gray-50 border-gray-200";

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn("rounded-2xl p-5 border shadow-lg cursor-pointer transition-transform hover:scale-[1.02]", cardBg)}
            onClick={() => router.push(`/admin/${stat.title.toLowerCase().split(' ')[1]}`)}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className={cn("text-sm", textMuted)}>{stat.title}</p>
                <p className="text-2xl lg:text-3xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br", stat.color)}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-3">
              {stat.trend === "up" ? <TrendingUp className="w-4 h-4 text-emerald-500" /> : <TrendingDown className="w-4 h-4 text-red-500" />}
              <span className={cn("text-sm font-medium", stat.trend === "up" ? "text-emerald-500" : "text-red-500")}>{stat.change}</span>
              <span className={cn("text-sm", textMuted)}>vs last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Admissions Table */}
        <div className={cn("xl:col-span-2 rounded-2xl border shadow-lg", cardBg)}>
          <div className="p-6 border-b border-inherit flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold">Recent Admissions</h2>
            <div className="flex gap-2">
               <Input 
                placeholder="Search..." 
                className={cn("w-full sm:w-64", inputBg)} 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
               />
               <Button onClick={() => router.push("/admin/admissions")} className="bg-blue-600 text-white hover:bg-blue-700">
                 <Plus className="w-4 h-4 mr-2" /> New
               </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className={cn("border-b text-xs uppercase font-semibold", textMuted)}>
                  <th className="p-4">Student</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Action</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-inherit">
                {filteredAdmissions.map((admission) => (
                  <tr key={admission.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <div className="font-medium">{admission.name}</div>
                      <div className="text-xs opacity-60">{admission.contact}</div>
                    </td>
                    <td className="p-4 text-sm opacity-80">{admission.date}</td>
                    <td className="p-4">
                      <Badge className={getStatusBadge(admission.status)}>{admission.status}</Badge>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm" onClick={() => router.push("/admin/admissions")}>
                        <Eye className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Charts */}
        <div className="space-y-6">
          <div className={cn("rounded-2xl border shadow-lg p-6", cardBg)}>
            <h3 className="font-semibold mb-4">Attendance Rate</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceChartData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="day" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Line type="monotone" dataKey="attendance" stroke="#10b981" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={cn("rounded-2xl border shadow-lg p-6", cardBg)}>
            <h3 className="font-semibold mb-4">Revenue Status</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={feesChartData}>
                  <XAxis dataKey="month" hide />
                  <Tooltip />
                  <Bar dataKey="collected" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;