"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Check, X, Calendar, Users, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAdminTheme } from "./AdminLayout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type AttendanceRecord = {
  id: number;
  studentName: string;
  grade: string;
  status: "present" | "absent" | "late" | null;
};

const initialStudents: AttendanceRecord[] = [
  { id: 1, studentName: "Ama Serwaa", grade: "Grade 3", status: null },
  { id: 2, studentName: "Yaw Boateng", grade: "Grade 2", status: null },
  { id: 3, studentName: "Kofi Asante", grade: "Grade 5", status: null },
  { id: 4, studentName: "Akosua Mensah", grade: "Grade 4", status: null },
  { id: 5, studentName: "Kweku Osei", grade: "Grade 6", status: null },
  { id: 6, studentName: "Abena Osei", grade: "Grade 4", status: null },
  { id: 7, studentName: "Kwame Asante", grade: "Grade 5", status: null },
  { id: 8, studentName: "Adwoa Mensah", grade: "Grade 3", status: null },
];

const weeklyData = [
  { day: "Mon", attendance: 92 },
  { day: "Tue", attendance: 95 },
  { day: "Wed", attendance: 88 },
  { day: "Thu", attendance: 96 },
  { day: "Fri", attendance: 94 },
];

const AdminAttendance = () => {
  const { isDarkMode } = useAdminTheme();
  const { toast } = useToast();
  const [students, setStudents] = useState<AttendanceRecord[]>(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [gradeFilter, setGradeFilter] = useState("all");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  const filteredStudents = students.filter((s) => {
    const matchesSearch = s.studentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === "all" || s.grade === gradeFilter;
    return matchesSearch && matchesGrade;
  });

  const presentCount = students.filter((s) => s.status === "present").length;
  const absentCount = students.filter((s) => s.status === "absent").length;
  const lateCount = students.filter((s) => s.status === "late").length;
  const attendanceRate = students.length > 0 ? Math.round(((presentCount + lateCount) / students.length) * 100) : 0;

  const markAttendance = (id: number, status: "present" | "absent" | "late") => {
    setStudents(students.map((s) => s.id === id ? { ...s, status } : s));
  };

  const markAllPresent = () => {
    setStudents(students.map((s) => ({ ...s, status: "present" })));
    toast({ title: "Done", description: "All students marked present" });
  };

  const saveAttendance = () => {
    const unmarked = students.filter((s) => !s.status).length;
    if (unmarked > 0) {
      toast({ title: "Warning", description: `${unmarked} students not marked`, variant: "destructive" });
      return;
    }
    toast({ title: "Saved", description: `Attendance for ${selectedDate} saved successfully` });
  };

  const getStatusBadge = (status: string | null) => {
    if (!status) return "bg-slate-500/20 text-slate-500 border-slate-500/30";
    const styles: Record<string, string> = {
      present: "bg-emerald-500/20 text-emerald-500 border-emerald-500/30",
      absent: "bg-red-500/20 text-red-500 border-red-500/30",
      late: "bg-amber-500/20 text-amber-500 border-amber-500/30",
    };
    return styles[status];
  };

  const cardBg = isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-200";
  const textMuted = isDarkMode ? "text-slate-400" : "text-gray-500";
  const inputBg = isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-gray-50 border-gray-200";

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Present", value: presentCount, color: "from-emerald-500 to-emerald-600", icon: Check },
          { label: "Absent", value: absentCount, color: "from-red-500 to-red-600", icon: X },
          { label: "Late", value: lateCount, color: "from-amber-500 to-amber-600", icon: Calendar },
          { label: "Rate", value: `${attendanceRate}%`, color: "from-blue-500 to-purple-600", icon: TrendingUp },
        ].map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={cn("rounded-2xl border p-4 shadow-lg", cardBg)}>
            <div className="flex items-center justify-between">
              <div><p className={cn("text-sm", textMuted)}>{stat.label}</p><p className="text-2xl font-bold">{stat.value}</p></div>
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br", stat.color)}><stat.icon className="w-5 h-5 text-white" /></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Attendance List */}
        <div className={cn("xl:col-span-2 rounded-2xl border shadow-lg", cardBg)}>
          <div className={cn("p-4 lg:p-6 border-b", isDarkMode ? "border-slate-800" : "border-gray-200")}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div><h2 className="text-xl font-semibold">Daily Attendance</h2><p className={textMuted}>Mark student attendance for today</p></div>
              <div className="flex gap-2">
                <Input type="date" className={cn("w-40", inputBg)} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                <Button variant="outline" onClick={markAllPresent}>All Present</Button>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white" onClick={saveAttendance}>Save</Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <div className="relative flex-1">
                <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", textMuted)} />
                <Input placeholder="Search students..." className={cn("pl-10", inputBg)} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
              <Select value={gradeFilter} onValueChange={setGradeFilter}>
                <SelectTrigger className={cn("w-full sm:w-40", inputBg)}><SelectValue /></SelectTrigger>
                <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                  <SelectItem value="all">All Grades</SelectItem>
                  {["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"].map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="divide-y divide-slate-800">
            {filteredStudents.map((student) => (
              <motion.div key={student.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={cn("p-4 flex items-center justify-between", isDarkMode ? "hover:bg-slate-800/50" : "hover:bg-gray-50")}>
                <div>
                  <p className="font-medium">{student.studentName}</p>
                  <p className={cn("text-sm", textMuted)}>{student.grade}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={cn("capitalize", getStatusBadge(student.status))}>{student.status || "Not marked"}</Badge>
                  <div className="flex gap-1">
                    <Button size="icon" variant={student.status === "present" ? "default" : "ghost"} className={student.status === "present" ? "bg-emerald-500 hover:bg-emerald-600" : ""} onClick={() => markAttendance(student.id, "present")}><Check className="w-4 h-4" /></Button>
                    <Button size="icon" variant={student.status === "late" ? "default" : "ghost"} className={student.status === "late" ? "bg-amber-500 hover:bg-amber-600" : ""} onClick={() => markAttendance(student.id, "late")}><Calendar className="w-4 h-4" /></Button>
                    <Button size="icon" variant={student.status === "absent" ? "default" : "ghost"} className={student.status === "absent" ? "bg-red-500 hover:bg-red-600" : ""} onClick={() => markAttendance(student.id, "absent")}><X className="w-4 h-4" /></Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Weekly Chart */}
        <div className={cn("rounded-2xl border p-5 shadow-lg", cardBg)}>
          <h3 className="font-semibold mb-4">Weekly Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#334155" : "#e5e7eb"} vertical={false} />
                <XAxis dataKey="day" stroke={isDarkMode ? "#64748b" : "#9ca3af"} fontSize={12} tickLine={false} />
                <YAxis stroke={isDarkMode ? "#64748b" : "#9ca3af"} fontSize={12} tickLine={false} domain={[80, 100]} />
                <Tooltip contentStyle={{ backgroundColor: isDarkMode ? "#1e293b" : "#fff", border: `1px solid ${isDarkMode ? "#334155" : "#e5e7eb"}`, borderRadius: "8px" }} />
                <Line type="monotone" dataKey="attendance" stroke="#3b82f6" strokeWidth={3} dot={{ fill: "#3b82f6", strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAttendance;