"use client";

import React from "react";
import { Stack, TextField, ThemeProvider, useTheme } from "@mui/material";
import { customTheme } from "@/lib/configs/customThem";
import { debounce } from "@/lib/tools/debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchInput() {
  const outerTheme = useTheme();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = debounce((text: string) => {
    const params = new URLSearchParams(searchParams);
    if (!!text) {
      params.set("title", text);
      params.set("page", "1");
      params.set("limit", "9");
    } else {
      params.delete("title");
      params.delete("page");
      params.delete("limit");
    }
    replace(`${pathname}?${params.toString()}`);
  });

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <TextField
          label="جستجو برای شغل،کلمه کلیدی و ..."
          variant="outlined"
          sx={{ width: { xs: "80%", sm: "260px", md: "360px", lg: "560px" } }}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Stack>
    </ThemeProvider>
  );
}
