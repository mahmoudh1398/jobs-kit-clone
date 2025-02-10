import React from "react";
import { Box } from "@mui/material";
import { JobServices } from "@/lib/services/api/job/jobServices";
import JobsList from "@/features/site/job/components/JobsList";

export default async function JobsPage() {
  const data = await JobServices.getJobs();

  return (
    <Box component="main">
      <JobsList data={data.data} />
    </Box>
  );
}
