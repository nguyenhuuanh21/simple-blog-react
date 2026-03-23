import { Alert } from '@mui/material'
import React from 'react'

const Error = () => {
  return (
    <Alert variant='filled' severity="error">Error fetching data</Alert>
  )
}

export default Error