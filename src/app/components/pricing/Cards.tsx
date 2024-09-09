'use client'
import { BtnPrimary } from '@/app/custom/Components'
import { Box, Stack, Typography } from '@mui/material'
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

export const Cards = () => {
  return (
    <Box display="flex" flexDirection="column" height={{xs:'30rem', lg:'36rem', xl:'36rem'}} width={{lg:'20rem'}
}
    sx={{
        background: `
          radial-gradient(circle at 10% 10%, #2a2936, transparent 50%),
          radial-gradient(circle at 90% 90%, #2c3e53, transparent 80%)
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
            Essential 
        </Typography>
        <Typography 
        color='white'
           fontWeight={'900'}
           className={dmSans.className}
           fontSize={{xs:'40px', lg:'50px'}}
        >
            $1,300
        </Typography>
        <Box display={'flex'} flexDirection={'column'}  width={'83%'} gap={{xs:2, lg:1}} mt={2}>
        <Stack flexDirection={'row'}  alignItems={'center'} alignContent={'center'} gap={1}>
        <Box display='flex' bgcolor={'white'}  width={'5px'} height={'5px'} borderRadius={'50rem'} alignSelf="center"/>
        <Typography
        color='white'
        className={dmSans.className}
        fontSize={{xs:'12px', lg:'15px'}}
        >
            Custom Landing Page: Tailored design.
        </Typography>
        </Stack>
        <Stack flexDirection={'row'}  alignItems={'center'} alignContent={'center'} gap={1}>
        <Box bgcolor={'white'}  width={'5px'} height={'5px'} borderRadius={'50rem'}/>
        <Typography
        color='white'
        className={dmSans.className}
        fontSize={{xs:'12px', lg:'15px'}}
        >
            CRM Integration: Manage customers.
        </Typography>
        </Stack>
        <Stack flexDirection={'row'}  alignItems={'center'} alignContent={'center'} gap={1}>
        <Box bgcolor={'white'}  width={'5px'} height={'5px'} borderRadius={'50rem'}/>
        <Typography
        color='white'
        className={dmSans.className}
        fontSize={{xs:'12px', lg:'15px'}}
        >
            Email Marketing Setup: Launch campaigns.
        </Typography>
        </Stack>
        <Stack flexDirection={'row'}  alignItems={'center'} alignContent={'center'} gap={1}>
        <Box bgcolor={'white'}  width={'5px'} height={'5px'} borderRadius={'50rem'}/>
        <Typography 
        color='white'
        className={dmSans.className}
        fontSize={{xs:'12px', lg:'15px'}}
        >
            24/5 Support & Slack Channel: Stay connected.
        </Typography>
        </Stack>
        <Stack flexDirection={'row'}  alignItems={'center'} alignContent={'center'} gap={1}>
        <Box bgcolor={'white'}  width={'5px'} height={'5px'} borderRadius={'50rem'}/>
        <Typography
        color='white'
        className={dmSans.className}
        fontSize={{xs:'12px', lg:'15px'}}
        >
         2 Revisions: Perfect your paged.
        </Typography>
        </Stack>
        </Box>
        </Stack>
        <Stack mt={{xs:8, md: 2,  lg:1, xl: 3}} justifyContent={'center'}  alignItems="center">       
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

// 2a2936
// 2c3e53


