import { Stack } from '@mui/material'
import React from 'react'
import { PricingContent } from './PricingContent'

export const PricingComponent = () => {
  return (
    <Stack sx={mainContainer}>
      <PricingContent />
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
           radial-gradient(circle at 25% 7%, #3b2369, transparent 50%),
        radial-gradient(circle at 80% 50%, #4f359a, transparent 29%),
        radial-gradient(circle at 25% 110%, #11649b, transparent 50%),
    `,
    lg: `
        radial-gradient(circle at 25% 7%, #3b2369, transparent 50%),
        radial-gradient(circle at 80% 50%, #4f359a, transparent 29%),
        radial-gradient(circle at 25% 110%, #11649b, transparent 50%)
    `,
    xs: `
        radial-gradient(circle at 10% -100%, #3b2369, transparent 44%),
        radial-gradient(circle at -10% 8%, #5f1869, transparent 44%),
        radial-gradient(circle at 20% 90%, #11649b, transparent 50%)
    `,
    },
  padding: '2rem',
}

// 11649b
// 4f359a
// 5f1869

// radial-gradient(circle at -10% 8%, #5f1869, transparent 44%), union mobile