import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Feed from './components/Feed'
// import { Feed } from '@mui/icons-material'
import Navbar from './components/Navbar'
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetail'
import UploadVideo from './components/UploadVideo'
import SearchFeed from './components/SearchFeed'
import Login from './components/Login'
import { useState } from 'react'

const App = () => {
    const [selected, setSelected] = useState('New')

    return (// <h1>jack</h1>
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed selected={selected} setSelected={setSelected} />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
                <Route path='/upload/' element={<UploadVideo />} />
                <Route path='/login/' element={<Login />} />
            </Routes>
        </Box>
        
    </BrowserRouter>)
    
};

export default App