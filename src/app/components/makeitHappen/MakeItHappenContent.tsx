import { rootImages } from '@/app/core/rootImages'
import { Box, Grid, Stack, Typography } from '@mui/material'
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

export const MakeItHappenContent = () => {

  const gridData = [{
    icon: rootImages.iconsContent.pen,
    title:'Schedule Your FREE Consultation',
    text: 'Get started by booking your free consultation. Available as soon as tomorrow. (Mon - Fri) '
  },
  {
    icon: rootImages.iconsContent.glass,
    title:'Discuss Needs and Propose Plan',
    text: 'We\'ll discuss your specific needs and goals, then recommend one of our plans that best aligns with your objectives.'
  },
  {
    icon: rootImages.iconsContent.cash,
    title:'Secure Your Plan ',
    text: 'To ensure top-quality results, we work with just 4 to 6 customers per month, giving each project the attention it deserves. Secure your spot with a 60% upfront payment to get started.'
  },
  {
    icon: rootImages.iconsContent.calendar,
    title:'Launch and Start Converting',
    text: 'We’ll complete your project and launch it, setting you up to turn your visitors into loyal, paying customers.'
  }
]

  return (
        <Stack  mt={{ xl: 5 }} alignContent={'center'} width={{lg: '70%', xl:'60%'}}>
        <Typography
        color='white'
                sx={{
                fontWeight: 900,
                textAlign: 'left',
                textTransform: 'uppercase',
                fontSize: { lg: '2rem' },
                }}
            >
                    How We Make It Happen
            </Typography>
            <Stack
        mt={{ xs: 5, lg: 18}}
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={{ xs: 6, lg: 10 }}
      >
           <Grid container spacing={4} justifyContent="center" alignItems="center">
      {gridData.map((item, index) => (
  <Grid item xs={12} sm={12} md={6} key={index}>
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box
        width={{ xs: '20%', md: '15%' }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb={2}
      >
        <img src={item.icon} alt={item.title} style={{ width: '70px', height: '70px' }} />
      </Box>
      <Box
        // width={'0%'}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
        color='white'
          className={raleway.className}
          fontWeight={'700'}
          fontSize={{ xs: '18px', lg: '22px' }}
          gutterBottom
          textAlign="center"
        >
          {item.title}
        </Typography>
        <Typography
        color='white'
          width={{lg:'70%'}}
          className={dmSans.className}
          fontSize={{ xs: '14px', lg: '18px' }}
          textAlign="left"
        >
          {item.text}
        </Typography>
      </Box>
    </Box>
  </Grid>
))}
    </Grid>
      </Stack>
        </Stack>
  )
}
