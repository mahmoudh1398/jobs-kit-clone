import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "public/globals.css";
import { Roboto } from "next/font/google";
import Providers from "@/lib/providers";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "جابزکیت - پلتفرم کاریابی بین المللی و دلاری برای ایرانیان",
  description:
    "با جابزکیت از داخل ایران شغل ریموت بین المللی پیدا کنید و درآمد دلاری را تجربه کنید.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        style={{ backgroundColor: "rgb(22, 28, 36)" }}
        className={roboto.variable}
      >
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
