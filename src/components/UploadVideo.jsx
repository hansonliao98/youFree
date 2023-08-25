import React from 'react'
import { Stack, Box } from '@mui/material'

const UploadVideo = () => {
  return (
    <Stack>
        <form action="" className="add-form">

            <div className='form-control'>
            <label style={{color: 'white'}}>
                </label>
                <input                    
                    type="file" 
                    />
            </div>            
            <div className='form-control'>
            <label style={{color: 'white'}}>
                        Video Title
                </label>
                <input                    
                    type="text" 
                    placeholder="Add Task" 
                    />
            </div>
            <div className='form-control'>
            <label style={{color: 'white'}}>
                        Video Description
                </label>
                <input                    
                    type="text" 
                    placeholder="Add Task" 
                    />
            </div>
        </form>
    </Stack>
  )
}

export default UploadVideo