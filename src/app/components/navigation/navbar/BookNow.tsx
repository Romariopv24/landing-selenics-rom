'use client'
import styled from '@emotion/styled'
import { Stack, Typography } from '@mui/material'
import { DM_Sans } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface Props { 
    visible: boolean 
    setVisible: (visible: boolean) => void
}

const dmSans = DM_Sans({
    subsets: [ "latin"],
    style: ["normal"],
    weight:["100","1000","200","300","400","500","600","700","800","900"]
})
export const BookNow = ({visible, setVisible}: Props) => {
   const currentPath = usePathname()
    const handleClick = () => {
        setVisible(false);
      }

  return (
    <>
    { currentPath === '/' && (
    <MainContainer visible={visible}>
    <Typography 
      className={dmSans.className}
        sx={{ color: 'white', fontSize:{xs:'12px',lg:'15px'} }}>
      <Link href={"#book-now-section"} style={{ color: 'white', textDecoration: 'underline' }} onClick={handleClick}>
                Book Now Before We Run Out of Spots!
            </Link>
            <span style={{ marginLeft: '8px' }}>Only 4 Left</span>
    </Typography>
    </MainContainer>
    )}
    </>
  )
}

const MainContainer = styled(Stack)<{ scrolled?: boolean; visible?: boolean }>(({ scrolled, visible }) => ({
    flexDirection: 'row',
    height: '3rem',
    backgroundColor: '#8250ed',
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'background-color 0.9s ease, opacity 0.3s ease, transform 0.3s ease',
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
  }))