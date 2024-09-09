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

    console.log('IMG UR:', image)
  return (
    <Box display="flex" flexDirection="column"  
    sx={{
        background: `
          radial-gradient(circle at 10% 10%, #2a2936, transparent 50%),
          radial-gradient(circle at 90% 90%, ${background}, transparent 80%)
        `,
        border: '5px solid white',
        borderRadius: '20px',
        width: { lg:'23rem'},
        height: '92%'
      }}
    >
  <Stack my={2} alignItems="center" >
      
      <Avatar
        alt='avatar'
        src={image}
        sx={{ width: 150, height: 150 }}
        />

        <Typography
        color='white'
            fontWeight={'900'}
            className={raleway.className}
            fontSize={{xs:'18px', lg:'21px'}}
            // mt={1}
        >
            {name}
        </Typography>
        <Typography 
        color='white'
        width={'85%'}
            mt={1}
           fontWeight={'700'}
           className={dmSans.className}
           textAlign={'center'}
           fontSize={{xs:'15px', lg:'18px'}}
        >
            {profesion}
        </Typography>
        <Box display={'flex'} flexDirection={'column'}  width={'83%'} gap={{xs:2, lg:1}} mt={2}>
        <Stack flexDirection={'row'}  alignItems={'center'} alignContent={'center'} gap={1}>
        <Box display='flex' bgcolor={'white'}  width={'5px'} height={'5px'} borderRadius={'50rem'} alignSelf="center"/>
        <Typography
        color='white'
        className={dmSans.className}
        fontSize={{xs:'12px', lg:'15px'}}
        >
            {textone}
        </Typography>
        </Stack>
        <Stack flexDirection={'row'}  alignItems={'center'} alignContent={'center'} gap={1}>
        <Box bgcolor={'white'}  width={'5px'} height={'5px'} borderRadius={'50rem'}/>
        <Typography
        color='white'
        className={dmSans.className}
        fontSize={{xs:'12px', lg:'15px'}}
        >
           {texttwo}
        </Typography>
        </Stack>
        <Stack flexDirection={'row'}  alignItems={'center'} alignContent={'center'} gap={1}>
        <Box bgcolor={'white'}  width={'5px'} height={'5px'} borderRadius={'50rem'}/>
        <Typography
        color='white'
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
