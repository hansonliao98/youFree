import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Box, typographyClasses } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

// import placeholder data from utils/constants.
// for in case if video has NO DATA on these, this placeholder data will appear instead
import { demoProfilePicture, demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import { borderRadius } from '@mui/system';
import ChannelDetail from './ChannelDetail';
import { sadCat } from '../utils/constants';

const ChannelCard = ({ channel, marginTop }) => {

  return (
    <Box sx={{
      width: { md:'240px', sm: '320px', xs:'460px'}, 
      // width: { md: '240px', xs: '100%'}, 
      boxShadow: 'none', 
      borderRadius: '0',
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      // width: { xs: '356px', md: '320px'}
      height: '220px',
      margin: 'auto',
      // we call margin top into here. This way, its only shifted up when were in channel detail, elsewhere it does NOT shift up
      marginTop: marginTop
      }}>

      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', verticalAlign: 'sub', alignItems: 'center', color: '#FFF'}}>
          <CardMedia
          image = {channel?.snippet?.thumbnails?.high?.url || sadCat}
          alt={channel?.snippet?.title}
          sx={{
            borderRadius: '50%', 
            width: 150, 
            height: 150}} >
            
            </CardMedia>
        </CardContent>
        <Typography 
          variant='subtitle2' 
          fontWeight="bold" 
          color='#FFF' 
          textAlign='center'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxlength: "50"
          }}
          >
          {/* show video title. IF doesnt exist, THEN show placeholder video title 
          */}
          {channel?.snippet?.title 
          // .slice(0,60)
          || demoChannelTitle.slice(0,60)}
          <CheckCircle sx={{fontSize:'14px', color: 'gray', ml: '5px'}} />
        </Typography>
        

        {/* if Data exists, Show Subscriber count
        // this ONLY exists once u click into a channel
        
        to display the statistic to website, MUST parse the stat (make it readable to VScode) (use toLocaleString() to finish the command) */}

        {channel?.statistics?.subscriberCount && (
          <Typography
          variant='caption' 
          fontWeight="none" 
          color='#FFF' 
          textAlign='center'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </Link>
    </Box>
  )
}

export default ChannelCard