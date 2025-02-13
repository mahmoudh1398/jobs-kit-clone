import React, { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import { JobServices } from "@/lib/services/api/job/jobServices";
import JobsList from "@/features/site/job/components/JobsList";
import SearchInput from "@/features/site/job/components/SearchInput";
import CustomPagination from "@/components/CustomPagination";
import AddNewJobForm from "@/features/site/job/components/AddNewJobForm";

export default async function JobsPage(props: {
  searchParams?: Promise<{
    title?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const title = searchParams?.title || "";
  const currentPage = Number(searchParams?.page) || 1;
  const data = await JobServices.getJobs({
    page: currentPage,
    limit: 9,
    order: "DESC",
    title,
  });

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        mt: "96px",
      }}
    >
      <SearchInput />
      <AddNewJobForm />
      <Suspense
        key={title + currentPage}
        fallback={
          <Box
            component="div"
            sx={{
              border: "1px solid red",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "white",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <JobsList jobs={data.data.data} />
      </Suspense>
      <CustomPagination
        count={data.data.pagination.totalPages || 1}
        currentPage={currentPage}
      />
    </Box>
  );
}
