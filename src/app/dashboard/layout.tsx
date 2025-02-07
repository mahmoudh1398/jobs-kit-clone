import LayoutDashboard from "@/features/layout/dashboard/components/Layout";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutDashboard>{children}</LayoutDashboard>;
}
