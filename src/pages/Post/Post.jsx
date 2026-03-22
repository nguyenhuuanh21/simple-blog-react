import { Box, getAppBarUtilityClass } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <div>
        <h1>Post</h1>
        <Box sx={{ paddingBlock: 1,display:'flex',gap:1 }}>
            <span>post by : admin</span>
            <span>at : 2023-10-10</span>
        </Box>
        <Box sx={{paddingBlock:2}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate. Voluptas, voluptate.</p>
        </Box>
    </div>
  )
}

export default Post