'use client'
import { Avatar, Box, Stack, Typography } from '@mui/material'
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

  interface TeamCardProps {
    background: string
    image: string
    name: string
    profesion: string
    textone: string
    texttwo: string
    textthree: string
  }
  
export const TeamCard : React.FC<TeamCardProps> = ({
    background,
    image,
    name,
    profesion,
    textone,
    texttwo,
    textthree,
  }) => {
  return (
    <Box display="flex" flexDirection="column"  width={{lg:'20rem'}
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
 <Stack my={4} alignItems="center" >
      
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }}
/>


        <Typography
            fontWeight={'900'}
            className={raleway.className}
            fontSize={{xs:'30px', lg:'40px'}}
        >
            {name}
        </Typography>
        <Typography 
           fontWeight={'900'}
           className={dmSans.className}
           textAlign={'center'}
           fontSize={{xs:'30px', lg:'50px'}}
        >
            {profesion}
        </Typography>
        <Box display={'flex'} flexDirection={'column'}  width={'83%'} gap={{xs:2, lg:1}} mt={2}>
        <Stack flexDirection={'row'}  alignItems={'center'} alignContent={'center'} gap={1}>
        <Box display='flex' bgcolor={'white'}  width={'5px'} height={'5px'} borderRadius={'50rem'} alignSelf="center"/>
        <Typography
        className={dmSans.className}
        fontSize={{xs:'12px', lg:'15px'}}
        >
            {textone}
        </Typography>
        </Stack>
        <Stack flexDirection={'row'}  alignItems={'center'} alignContent={'center'} gap={1}>
        <Box bgcolor={'white'}  width={'5px'} height={'5px'} borderRadius={'50rem'}/>
        <Typography
        className={dmSans.className}
        fontSize={{xs:'12px', lg:'15px'}}
        >
           {texttwo}
        </Typography>
        </Stack>
        <Stack flexDirection={'row'}  alignItems={'center'} alignContent={'center'} gap={1}>
        <Box bgcolor={'white'}  width={'5px'} height={'5px'} borderRadius={'50rem'}/>
        <Typography
        className={dmSans.className}
        fontSize={{xs:'12px', lg:'15px'}}
        >
          {textthree}
        </Typography>
        </Stack>
       
        </Box>
        </Stack>
    </Box>
  )
}
