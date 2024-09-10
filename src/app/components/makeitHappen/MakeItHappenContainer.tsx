import { Stack } from '@mui/material'
import React from 'react'
import { MakeItHappenContent } from './MakeItHappenContent'

export const MakeItHappenContainer = () => {
  return (
    <Stack sx={mainContainer}>
        <MakeItHappenContent />
    </Stack>
  )
}

const mainContainer = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: { lg: '100vh', xs: '90vh' },
  background: {
    xl: `
      radial-gradient(circle at 20% -10%, #34266e, transparent 44%),
      radial-gradient(circle at 80% 50%, #5f1869, transparent 29%),
radial-gradient(circle at 25% 95%, #3b2369, transparent 50%)
    `,
    lg: `
      radial-gradient(circle at 5% -60%, #34266e, transparent 44%),
      radial-gradient(circle at 80% 50%, #5f1869, transparent 29%),
radial-gradient(circle at 25% 95%, #3b2369, transparent 50%)
    `,
    xs: `
      radial-gradient(circle at 33% 7%, #34266e, transparent 44%),
      radial-gradient(circle at 20% 90%, #5f1869, transparent 50%),
       radial-gradient(circle at 10% 50%, #3b2369, transparent 44%)
    `,
  },
  padding: '2rem',
}

