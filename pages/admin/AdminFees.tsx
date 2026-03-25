"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Eye, CreditCard, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAdminTheme } from "./AdminLayout";

type Fee = {
  id: number;
  studentName: string;
  grade: string;
  feeType: string;
  amount: number;
  paid: number;
  dueDate: string;
  status: "paid" | "partial" | "pending" | "overdue";
};

const initialFees: Fee[] = [
  { id: 1, studentName: "Ama Serwaa", grade: "Grade 3", feeType: "Tuition", amount: 2500, paid: 2500, dueDate: "2024-01-15", status: "paid" },
  { id: 2, studentName: "Yaw Boateng", grade: "Grade 2", feeType: "Tuition", amount: 2500, paid: 1500, dueDate: "2024-01-15", status: "partial" },
  { id: 3, studentName: "Kofi Asante", grade: "Grade 5", feeType: "Tuition", amount: 3000, paid: 0, dueDate: "2024-01-10", status: "overdue" },
  { id: 4, studentName: "Akosua Mensah", grade: "Grade 4", feeType: "Library", amount: 200, paid: 0, dueDate: "2024-01-20", status: "pending" },
  { id: 5, studentName: "Kweku Osei", grade: "Grade 6", feeType: "Tuition", amount: 3500, paid: 3500, dueDate: "2024-01-15", status: "paid" },
];

