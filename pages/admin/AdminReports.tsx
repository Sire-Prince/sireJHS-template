"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Users, CreditCard, Calendar, TrendingUp, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAdminTheme } from "./AdminLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const enrollmentData = [
  { month: "Sep", students: 850 },
  { month: "Oct", students: 872 },
  { month: "Nov", students: 865 },
  { month: "Dec", students: 880 },
  { month: "Jan", students: 892 },
];

const feeData = [
  { month: "Sep", collected: 45000, pending: 12000 },
  { month: "Oct", collected: 52000, pending: 8000 },
  { month: "Nov", collected: 48000, pending: 15000 },
  { month: "Dec", collected: 61000, pending: 5000 },
  { month: "Jan", collected: 55000, pending: 10000 },
];

const gradeDistribution = [
  { name: "Grade 1", value: 145, color: "#3b82f6" },
  { name: "Grade 2", value: 152, color: "#8b5cf6" },
  { name: "Grade 3", value: 148, color: "#10b981" },
  { name: "Grade 4", value: 155, color: "#f59e0b" },
  { name: "Grade 5", value: 142, color: "#ef4444" },
  { name: "Grade 6", value: 150, color: "#06b6d4" },
];

const attendanceData = [
  { week: "Week 1", rate: 94 },
  { week: "Week 2", rate: 92 },
  { week: "Week 3", rate: 96 },
  { week: "Week 4", rate: 93 },
];

const reports = [
  { id: 1, name: "Student Enrollment Report", type: "PDF", icon: Users, description: "Complete list of enrolled students with details" },
  { id: 2, name: "Fee Collection Summary", type: "Excel", icon: CreditCard, description: "Monthly fee collection and pending payments" },
  { id: 3, name: "Attendance Report", type: "PDF", icon: Calendar, description: "Daily and weekly attendance statistics" },
  { id: 4, name: "Academic Performance", type: "PDF", icon: TrendingUp, description: "Grade-wise academic performance analysis" },
  { id: 5, name: "Teacher Summary", type: "Excel", icon: Users, description: "Staff details and assignments" },
];

const AdminReports = () => {
  const { isDarkMode } = useAdminTheme();
  const { toast } = useToast();
  const [selectedPeriod, setSelectedPeriod] = useState("this-month");

  const handleDownload = (reportName: string) => {
    toast({ title: "Downloading", description: `${reportName} is being generated...` });
    setTimeout(() => {
      toast({ title: "Complete", description: `${reportName} downloaded successfully` });
    }, 1500);
  };

  const cardBg = isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-200";
  const textMuted = isDarkMode ? "text-slate-400" : "text-gray-500";
  const inputBg = isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-gray-50 border-gray-200";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={cn("rounded-2xl border p-4 lg:p-6 shadow-lg", cardBg)}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Reports & Analytics</h2>
            <p className={textMuted}>View insights and download reports</p>
          </div>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className={cn("w-40", inputBg)}><SelectValue /></SelectTrigger>
            <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="this-term">This Term</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enrollment Trend */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={cn("rounded-2xl border p-5 shadow-lg", cardBg)}>
          <h3 className="font-semibold mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blue-500" />Enrollment Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#334155" : "#e5e7eb"} vertical={false} />
                <XAxis dataKey="month" stroke={isDarkMode ? "#64748b" : "#9ca3af"} fontSize={12} tickLine={false} />
                <YAxis stroke={isDarkMode ? "#64748b" : "#9ca3af"} fontSize={12} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: isDarkMode ? "#1e293b" : "#fff", border: `1px solid ${isDarkMode ? "#334155" : "#e5e7eb"}`, borderRadius: "8px" }} />
                <Line type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={3} dot={{ fill: "#3b82f6", strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Fee Collection */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className={cn("rounded-2xl border p-5 shadow-lg", cardBg)}>
          <h3 className="font-semibold mb-4 flex items-center gap-2"><CreditCard className="w-5 h-5 text-emerald-500" />Fee Collection</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={feeData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#334155" : "#e5e7eb"} vertical={false} />
                <XAxis dataKey="month" stroke={isDarkMode ? "#64748b" : "#9ca3af"} fontSize={12} tickLine={false} />
                <YAxis stroke={isDarkMode ? "#64748b" : "#9ca3af"} fontSize={12} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: isDarkMode ? "#1e293b" : "#fff", border: `1px solid ${isDarkMode ? "#334155" : "#e5e7eb"}`, borderRadius: "8px" }} formatter={(value: number) => [`GH₵${value.toLocaleString()}`, ""]} />
                <Bar dataKey="collected" fill="#10b981" radius={[4, 4, 0, 0]} name="Collected" />
                <Bar dataKey="pending" fill="#f59e0b" radius={[4, 4, 0, 0]} name="Pending" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Grade Distribution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={cn("rounded-2xl border p-5 shadow-lg", cardBg)}>
          <h3 className="font-semibold mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-purple-500" />Grade Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={gradeDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value" label={({ name, value }) => `${name}: ${value}`} labelLine={false}>
                  {gradeDistribution.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: isDarkMode ? "#1e293b" : "#fff", border: `1px solid ${isDarkMode ? "#334155" : "#e5e7eb"}`, borderRadius: "8px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Attendance Summary */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className={cn("rounded-2xl border p-5 shadow-lg", cardBg)}>
          <h3 className="font-semibold mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-amber-500" />Weekly Attendance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#334155" : "#e5e7eb"} vertical={false} />
                <XAxis dataKey="week" stroke={isDarkMode ? "#64748b" : "#9ca3af"} fontSize={12} tickLine={false} />
                <YAxis stroke={isDarkMode ? "#64748b" : "#9ca3af"} fontSize={12} tickLine={false} domain={[80, 100]} />
                <Tooltip contentStyle={{ backgroundColor: isDarkMode ? "#1e293b" : "#fff", border: `1px solid ${isDarkMode ? "#334155" : "#e5e7eb"}`, borderRadius: "8px" }} formatter={(value: number) => [`${value}%`, "Attendance"]} />
                <Bar dataKey="rate" fill="url(#attendanceGradient)" radius={[4, 4, 0, 0]} />
                <defs>
                  <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Downloadable Reports */}
      <div className={cn("rounded-2xl border shadow-lg", cardBg)}>
        <div className={cn("p-4 lg:p-6 border-b", isDarkMode ? "border-slate-800" : "border-gray-200")}>
          <h3 className="font-semibold">Downloadable Reports</h3>
          <p className={textMuted}>Generate and download detailed reports</p>
        </div>
        <div className="divide-y divide-slate-800">
          {reports.map((report) => (
            <motion.div key={report.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={cn("p-4 flex items-center justify-between", isDarkMode ? "hover:bg-slate-800/50" : "hover:bg-gray-50")}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <report.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">{report.name}</p>
                  <p className={cn("text-sm", textMuted)}>{report.description}</p>
                </div>
              </div>
              <Button variant="outline" onClick={() => handleDownload(report.name)} className={isDarkMode ? "border-slate-700" : ""}>
                <Download className="w-4 h-4 mr-2" />{report.type}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminReports;