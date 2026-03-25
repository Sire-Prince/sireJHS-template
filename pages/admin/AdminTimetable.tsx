"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useAdminTheme } from "./AdminLayout";

type Period = {
  id: number;
  time: string;
  subject: string;
  teacher: string;
  room: string;
};

type DaySchedule = {
  day: string;
  periods: Period[];
};

const initialSchedule: DaySchedule[] = [
  { day: "Monday", periods: [
    { id: 1, time: "8:00 - 8:45", subject: "Mathematics", teacher: "Mr. Asante", room: "Room 101" },
    { id: 2, time: "8:45 - 9:30", subject: "English", teacher: "Mrs. Mensah", room: "Room 102" },
    { id: 3, time: "9:45 - 10:30", subject: "Science", teacher: "Mr. Boateng", room: "Lab 1" },
    { id: 4, time: "10:30 - 11:15", subject: "Social Studies", teacher: "Mrs. Osei", room: "Room 103" },
    { id: 5, time: "11:30 - 12:15", subject: "ICT", teacher: "Mr. Appiah", room: "Computer Lab" },
  ]},
  { day: "Tuesday", periods: [
    { id: 6, time: "8:00 - 8:45", subject: "English", teacher: "Mrs. Mensah", room: "Room 102" },
    { id: 7, time: "8:45 - 9:30", subject: "Mathematics", teacher: "Mr. Asante", room: "Room 101" },
    { id: 8, time: "9:45 - 10:30", subject: "Physical Ed", teacher: "Mr. Owusu", room: "Field" },
    { id: 9, time: "10:30 - 11:15", subject: "Science", teacher: "Mr. Boateng", room: "Lab 1" },
    { id: 10, time: "11:30 - 12:15", subject: "Art", teacher: "Mrs. Addo", room: "Art Room" },
  ]},
  { day: "Wednesday", periods: [
    { id: 11, time: "8:00 - 8:45", subject: "Science", teacher: "Mr. Boateng", room: "Lab 1" },
    { id: 12, time: "8:45 - 9:30", subject: "Social Studies", teacher: "Mrs. Osei", room: "Room 103" },
    { id: 13, time: "9:45 - 10:30", subject: "Mathematics", teacher: "Mr. Asante", room: "Room 101" },
    { id: 14, time: "10:30 - 11:15", subject: "English", teacher: "Mrs. Mensah", room: "Room 102" },
    { id: 15, time: "11:30 - 12:15", subject: "Music", teacher: "Mr. Darko", room: "Music Room" },
  ]},
  { day: "Thursday", periods: [
    { id: 16, time: "8:00 - 8:45", subject: "ICT", teacher: "Mr. Appiah", room: "Computer Lab" },
    { id: 17, time: "8:45 - 9:30", subject: "Science", teacher: "Mr. Boateng", room: "Lab 1" },
    { id: 18, time: "9:45 - 10:30", subject: "English", teacher: "Mrs. Mensah", room: "Room 102" },
    { id: 19, time: "10:30 - 11:15", subject: "Mathematics", teacher: "Mr. Asante", room: "Room 101" },
    { id: 20, time: "11:30 - 12:15", subject: "French", teacher: "Mme. Koffi", room: "Room 104" },
  ]},
  { day: "Friday", periods: [
    { id: 21, time: "8:00 - 8:45", subject: "Mathematics", teacher: "Mr. Asante", room: "Room 101" },
    { id: 22, time: "8:45 - 9:30", subject: "Physical Ed", teacher: "Mr. Owusu", room: "Field" },
    { id: 23, time: "9:45 - 10:30", subject: "Social Studies", teacher: "Mrs. Osei", room: "Room 103" },
    { id: 24, time: "10:30 - 11:15", subject: "Science", teacher: "Mr. Boateng", room: "Lab 1" },
    { id: 25, time: "11:30 - 12:15", subject: "Assembly", teacher: "All Staff", room: "Hall" },
  ]},
];

