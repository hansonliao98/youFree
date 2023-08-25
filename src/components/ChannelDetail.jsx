import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import Sidebar from "./Sidebar";
import { Stack } from "@mui/material";
import { FetchFromAPI } from '../utils/FetchFromAPI'
import { Gradient } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";


// routing to this page was set in Apps.js

const ChannelDetail = () => {
  const [channel, setChannel] = useState(null)
  const [videos, setVideos] = useState([])

  // pull ID out from url:
  const { id } = useParams();
  // console.log(id);

   // useeffect will run when the page starts up, AND wen the id (marked at the end of USeeffect) is changed

  console.log(channel)

  useEffect(() => {
    FetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannel(data?.items[0]));
    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));

  },[id]);

  return (

    <Box minHeight={'95vh'} sx={{}}>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(7,45,145,1) 63%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
        height: '300px'
        }} 
        />
        {/* reusing components, well need to adjust it a lil. so we pass in props: (marginTop) */}
        {/* if the pages channel id (params) =  */}
        <ChannelCard channel={channel} 
        marginTop="-93px" /> 
      </Box>
      <br />
      <br />
      <Box display="flex" p="2" >
        {/* <Box sx={{mr: {sm: '100px'}}} /> */}
        <Videos videos={videos} />
      </Box>
    </Box>

  )
}

export default ChannelDetail