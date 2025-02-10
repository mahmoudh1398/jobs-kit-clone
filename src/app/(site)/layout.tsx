import React from "react";
import { Box } from "@mui/material";
import Header from "@/features/layout/site/components/Header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      component="main"
      sx={{
        height: "100vh",
      }}
    >
      <Header />
      <Box component="section" sx={{ marginTop: "80px" }}>
        {children}
      </Box>
    </Box>
  );
}
