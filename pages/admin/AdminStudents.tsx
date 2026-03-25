"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Search, Eye, Edit, Trash2, GraduationCap, Loader2 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select, SelectContent, SelectItem, 
  SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogTrigger 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useAdminTheme } from "./AdminLayout";
import { supabase } from "@/lib/supabase";

// --- Types ---
type Student = {
  id: number;
  name: string;
  email: string;
  grade: string;
  section: string;
  enrollmentDate: string;
  status: "active" | "inactive";
  parentName: string;
  parentContact: string;
};

// --- Sub-component (Defined OUTSIDE to prevent focus loss) ---
const StudentForm = ({ 
  onSubmit, 
  buttonText, 
  formData, 
  setFormData, 
  inputBg, 
  isDarkMode 
}: any) => (
  <div className="space-y-4 mt-4">
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>Name *</Label>
        <Input 
          className={inputBg} 
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
        />
      </div>
      <div className="space-y-2">
        <Label>Email *</Label>
        <Input 
          type="email" 
          className={inputBg} 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
        />
      </div>
      <div className="space-y-2">
        <Label>Grade</Label>
        <Select value={formData.grade} onValueChange={(v) => setFormData({ ...formData, grade: v })}>
          <SelectTrigger className={inputBg}><SelectValue /></SelectTrigger>
          <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700 text-white" : ""}>
            {["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"].map((g) => (
              <SelectItem key={g} value={g}>{g}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Section</Label>
        <Select value={formData.section} onValueChange={(v) => setFormData({ ...formData, section: v })}>
          <SelectTrigger className={inputBg}><SelectValue /></SelectTrigger>
          <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700 text-white" : ""}>
            {["A", "B", "C"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Parent Name</Label>
        <Input 
          className={inputBg} 
          value={formData.parentName} 
          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })} 
        />
      </div>
      <div className="space-y-2">
        <Label>Parent Contact</Label>
        <Input 
          className={inputBg} 
          value={formData.parentContact} 
          onChange={(e) => setFormData({ ...formData, parentContact: e.target.value })} 
        />
      </div>
    </div>
    <Button 
      onClick={onSubmit} 
      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:opacity-90 transition-opacity"
    >
      {buttonText}
    </Button>
  </div>
);

// --- Main Component ---
const AdminStudents = () => {
  const { isDarkMode } = useAdminTheme();
  const { toast } = useToast();
  
  // State
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [gradeFilter, setGradeFilter] = useState("all");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editStudent, setEditStudent] = useState<Student | null>(null);
  const [viewStudent, setViewStudent] = useState<Student | null>(null);
  
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    grade: "Grade 1", 
    section: "A", 
    parentName: "", 
    parentContact: "" 
  });

  // Load Data
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("students")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const mappedData: Student[] = (data || []).map((s: any) => ({
        id: s.id,
        name: s.name,
        email: s.email,
        grade: s.grade,
        section: s.section,
        enrollmentDate: s.enrollment_date,
        status: s.status,
        parentName: s.parent_name,
        parentContact: s.parent_contact,
      }));
      setStudents(mappedData);
    } catch (error: any) {
      toast({ title: "Fetch Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  // CRUD Handlers
  const handleAdd = async () => {
    if (!formData.name || !formData.email) {
      toast({ title: "Error", description: "Please fill required fields", variant: "destructive" });
      return;
    }
    try {
      const { data, error } = await supabase.from("students").insert([{
        name: formData.name,
        email: formData.email,
        grade: formData.grade,
        section: formData.section,
        parent_name: formData.parentName,
        parent_contact: formData.parentContact,
        enrollment_date: new Date().toISOString().split("T")[0],
        status: "active"
      }]).select().single();

      if (error) throw error;

      const newStudent: Student = {
        ...formData,
        id: data.id,
        enrollmentDate: data.enrollment_date,
        status: data.status,
      };

      setStudents([newStudent, ...students]);
      resetForm();
      setIsAddOpen(false);
      toast({ title: "Success", description: "Student enrolled successfully" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const handleEdit = async () => {
    if (!editStudent) return;
    try {
      const { error } = await supabase.from("students").update({
        name: formData.name,
        email: formData.email,
        grade: formData.grade,
        section: formData.section,
        parent_name: formData.parentName,
        parent_contact: formData.parentContact,
      }).eq("id", editStudent.id);

      if (error) throw error;

      setStudents(students.map((s) => (s.id === editStudent.id ? { ...s, ...formData } : s)));
      setEditStudent(null);
      resetForm();
      toast({ title: "Updated", description: "Student profile updated" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    try {
      const { error } = await supabase.from("students").delete().eq("id", id);
      if (error) throw error;
      setStudents(students.filter((s) => s.id !== id));
      toast({ title: "Deleted", description: "Student record removed" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", grade: "Grade 1", section: "A", parentName: "", parentContact: "" });
  };

  const filteredStudents = students.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === "all" || s.grade === gradeFilter;
    return matchesSearch && matchesGrade;
  });

  const cardBg = isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-200";
  const textMuted = isDarkMode ? "text-slate-400" : "text-gray-500";
  const inputBg = isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-gray-50 border-gray-200";

  return (
    <div className="space-y-6">
      <div className={cn("rounded-2xl border shadow-lg", cardBg)}>
        <div className={cn("p-4 lg:p-6 border-b", isDarkMode ? "border-slate-800" : "border-gray-200")}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Students Management</h2>
              <p className={textMuted}>View and manage enrolled students</p>
            </div>
            <Dialog open={isAddOpen} onOpenChange={(val) => { setIsAddOpen(val); if(!val) resetForm(); }}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
                  <Plus className="w-4 h-4 mr-2" />Add Student
                </Button>
              </DialogTrigger>
              <DialogContent className={cn("max-w-lg", isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "")}>
                <DialogHeader><DialogTitle>Add New Student</DialogTitle></DialogHeader>
                <StudentForm 
                  onSubmit={handleAdd} 
                  buttonText="Add Student" 
                  formData={formData} 
                  setFormData={setFormData} 
                  inputBg={inputBg} 
                  isDarkMode={isDarkMode} 
                />
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <div className="relative flex-1">
              <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", textMuted)} />
              <Input 
                placeholder="Search students..." 
                className={cn("pl-10", inputBg)} 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
              />
            </div>
            <Select value={gradeFilter} onValueChange={setGradeFilter}>
              <SelectTrigger className={cn("w-full sm:w-40", inputBg)}>
                <GraduationCap className="w-4 h-4 mr-2" />
                <SelectValue placeholder="All Grades" />
              </SelectTrigger>
              <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700 text-white" : ""}>
                <SelectItem value="all">All Grades</SelectItem>
                {["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"].map((g) => (
                  <SelectItem key={g} value={g}>{g}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-20 flex flex-col items-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
              <p className={textMuted}>Syncing records...</p>
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className={cn("border-b", isDarkMode ? "border-slate-800" : "border-gray-200")}>
                  <th className={cn("text-left p-4 font-medium text-sm", textMuted)}>Student</th>
                  <th className={cn("text-left p-4 font-medium text-sm hidden md:table-cell", textMuted)}>Grade</th>
                  <th className={cn("text-left p-4 font-medium text-sm hidden lg:table-cell", textMuted)}>Parent</th>
                  <th className={cn("text-left p-4 font-medium text-sm", textMuted)}>Status</th>
                  <th className={cn("text-left p-4 font-medium text-sm", textMuted)}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filteredStudents.map((student) => (
                    <motion.tr 
                      key={student.id} 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                      className={cn("border-b transition-colors", isDarkMode ? "border-slate-800 hover:bg-slate-800/50" : "border-gray-100 hover:bg-gray-50")}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white uppercase">
                              {student.name.split(" ").map((n) => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className={cn("text-sm", textMuted)}>{student.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className={cn("p-4 hidden md:table-cell", textMuted)}>{student.grade} - {student.section}</td>
                      <td className={cn("p-4 hidden lg:table-cell", textMuted)}>{student.parentName}</td>
                      <td className="p-4">
                        <Badge variant="outline" className={cn("capitalize", student.status === "active" ? "bg-emerald-500/20 text-emerald-500 border-emerald-500/30" : "bg-red-500/20 text-red-500 border-red-500/30")}>
                          {student.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setViewStudent(student)}><Eye className="w-4 h-4" /></Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => { 
                            setEditStudent(student); 
                            setFormData({ 
                              name: student.name, 
                              email: student.email, 
                              grade: student.grade, 
                              section: student.section, 
                              parentName: student.parentName, 
                              parentContact: student.parentContact 
                            }); 
                          }}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-red-500 hover:bg-red-500/10" 
                            onClick={() => handleDelete(student.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* View Dialog */}
      <Dialog open={!!viewStudent} onOpenChange={() => setViewStudent(null)}>
        <DialogContent className={isDarkMode ? "bg-slate-900 border-slate-800 text-white" : ""}>
          <DialogHeader><DialogTitle>Student Details</DialogTitle></DialogHeader>
          {viewStudent && (
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl">
                    {viewStudent.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{viewStudent.name}</h3>
                  <p className={textMuted}>{viewStudent.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t pt-4">
                <div><Label className={textMuted}>Grade</Label><p className="font-medium">{viewStudent.grade} - {viewStudent.section}</p></div>
                <div><Label className={textMuted}>Enrollment</Label><p className="font-medium">{viewStudent.enrollmentDate}</p></div>
                <div><Label className={textMuted}>Parent</Label><p className="font-medium">{viewStudent.parentName}</p></div>
                <div><Label className={textMuted}>Contact</Label><p className="font-medium">{viewStudent.parentContact}</p></div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={!!editStudent} onOpenChange={(val) => { if(!val) { setEditStudent(null); resetForm(); } }}>
        <DialogContent className={cn("max-w-lg", isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "")}>
          <DialogHeader><DialogTitle>Edit Student Profile</DialogTitle></DialogHeader>
          <StudentForm 
            onSubmit={handleEdit} 
            buttonText="Update Student" 
            formData={formData} 
            setFormData={setFormData} 
            inputBg={inputBg} 
            isDarkMode={isDarkMode} 
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminStudents;