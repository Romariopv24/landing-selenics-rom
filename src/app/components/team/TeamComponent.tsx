import { Stack } from '@mui/material'
import React from 'react'
import { TeamContainer } from './TeamContainer'

export const TeamComponent = () => {
  return (
    <Stack sx={mainContainer}>
        <TeamContainer />
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
           radial-gradient(circle at 25% 7%, #11649b, transparent 50%),
        radial-gradient(circle at 80% 50%, #3b2369, transparent 29%),
        radial-gradient(circle at 25% 110%, #5f1869, transparent 50%),
    `,
    lg: `
        radial-gradient(circle at 25% 7%, #11649b, transparent 50%),
        radial-gradient(circle at 80% 50%, #3b2369, transparent 29%),
        radial-gradient(circle at 25% 110%, #5f1869, transparent 50%)
    `,
    xs: `
        radial-gradient(circle at 10% -100%, #3b2369, transparent 44%),
    radial-gradient(circle at 35% -22%, #11649b, transparent 80%), 
        radial-gradient(circle at 20% 90%, #5f1869, transparent 50%)
    `,
    },
  // padding: '5rem',
  position: 'relative',
}