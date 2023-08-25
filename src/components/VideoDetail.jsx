import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { CardMedia, Box, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import Videos from "./Videos";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { FetchFromAPI } from "../utils/FetchFromAPI";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("useEffect called!");
    window.scrollTo(0, 0);
    FetchFromAPI(`videos?part=snippet&id=${id}`).then((data) =>
      setVideo(data?.items[0])
    );

    FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  // DESTRUCTURING LEVEL 2 =====================================================
  // IF the snippet info isn't done loading yet, say 'loading'
  if (!video?.snippet) return "loading...";
  if (!videos) return "loading...";

  console.log(video);
  console.log(videos);
  // destructuring the video useState, to it's props. so we can write the props faster
  const {
    snippet: { title, channelId, channelDetail, channelTitle },
    statistics: { viewCount, likeCount },
  } = video;
  // IF ^^ info isn't done loading yet, say 'loading'
  // ==================================================
  return (
    <Box minHeight="95vh">
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box flex={1} marginLeft="20px" marginRight="20px" width="700px">
          <Box sx={{ top: "86px" }}>
            <div class="hytPlayerWrapOuter">
              <div class="hytPlayerWrap">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  className="react-player"
                  controls
                  playing={true}
                />
              </div>
            </div>
            <Typography color="#fff" variant="h5" fontWeight="bold" padding={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              display="flex"
              justifyContent="space-between"
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  color="#fff"
                  variant="subtitle2"
                  fontWeight="bold"
                  // padding={2}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>

              <Stack
                gap="0px"
                alignItems="center"
                sx={{
                  display: "flex",
                  flexDirection: { sx: "column", md: "row" },
                  gap: "7px",
                }}
              >
                <Typography
                  color="#fff"
                  variant="subtitle2"
                  fontWeight="normal"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {/* to make it more readable with comma: */}
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>

                <Typography
                  color="#fff"
                  variant="subtitle2"
                  fontWeight="normal"
                  padding={0}
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {/* to make it more readable with comma: */}
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          maxWidth="500px"
        >
          <Videos
            videos={videos}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          />

          {/* <h2>{videos[0].snippet.channelTitle} </h2> */}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
