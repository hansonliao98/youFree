import React from 'react'
import { Stack } from '@mui/material'
// categories = the array file that contains ALL icons and their names
import { categories } from '../utils/constants'
import { useState } from 'react';

const Sidebar = ({selected, setSelected}) => (
    <Stack
        direction='row'
        sx={{
            overflowY: 'auto',
            height: {sx: 'auto', md: '95%'},
            flexDirection: {md: 'column'}
        }}
    >
        {categories.map((category) => (
            <button 
                className='category-btn' 
                // if button is selected, then background=red, else black (make const value selectedCategory)
                style={{
                    background: category.name == selected && '#FC1503',
                    color: 'white'}}
                key={category.name}
                onClick={() => setSelected(category.name)}
                >

                <span style={{ 
                    color: category.name === selected ? 'white': '#FC1503',
                    marginRight: '15px'}} >
                    {category.icon}
                </span>

                <span>{category.name}</span>
                
            </button>
        ))}
    </Stack>
)

export default Sidebar