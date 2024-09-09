'use client'
import { BtnPrimary } from '@/app/custom/Components'
import { Box, Stack, Typography } from '@mui/material'
import { Raleway } from 'next/font/google'
import Link from 'next/link'
import React, { useState } from 'react'

const raleway = Raleway({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  })

export const Convinced = () => {
    
    const [showComponent, setShowComponent] = useState(true)

  return (
    <>
    {showComponent && (
        <Stack mt={{xs:5, lg: 6, xl:10}} alignContent={'center'}        justifyContent={'center'} flexDirection={'column'}>
        <Typography
    color='white'
        className={raleway.className}
        sx={{
        fontWeight: 900,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: { lg: '2rem' },
        }}
    >
            <Link href="#book-now-section">
            Are you convinced yet?
            </Link>
    </Typography>
    <Box mt={2} display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={2}>
            <Link href="#book-now-section">
        <BtnPrimary width={'7rem'} height={'35px'} boxShadow={true} transparent={false}>
            <Typography
            className={raleway.className}
            fontSize={{xs:'14px', lg:'13px'}}
            >
                Yes
            </Typography>
        </BtnPrimary>
                </Link>
        <BtnPrimary 
           onClick={() => setShowComponent(false)}
        width={'7rem'} height='35px' transparent={true}>
            <Typography
            className={raleway.className}
            fontSize={{xs:'14px', lg:'13px'}}
         
            >
                No
            </Typography>
        </BtnPrimary>
    </Box>
</Stack>
    )}
    </>
  )
}