const subjectColors: Record<string, string> = {
  "Mathematics": "from-blue-500 to-blue-600",
  "English": "from-purple-500 to-purple-600",
  "Science": "from-emerald-500 to-emerald-600",
  "Social Studies": "from-amber-500 to-amber-600",
  "ICT": "from-cyan-500 to-cyan-600",
  "Physical Ed": "from-red-500 to-red-600",
  "Art": "from-pink-500 to-pink-600",
  "Music": "from-indigo-500 to-indigo-600",
  "French": "from-orange-500 to-orange-600",
  "Assembly": "from-slate-500 to-slate-600",
};

const AdminTimetable = () => {
  const { isDarkMode } = useAdminTheme();
  const { toast } = useToast();
  const [schedule, setSchedule] = useState<DaySchedule[]>(initialSchedule);
  const [selectedGrade, setSelectedGrade] = useState("Grade 5");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [formData, setFormData] = useState({ day: "Monday", time: "", subject: "", teacher: "", room: "" });

  const handleAdd = () => {
    if (!formData.time || !formData.subject || !formData.teacher) {
      toast({ title: "Error", description: "Please fill required fields", variant: "destructive" });
      return;
    }
    const newPeriod: Period = { id: Date.now(), ...formData };
    setSchedule(schedule.map((d) => d.day === formData.day ? { ...d, periods: [...d.periods, newPeriod] } : d));
    setFormData({ day: "Monday", time: "", subject: "", teacher: "", room: "" });
    setIsAddOpen(false);
    toast({ title: "Success", description: "Period added successfully" });
  };

  const handleDelete = (day: string, periodId: number) => {
    setSchedule(schedule.map((d) => d.day === day ? { ...d, periods: d.periods.filter((p) => p.id !== periodId) } : d));
    toast({ title: "Deleted", description: "Period removed" });
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
            <h2 className="text-xl font-semibold">Class Timetable</h2>
            <p className={textMuted}>Weekly schedule for {selectedGrade}</p>
          </div>
          <div className="flex gap-3">
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger className={cn("w-40", inputBg)}><SelectValue /></SelectTrigger>
              <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                {["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"].map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
              </SelectContent>
            </Select>
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"><Plus className="w-4 h-4 mr-2" />Add Period</Button>
              </DialogTrigger>
              <DialogContent className={isDarkMode ? "bg-slate-900 border-slate-800 text-white" : ""}>
                <DialogHeader><DialogTitle>Add New Period</DialogTitle></DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <Label>Day</Label>
                    <Select value={formData.day} onValueChange={(v) => setFormData({ ...formData, day: v })}>
                      <SelectTrigger className={inputBg}><SelectValue /></SelectTrigger>
                      <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div><Label>Time *</Label><Input className={inputBg} placeholder="e.g., 8:00 - 8:45" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} /></div>
                  <div><Label>Subject *</Label><Input className={inputBg} value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} /></div>
                  <div><Label>Teacher *</Label><Input className={inputBg} value={formData.teacher} onChange={(e) => setFormData({ ...formData, teacher: e.target.value })} /></div>
                  <div><Label>Room</Label><Input className={inputBg} value={formData.room} onChange={(e) => setFormData({ ...formData, room: e.target.value })} /></div>
                  <Button onClick={handleAdd} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">Add Period</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {schedule.map((day) => (
          <motion.div key={day.day} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={cn("rounded-2xl border shadow-lg overflow-hidden", cardBg)}>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
              <h3 className="font-semibold text-white">{day.day}</h3>
            </div>
            <div className="p-3 space-y-2">
              {day.periods.map((period) => (
                <div key={period.id} className={cn("rounded-xl p-3 relative group", isDarkMode ? "bg-slate-800" : "bg-gray-100")}>
                  <div className={cn("absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b", subjectColors[period.subject] || "from-slate-500 to-slate-600")} />
                  <div className="pl-2">
                    <div className={cn("flex items-center gap-1 text-xs mb-1", textMuted)}><Clock className="w-3 h-3" />{period.time}</div>
                    <p className="font-medium text-sm">{period.subject}</p>
                    <p className={cn("text-xs", textMuted)}>{period.teacher}</p>
                    <p className={cn("text-xs", textMuted)}>{period.room}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 text-red-500" onClick={() => handleDelete(day.day, period.id)}><Trash2 className="w-3 h-3" /></Button>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminTimetable;