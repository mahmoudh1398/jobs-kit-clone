import React from "react";
import { Box } from "@mui/material";

export default function DashboardLayout({
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
      {children}
    </Box>
  );
}
