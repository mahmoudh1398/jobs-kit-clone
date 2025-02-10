import React from "react";
import { Box } from "@mui/material";
import { JobServices } from "@/lib/services/api/job/jobServices";

export default async function JobsPage() {
  const data = await JobServices.getAllJobs();
  console.log(data.data);

  return <Box component="main">JobsPage</Box>;
}
