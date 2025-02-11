"use client";

import Pagination from "@mui/material/Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface IProps {
  count: number;
  currentPage: number;
}

export default function CustomPagination({ count, currentPage }: IProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const params = new URLSearchParams(searchParams);
    if (page > 1) {
      params.set("page", page.toString());
      params.set("limit", "9");
    } else {
      params.delete("page");
      params.delete("limit");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      count={count}
      color="standard"
      onChange={handleChangePage}
      page={currentPage}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        mb: "20px",
        "& .MuiPaginationItem-root": {
          color: "white", // Change text color
          backgroundColor: "transparent", // Default background
          "&:hover": {
            backgroundColor: "darkgray", // Hover effect
          },
        },
        "& .Mui-selected": {
          backgroundColor: "white !important", // Selected button background
          color: "black !important", // Selected text color
        },
      }}
    />
  );
}
