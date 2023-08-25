import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { categories } from '../utils/constants'

import { FetchFromAPI } from '../utils/FetchFromAPI'


const Feed = ({selected, setSelected}) => {

    const [videos, setVideos] = useState([]);

    // fetch wen site loads
    useEffect(() => {
        FetchFromAPI(`search?part=snippet&q=${selected}`)
            .then((data) => setVideos(data.items))
    },[selected]);

    console.log(videos)

    return (
        <Stack sx={{ flexDirection: //another set of brackets = USUAL conditions the flex firection = column, but in Medium screens (md) flexdirection = row
            {sx: "column", md: 'row' }}} >
            <Box sx={{height: {sx:'auto', md:'92vh'}, borderRight: '1px solid #3d3d3d',
                // px = padding
                // sx = usual condition 
                // md = custom medium size condition 
                px: { sx: 0, md: 2 }}}>
                    <Sidebar selected={selected} setSelected={setSelected} />

                    <Typography className='copyright' variant='body2' sx={{
                        // mt = margin top
                        mt: '1.5', color: '#fff'
                    }}>
                        Copyright 2022 Yourtube
                    </Typography>
            </Box>

            <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: '2'}} >
                <Typography variant='h4'
                    fontWeight='bold'
                    mb={2}
                    sx={{ color: 'white'}}>
                    <span>
                        {selected} 
                    </span>
                    <span style={{ color: '#F31503'}}>
                        {' videos'}
                    </span>
                </Typography>

                <Videos 
                    videos={videos} 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                    />
            </Box>
                
        </Stack>
    )
}

export default Feed