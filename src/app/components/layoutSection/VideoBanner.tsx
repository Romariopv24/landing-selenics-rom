import { rootImages } from '@/app/core/rootImages'
import { Box, Button } from '@mui/material'
import React, { useRef } from 'react'

export const VideoBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  console.log(rootImages.video.bannerVideo)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
      }}
    >
      <Box
        display="flex"
        justifyContent={'center'}
        height={{ xs: '18rem', lg: '20rem', xl: '25rem' }}
        mt={{ sm: '2rem', lg: '3rem' }}
        position={'relative'}
      >
        <video
          ref={videoRef}
          style={{
            display: 'block',
            width: '100%', 
            height: 'auto', 
          }}
          loop
          autoPlay
          muted
          playsInline
          controls={false} 
        >
          <source src={rootImages.video.bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Button
          onClick={handlePlayPause}
          style={{
            zIndex: 1,
            position: 'absolute',
            top: '50%',
            left: '50%',
            background: 'transparent',
            transform: 'translate(-50%, -50%)', // Centra el botón
            border: 'none',
            color: 'transparent',
            cursor: 'pointer',
          }}
        >
          Play/Pause
        </Button>
      </Box>
    </div>
  )
}
