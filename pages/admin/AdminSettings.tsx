"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, School, Mail, Phone, MapPin, Globe, Bell, Shield, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAdminTheme } from "./AdminLayout";

const AdminSettings = () => {
  const { isDarkMode } = useAdminTheme();
  const { toast } = useToast();
  
  const [schoolSettings, setSchoolSettings] = useState({
    name: "Excellence Academy",
    email: "info@excellenceacademy.edu.gh",
    phone: "+233 24 123 4567",
    address: "123 Education Street, Accra, Ghana",
    website: "www.excellenceacademy.edu.gh",
    motto: "Excellence in Education",
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    feeReminders: true,
    attendanceAlerts: true,
    examResults: true,
  });

  const [academic, setAcademic] = useState({
    currentTerm: "Term 2",
    academicYear: "2023/2024",
    passMark: "50",
    gradingSystem: "letter",
  });

  const handleSaveSchool = () => {
    toast({ title: "Saved", description: "School settings updated successfully" });
  };

  const handleSaveNotifications = () => {
    toast({ title: "Saved", description: "Notification preferences updated" });
  };

  const handleSaveAcademic = () => {
    toast({ title: "Saved", description: "Academic settings updated" });
  };

  const cardBg = isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-200";
  const textMuted = isDarkMode ? "text-slate-400" : "text-gray-500";
  const inputBg = isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-gray-50 border-gray-200";

  return (
    <div className="space-y-6 max-w-4xl">
      {/* School Information */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={cn("rounded-2xl border shadow-lg", cardBg)}>
        <div className={cn("p-4 lg:p-6 border-b flex items-center gap-3", isDarkMode ? "border-slate-800" : "border-gray-200")}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <School className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">School Information</h3>
            <p className={textMuted}>Basic school details and contact information</p>
          </div>
        </div>
        <div className="p-4 lg:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>School Name</Label>
              <Input className={inputBg} value={schoolSettings.name} onChange={(e) => setSchoolSettings({ ...schoolSettings, name: e.target.value })} />
            </div>
            <div>
              <Label className="flex items-center gap-2"><Mail className="w-4 h-4" />Email</Label>
              <Input type="email" className={inputBg} value={schoolSettings.email} onChange={(e) => setSchoolSettings({ ...schoolSettings, email: e.target.value })} />
            </div>
            <div>
              <Label className="flex items-center gap-2"><Phone className="w-4 h-4" />Phone</Label>
              <Input className={inputBg} value={schoolSettings.phone} onChange={(e) => setSchoolSettings({ ...schoolSettings, phone: e.target.value })} />
            </div>
            <div>
              <Label className="flex items-center gap-2"><Globe className="w-4 h-4" />Website</Label>
              <Input className={inputBg} value={schoolSettings.website} onChange={(e) => setSchoolSettings({ ...schoolSettings, website: e.target.value })} />
            </div>
          </div>
          <div>
            <Label className="flex items-center gap-2"><MapPin className="w-4 h-4" />Address</Label>
            <Textarea className={inputBg} value={schoolSettings.address} onChange={(e) => setSchoolSettings({ ...schoolSettings, address: e.target.value })} />
          </div>
          <div>
            <Label>School Motto</Label>
            <Input className={inputBg} value={schoolSettings.motto} onChange={(e) => setSchoolSettings({ ...schoolSettings, motto: e.target.value })} />
          </div>
          <Button onClick={handleSaveSchool} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <Save className="w-4 h-4 mr-2" />Save Changes
          </Button>
        </div>
      </motion.div>

      {/* Notification Settings */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className={cn("rounded-2xl border shadow-lg", cardBg)}>
        <div className={cn("p-4 lg:p-6 border-b flex items-center gap-3", isDarkMode ? "border-slate-800" : "border-gray-200")}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Notification Preferences</h3>
            <p className={textMuted}>Configure alert and notification settings</p>
          </div>
        </div>
        <div className="p-4 lg:p-6 space-y-4">
          {[
            { key: "emailAlerts", label: "Email Alerts", description: "Receive important updates via email" },
            { key: "smsAlerts", label: "SMS Alerts", description: "Get SMS notifications for urgent matters" },
            { key: "feeReminders", label: "Fee Reminders", description: "Send automatic fee payment reminders" },
            { key: "attendanceAlerts", label: "Attendance Alerts", description: "Notify parents of student absences" },
            { key: "examResults", label: "Exam Results", description: "Notify when exam results are published" },
          ].map((item) => (
            <div key={item.key} className={cn("flex items-center justify-between p-4 rounded-xl", isDarkMode ? "bg-slate-800" : "bg-gray-100")}>
              <div>
                <p className="font-medium">{item.label}</p>
                <p className={cn("text-sm", textMuted)}>{item.description}</p>
              </div>
              <Switch
                checked={notifications[item.key as keyof typeof notifications]}
                onCheckedChange={(checked) => setNotifications({ ...notifications, [item.key]: checked })}
              />
            </div>
          ))}
          <Button onClick={handleSaveNotifications} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <Save className="w-4 h-4 mr-2" />Save Preferences
          </Button>
        </div>
      </motion.div>

      {/* Academic Settings */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={cn("rounded-2xl border shadow-lg", cardBg)}>
        <div className={cn("p-4 lg:p-6 border-b flex items-center gap-3", isDarkMode ? "border-slate-800" : "border-gray-200")}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <Database className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Academic Settings</h3>
            <p className={textMuted}>Configure academic year and grading</p>
          </div>
        </div>
        <div className="p-4 lg:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Current Term</Label>
              <Select value={academic.currentTerm} onValueChange={(v) => setAcademic({ ...academic, currentTerm: v })}>
                <SelectTrigger className={inputBg}><SelectValue /></SelectTrigger>
                <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                  <SelectItem value="Term 1">Term 1</SelectItem>
                  <SelectItem value="Term 2">Term 2</SelectItem>
                  <SelectItem value="Term 3">Term 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Academic Year</Label>
              <Input className={inputBg} value={academic.academicYear} onChange={(e) => setAcademic({ ...academic, academicYear: e.target.value })} />
            </div>
            <div>
              <Label>Pass Mark (%)</Label>
              <Input type="number" className={inputBg} value={academic.passMark} onChange={(e) => setAcademic({ ...academic, passMark: e.target.value })} />
            </div>
            <div>
              <Label>Grading System</Label>
              <Select value={academic.gradingSystem} onValueChange={(v) => setAcademic({ ...academic, gradingSystem: v })}>
                <SelectTrigger className={inputBg}><SelectValue /></SelectTrigger>
                <SelectContent className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                  <SelectItem value="letter">Letter Grades (A-F)</SelectItem>
                  <SelectItem value="percentage">Percentage</SelectItem>
                  <SelectItem value="gpa">GPA (4.0 Scale)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={handleSaveAcademic} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <Save className="w-4 h-4 mr-2" />Save Settings
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminSettings;