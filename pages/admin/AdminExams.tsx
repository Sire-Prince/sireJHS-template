"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Eye, Edit, Trash2, Award, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAdminTheme } from "./AdminLayout";

type Grade = {
  id: number;
  studentName: string;
  grade: string;
  subject: string;
  exam: string;
  score: number;
  maxScore: number;
  letterGrade: string;
};

const initialGrades: Grade[] = [
  { id: 1, studentName: "Ama Serwaa", grade: "Grade 3", subject: "Mathematics", exam: "Mid-Term", score: 85, maxScore: 100, letterGrade: "A" },
  { id: 2, studentName: "Yaw Boateng", grade: "Grade 2", subject: "English", exam: "Mid-Term", score: 72, maxScore: 100, letterGrade: "B" },
  { id: 3, studentName: "Kofi Asante", grade: "Grade 5", subject: "Science", exam: "Mid-Term", score: 91, maxScore: 100, letterGrade: "A+" },
  { id: 4, studentName: "Akosua Mensah", grade: "Grade 4", subject: "Social Studies", exam: "Mid-Term", score: 65, maxScore: 100, letterGrade: "C" },
  { id: 5, studentName: "Kweku Osei", grade: "Grade 6", subject: "Mathematics", exam: "Mid-Term", score: 78, maxScore: 100, letterGrade: "B+" },
];

const getLetterGrade = (percentage: number): string => {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 75) return "B+";
  if (percentage >= 70) return "B";
  if (percentage >= 65) return "C+";
  if (percentage >= 60) return "C";
  if (percentage >= 55) return "D+";
  if (percentage >= 50) return "D";
  return "F";
};

const AdminExams = () => {
  const { isDarkMode } = useAdminTheme();
  const { toast } = useToast();
  const [grades, setGrades] = useState<Grade[]>(initialGrades);
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [formData, setFormData] = useState({ studentName: "", grade: "Grade 1", subject: "Mathematics", exam: "Mid-Term", score: "", maxScore: "100" });

  const avgScore = grades.length > 0 ? Math.round(grades.reduce((sum, g) => sum + (g.score / g.maxScore) * 100, 0) / grades.length) : 0;
  const topPerformers = grades.filter((g) => (g.score / g.maxScore) * 100 >= 80).length;

  const filteredGrades = grades.filter((g) => {
    const matchesSearch = g.studentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = subjectFilter === "all" || g.subject === subjectFilter;
    return matchesSearch && matchesSubject;
  });

  const handleAdd = () => {
    if (!formData.studentName || !formData.score) {
      toast({ title: "Error", description: "Please fill required fields", variant: "destructive" });
      return;
    }
    const score = parseInt(formData.score);
    const maxScore = parseInt(formData.maxScore);
    const grade: Grade = {
      id: Date.now(),
      ...formData,
      score,
      maxScore,
      letterGrade: getLetterGrade((score / maxScore) * 100),
    };
    setGrades([grade, ...grades]);
    setFormData({ studentName: "", grade: "Grade 1", subject: "Mathematics", exam: "Mid-Term", score: "", maxScore: "100" });
    setIsAddOpen(false);
    toast({ title: "Success", description: "Grade recorded successfully" });
  };

  const handleDelete = (id: number) => {
    setGrades(grades.filter((g) => g.id !== id));
    toast({ title: "Deleted", description: "Grade removed" });
  };

  const getGradeColor = (letter: string) => {
    if (letter.startsWith("A")) return "bg-emerald-500/20 text-emerald-500 border-emerald-500/30";
    if (letter.startsWith("B")) return "bg-blue-500/20 text-blue-500 border-blue-500/30";
    if (letter.startsWith("C")) return "bg-amber-500/20 text-amber-500 border-amber-500/30";
    return "bg-red-500/20 text-red-500 border-red-500/30";
  };

  const cardBg = isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-200";
  const textMuted = isDarkMode ? "text-slate-400" : "text-gray-500";
  const inputBg = isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-gray-50 border-gray-200";

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Total Records", value: grades.length, icon: Edit, color: "from-blue-500 to-purple-600" },
          { label: "Average Score", value: `${avgScore}%`, icon: TrendingUp, color: "from-emerald-500 to-emerald-600" },
          { label: "Top Performers", value: topPerformers, icon: Award, color: "from-amber-500 to-amber-600" },
        ].map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={cn("rounded-2xl border p-5 shadow-lg", cardBg)}>
            <div className="flex items-center justify-between">
              <div><p className={cn("text-sm", textMuted)}>{stat.label}</p><p className="text-2xl font-bold mt-1">{stat.value}</p></div>
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br", stat.color)}><stat.icon className="w-5 h-5 text-white" /></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grades Table */}
      <div className={cn("rounded-2xl border shadow-lg", cardBg)}>
        <div className={cn("p-4 lg:p-6 border-b", isDarkMode ? "border-slate-800" : "border-gray-200")}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div><h2 className="text-xl font-semibold">Exam Results</h2><p className={textMuted}>View and manage student grades</p></div>
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"><Plus className="w-4 h-4 mr-2" />Add Grade</Button>
              </DialogTrigger>
              <DialogContent className={isDarkMode ? "bg-slate-900 border-slate-800 text-white" : ""}>
                <DialogHeader><DialogTitle>Record New Grade</DialogTitle></DialogHeader>
                <div className="space-y-4 mt-4">
                  <div><Label>Student Name *</Label><Input className={inputBg} value={formData.studentName} onChange={(e) => setFormData({ ...formData, studentName: e.target.value })} /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Grade</Label>
                      <Select value={formData.grade} onValueChange={(v) => setFormData({ ...formData, grade: v })}>
                        <SelectTrigger className={inputBg}><SelectValue /></SelectTrigger>
                        <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                          {["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"].map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Subject</Label>
                      <Select value={formData.subject} onValueChange={(v) => setFormData({ ...formData, subject: v })}>
                        <SelectTrigger className={inputBg}><SelectValue /></SelectTrigger>
                        <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                          {["Mathematics", "English", "Science", "Social Studies", "ICT"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>Score *</Label><Input type="number" className={inputBg} value={formData.score} onChange={(e) => setFormData({ ...formData, score: e.target.value })} /></div>
                    <div><Label>Max Score</Label><Input type="number" className={inputBg} value={formData.maxScore} onChange={(e) => setFormData({ ...formData, maxScore: e.target.value })} /></div>
                  </div>
                  <Button onClick={handleAdd} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">Record Grade</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <div className="relative flex-1">
              <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", textMuted)} />
              <Input placeholder="Search by student..." className={cn("pl-10", inputBg)} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger className={cn("w-full sm:w-40", inputBg)}><SelectValue /></SelectTrigger>
              <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                <SelectItem value="all">All Subjects</SelectItem>
                {["Mathematics", "English", "Science", "Social Studies", "ICT"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={cn("border-b", isDarkMode ? "border-slate-800" : "border-gray-200")}>
                <th className={cn("text-left p-4 font-medium text-sm", textMuted)}>Student</th>
                <th className={cn("text-left p-4 font-medium text-sm hidden sm:table-cell", textMuted)}>Subject</th>
                <th className={cn("text-left p-4 font-medium text-sm hidden md:table-cell", textMuted)}>Exam</th>
                <th className={cn("text-left p-4 font-medium text-sm", textMuted)}>Score</th>
                <th className={cn("text-left p-4 font-medium text-sm", textMuted)}>Grade</th>
                <th className={cn("text-left p-4 font-medium text-sm", textMuted)}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredGrades.map((g) => (
                <motion.tr key={g.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={cn("border-b transition-colors", isDarkMode ? "border-slate-800 hover:bg-slate-800/50" : "border-gray-100 hover:bg-gray-50")}>
                  <td className="p-4"><p className="font-medium">{g.studentName}</p><p className={cn("text-sm", textMuted)}>{g.grade}</p></td>
                  <td className={cn("p-4 hidden sm:table-cell", textMuted)}>{g.subject}</td>
                  <td className={cn("p-4 hidden md:table-cell", textMuted)}>{g.exam}</td>
                  <td className="p-4 font-medium">{g.score}/{g.maxScore}</td>
                  <td className="p-4"><Badge variant="outline" className={getGradeColor(g.letterGrade)}>{g.letterGrade}</Badge></td>
                  <td className="p-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:bg-red-500/10" onClick={() => handleDelete(g.id)}><Trash2 className="w-4 h-4" /></Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminExams;