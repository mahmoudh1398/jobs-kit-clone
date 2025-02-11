import CssBaseline from "@mui/material/CssBaseline";
import { useIsClient } from "../hooks/useIsClient";

export default function CssBaselineProvider() {
  const isClient = useIsClient();
  if (!isClient) return;

  return (
    <>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
    </>
  );
}
