import { Stack } from '@mui/material'
import React from 'react'

export const ResultsComponent = () => {
  return (
    <Stack
      sx={{
        background: 'red',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: { lg: '100vh', xs: '90vh' },
      }}
    ></Stack>
  )
}
