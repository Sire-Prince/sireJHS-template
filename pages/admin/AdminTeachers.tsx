"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, Trash2, Mail, Phone, Loader2, BookOpen, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useAdminTheme } from "./AdminLayout";
import { supabase } from "@/lib/supabase"; 

type Teacher = {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  department: string;
  join_date: string;
  status: "active" | "on-leave";
};

const AdminTeachers = () => {
  const { isDarkMode } = useAdminTheme();
  const { toast } = useToast();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deptFilter, setDeptFilter] = useState("all");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", department: "Science" });

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("teachers")
        .select("*")
        .order("name", { ascending: true });
      if (error) throw error;
      setTeachers(data || []);
    } catch (error: any) {
      toast({ title: "Fetch Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!formData.name || !formData.email || !formData.subject) {
      toast({ title: "Error", description: "Please fill required fields", variant: "destructive" });
      return;
    }
    try {
      const payload = {
        ...formData,
        join_date: new Date().toISOString().split("T")[0],
        status: "active",
      };
      const { data, error } = await supabase.from("teachers").insert([payload]).select().single();
      if (error) throw error;

      setTeachers([data, ...teachers]);
      setFormData({ name: "", email: "", phone: "", subject: "", department: "Science" });
      setIsAddOpen(false);
      toast({ title: "Success", description: "Teacher added to directory" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase.from("teachers").delete().eq("id", id);
      if (error) throw error;
      setTeachers(teachers.filter((t) => t.id !== id));
      toast({ title: "Deleted", description: "Teacher removed successfully" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const toggleStatus = async (id: number, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "on-leave" : "active";
    try {
      const { error } = await supabase.from("teachers").update({ status: newStatus }).eq("id", id);
      if (error) throw error;
      setTeachers(teachers.map((t) => t.id === id ? { ...t, status: newStatus as any } : t));
      toast({ title: "Status Updated", description: `Teacher marked as ${newStatus}` });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const filteredTeachers = teachers.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || t.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = deptFilter === "all" || t.department === deptFilter;
    return matchesSearch && matchesDept;
  });

  const cardBg = isDarkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-gray-200 text-gray-900";
  const textMuted = isDarkMode ? "text-slate-400" : "text-gray-500";
  const inputBg = isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-gray-50 border-gray-200";

  return (
    <div className="space-y-6">
      <div className={cn("rounded-2xl border shadow-lg", cardBg)}>
        <div className={cn("p-4 lg:p-6 border-b", isDarkMode ? "border-slate-800" : "border-gray-200")}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Teachers Management</h2>
              <p className={textMuted}>Manage teaching staff and assignments</p>
            </div>
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <Plus className="w-4 h-4 mr-2" /> Add Staff Member
                </Button>
              </DialogTrigger>
              <DialogContent className={isDarkMode ? "bg-slate-900 border-slate-800 text-white" : ""}>
                <DialogHeader><DialogTitle>Add New Teacher</DialogTitle></DialogHeader>
                <div className="space-y-4 mt-4">
                  <div><Label>Full Name *</Label><Input className={inputBg} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></div>
                  <div><Label>Email *</Label><Input type="email" className={inputBg} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></div>
                  <div><Label>Phone</Label><Input className={inputBg} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></div>
                  <div><Label>Subject *</Label><Input className={inputBg} value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} /></div>
                  <div>
                    <Label>Department</Label>
                    <Select value={formData.department} onValueChange={(v) => setFormData({ ...formData, department: v })}>
                      <SelectTrigger className={inputBg}><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["Science", "Languages", "Humanities", "Technology", "Arts"].map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={handleAdd} className="w-full bg-blue-600 text-white">Save Teacher</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <div className="relative flex-1">
              <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", textMuted)} />
              <Input placeholder="Search teachers..." className={cn("pl-10", inputBg)} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <Select value={deptFilter} onValueChange={setDeptFilter}>
              <SelectTrigger className={cn("w-full sm:w-40", inputBg)}><SelectValue placeholder="All Depts" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {["Science", "Languages", "Humanities", "Technology", "Arts"].map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        {loading ? (
          <div className="p-20 text-center flex flex-col items-center gap-3">
            <Loader2 className="animate-spin text-blue-600 h-8 w-8" />
            <p className={textMuted}>Fetching staff list...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:p-6">
            <AnimatePresence>
              {filteredTeachers.map((teacher) => (
                <motion.div 
                  key={teacher.id} 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className={cn("rounded-xl border p-5 shadow-sm transition-all hover:shadow-md", cardBg)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border-2 border-blue-500/20">
                        <AvatarFallback className="bg-blue-600 text-white font-bold">
                          {teacher.name.split(" ").slice(-1)[0].substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-base leading-tight">{teacher.name}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <Building2 className="w-3 h-3 opacity-50" />
                          <span className="text-xs opacity-60 uppercase tracking-wider">{teacher.department}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className={cn("capitalize", teacher.status === 'active' ? "border-emerald-500 text-emerald-500" : "border-amber-500 text-amber-500")}>
                      {teacher.status}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-sm opacity-80">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      <span>{teacher.subject}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm opacity-80">
                      <Mail className="w-4 h-4 text-blue-500" />
                      <span className="truncate">{teacher.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm opacity-80">
                      <Phone className="w-4 h-4 text-blue-500" />
                      <span>{teacher.phone || "No phone provided"}</span>
                    </div>
                  </div>

                  {/* VISIBLE ACTIONS */}
                  <div className="pt-4 border-t border-inherit flex items-center justify-between gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-xs font-semibold"
                      onClick={() => toggleStatus(teacher.id, teacher.status)}
                    >
                      {teacher.status === 'active' ? 'Set On-Leave' : 'Set Active'}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-red-500 hover:bg-red-500/10 h-8 w-8"
                      onClick={() => handleDelete(teacher.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminTeachers;