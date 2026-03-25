"use client";

import AdminLayoutComponent from "@/pages/admin/AdminLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <AdminLayoutComponent>{children}</AdminLayoutComponent>
    </ProtectedRoute>
  );
}