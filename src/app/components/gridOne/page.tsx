import { Stack } from '@mui/material'
import React from 'react'

export const FitComponent = () => {
    return (
        <Stack sx={mainContainer}>
        </Stack>
      )
    }
    
 const mainContainer = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: { lg: '100vh', xs: '90vh' },
      background: {
        lg: `
          radial-gradient(circle at 10% -50%, #5f1869, transparent 44%),
          radial-gradient(circle at 95% -20%, #11649b, transparent 50%)
        `,
        xs: `
          radial-gradient(circle at 10% -100%, #5f1869, transparent 44%),
          radial-gradient(circle at 110% -30%, #11649b, transparent 70%)
        `,
      },
      padding: '2rem',
    }
    

  
