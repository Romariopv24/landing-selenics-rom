import { rootImages } from '@/app/core/rootImages'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { Raleway } from 'next/font/google'
import React from 'react'

const raleway = Raleway({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  })

export const ContentGrid = () => {

  const gridData = [
    {
      icon: rootImages.icons.headphones,
      title: 'Desire Ongoing Support',
      text:'You need a team who provides support and improvements for effective campaigns and top quality design.'
    },
    {
      icon: rootImages.icons.heart,
      title: 'Value good design',
      text: 'You want a landing page with standout graphics that reflect your brand and capture your audience\'s attention.'
    },
    {
      icon: rootImages.icons.xIcon,
      title: 'Struggled with Marketing',
      text:'You’ve invested in marketing without success and need a solution that delivers real results.'
    },
    {
      icon: rootImages.icons.check,
      title: 'Ready to Invest for Results',
      text: 'You understand the importance of investing in high quality, custom marketing solutions for the best outcomes.'
    },
    {
      icon: rootImages.icons.sad,
      title: 'Tired of Generic Solutions',
      text:'One size fits all solutions fall short. You need a unique, tailored strategy designed just for you.'
    },
    {
      icon: rootImages.icons.stars,
      title: 'Value Your Customers',
      text: 'You want a landing page that ensures your customers have a smooth experience that leads to more sales.'
    },
  ]

  return (
    <Stack  mt={{ xl: 5 }} alignContent={'center'} width={{lg: '70%'}}>
        <Typography
        className={raleway.className}
        sx={{
          fontWeight: 900,
          textAlign: 'left',
          textTransform: 'uppercase',
          fontSize: { lg: '2rem' },
        }}
      >
            We’re a great fit if you
      </Typography>

      <Stack
        mt={{ xs: 5, lg: 8, xl:10}}
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={{ xs: 6, lg: 10 }}
      >
          <Grid container spacing={4}>
          {gridData.map((item, index) => (
            <Grid item xs={12} sm={12} md={6} key={index}>
              <Box sx={mainBoxGrid}>
                <Box  width={{xs:'20%', md:'15%'}} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                  <img src={item.icon} alt={item.title} style={{ width: '40px', height: '40px' }} />
                </Box>
                <Box width={'85%'} my={'auto'} display={'flex'} flexDirection={'column'} justifyContent={'start'} alignContent={'flex-start'}>
                  <Typography 
                    fontSize={'18px'}
                  gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    fontSize={'15px'}
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


const mainBoxGrid = {
  display: 'flex',
  alignItems: 'flex-start',
  backgroundColor:'#1f1d2b',
  borderRadius:'20px',
  height: '10rem',
  boxShadow: '5px 5px 2px #8250ed',
}