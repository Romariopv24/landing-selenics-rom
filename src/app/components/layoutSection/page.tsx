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
        minHeight: { xs: '90vh', lg: '170vh', xl: '125vh' },
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
              sm: '350vw',
              md: '250vw',
              lg: '150vw',
              xl: '100vw',
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
      {/* <Box display={{ xs: 'none', lg: 'flex', width: '1200vw' }}>
        <video
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
          loop
          autoPlay
          muted
        >
          <source src={rootImages.video.starsBg} type="video/mp4" />
        </video>
      </Box> */}
      {children}
    </Stack>
  )
}
