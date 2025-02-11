import React from "react";
import { IUserJob } from "@/lib/types/api/job";
import Grid from "@mui/material/Grid2";
import UserJobCard from "./UserJobCard";

interface IProps {
  jobs: IUserJob[];
}

export default function UserJobsList({ jobs }: IProps) {
  return (
    <Grid container spacing={3} sx={{ margin: "64px 32px" }}>
      {jobs?.map((job) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={job.id}>
          <UserJobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
}
