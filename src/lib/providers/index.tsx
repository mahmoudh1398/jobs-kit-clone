import React, { Suspense } from "react";
import MuiProvider from "./MuiProvider";
import ToastifyProvider from "./ToastifyProvider";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MuiProvider>
      <ToastifyProvider />
      <Suspense>{children}</Suspense>
    </MuiProvider>
  );
}
