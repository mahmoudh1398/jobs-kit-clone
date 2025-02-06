"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import CssBaselineProvider from "./CssBaselineProvider";

// Create rtl cache
const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function MuiProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <CssBaselineProvider />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