const AdminFees = () => {
  const { isDarkMode } = useAdminTheme();
  const { toast } = useToast();
  const [fees, setFees] = useState<Fee[]>(initialFees);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isPayOpen, setIsPayOpen] = useState(false);
  const [selectedFee, setSelectedFee] = useState<Fee | null>(null);
  const [paymentAmount, setPaymentAmount] = useState("");

  const totalCollected = fees.reduce((sum, f) => sum + f.paid, 0);
  const totalPending = fees.reduce((sum, f) => sum + (f.amount - f.paid), 0);
  const overdueCount = fees.filter((f) => f.status === "overdue").length;

  const filteredFees = fees.filter((f) => {
    const matchesSearch = f.studentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || f.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handlePayment = () => {
    if (!selectedFee || !paymentAmount) return;
    const amount = parseFloat(paymentAmount);
    if (isNaN(amount) || amount <= 0) {
      toast({ title: "Error", description: "Enter a valid amount", variant: "destructive" });
      return;
    }
    const newPaid = Math.min(selectedFee.paid + amount, selectedFee.amount);
    const newStatus = newPaid >= selectedFee.amount ? "paid" : "partial";
    setFees(fees.map((f) => f.id === selectedFee.id ? { ...f, paid: newPaid, status: newStatus } : f));
    setIsPayOpen(false);
    setSelectedFee(null);
    setPaymentAmount("");
    toast({ title: "Success", description: `Payment of GH₵${amount.toLocaleString()} recorded` });
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      paid: "bg-emerald-500/20 text-emerald-500 border-emerald-500/30",
      partial: "bg-amber-500/20 text-amber-500 border-amber-500/30",
      pending: "bg-blue-500/20 text-blue-500 border-blue-500/30",
      overdue: "bg-red-500/20 text-red-500 border-red-500/30",
    };
    return styles[status] || styles.pending;
  };

  const cardBg = isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-200";
  const textMuted = isDarkMode ? "text-slate-400" : "text-gray-500";
  const inputBg = isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-gray-50 border-gray-200";

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Total Collected", value: `GH₵${totalCollected.toLocaleString()}`, icon: TrendingUp, color: "from-emerald-500 to-emerald-600" },
          { label: "Pending Fees", value: `GH₵${totalPending.toLocaleString()}`, icon: CreditCard, color: "from-amber-500 to-amber-600" },
          { label: "Overdue", value: overdueCount, icon: AlertCircle, color: "from-red-500 to-red-600" },
        ].map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={cn("rounded-2xl border p-5 shadow-lg", cardBg)}>
            <div className="flex items-center justify-between">
              <div><p className={cn("text-sm", textMuted)}>{stat.label}</p><p className="text-2xl font-bold mt-1">{stat.value}</p></div>
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br", stat.color)}><stat.icon className="w-5 h-5 text-white" /></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fees Table */}
      <div className={cn("rounded-2xl border shadow-lg", cardBg)}>
        <div className={cn("p-4 lg:p-6 border-b", isDarkMode ? "border-slate-800" : "border-gray-200")}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div><h2 className="text-xl font-semibold">Fee Records</h2><p className={textMuted}>Track and manage student payments</p></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <div className="relative flex-1">
              <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", textMuted)} />
              <Input placeholder="Search by student..." className={cn("pl-10", inputBg)} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className={cn("w-full sm:w-40", inputBg)}><SelectValue /></SelectTrigger>
              <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="partial">Partial</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={cn("border-b", isDarkMode ? "border-slate-800" : "border-gray-200")}>
                <th className={cn("text-left p-4 font-medium text-sm", textMuted)}>Student</th>
                <th className={cn("text-left p-4 font-medium text-sm hidden sm:table-cell", textMuted)}>Fee Type</th>
                <th className={cn("text-left p-4 font-medium text-sm", textMuted)}>Amount</th>
                <th className={cn("text-left p-4 font-medium text-sm hidden md:table-cell", textMuted)}>Paid</th>
                <th className={cn("text-left p-4 font-medium text-sm", textMuted)}>Status</th>
                <th className={cn("text-left p-4 font-medium text-sm", textMuted)}>Action</th>
               </tr>
            </thead>
            <tbody>
              {filteredFees.map((fee) => (
                <motion.tr key={fee.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={cn("border-b transition-colors", isDarkMode ? "border-slate-800 hover:bg-slate-800/50" : "border-gray-100 hover:bg-gray-50")}>
                  <td className="p-4"><p className="font-medium">{fee.studentName}</p><p className={cn("text-sm", textMuted)}>{fee.grade}</p></td>
                  <td className={cn("p-4 hidden sm:table-cell", textMuted)}>{fee.feeType}</td>
                  <td className="p-4 font-medium">GH₵{fee.amount.toLocaleString()}</td>
                  <td className={cn("p-4 hidden md:table-cell")}>
                    <span className={fee.paid >= fee.amount ? "text-emerald-500" : "text-amber-500"}>GH₵{fee.paid.toLocaleString()}</span>
                  </td>
                  <td className="p-4"><Badge variant="outline" className={cn("capitalize", getStatusBadge(fee.status))}>{fee.status}</Badge></td>
                  <td className="p-4">
                    {fee.status !== "paid" && (
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white" onClick={() => { setSelectedFee(fee); setIsPayOpen(true); }}>
                        <CreditCard className="w-4 h-4 mr-1" />Pay
                      </Button>
                    )}
                    {fee.status === "paid" && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Dialog */}
      <Dialog open={isPayOpen} onOpenChange={setIsPayOpen}>
        <DialogContent className={isDarkMode ? "bg-slate-900 border-slate-800 text-white" : ""}>
          <DialogHeader><DialogTitle>Record Payment</DialogTitle></DialogHeader>
          {selectedFee && (
            <div className="space-y-4 mt-4">
              <div className={cn("p-4 rounded-lg", isDarkMode ? "bg-slate-800" : "bg-gray-100")}>
                <p className="font-medium">{selectedFee.studentName}</p>
                <p className={textMuted}>{selectedFee.feeType} - {selectedFee.grade}</p>
                <div className="flex justify-between mt-2">
                  <span className={textMuted}>Total:</span><span className="font-medium">GH₵{selectedFee.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className={textMuted}>Paid:</span><span className="text-emerald-500">GH₵{selectedFee.paid.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className={textMuted}>Balance:</span><span className="text-amber-500">GH₵{(selectedFee.amount - selectedFee.paid).toLocaleString()}</span>
                </div>
              </div>
              <div><Label>Payment Amount (GH₵)</Label><Input type="number" className={inputBg} value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} placeholder={`Max: ${selectedFee.amount - selectedFee.paid}`} /></div>
              <Button onClick={handlePayment} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">Record Payment</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminFees;