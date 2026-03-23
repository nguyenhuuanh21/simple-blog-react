import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = ({ type = 'backdrop' }) => {
    return (
        type === 'backdrop' ? (
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        ) : (
            <CircularProgress color="inherit" />
        )
    )
}

export default Loading