import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "public/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
