'use client'
import { Box, Typography } from '@mui/material'
import { Raleway } from 'next/font/google'
import Typewriter from 'typewriter-effect'

const raleway = Raleway({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  })

export const GradientText = () => {
  
  return (
    <>
    <Box display={{xs: 'none', lg:'flex'}} sx={{ width: { xs: '90%', lg: '40%', xl: '55%' } }}>
    <Typography
      color={'white'}
      variant="h1"
      gutterBottom
      className={raleway.className}
      sx={{
        fontWeight: 900,
        textAlign: 'center',
        fontSize: {
          xs: '2rem',
          sm: '4rem',
          md: '5rem',
          lg: '3rem',
          xl: '5rem',
        },
        textTransform: 'uppercase',
      }}
    >
      <Box
        component="span"
        sx={{
          background: 'linear-gradient(to right, #8250ed, #c67bcb, #4ddefe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'moveGradient 10s infinite linear',
          '@keyframes moveGradient': {
            '0%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
            '100%': {
              backgroundPosition: '0% 50%',
            },
          },
          backgroundSize: '200% 200%',
        }}
      >
        Struggling t
      </Box>
      <Box
        component="span"
        sx={{
          background: 'linear-gradient(to right, #8250ed, #c67bcb, #4ddefe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'moveGradient 10s infinite linear',
          '@keyframes moveGradient': {
            '0%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
            '100%': {
              backgroundPosition: '0% 50%',
            },
          },
          backgroundSize: '200% 200%',
        }}
      >
        o Sell
      </Box>
      <Box
        component="span"
        sx={{
          background: 'linear-gradient(to right, #8250ed, #c67bcb, #4ddefe 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'moveGradient 10s infinite linear',
          '@keyframes moveGradient': {
            '0%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
            '100%': {
              backgroundPosition: '0% 50%',
            },
          },
          backgroundSize: '200% 200%',
        }}
      >
        {' Your '}
      </Box>
      <Box
        component="span"
        sx={{
          display: 'inline-block',
        }}
      >
          <Typewriter
          options={{
            strings: ['Workshop?'],
            autoStart: true,
            loop: true,
          }}
        />
      </Box>
    </Typography>
  </Box>
  {/* mobile */}

  <Box display={{xs:'flex', lg:'none'}} sx={{ width: { xs: '90%', lg: '40%', xl: '45%' } }}>
   <Typography
      color={'white'}
      variant="h1"
      gutterBottom
      className={raleway.className}
      sx={{
        fontWeight: 900,
        textAlign: 'center',
        fontSize: {
          xs: '2rem',
          sm: '4rem',
          md: '5rem',
          lg: '3rem',
          xl: '4rem',
        },
        textTransform: 'uppercase',
      }}
    >
  <Box
    component="span"
    sx={{
        background: 'linear-gradient(to right, #8250ed, #c67bcb, #4ddefe 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'moveGradient 10s infinite linear',
        '@keyframes moveGradient': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
         backgroundSize: '200% 200%',
      }}
  >
    Struggling t
  </Box>
  <Box
    component="span"
    sx={{
      background: 'linear-gradient(to right,  #c67bcb, #4ddefe, #8250ed 30%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'moveGradient 10s infinite linear',
      '@keyframes moveGradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
   backgroundSize: '200% 200%',
    }}
  >
    o Sell
  </Box>
  <Box
    component="span"
    sx={{
        background: 'linear-gradient(to right,  #8250ed, #c67bcb, #4ddefe 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'moveGradient 10s infinite linear',
        
        '@keyframes moveGradient': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
         backgroundSize: '200% 200%',
      }}
  >
    {' Your'}
  </Box>
       <Typewriter
          options={{
            strings: ['Workshop?'],
            autoStart: true,
            loop: true,
          }}
        />
    </Typography>
    </Box>
  </>
  )
}
