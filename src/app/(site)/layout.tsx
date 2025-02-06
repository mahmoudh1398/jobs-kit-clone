import React from "react";
import LayoutSite from "@/features/layout/site/components/Layout";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutSite>{children}</LayoutSite>;
}
