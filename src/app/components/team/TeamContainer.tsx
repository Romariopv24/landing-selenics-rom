'use client'
import { Box, Stack, Typography } from '@mui/material'
import { Raleway } from 'next/font/google'
import React from 'react'
import { TeamCard } from './TeamCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay  } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { rootImages } from '@/app/core/rootImages'

const raleway = Raleway({
    subsets: ['latin'],
    style: ['normal'],
    weight:["100",'200','300', '400', '500', '600', "700", "800","900"]
  })

export const TeamContainer = () => {

    const dataTeam = [
        {
            background: '#2c3e53',
            image: rootImages.team.carlos,
            name:'Da Silva',
            profesion:'Marketing & Campaign expert',
            textone: '+6 years of experience doing Sales Funnel & Meta ads.',
            texttwo:'$3M in advertising budgets managed with proven results',
            textthree: '70k+ leads secured through targeted sales funnel strategies.'
        },
        {
            background: '#384167',
            image: rootImages.team.mari,
            name:'Corvaglia',
            profesion:'Graphic Designer & Video Editor',
            textone: '+5 years of experience creating compelling digital media.',
            texttwo:'50% increase in video viewership achieved through developed motion graphics.',
            textthree: '10+ industries served with crafted brand visuals, enhancing market differentiation'
        },
        {
            background: '#4d3253',
            image: rootImages.team.liz,
            name:'Fitt',
            profesion:'CX/UX Designer & Brand Strategist',
            textone: '+3 years of experience with Customer Experience Design.',
            texttwo:'30% boost in customer engagement achieved through developed CX strategies.',
            textthree: '22% increase in conversion rates resulting from revamped website design and UX.'
        },
        {
            background: '#2c3e53',
            image: rootImages.team.reinaldo,
            name:'Rondon',
            profesion:'Full Stack Developer',
            textone: '+4 years of experience with Administrative Area.',
            texttwo:'30% boost in customer engagement achieved through developed CX strategies.',
            textthree: '22% increase in conversion rates resulting from revamped website design and UX.'
        },

        {
          background: '#384167',
          image: rootImages.team.valeria,
          name:'Capote',
          profesion:'Project Manager & Administrative Director',
          textone: '+6 years of experience doing Sales Funnel & Meta ads.',
          texttwo:'$3M in advertising budgets managed with proven results.',
          textthree: '70k+ leads secured through targeted sales funnel strategies.'
      },
      {
        background: '#4d3253',
        image: rootImages.team.reinaldo,
        name:'Parra',
        profesion:'Front-End Developer',
        textone: '+3 years of experience Develop Apps.',
        texttwo:'30% boost in customer engagement achieved through developed CX strategies.',
        textthree: '22% increase in conversion rates resulting from revamped website design and UX.'
    },
      
    ]

  return (
    <Stack width={{xs:'100%',lg: '70%', xl:'60%'}} display={'flex'} justifyContent={{xs:'center', lg:'start'}} alignItems={{xs:'center', lg:'start'}}>
    <Stack display={'flex'}  mt={{xs: 5, xl: 10 }} alignContent={'start'} width={{xs:'50%', md:'90%', lg:'100%'}} >
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
          Your dedicated team
      </Typography>
    </Stack>

    {/* Swipper  */}
    <Box display={'flex'} mt={{xs: 5, lg:10}} width={{xs:'70%', sm:'50%',md:"90%", lg:'100%'}} alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
      <Swiper
       autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{ height: "600px" }}
        slidesPerView={3}
        spaceBetween={1} 
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5, // Espacio entre slides en pantallas pequeñas
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 5, // Espacio entre slides en pantallas medianas
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        
      >
        {dataTeam.map((team, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TeamCard
              background={team.background}
              image={team.image}
              name={team.name}
              profesion={team.profesion}
              textone={team.textone}
              texttwo={team.texttwo}
              textthree={team.textthree}
            />
          </SwiperSlide>
        ))}
      </Swiper>
        {/* <div className="swiper-pagination" style={{ display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center' }}></div> */}
    </Box>
    </Stack>
  )
}
