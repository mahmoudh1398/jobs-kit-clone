"use client";

import CustomPagination from "@/components/CustomPagination";
import { JobServices } from "@/lib/services/api/job/jobServices";
import { IPagination, IUserJob } from "@/lib/types/api/job";
import { Box, CircularProgress } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import UserJobsList from "./UserJobsList";

export default function LoaderWrapper() {
  const [data, setData] = useState<{
    data: IUserJob[];
    pagination: IPagination;
  }>();

  const handleGetJobs = async () => {
    try {
      const res = await JobServices.getUserJobs();
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetJobs();
  }, []);

  return (
    <Box component="div">
      <Suspense fallback={<CircularProgress />}>
        <UserJobsList jobs={data?.data ?? []} />
      </Suspense>
      <CustomPagination count={data?.pagination?.totalPages || 1} />
    </Box>
  );
}
