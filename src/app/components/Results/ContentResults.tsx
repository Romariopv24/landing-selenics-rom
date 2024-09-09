import { rootImages } from '@/app/core/rootImages'
import { Box, Stack, Typography } from '@mui/material'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const ContentResults = () => {
  return (
    <Stack mt={{ xl: 5 }} alignContent={'center'}>
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
        Why our customers keep coming back to us
      </Typography>

      <Stack
        mt={{ xs: 5, lg: 8, xl:10}}
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={{ xs: 6, lg: 10 }}
      >
        <Box width={{ xs: '100%', lg: '35rem' }}>
          <Box
            sx={{
              boxShadow: '10px 10px 2px #8250ed',
              borderRadius: '10px',
            }}
          >
            <img
              src={rootImages.excelOne}
              alt="excelone"
              style={{ width: '100%', height: '100%' }}
            />
            <img
              src={rootImages.excelTwo}
              alt="exceltwo"
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
          <Typography
            color='white'
            className={raleway.className}
            sx={{
              fontWeight: 700,
              fontSize: {xs:'16px', lg:'25px'},
            }}
            mt={3}
          >
            Budget and Results of Campaigns
          </Typography>
          <Typography
             color='white'
            className={raleway.className}
            mt={2}
            textAlign={'left'}
            fontSize={{xs:'14px', lg:'20px'}}
          >
            We don’t just drive traffic; we convert it into tangible results.
            This is how our expertly crafted landing pages + sales funnels have
            transformed leads into revenue, boosting your bottom line.
          </Typography>
        </Box>
        <Box width={{ xs: '100%', lg: '35rem' }}>
          <Box
            sx={{
              boxShadow: '10px 10px 2px #8250ed',
              borderRadius: '10px',
            }}
          >
            <img
              src={rootImages.discord}
              alt="discord"
              style={{ width: '100%', height: '100%' }}
            />
          
          </Box>
          <Typography
        color='white'
            className={raleway.className}
            sx={{
              fontWeight: 700,
              fontSize: {xs:'16px', lg:'25px'},
            }}
            mt={3}
          >
            Your Tracked and Optimized Success
          </Typography>
          <Typography
        color='white'
            className={raleway.className}
            mt={2}
            textAlign={'left'}
            fontSize={{xs:'14px', lg:'20px'}}
          >
            We provide detailed insights into your campaign’s performance, from
            lead generation to budget allocation, ensuring every dollar works
            towards maximizing your results.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  )
}

// 8250ed

// position: 'relative',
// '&::before': {
//   content: '""',
//   position: 'absolute',
//   bottom: '-10px', // Mueve el borde inferior hacia abajo
//   right: '-6px',
//   width: '100%', // Ajusta el ancho del borde inferior
//   height: '10px', // Grosor del borde inferior
//   backgroundColor: '#8250ed',
//   borderRadius: '5px', // Redondea el borde inferior
//   zIndex: -1,
// },
// '&::after': {
//   content: '""',
//   position: 'absolute',
//   bottom: '-10px',
//   right: '-9px', // Mueve el borde derecho hacia la derecha
//   width: '10px', // Grosor del borde derecho
//   height: '100%', // Ajusta la altura del borde derecho
//   backgroundColor: '#8250ed',
//   borderRadius: '5px', // Redondea el borde derecho
//   zIndex: -1,
// },
