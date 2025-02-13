"use client";

import React from "react";
import { IJob } from "@/lib/types/api/job";
import JobCard from "./JobCard";
import Grid from "@mui/material/Grid2";

interface IProps {
  jobs: IJob[];
}

export default function JobsList({ jobs }: IProps) {
  return (
    <Grid container spacing={3} sx={{ margin: "64px 32px" }}>
      {jobs?.map((job) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={job.id}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
}
