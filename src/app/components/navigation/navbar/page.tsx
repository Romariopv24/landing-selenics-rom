'use client'
import { Box, Stack, styled, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Sidebar } from '../sidebar/page'
import Image from 'next/image'
import { rootImages } from '@/app/core/rootImages'
import { Raleway } from 'next/font/google'
import { BookNow } from './BookNow'

const raleway = Raleway({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000)

    return () => clearTimeout(timer);
  }, [])

  const toggleDrawer = (open: boolean) => () => setOpen(open)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Stack spacing={visible ? 6 : 0 } alignItems="center" justifyContent="center">
      <BookNow  visible={visible} setVisible={setVisible}/>
      <MainContainer scrolled={scrolled ? true : undefined}>
        <MenuContainer>
          <Image
            src={rootImages.logo}
            alt="Logo"
            width={'150'}
            height={'60'}
            className="relative"
          />
          <Box sx={styledBox}>
            {[
              'lorem one',
              'lorem two',
              'lorem three',
              'lorem four',
              'lorem five',
            ].map((loremp: string, index: number) => (
              <Typography
                className={raleway.className}
                key={index}
                gutterBottom
                sx={{ margin: 'auto' }}
              >
                {loremp}
              </Typography>
            ))}
          </Box>
          <Sidebar open={open} toggleDrawer={toggleDrawer} />
        </MenuContainer>
      </MainContainer>
    </Stack>
  )
}

const MainContainer = styled(Stack)<{ scrolled?: boolean }>(({ scrolled }) => ({
  flexDirection: 'row',
  height: '5rem',
  backgroundColor: scrolled === true ? 'rgba(55, 23, 126, 0.8)' : 'transparent',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
  transition: 'background-color 0.3s ease',
}))

const MenuContainer = styled(Stack)(() => ({
  width: '94%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 'auto',
}))

const styledBox = {
  display: {
    xs: 'none',
    lg: 'flex',
  },
  flexDirection: 'row',
  gap: 10,
  marginRight: { lg: '3rem', xl: '10rem' },
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
}
