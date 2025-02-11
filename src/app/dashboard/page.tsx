import React from "react";
import { Box } from "@mui/material";
import LoaderWrapper from "@/features/dashboard/components/LoaderWrapper";

export default function DashboardPage() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <LoaderWrapper />
    </Box>
  );
}
