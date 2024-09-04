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
    <Stack  mt={{ xl: 5 }} alignContent={'center'}>
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
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Box display="flex" alignItems="flex-start">
                <Box mr={2}>
                  <img src={item.icon} alt={item.title} style={{ width: '40px', height: '40px' }} />
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1">
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


