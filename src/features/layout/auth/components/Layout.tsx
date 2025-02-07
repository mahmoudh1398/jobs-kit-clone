import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { webRoute } from "@/lib/services/routes/webRoute";
import Image from "next/image";
import logo from "public/images/layout/logo.webp";
import Box from "@mui/material/Box";
import illustration_dashboard from "public/images/layout/illustration_dashboard.png";

export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack
      component="main"
      direction="row"
      sx={{
        height: "100vh",
        display: "flex",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          margin: "40px",
          color: "rgb(0, 167, 111)",
          position: "absolute",
          zIndex: 9,
        }}
      >
        <Link href={webRoute.home()}>
          <Image
            src={logo}
            alt="logo"
            priority
            width={100}
            height={25}
            style={{
              overflowClipMargin: "content-box",
              overflow: "clip",
              verticalAlign: "bottom",
            }}
          />
        </Link>
      </Typography>
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
          backgroundImage: `linear-gradient(rgba(22,28,36,0.94), rgba(22,28,36,0.94)), url('/images/layout/overlay_2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontSize: { sm: "1.625rem", md: "1.875rem", lg: "2rem" },
            marginTop: "32px",
            fontWeight: 700,
            lineHeight: 1.5,
            maxWidth: "480px",
            textAlign: "center",
            color: "white",
          }}
        >
          سلام، خوش آمدید
        </Typography>
        <Box
          component="div"
          sx={{
            maxWidth: {
              xs: "480px",
              lg: "560px",
            },
          }}
        >
          <Image
            src={illustration_dashboard}
            alt="login"
            style={{
              maxWidth: "100%",
              maxHeight: 360,
              display: "inline-block",
              verticalAlign: "bottom",
              overflowClipMargin: "content-box",
              overflow: "clip",
            }}
          />
        </Box>
      </Stack>
      <Stack
        sx={{
          padding: {
            xs: "120px 16px",
            md: "160px 64px 0px",
          },
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginX: "auto",
          maxWidth: "480px",
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
}
