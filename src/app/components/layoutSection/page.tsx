import { rootImages } from '@/app/core/rootImages'
import { Box, Stack, styled } from '@mui/material'
import React from 'react'
import { Navbar } from '../navigation/navbar/page'

export const LayoutSection = ({children}: {children: React.ReactNode}) => {
  return (
    <Stack sx={{
      display:'flex', 
      alignItems:'center',
      alignItem: "center",
      flexDirection: "column",
      justifyContent: "center",
      height: {lg: "100vh" },
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
             }}>
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
           loop autoPlay muted>
         <source src={rootImages.video.starsBg} type="video/mp4" />
   
     </video>
           {children}
    </Stack>
  )
}


// const MainContainer = styled(Stack)(({theme}) => ({
//     backgroundImage: rootImages.starsBg,
//     display:'flex', 
//     alignItems:'center',
//     alignItem: "center",
//     flexDirection: "column",
//     justifyContent: "center",
//     [theme.breakpoints.up('lg')]: {
//         minHeight: '100vh',
//       },
//       [theme.breakpoints.down('lg')]: {
//         minHeight: 'auto',
//       },
//   }))