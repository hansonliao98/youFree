import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

// import placeholder data from utils/constants.
// for in case if video has NO DATA on these, this placeholder data will appear instead
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import { borderRadius } from "@mui/system";
import { useEffect, useState } from "react";

// input is video BUT u can also destructure it even further to get MORE SPECIFIC info from the data
const VideoCard = ({
  highQuality,
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const [newThumbnail, setNewThumbnail] = useState("");

  useEffect(() => {
    const runIt = async () => {
      const thumbnail = highQuality.url;
      if (!thumbnail) return <div>loading...</div>;
      const newThumbnail = setNewThumbnail(thumbnail.replace(/ =>/g, ":"));
      console.log(newThumbnail);
    };
    runIt();
  }, []);

  //   console.log(newThumbnail);

  return (
    // Card for specific info on one object
    <Card
      // responsive design: WEB-SCREENS:
      // medium devices = md
      // extra small devices = xs
      sx={{
        width: { md: "240px", sm: "320px", xs: "460px" },
        height: { md: "250px", sm: "280px", xs: "360px" },
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      {/* for the link to? --> put in:
                IF videoID exists, THEN go to video link
                IF videoID does NOT exist, THEN input placeholder data*/}
      {newThumbnail && (
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={newThumbnail}
            alt={snippet?.title}
            sx={{
              width: { md: "240px", sm: "320px", xs: "460px" },
              // width: 240,
              height: { md: 125, sm: "180px", xs: "260px" },
              // height: 125
            }}
          />
        </Link>
      )}

      <CardContent
        sx={{ backgroundColor: "#1e1e1e", height: 90, color: "white" }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            className={snippet.title.length > 60 ? "titleDots" : ""}
            variant="subtitle2"
            fontWeight="bold"
            color="#FFF"
          >
            {/* show video title. IF doesnt exist, THEN show placeholder video title */}
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          {/* <CardMedia image={snippet} /> */}
          <Typography variant="caption" fontWeight="normal" color="#FFF">
            {/* show video title. IF doesnt exist, THEN show placeholder video title */}
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle
              sx={{
                fontSize: "14px",
                color: "gray",
                ml: "5px",
                verticalAlign: "sub",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
