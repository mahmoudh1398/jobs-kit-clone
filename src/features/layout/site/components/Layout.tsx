import React from "react";
import Header from "@/features/layout/site/components/Header";
import Box from "@mui/material/Box";

export default function LayoutSite({
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
