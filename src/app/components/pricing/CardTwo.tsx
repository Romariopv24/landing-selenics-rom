'use client'
import { rootImages } from '@/app/core/rootImages'
import { BtnPrimary } from '@/app/custom/Components'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import { DM_Sans, Raleway } from 'next/font/google'
import React from 'react'

const raleway = Raleway({
    subsets: ['latin'],
    style: ['normal'],
    weight:["100",'200','300', '400', '500', '600', "700", "800","900"]
  })
  
  const dmSans = DM_Sans({
      subsets: [ "latin"],
      style: ["normal"],
      weight:["100","1000","200","300","400","500","600","700","800","900"]
  })

export const CardTwo = () => {

    const gradient =  `
    linear-gradient(to right, #8250ed, #c67bcb, #4ddefe) 1
  `

  return (
<>
<Box
  sx={{
    position: 'relative',
    borderLeft: '5px solid #8250ed',
    borderRight: '5px solid #4ddefe',
    borderRadius: '15px',
    overflow: 'hidden',
    width: { md: '17rem', lg: '21rem' }, // Ajusta el ancho en lg
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: '5px',
      background: 'linear-gradient(to right, #8250ed, #c67bcb, #4ddefe 100%)',
      borderRadius: '100px',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 4,
      right: 0,
      width: '100%',
      height: '5px',
      background: 'linear-gradient(to right, #8250ed, #c67bcb, #4ddefe 100%)',
      borderRadius: '100px',
    },
  }}
>
<Box
      sx={{
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        padding: '10px',
      }}
    >
      <Box
        component="span"
        sx={{
          background: 'linear-gradient(to right, #8250ed, #c67bcb, #4ddefe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'moveGradient 10s infinite linear',
          '@keyframes moveGradient': {
            '0%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
            '100%': {
              backgroundPosition: '0% 50%',
            },
          },
          backgroundSize: '200% 200%',
        }}
      >
        <Typography
                color='white'
          fontWeight="900"
          className={raleway.className}
          mt={1}
          fontSize={{ xs: '25px', md: '20px', lg: '23px' }} // Ajusta el tamaño de fuente en lg
        >
          Best VALUE
        </Typography>
      </Box>
    </Box>
  <Box
    display="flex"
    flexDirection="column"
    height={{ xs: '30rem', lg: '36rem', xl: '36rem' }}
    width={{ md: '17rem', lg: '21rem' }} // Ajusta el ancho en lg
    sx={{
      position: 'relative',
      background: `
        radial-gradient(circle at 10% 10%, #2a2936, transparent 50%),
        radial-gradient(circle at 90% 90%, #384167, transparent 80%)
      `,
      overflow: 'hidden',
      width: { md: '17rem', lg: '21rem' }, // Ajusta el ancho en lg
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        width: '100%',
        background: 'linear-gradient(to right, #8250ed, #c67bcb, #4ddefe)',
      },
    }}
  >
    <Stack mt={4} alignItems="center">
      <Typography
                color='white'

        fontWeight={'900'}
        className={raleway.className}
        fontSize={{ xs: '30px', md: '25px', lg: '40px' }} // Ajusta el tamaño de fuente en lg
      >
        Growth
      </Typography>
      <Typography
                color='white'

        fontWeight={'900'}
        className={dmSans.className}
        fontSize={{ xs: '40px', md: '38px', lg: '50px' }} // Ajusta el tamaño de fuente en lg
      >
        $2,100
      </Typography>

      <Stack my={2} flexDirection={'row'} width={{ xs: '85%', md: '70%', lg: '85%' }} alignItems={'center'} alignContent={'center'} gap={1}>
        <img src={rootImages.info} style={{ width: '15px', height: '15px' }} />
        <Typography
                color='white'

          className={dmSans.className}
          fontSize={{ xs: '13px', md: '11px', lg: '15px' }} // Ajusta el tamaño de fuente en lg
        >
          Everything in our Essential + Plus:
        </Typography>
      </Stack>

      <Box display={'flex'} flexDirection={'column'} width={{ xs: '83%', md: '70%', lg: '83%' }} gap={{ xs: 2, lg: 1 }} mt={2}>
        <Stack flexDirection={'row'} alignItems={'center'} alignContent={'center'} gap={1}>
          <Box display='flex' bgcolor={'white'} width={'5px'} height={'5px'} borderRadius={'50rem'} alignSelf="center" />
          <Typography
                color='white'

            className={dmSans.className}
            fontSize={{ xs: '12px', md: '10px', lg: '15px' }} // Ajusta el tamaño de fuente en lg
          >
            Complete Sale Funnel.
          </Typography>
        </Stack>

        <Stack flexDirection={'row'} alignItems={'center'} alignContent={'center'} gap={1}>
          <Box bgcolor={'white'} width={'5px'} height={'5px'} borderRadius={'50rem'} />
          <Typography
                color='white'

            className={dmSans.className}
            fontSize={{ xs: '12px', md: '10px', lg: '15px' }} // Ajusta el tamaño de fuente en lg
          >
            Meta Ads Management: Creation & Handling of campaigns
          </Typography>
        </Stack>
        <Stack flexDirection={'row'} alignItems={'center'} alignContent={'center'} gap={1}>
          <Box bgcolor={'white'} width={'5px'} height={'5px'} borderRadius={'50rem'} />
          <Typography
                color='white'

            className={dmSans.className}
            fontSize={{ xs: '12px', md: '10px', lg: '15px' }} // Ajusta el tamaño de fuente en lg
          >
            Top Notch Integrations: Connect your Google mail & Calendar
          </Typography>
        </Stack>
      </Box>
      <Stack mt={{ xs: 8, md: 12, lg: 10, xl: 10 }} justifyContent={'center'} alignItems="center">
        <BtnPrimary width={'7rem'} height={'40px'} boxShadow={true} transparent={false}>
          <Typography
            className={dmSans.className}
            fontSize={{ xs: '14px', lg: '14px' }}
          >
            I Want It!
          </Typography>
        </BtnPrimary>
      </Stack>
    </Stack>
  </Box>
</Box>
</>
  )
}

// 8250ed izquierda
// c67bcb arriba y abajo en el medio
// 4ddefe a la derecha