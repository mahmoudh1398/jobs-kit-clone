"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "next/image";
import logo from "public/images/layout/logo.webp";
import { ROUTES } from "@/lib/configs/routes";
import { webRoute } from "@/lib/services/routes/webRoute";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Header() {
  const pathname = usePathname();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      component="header"
      sx={{
        px: { xs: "16px", sm: "24px", md: "86px" },
        boxShadow: "none",
        backgroundImage: "none",
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(22, 28, 36, 0.8)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
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
            </Box>
            <Box
              component="nav"
              sx={{
                flexDirection: "row",
                gap: "40px",
                marginRight: "20px",
                height: "100%",
                display: { xs: "none", md: "flex" },
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
                    color:
                      pathname === route.url ? "rgb(0, 167, 111)" : "white",
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
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="div"
              sx={{
                width: "fit-content",
                height: "fit-content",
                border: "1px solid rgba(145, 158, 171, 0.32)",
                borderRadius: "8px",
                ":hover": {
                  outline: "1px solid white",
                  backgroundColor: "#ffffff15",
                },
              }}
            >
              <Link
                href={webRoute.dashboard()}
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
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="hamburger"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ marginLeft: "8px" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                  },
                }}
              >
                {ROUTES.map((route) => (
                  <MenuItem
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      position: "relative",
                      display: "flex",
                      color:
                        pathname === route.url ? "rgb(0, 167, 111)" : "grey",
                      "::before": {
                        content: '""',
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        left: "5px",
                        bottom: "12px",
                        backgroundColor:
                          pathname === route.url ? "rgb(0, 167, 111)" : "white",
                        opacity: pathname === route.url ? "0.64" : 0,
                        borderRadius: "50%",
                      },
                    }}
                    key={route.url}
                    onClick={handleCloseNavMenu}
                  >
                    <Link href={route.url}>{route.name}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
