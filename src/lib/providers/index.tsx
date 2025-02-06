import React, { Suspense } from "react";
import MuiProvider from "./MuiProvider";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MuiProvider>
      <Suspense>{children}</Suspense>
    </MuiProvider>
  );
}
