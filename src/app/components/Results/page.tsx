import { Stack, styled } from '@mui/material'
import React from 'react'
import { ContentResults } from './ContentResults'

export const ResultsComponent = () => {
  return (
    <Stack sx={mainContainer}>
      <ContentResults />
    </Stack>
  )
}

const mainContainer = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: { lg: '100vh', xs: '90vh' },
  background: `
        radial-gradient(circle at 10% 40%, #5f1869, transparent 60%),
        radial-gradient(circle at 95% 120%, #11649b, transparent 50%)
             `,
  padding: '2rem',
}
