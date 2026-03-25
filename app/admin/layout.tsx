"use client";

import AdminLayoutComponent from "@/pages/admin/AdminLayout";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // No auth check - just render your beautiful layout
  return <AdminLayoutComponent>{children}</AdminLayoutComponent>;
}
