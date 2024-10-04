import { Box, Skeleton } from '@mui/material'
import React from 'react'

export const Loading = () => {
  return (

    <Skeleton
      sx={{ bgcolor: 'grey.900',
        borderRadius: '3px',
       }}
      variant="rectangular"
      width="100%"
       height={593}
    />
  )
}
