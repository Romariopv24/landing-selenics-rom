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
      background: `
            radial-gradient(circle at 10% -50%, #5f1869, transparent 44%),
            radial-gradient(circle at 95% -20%, #11649b, transparent 50%)
                 `,
      padding: '2rem',
    }
    

  
