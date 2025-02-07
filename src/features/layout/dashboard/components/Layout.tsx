import React from "react";
import Box from "@mui/material/Box";

export default function LayoutDashboard({
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
