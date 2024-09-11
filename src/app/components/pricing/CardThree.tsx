'use client'
import { rootImages } from '@/app/core/rootImages'
import { BtnPrimary } from '@/app/custom/Components'
import { ErrorOutline } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { Raleway, DM_Sans } from 'next/font/google'
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

export const CardThree = () => {
  return (
    <Box display="flex" flexDirection="column" height={{xs:'30rem', lg:'36rem', xl:'36rem'}}  width={{lg:'20rem'}}
sx={{
    background: `
      radial-gradient(circle at 10% 10%, #2a2936, transparent 50%),
      radial-gradient(circle at 90% 90%, #4d3253, transparent 80%)
    `,
    border: '5px solid white',
    borderRadius: '20px',
  }}
>
    <Stack mt={4} alignItems="center">
    <Typography
                color='white'
        fontWeight={'900'}
        className={raleway.className}
        fontSize={{xs:'30px', lg:'40px'}}
    >
        Ultimate
    </Typography>
    <Typography 
                color='white'

       fontWeight={'900'}
       className={dmSans.className}
       fontSize={{xs:'40px', lg:'50px'}}
    >
        $2,600
    </Typography>

     {/*  */}
     <Stack my={2} flexDirection={'row'} width={'85%'}  alignItems={'center'} alignContent={'center'} gap={1}>
        <ErrorOutline 
         sx={{
          width:'18px', height: '18px',
          color:'white'
        }} />
        <Typography
                color='white'

        className={dmSans.className}
        fontSize={{xs:'13px', lg:'15px'}}
        >
            Everything in our Essential + Plus:
        </Typography>
        </Stack>
        {/*  */}

    <Box display={'flex'} flexDirection={'column'}  width={'83%'} gap={{xs:2, lg:1}} mt={2}>
    <Stack flexDirection={'row'}  alignItems={'center'} alignContent={'center'} gap={1}>
    <Box display='flex' bgcolor={'white'}  width={'5px'} height={'5px'} borderRadius={'50rem'} alignSelf="center"/>
    <Typography
                color='white'

    className={dmSans.className}
    fontSize={{xs:'12px', lg:'15px'}}
    >
        AI Chatbot: Automatize interactions and Engage visitors.
    </Typography>
    </Stack>
   
    </Box>
    </Stack>
    <Stack mt={{xs:20, lg:18, xl: 17}} justifyContent={'center'}  alignItems="center">       
         <BtnPrimary width={'7rem'} height={'40px'} boxShadow={true} transparent={false} >
         <Typography 
         
            className={dmSans.className}
            fontSize={{xs:'14px', lg:'14px'}}
            >
                 I Want It!
           </Typography>
        </BtnPrimary>
    </Stack>
</Box>
  )
}
