import { useIsClient } from "@/lib/hooks/useIsClient";
import { IUserJob } from "@/lib/types/api/job";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import Image from "next/image";
import Link from "next/link";
import formatDate from "@/lib/tools/formatDate";
import capitalize from "@/lib/tools/capitalize";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { JobServices } from "@/lib/services/api/job/jobServices";
import BookmarkIcon from "@mui/icons-material/Bookmark";

interface IProps {
  job: IUserJob;
  onToggleJobBookmark: () => void;
}

export default function UserJobCard({ job, onToggleJobBookmark }: IProps) {
  const isClient = useIsClient();

  const [bookmarkToggleLoading, setBookmarkToggleLoading] = useState(false);

  const handleToggleBookmark = async () => {
    try {
      setBookmarkToggleLoading(true);
      if (job.bookmarked) {
        await JobServices.removeBookmarkJob(job.id);
      } else {
        await JobServices.bookmarkJob(job.id);
      }
      onToggleJobBookmark();
    } catch (error) {
      console.log(error);
    } finally {
      setBookmarkToggleLoading(false);
    }
  };

  if (!isClient) return;

  return (
    <Card
      sx={{
        bgcolor: "#212b36",
        borderRadius: "16px",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "4px",
            m: "8px",
          }}
        >
          {bookmarkToggleLoading ? (
            <CircularProgress size="24px" />
          ) : (
            <IconButton
              onClick={handleToggleBookmark}
              aria-label="bookmark"
              size="small"
            >
              {job.bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
          )}
          <IconButton aria-label="share" size="small">
            <ShareIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            px: "24px",
            pb: "16px",
            mt: "-24px",
            gap: "12px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "48px",
              height: "48px",
            }}
            width="100%"
          >
            {!!job?.company?.imageURL ? (
              <Image
                src={job?.company?.imageURL}
                alt="co_icon"
                fill
                style={{
                  borderRadius: "12px",
                  maxWidth: "48px",
                  maxHeight: "48px",
                }}
              />
            ) : (
              ""
            )}
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              mb: "8px",
            }}
          >
            <Link href="#">
              <Typography component="h4">{job.title}</Typography>
            </Link>
            <Link href="#">
              <Typography
                component="h5"
                sx={{
                  color: "#00a76f",
                }}
              >
                {job?.company?.name}
              </Typography>
            </Link>
            <Typography component="h6" dir="ltr" sx={{ fontSize: "12px" }}>
              <span>Posted date: </span>
              <span>{formatDate(job.datePosted)}</span>
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Divider
        sx={{
          borderColor: "rgba(145, 158, 171, 0.2)",
          borderStyle: "dashed",
        }}
      />
      <CardContent
        sx={{
          p: "24px",
          display: "flex",
          flexDirection: "row",
          fontSize: "12px",
        }}
      >
        <Box
          component="div"
          dir="ltr"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "50%",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <PersonIcon fontSize={"small"} />
            <span>
              {job.positionLevel === "UNKNOWN" || !job.positionLevel
                ? "Not Specified"
                : capitalize(job.positionLevel)}
            </span>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <PersonIcon fontSize={"small"} />
            <span>{job.country + job.location}</span>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <WarehouseOutlinedIcon fontSize={"small"} />
            <span>{job?.subCategory?.name}</span>
          </Box>
        </Box>
        <Box
          component="div"
          dir="ltr"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "50%",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <WorkIcon fontSize={"small"} />
            <span>
              {job.jobType
                .charAt(0)
                .toUpperCase()
                .concat(job.jobType.slice(1).toLowerCase())}
            </span>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <WatchLaterIcon fontSize={"small"} />
            <span>{job.employmentType}</span>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <WarehouseIcon fontSize={"small"} />
            <span>{job?.category?.name}</span>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
