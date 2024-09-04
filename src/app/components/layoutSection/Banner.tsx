'use client'
import { BtnPrimary } from '@/app/custom/Components'
import { Box, Stack, styled, Typography } from '@mui/material'
import { DM_Sans, Raleway } from 'next/font/google'
import React from 'react'
import { VideoBanner } from './VideoBanner'
import { South } from '@mui/icons-material'

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
      <Box sx={{ width: { xs: '90%', lg: '40%', xl: '55%' } }}>
        <Typography
          variant="h1"
          gutterBottom
          className={raleway.className}
          sx={{
            fontWeight: 900,
            textAlign: 'center',
            fontSize: {
              xs: '2rem',
              sm: '4rem',
              md: '5rem',
              lg: '3rem',
              xl: '5rem',
            },
            textTransform: 'uppercase',
          }}
        >
          Struggling to Sell Your Workshop?
        </Typography>
      </Box>
      <Box sx={{ width: { xs: '80%', lg: '37%', xl: '35%' }, mt: '1.5rem' }}>
        <Typography
          variant="h4"
          gutterBottom
          className={dmSans.className}
          sx={{
            textTransform: 'uppercase',
            textAlign: 'center',
            fontWeight: '500',
            fontSize: {
              xs: '1.2rem',
              sm: '1.5rem',
              md: '2rem',
              lg: '1rem',
              xl: '1.5rem',
            },
          }}
        >
          We Help Coaches and Experts Like You Convert Leads into Paying
          Customers
        </Typography>
      </Box>

      <BtnPrimary
        width={'120px'}
        height="50px"
        sx={{ mt: '1.5rem', fontSize: '12px' }}
      >
        Book a Call
      </BtnPrimary>

      <VideoBanner />

      <Stack flexDirection={'row'} gap={2} mb={4}>
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
  marginTop: '10rem',
  [theme.breakpoints.between('lg', 'xl')]: {
    // padding: '200px 200px ',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    //   padding: '150px 10px ',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    //   padding: '170px 50px',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    //   padding: '170px 50px',
  },
}))
