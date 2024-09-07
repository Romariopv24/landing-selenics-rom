'use client'
import { BtnPrimary } from '@/app/custom/Components'
import { Box, Stack, styled, Typography } from '@mui/material'
import { DM_Sans, Raleway } from 'next/font/google'
import React from 'react'
import { VideoBanner } from './VideoBanner'
import { South } from '@mui/icons-material'
import { GradientText } from './GradientText'
import { rootImages } from '@/app/core/rootImages'

const raleway = Raleway({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  style: ['normal'],
  weight: [
    '100',
    '1000',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
})

// fontSize: 'clamp(1.2rem, 2.5vw, 4rem)',
export const Banner = () => {
  return (
    <BoxBanner>
      <GradientText />
      <Box sx={{ width: { xs: '80%', lg: '37%', xl: '70%' }, mt: '1.2rem' }}>
        <Typography
          variant="h4"
          gutterBottom
          className={dmSans.className}
          sx={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: {
              xs: '1.2rem',
              sm: '1.5rem',
              md: '2rem',
              lg: '2rem',
              xl: '2.5rem',
            },
          }}
        >
          {'We Help Coaches and Experts Like You Convert '}
          <Box
        component="span"
              sx={{
                  position:'relative',
                  zIndex: 2,
                  background: 'linear-gradient(to right, #8250ed, #c67bcb, #4ddefe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: {xs:-2, xl:0}, 
                    width: {xs:'105%',lg:'110%', xl:'100%'},
                    height: {xs:'4px', lg:'7px', xl:'7px'}, 
                   backgroundImage: `url(${rootImages.payingLine})`,
                  backgroundSize: 'cover', 
                  backgroundRepeat: 'no-repeat',
                  },
                }}
            >
             <span
          
             >
              Leads
              </span>
  
        </Box>
          {' into ' }
        
          <Box
      component="span"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(to right, #8250ed, #c67bcb, #4ddefe 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      <span>Paying Customers</span>
      <img src={rootImages.payingLine} style={{ width: '35%', height: 'auto' }} />
    </Box>
        
        </Typography>
      </Box>
      {/* <Box
      component="img"
      src={rootImages.payingLine}
      sx={{
        width: {xs:'15%', xl:'7%'},
        height: 'auto',
        position: 'absolute',
        bottom: {
          xs: '58%',
          xl: '63%',
        },
        left: {xs:'58%', lg:'70%', xl:'69%'},
      }}
    /> */}
      <BtnPrimary
        width={'120px'}
        height="50px"
        sx={{ mt: '1.5rem', fontSize: '12px' }}
        boxShadow={true}
         transparent={false}
      >
        Book a Call
      </BtnPrimary>

      <VideoBanner />

      <Stack flexDirection={'row'} gap={2} mt={{ xs: 0, lg: 4 }} mb={2}>
        <South />
        <Typography>Scroll for more</Typography>
        <South />
      </Stack>
    </BoxBanner>
  )
}

const BoxBanner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  margin: 'auto',
  marginTop: '7rem',
  [theme.breakpoints.between('lg', 'xl')]: {},
  [theme.breakpoints.between('xs', 'sm')]: {
    marginTop: '8rem',
  },
  [theme.breakpoints.between('sm', 'md')]: {},
  [theme.breakpoints.between('md', 'lg')]: {},
}))
