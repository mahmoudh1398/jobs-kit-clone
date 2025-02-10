import React from "react";
import { Box } from "@mui/material";
import JobsList from "@/features/dashboard/components/JobsList";

export default function DashboardPage() {
  return (
    <Box component="main">
      <JobsList />
    </Box>
  );
}
