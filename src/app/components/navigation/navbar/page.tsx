'use client'
import { Box, Stack, styled, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Sidebar } from '../sidebar/page'
import Image from 'next/image'
import { rootImages } from '@/app/core/rootImages'

export const Navbar = () => {

  const [open, setOpen] = useState(false)
  const toggleDrawer = (open: boolean) => () => setOpen(open)


  return (
    <MainContainer>
      <MenuContainer>
      <Image
          src={rootImages.logo}
          alt="Logo"
          width={"150"}
          height={"60"}
          className="relative"
        />
        <Box sx={styledBox}>
        {
            ['lorem one', 'lorem two', 'lorem three', 'lorem four', 'lorem five'].map((loremp: string, index: number) => (
                <Typography key={'number'} variant="h6" gutterBottom sx={{margin:'auto'}}> 
                   {loremp}
                </Typography>
            ))
        }
        </Box>
        <Sidebar open={open}  toggleDrawer={toggleDrawer}/>
        </MenuContainer>
    </MainContainer>
  )
}


const MainContainer = styled(Stack)(() => ({
  flexDirection: 'row',
  height:'7rem',
  backgroundColor: 'transparent',
  alignItems:'center',
  position: 'fixed',
  top: 0,
  width: '100%', 
}))

const MenuContainer = styled(Stack)(() => ({
  width:'94%',
  flexDirection: 'row',
  justifyContent:'space-between',
  alignItems:'center',
  margin:'auto'
}))

 
const styledBox = {
  display: {
    xs: 'none',
    lg: 'flex',
  },
  flexDirection: 'row',
  gap: 10,
  marginRight:{lg:'3rem', xl:'10rem'},
  alignItems:'center',
  alignContent:'center',
  justifyContent:'center'
}
