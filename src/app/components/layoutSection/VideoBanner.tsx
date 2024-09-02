import { rootImages } from '@/app/core/rootImages'
import { Box } from '@mui/material'
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

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        position: 'relative', // Asegura que el botón se posicione relativo al contenedor
      }}
    >
      <video
        ref={videoRef}
        style={{ display: 'block', width: '300px', height: '300px' }}
      >
        <source src={rootImages.video.bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={handlePlayPause}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '300px',
          height: '300px',
          background: 'transparent',
          border: 'none',
          color: 'transparent',
          cursor: 'pointer',
        }}
      >
        Play/Pause
      </button>
    </div>
  )
}

// ;<div
//   style={{
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '60%',
//     marginTop: '3rem',
//   }}
// >
//   <video>
//     <source src={rootImages.video.bannerVideo} type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>
// </div>
