import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { Margin } from "@mui/icons-material";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      display="flex"
    >
      {videos.map((item, idx) => (
        <Box key={idx} display="flex">
          {/* theres 2 types of 'videos' youll be shown. we must differentiate the 2, to apply different paths, etc
                1) Actual Videos
                2) Channels  */}

          {/* if then statement: */}
          {/* So IF the item has a 'VideoID', THEN its a video, and well mark it and put it in as a video item, 
                IF item has a 'ChannelID', THEN its a Channel, and well mark it as a channel item */}

          {/* We also include 'video=item' to carry over all that one video's data  */}
          {item.id.videoId && (
            <VideoCard
              video={item}
              highQuality={item.snippet.thumbnails.high}
            />
          )}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
