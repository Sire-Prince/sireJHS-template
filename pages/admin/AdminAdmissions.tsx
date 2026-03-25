"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Search, Filter, Check, X, Trash2, Loader2, 
  Mail, Phone, Calendar, Eye, Edit 
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
import { useToast } from "@/hooks/use-toast";
import { useAdminTheme } from "./AdminLayout";
import { supabase } from "@/lib/supabase"; 

// --- Types ---
type Admission = {
  id: number;
  name: string;
  contact: string;
  email: string;
  date: string;
  grade: string;
  status: "pending" | "approved" | "rejected";
};

// --- Sub-component (Defined OUTSIDE to prevent focus loss) ---
const AdmissionForm = ({ formData, setFormData, onSubmit, buttonText, inputBg, isDarkMode }: any) => (
  <div className="space-y-4 mt-4">
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label>Student Name</Label>
        <Input 
          className={inputBg} 
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label>Parent Contact</Label>
          <Input 
            className={inputBg} 
            value={formData.contact} 
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })} 
          />
        </div>
        <div className="grid gap-2">
          <Label>Email Address</Label>
          <Input 
            type="email" 
            className={inputBg} 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label>Grade Level</Label>
        <Select value={formData.grade} onValueChange={(v) => setFormData({ ...formData, grade: v })}>
          <SelectTrigger className={inputBg}><SelectValue /></SelectTrigger>
          <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700 text-white" : ""}>
            {["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"].map((g) => (
              <SelectItem key={g} value={g}>{g}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
    <Button onClick={onSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2">
      {buttonText}
    </Button>
  </div>
);

// --- Main Component ---
const AdminAdmissions = () => {
  const { isDarkMode } = useAdminTheme();
  const { toast } = useToast();
  
  // State Management
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [processingIds, setProcessingIds] = useState<number[]>([]);
  
  // Dialog States
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [viewAdmission, setViewAdmission] = useState<Admission | null>(null);
  const [editAdmission, setEditAdmission] = useState<Admission | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({ 
    name: "", 
    contact: "", 
    email: "", 
    grade: "Grade 1" 
  });

  const fetchAdmissions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("admissions")
        .select("*")
        .order("date", { ascending: false });

      if (error) throw error;
      setAdmissions(data || []);
    } catch (error: any) {
      toast({ title: "Fetch Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const resetForm = () => setFormData({ name: "", contact: "", email: "", grade: "Grade 1" });

  // Function to add student to students table
  const addStudentToStudentsTable = async (admission: Admission) => {
    try {
      // Check if student already exists
      const { data: existingStudent } = await supabase
        .from("students")
        .select("id")
        .eq("email", admission.email)
        .maybeSingle();

      if (existingStudent) {
        console.log("Student already exists with email:", admission.email);
        return { success: true, alreadyExists: true };
      }

      // Insert into students table
      const { data: newStudent, error: insertError } = await supabase
        .from("students")
        .insert({
          name: admission.name,
          email: admission.email,
          grade: admission.grade,
          enrollment_date: new Date().toISOString().split("T")[0],
          status: "active",
          parent_contact: admission.contact, // Store parent contact
          created_at: new Date().toISOString()
        })
        .select()
        .single();

      if (insertError) throw insertError;

      console.log("Student added successfully:", newStudent);
      return { success: true, alreadyExists: false, student: newStudent };
    } catch (error: any) {
      console.error("Error adding student:", error);
      return { success: false, error: error.message };
    }
  };

  const handleUpdateStatus = async (id: number, newStatus: "approved" | "rejected") => {
    // Add to processing state
    setProcessingIds(prev => [...prev, id]);
    
    try {
      // First, get the admission record
      const admissionToUpdate = admissions.find(a => a.id === id);
      if (!admissionToUpdate) throw new Error("Admission not found");

      // If approving, add to students table
      if (newStatus === "approved") {
        const result = await addStudentToStudentsTable(admissionToUpdate);
        
        if (!result.success) {
          toast({ 
            title: "Student Addition Failed", 
            description: result.error || "Could not add student to students table", 
            variant: "destructive" 
          });
          // Don't update status if adding to students fails
          setProcessingIds(prev => prev.filter(pid => pid !== id));
          return;
        }

        if (result.alreadyExists) {
          toast({ 
            title: "Student Already Exists", 
            description: `${admissionToUpdate.name} is already in the students database`, 
            variant: "default" 
          });
        } else {
          toast({ 
            title: "Student Added", 
            description: `${admissionToUpdate.name} has been added to the students table`, 
            variant: "default" 
          });
        }
      }

      // Update admission status
      const { error } = await supabase
        .from("admissions")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;
      
      // Update local state
      setAdmissions(admissions.map((a) => (a.id === id ? { ...a, status: newStatus } : a)));
      
      toast({ 
        title: "Status Updated", 
        description: `Application ${newStatus} successfully` 
      });
    } catch (error: any) {
      toast({ 
        title: "Update Failed", 
        description: error.message, 
        variant: "destructive" 
      });
    } finally {
      setProcessingIds(prev => prev.filter(pid => pid !== id));
    }
  };

  // Function to batch approve all pending admissions
  const handleBatchApprove = async () => {
    const pendingAdmissions = admissions.filter(a => a.status === "pending");
    if (pendingAdmissions.length === 0) {
      toast({ 
        title: "No Pending Applications", 
        description: "There are no pending admissions to approve", 
        variant: "default" 
      });
      return;
    }

    let successCount = 0;
    let failCount = 0;

    for (const admission of pendingAdmissions) {
      setProcessingIds(prev => [...prev, admission.id]);
      
      try {
        // Add to students
        const result = await addStudentToStudentsTable(admission);
        
        if (!result.success) {
          failCount++;
          continue;
        }

        // Update admission status
        const { error } = await supabase
          .from("admissions")
          .update({ status: "approved" })
          .eq("id", admission.id);

        if (error) throw error;
        
        // Update local state
        setAdmissions(prev => prev.map(a => 
          a.id === admission.id ? { ...a, status: "approved" } : a
        ));
        
        successCount++;
      } catch (error: any) {
        failCount++;
        console.error(`Failed to approve ${admission.name}:`, error);
      } finally {
        setProcessingIds(prev => prev.filter(pid => pid !== admission.id));
      }
    }

    toast({ 
      title: "Batch Approval Complete", 
      description: `${successCount} approved, ${failCount} failed` 
    });
  };

  const handleAdd = async () => {
    if (!formData.name || !formData.contact || !formData.email) {
      toast({ title: "Error", description: "Please fill all fields", variant: "destructive" });
      return;
    }
    try {
      const { data, error } = await supabase.from("admissions").insert([{
        ...formData,
        status: "pending",
        date: new Date().toISOString().split("T")[0],
      }]).select();

      if (error) throw error;
      setAdmissions([data[0], ...admissions]);
      resetForm();
      setIsAddOpen(false);
      toast({ title: "Success", description: "Admission application created" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const handleUpdateRecord = async () => {
    if (!editAdmission) return;
    try {
      const { error } = await supabase
        .from("admissions")
        .update(formData)
        .eq("id", editAdmission.id);

      if (error) throw error;
      setAdmissions(admissions.map(a => a.id === editAdmission.id ? { ...a, ...formData } : a));
      setEditAdmission(null);
      resetForm();
      toast({ title: "Updated", description: "Record updated successfully" });
    } catch (error: any) {
      toast({ title: "Update Error", description: error.message, variant: "destructive" });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    try {
      const { error } = await supabase.from("admissions").delete().eq("id", id);
      if (error) throw error;
      setAdmissions(admissions.filter((a) => a.id !== id));
      toast({ title: "Deleted", description: "Record removed" });
    } catch (error: any) {
      toast({ title: "Delete Error", description: error.message, variant: "destructive" });
    }
  };

  // Logic: Search and Filter
  const filteredAdmissions = admissions.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          a.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || a.status === statusFilter;
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

  const cardBg = isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-200";
  const textMuted = isDarkMode ? "text-slate-400" : "text-gray-500";
  const inputBg = isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-gray-50 border-gray-200";

  return (
    <div className="space-y-6">
      <div className={cn("rounded-2xl border shadow-lg overflow-hidden", cardBg)}>
        <div className={cn("p-4 lg:p-6 border-b", isDarkMode ? "border-slate-800" : "border-gray-200")}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Admissions Management</h2>
              <p className={textMuted}>Review and manage incoming student applications</p>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={handleBatchApprove}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
              >
                <Check className="w-4 h-4 mr-2" /> Batch Approve All
              </Button>
              <Dialog open={isAddOpen} onOpenChange={(v) => { setIsAddOpen(v); if(!v) resetForm(); }}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
                    <Plus className="w-4 h-4 mr-2" /> New Admission
                  </Button>
                </DialogTrigger>
                <DialogContent className={isDarkMode ? "bg-slate-900 border-slate-800 text-white" : ""}>
                  <DialogHeader><DialogTitle>Add New Admission</DialogTitle></DialogHeader>
                  <AdmissionForm 
                    formData={formData} setFormData={setFormData} 
                    onSubmit={handleAdd} buttonText="Create Record" 
                    inputBg={inputBg} isDarkMode={isDarkMode} 
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <div className="relative flex-1">
              <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", textMuted)} />
              <Input 
                placeholder="Search name or email..." 
                className={cn("pl-10", inputBg)} 
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className={cn("w-full sm:w-48", inputBg)}>
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center p-20 gap-4">
              <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
              <p className={textMuted}>Loading records...</p>
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className={cn("text-left text-xs font-medium uppercase", isDarkMode ? "bg-slate-800/50 text-slate-400" : "bg-gray-50 text-gray-500")}>
                  <th className="px-6 py-4">Student Details</th>
                  <th className="px-6 py-4">Grade</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                <AnimatePresence mode="popLayout">
                  {filteredAdmissions.map((admission) => (
                    <motion.tr 
                      key={admission.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="hover:bg-blue-500/5 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-sm">{admission.name}</div>
                        <div className="text-xs text-muted-foreground flex flex-col gap-0.5 mt-1">
                          <span className="flex items-center"><Mail className="w-3 h-3 mr-1" />{admission.email}</span>
                          <span className="flex items-center"><Phone className="w-3 h-3 mr-1" />{admission.contact}</span>
                        </div>
                       </td>
                      <td className="px-6 py-4 text-sm">{admission.grade}</td>
                      <td className="px-6 py-4">
                        <Badge variant="outline" className={cn("capitalize", getStatusBadge(admission.status))}>
                          {admission.status}
                        </Badge>
                       </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 opacity-50" />
                          {new Date(admission.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </div>
                       </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          {/* Approve/Reject Quick Actions */}
                          {admission.status === "pending" && (
                            <div className="flex border-r pr-2 mr-1 gap-1">
                              <Button 
                                size="icon" 
                                variant="ghost" 
                                className="h-8 w-8 text-emerald-500 hover:bg-emerald-500/10" 
                                onClick={() => handleUpdateStatus(admission.id, 'approved')}
                                disabled={processingIds.includes(admission.id)}
                              >
                                {processingIds.includes(admission.id) ? 
                                  <Loader2 className="w-4 h-4 animate-spin" /> : 
                                  <Check className="w-4 h-4" />
                                }
                              </Button>
                              <Button 
                                size="icon" 
                                variant="ghost" 
                                className="h-8 w-8 text-red-500 hover:bg-red-500/10" 
                                onClick={() => handleUpdateStatus(admission.id, 'rejected')}
                                disabled={processingIds.includes(admission.id)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          )}
                          {/* 3 Core Actions */}
                          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => setViewAdmission(admission)}><Eye className="w-4 h-4" /></Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => { 
                            setEditAdmission(admission); 
                            setFormData({ name: admission.name, contact: admission.contact, email: admission.email, grade: admission.grade }); 
                          }}><Edit className="w-4 h-4" /></Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500 hover:bg-red-500/10" onClick={() => handleDelete(admission.id)}><Trash2 className="w-4 h-4" /></Button>
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
      <Dialog open={!!viewAdmission} onOpenChange={() => setViewAdmission(null)}>
        <DialogContent className={isDarkMode ? "bg-slate-900 border-slate-800 text-white" : ""}>
          <DialogHeader><DialogTitle>Admission Details</DialogTitle></DialogHeader>
          {viewAdmission && (
            <div className="space-y-4 mt-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{viewAdmission.name}</h3>
                  <p className={textMuted}>{viewAdmission.email}</p>
                </div>
                <Badge className={getStatusBadge(viewAdmission.status)}>{viewAdmission.status}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t pt-4">
                <div><Label className={textMuted}>Grade Applied</Label><p className="font-medium">{viewAdmission.grade}</p></div>
                <div><Label className={textMuted}>Admission Date</Label><p className="font-medium">{viewAdmission.date}</p></div>
                <div><Label className={textMuted}>Contact</Label><p className="font-medium">{viewAdmission.contact}</p></div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={!!editAdmission} onOpenChange={(v) => { if(!v) setEditAdmission(null); }}>
        <DialogContent className={isDarkMode ? "bg-slate-900 border-slate-800 text-white" : ""}>
          <DialogHeader><DialogTitle>Edit Admission Record</DialogTitle></DialogHeader>
          <AdmissionForm 
            formData={formData} setFormData={setFormData} 
            onSubmit={handleUpdateRecord} buttonText="Save Changes" 
            inputBg={inputBg} isDarkMode={isDarkMode} 
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAdmissions;