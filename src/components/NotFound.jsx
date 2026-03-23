import { Alert } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <Alert variant='filled' severity="error" sx={{ marginTop: 2 }}>
      Not Found
    </Alert>

  )
}

export default NotFound