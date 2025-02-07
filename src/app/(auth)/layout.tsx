import LayoutAuth from "@/features/layout/auth/components/Layout";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutAuth>{children}</LayoutAuth>;
}
