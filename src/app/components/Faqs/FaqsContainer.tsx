import { Box, Stack, Typography } from '@mui/material'
import { DM_Sans, Raleway } from 'next/font/google'
import React from 'react'
import { FaqsCompnt } from './FaqsCompnt'

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
export const FaqsContainer = () => {
  return (
    <Stack mt={{ xl: 10 }} alignContent={'center'} width={{ lg: '70%', xl: '60%' }}>
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
      frequently asked questions
    </Typography>

    <Stack flexDirection={{ xs: 'column', lg: 'row' }} mt={{ xs: 3, lg: 20 }} gap={5}>
      <Box>
        <Typography
        color='white'
          className={dmSans.className}
          sx={{
            fontWeight: 500,
            textAlign: 'left',
            // fontSize: { lg: '2rem' },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis mollis ante interdum placerat. Maecenas et tortor nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </Typography>
      </Box>
      <Box>
        <FaqsCompnt />
      </Box>
    </Stack>
  </Stack>
  )
}
