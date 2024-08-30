'use client'
import { BtnPrimary } from '@/app/custom/Components'
import { Box, styled, Typography } from '@mui/material'
import { DM_Sans, Raleway } from 'next/font/google'
import React from 'react'

const raleway = Raleway({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  })

 const dmSans = DM_Sans({
    subsets: [ "latin"],
    style: ["normal"],
    weight:["100","1000","200","300","400","500","600","700","800","900"]
})

export const Banner = () => {
  return (
    <BoxBanner>
        <Box sx={{width:'90%'}}>
         <Typography variant="h1" gutterBottom className={raleway.className} 
             sx={{ fontWeight: 900, textAlign:'center',
              fontSize:'clamp(2.5rem, 2.5vw, 4rem)'
              }}
         >
         Struggling to Sell Your Workshop?
      </Typography>
      </Box>
      <Box sx={{width:'80%', mt:'1.5rem'}}>
      <Typography variant="h4" gutterBottom className={dmSans.className} 
             sx={{  textAlign:'center',
                fontWeight: '500',
              fontSize:'clamp(1.2rem, 2.5vw, 4rem)'
              }}
         >
        We Help Coaches and Experts Like You Convert  Leads  into
        Paying Customers 
      </Typography>
      </Box>

      <BtnPrimary sx={{mt:'1.5rem', fontSize: '14px'}}>
          Book a Call
      </BtnPrimary>
    </BoxBanner>
  )
}

const BoxBanner = styled(Box)(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    alignContent:'center',
    alignItems: 'center',
    justifyContent:'center',
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