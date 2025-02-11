"use client";

import React from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { useIsClient } from "@/lib/hooks/useIsClient";
import { customTheme } from "@/lib/configs/customThem";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useJobStore from "@/lib/store/jobStore";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#161c24",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

interface IFormValues {
  title: string;
  category: string;
}

export default function AddNewJobForm() {
  const isClient = useIsClient();
  const outerTheme = useTheme();
  const { jobs, setJobs } = useJobStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const onSubmit: SubmitHandler<IFormValues> = (values) => {
    setJobs([
      ...jobs,
      {
        title: values.title,
        category: {
          name: values.category,
          icon: null,
          id: new Date().getTime(),
          slug: "",
        },
        id: new Date().getTime(),
        datePosted: new Date().toDateString(),
        jobType: "MID",
      },
    ]);
    handleClose();
    toast.success("شغل جدید با موفقیت ایجاد شد.");
  };

  if (!isClient) return;

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          width: "228px",
          mx: "auto",
          bgcolor: "white",
          color: "black",
        }}
      >
        {"افزودن شغل جدید"}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography
            component="h4"
            sx={{
              fontSize: { sm: "1.25rem", md: "1.5rem" },
              margin: 0,
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            {"ایجاد شغل جدید"}
          </Typography>
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
                  label="عنوان"
                  variant="outlined"
                  {...register("title", {
                    required: { value: true, message: "این فیلد اجباری است." },
                  })}
                  error={!!errors.title?.message}
                />
                {errors.title && (
                  <Box
                    component="span"
                    sx={{ color: "#ff5630", fontSize: "12px" }}
                  >
                    {errors.title.message}
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
                  label="دسته‌بندی"
                  {...register("category", {
                    required: { value: true, message: "این فیلد اجباری است." },
                  })}
                  error={!!errors.category?.message}
                />
                {errors.category && (
                  <Box
                    component="span"
                    sx={{ color: "#ff5630", fontSize: "12px" }}
                  >
                    {errors.category.message}
                  </Box>
                )}
              </Stack>
            </ThemeProvider>
          </Stack>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button variant="outlined" onClick={handleClose}>
              لغو
            </Button>
            <Button variant="contained" type="submit">
              تایید
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
