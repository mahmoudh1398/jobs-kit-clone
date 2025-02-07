"use client";

import googleIcon from "public/images/icons/icons8-google.svg";
import { customTheme } from "@/lib/configs/customThem";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  TextField,
  Typography,
  Box,
  Stack,
  useTheme,
  ThemeProvider,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginValues } from "@/lib/types/api/user";
import { signIn } from "@/lib/actions/authActions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { webRoute } from "@/lib/services/routes/webRoute";
import { useUserStore } from "@/lib/store/userStore";
import { AuthServices } from "@/lib/services/api/user/authServices";

export default function PageLogin() {
  const router = useRouter();
  const outerTheme = useTheme();
  const { setUserData } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginValues>();

  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<ILoginValues> = async (values) => {
    setIsLoading(true);
    try {
      await signIn({
        identifier: values.identifier,
        password: values.password,
      });

      const resWhoAmI = await AuthServices.whoAmI();

      if (resWhoAmI.data.data) {
        setUserData(resWhoAmI.data.data);
      }
      router.push(webRoute.dashboard());

      toast.success("ورود با موفقیت انجام شد.");
    } catch (e) {
      console.log(e);
      toast.error("خطا در ورود. لطفاً مجدداً تلاش کنید.");
      setIsLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          mb: "40px",
        }}
      >
        <Typography
          component="h4"
          sx={{
            fontSize: { sm: "1.25rem", md: "1.5rem" },
            margin: 0,
            fontWeight: 700,
            lineHeight: 1.5,
          }}
        >
          ورود به جابزکیت
        </Typography>
        <Stack sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
          <Typography
            component="p"
            sx={{ margin: 0, lineHeight: 1.57143, fontSize: "0.875rem" }}
          >
            کاربر جدید؟
          </Typography>
          <Typography
            component="a"
            href="#"
            sx={{
              margin: 0,
              lineHeight: 1.57143,
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "rgb(0, 167, 111)",
            }}
          >
            ایجاد حساب کاربری
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              width: "100%",
              alignItems: "stretch",
            }}
          >
            <TextField
              label="ایمیل یا شماره تلفن"
              variant="outlined"
              {...register("identifier", {
                required: { value: true, message: "این فیلد اجباری است." },
                pattern:
                  /^(?:\+?[0-9]{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4,6}$|^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
              })}
              error={!!errors.identifier?.message}
            />
            {errors.identifier && (
              <Box component="span" sx={{ color: "#ff5630", fontSize: "12px" }}>
                {errors.identifier.message}
              </Box>
            )}
            {errors.identifier?.type === "pattern" && (
              <Box component="span" sx={{ color: "#ff5630", fontSize: "12px" }}>
                {"فقط کاراکترهای انگلیسی مجاز است."}
              </Box>
            )}
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              width: "100%",
              alignItems: "stretch",
            }}
          >
            <TextField
              type={showPassword ? "text" : "password"}
              label="رمز عبور"
              {...register("password", {
                required: { value: true, message: "این فیلد اجباری است." },
                pattern:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
              })}
              error={!!errors.password?.message}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            {errors.password && (
              <Box component="span" sx={{ color: "#ff5630", fontSize: "12px" }}>
                {errors.password.message}
              </Box>
            )}
            {errors.password?.type === "pattern" && (
              <Box component="span" sx={{ color: "#ff5630", fontSize: "12px" }}>
                {"فقط کاراکترهای انگلیسی مجاز است."}
              </Box>
            )}
          </Stack>
        </ThemeProvider>
        <Typography
          component="a"
          href="#"
          sx={{
            color: "white",
            fontSize: "0.875rem",
            marginLeft: "auto",
            textDecoration: "underlined",
          }}
        >
          رمز عبور را فراموش کرده‌اید؟
        </Typography>
        <Button
          variant="contained"
          type="submit"
          sx={{
            bgcolor: "white",
            color: "#212b36",
            padding: "8px 16px",
            fontSize: "16px",
            fontWeight: 700,
          }}
          loading={isLoading}
        >
          ورود
        </Button>
        <Button
          variant="outlined"
          sx={{
            bgcolor: "transparent",
            color: "white",
            padding: "8px 16px",
            fontSize: "16px",
            fontWeight: 700,
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            alignItems: "center",
            borderColor: "white",
            borderRadius: "8px",
          }}
        >
          <Image src={googleIcon} width={20} height={20} alt="google" />
          <span>ورود با گوگل</span>
        </Button>
      </Stack>
    </Box>
  );
}
