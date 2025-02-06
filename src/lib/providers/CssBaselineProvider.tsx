import CssBaseline from "@mui/material/CssBaseline";
import { isClient } from "../tools/isClient";

export default function CssBaselineProvider() {
  if (isClient)
    return (
      <>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
      </>
    );
}
