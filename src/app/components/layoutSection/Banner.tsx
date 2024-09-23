'use client'
import { BtnPrimary } from '@/app/custom/Components'
import { Box, Stack, styled, Typography } from '@mui/material'
import { DM_Sans, Raleway } from 'next/font/google'
import React from 'react'
import { VideoBanner } from './VideoBanner'
import { South } from '@mui/icons-material'
import { GradientText } from './GradientText'
import { rootImages } from '@/app/core/rootImages'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import { TypewriterEffect } from '../TypeWritterEffect'

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
      color={'white'}
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
        textShadow: '0 25px 25px rgba(0, 0, 0, 0.5)'
      }}
    >
      {'We Help Coaches and Experts Like You Convert '}
      <Box
        component="span"
        sx={{
          position: 'relative',
          zIndex: 2,
          background: 'linear-gradient(to right, #8250ed, #c67bcb, #4ddefe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: { xs: 0, xl: 0 },
            width: { xs: '105%', lg: '110%', xl: '100%' },
            height: { xs: '4px', lg: '7px', xl: '7px' },
            backgroundImage: `url(${rootImages.payingLine})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          },
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
        <span
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bolder',
          }}
        >
        <TypewriterEffect
        strings={['Leads']}
        autoStart={true}
        loop={true}
        typingSpeed={150}
        pauseDuration={2500}
      />
        </span>
      </Box>
      {' into '}
      <Box
        component="span"
        sx={{
          display: 'inline-block',
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
        <span
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bolder',
          }}
        >
          Paying Customers
        </span>
        <Box
          component="img"
          src={rootImages.payingLine}
          sx={{
            width: {
              xs: '55vw',
              sm: '35vw',
              md: '35vw',
              lg: '25vw',
              xl: '100%', 
            },
            height: 'auto',
          }}
        />
      </Box>
    </Typography>
      </Box>
     
        <Link href="#book-now-section">
      <BtnPrimary
        width={'120px'}
        height="50px"
        sx={{ mt: '1.5rem', fontSize: '12px' }}
        boxShadow={true}
         transparent={false}
      >
        Book a Call
      </BtnPrimary>
        </Link>

      <VideoBanner />

      <Stack flexDirection={'row'} gap={2} mt={{ xs: 1.5, lg: 4 }} mb={2}>
        <South  
        sx={{
          color:'white'
        }}
        />
        <Typography 
      color={'white'}
        
        >
           <Link href="#book-now-section">
          Scroll for more
          </Link>
          </Typography>
        <South 
          sx={{
            color:'white'
          }}
        />
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
