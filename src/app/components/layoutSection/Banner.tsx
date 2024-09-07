'use client'
import { BtnPrimary } from '@/app/custom/Components'
import { Box, Stack, styled, Typography } from '@mui/material'
import { DM_Sans, Raleway } from 'next/font/google'
import React from 'react'
import { VideoBanner } from './VideoBanner'
import { South } from '@mui/icons-material'
import { GradientText } from './GradientText'

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
      <Box sx={{ width: { xs: '80%', lg: '37%', xl: '40%' }, mt: '1.2rem' }}>
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
              xl: '1.2rem',
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
