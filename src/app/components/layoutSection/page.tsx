import { rootImages } from '@/app/core/rootImages'
import { Box, Stack, styled } from '@mui/material'
import React from 'react'
import { Navbar } from '../navigation/navbar/page'

export const LayoutSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: { xs: '90vh', lg: '110vh', xl: '100%' },
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: '0 20px',
        }}
      >
        <Stack
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            width: {
              xs: '430vw',
              sm: '230vw',
              md: '200vw',
              lg: '150vw',
              xl: '103vw',
            },
          }}
        >
          <video
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
            loop
            autoPlay
            muted
          >
            <source src={rootImages.video.starsBg} type="video/mp4" />
          </video>
        </Stack>
      </Box>

      {children}
    </Stack>
  )
}
