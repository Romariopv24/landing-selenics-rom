import { Stack, Typography } from '@mui/material'
import { DM_Sans, Raleway } from 'next/font/google'
import React from 'react'
import { Cards } from './Cards'


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

export const PricingContent = () => {

   

  return (
    <Stack  mt={{ xl: 10 }} alignContent={'center'} width={{lg: '70%', xl:'60%'}}>
    <Typography
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
        mt={{ xs: 5, lg: 8, xl:10}}
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={{ xs: 6, lg: 10 }}
      >
        <Cards />
      </Stack>
    </Stack>
  )
}
