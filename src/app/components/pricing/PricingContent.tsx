import { Box, Stack, Typography } from '@mui/material'
import { DM_Sans, Raleway } from 'next/font/google'
import React from 'react'
import { Cards } from './Cards'
import { CardTwo } from './CardTwo'
import { CardThree } from './CardThree'


const raleway = Raleway({
    subsets: ['latin'],
    style: ['normal'],
    weight:["100",'200','300', '400', '500', '600', "700", "800","900"]
  })
  
export const PricingContent = () => {

   

  return (
    <Stack  mt={{ xl: 10 }} alignContent={'center'} width={{lg: '70%', xl:'60%'}}>
    <Typography
        color='white'
        className={raleway.className}
        sx={{
          fontWeight: 900,
          textAlign: 'left',
          textTransform: 'uppercase',
          fontSize: { lg: '2rem' },
        }}
      >
           Pricing 
      </Typography>
      <Stack
        mt={{ xs: 5, md: 15 ,lg: 15, xl:15}}
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={{ xs: 6, lg: 10 }}
      >
        <Cards />
        <Box mt={{ md: -6, lg: -6.5 }}>
        <CardTwo />
        </Box>
        <CardThree />
      </Stack>
    </Stack>
  )
}
