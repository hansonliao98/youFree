import React from 'react'
import { Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

import { logo, camera } from '../utils/constants';
import { flexbox } from '@mui/system';
import { Margin } from '@mui/icons-material';

const Navbar = () => (
        <Stack 
            direction='row' alignItems='center'
            // p = padding
            p={2}
            // sx = more styling u can add. props can be found by hovering over stack and clicking 'stack API'
            sx={{ 
                position: 'sticky',
                background: '#000',
                top: 0,
                justifyContent: 'space-between'}}>
            
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }} >
                <img src={logo} alt="logo" height={45} />
            </Link>
            <Stack direction='row'>
                <Link to="/upload/" style={{display:'flex', alignItems:'center', marginRight: '10px'}}>
                    <img src={camera} alt="camera" height='48px' style={{overflow: 'hidden'}} />
                </Link>
                <SearchBar/>
            </Stack>


        </Stack>
    )


export default Navbar