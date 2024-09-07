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
  // background: {
  //   xl: `
  //       radial-gradient(circle at 5% -60%, #5f1869, transparent 44%),
  //       radial-gradient(circle at 95% -18%, #11649b, transparent 50%),
  //       radial-gradient(circle at 20% 90%, #34266e, transparent 50%)
  //   `,
  //   lg: `
  //       radial-gradient(circle at 20% -60%, #5f1869, transparent 44%),
  //       radial-gradient(circle at 95% -20%, #11649b, transparent 50%),
  //       radial-gradient(circle at 20% 90%, #34266e, transparent 50%)
  //   `,
  //   xs: `
  //       radial-gradient(circle at 10% -100%, #5f1869, transparent 44%),
  //       radial-gradient(circle at 110% -30%, #11649b, transparent 70%),
  //       radial-gradient(circle at 20% 90%, #34266e, transparent 50%)
  //   `,
  // },
  padding: '2rem',
  position: 'relative',
  zIndex: -1, // Asegúrate de que el z-index sea menor que el del navbar
}