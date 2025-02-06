"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "next/image";
import logo from "public/layout/logo.webp";
import { ROUTES } from "@/lib/configs/routes";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <AppBar
      position="fixed"
      component="header"
      sx={{
        px: "84px",
        mx: "auto",
        flexGrow: 1,
        boxShadow: "none",
        backgroundImage: "none",
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(22, 28, 36, 0.8)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            component="span"
            sx={{
              marginRight: "64px",
              color: "rgb(0, 167, 111)",
              maxWidth: "100%",
            }}
          >
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={25}
                style={{
                  overflowClipMargin: "content-box",
                  overflow: "clip",
                  verticalAlign: "bottom",
                }}
              />
            </Link>
          </Box>
          <Box
            component="nav"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
              marginRight: "20px",
              height: "100%",
            }}
          >
            {ROUTES.map((route) => (
              <Box
                key={route.url}
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  position: "relative",
                  display: "flex",
                  color: pathname === route.url ? "rgb(0, 167, 111)" : "white",
                  "::before": {
                    content: '""',
                    position: "absolute",
                    width: "6px",
                    height: "6px",
                    left: "-12px",
                    bottom: "5px",
                    backgroundColor:
                      pathname === route.url ? "rgb(0, 167, 111)" : "white",
                    opacity: pathname === route.url ? "0.64" : 0,
                    borderRadius: "50%",
                  },
                  ":hover": {
                    "::before": {
                      opacity: "0.64",
                    },
                  },
                }}
              >
                <Link href={route.url}>{route.name}</Link>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            width: "fit-content",
            height: "fit-content",
            border: "1px solid rgba(145, 158, 171, 0.32)",
            borderRadius: "8px",
            ":hover": {
              outline: "1px solid white",
            },
          }}
        >
          <Link
            href="/dashboard"
            style={{
              verticalAlign: "middle",
              textAlign: "center",
              minWidth: "64px",
              height: "36px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 12px",
              paddingBottom: "5px",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            ورود
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
