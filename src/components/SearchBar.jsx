import { display } from '@mui/system';
import React from 'react';
import { useSubmit } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, Input } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()

    // function
    // e = event, here is submit event
    const handleSubmit = (e) => {
        // stop default actions of 'form', which is normally to refresh page
        e.preventDefault();
        // if searchterm has results, show those results:
        if(searchTerm) {
            // navigate: used to navigate the page to somewhere else once activated
            navigate(`search/${searchTerm}`);
            // clear searchbar
            setSearchTerm('');
        }
    }
    return (

    <Paper
    // component = what function should this div have
    component='form'
    // on submit, we want to run handleSubmit function --> run API search
    onSubmit={handleSubmit}
    // sx = style
    sx={{
        borderRadius: 20,
        border: '2px solid #e3e3e3',
        // pl = padding left
        pl: 2,
        boxShadow: 'none',
        // mr = margin right
        // sm = ONLY on small devices:
        mr: {sm: 5}
    }} >
        <Input
            className='search-bar'
            placeholder='Search...'
            value={searchTerm} 
            // e = event shorthand= in this case submit event
            // onchange, watever is in searchbar will be saved to searchTerm UseState
            onChange={(e) => setSearchTerm(e.target.value)}  
            disableUnderline 
            />
        
        <IconButton
            type='submit'
            sx={{
                p: '10px',
                color: 'red'
            }}
            >
            <Search />
        </IconButton>
    </Paper>
    )
}

export default SearchBar