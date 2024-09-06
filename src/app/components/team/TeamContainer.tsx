import { Stack, Typography } from '@mui/material'
import { Raleway } from 'next/font/google'
import React from 'react'
import { TeamCard } from './TeamCard'


const raleway = Raleway({
    subsets: ['latin'],
    style: ['normal'],
    weight:["100",'200','300', '400', '500', '600', "700", "800","900"]
  })

export const TeamContainer = () => {

    const dataTeam = [
        {
            background: '',
            image: '',
            name:'Da Silva',
            profesion:'Marketing & Campaign expert',
            textone: '+6 years of experience doing Sales Funnel & Meta ads.',
            texttwo:'$3M in advertising budgets managed with proven results',
            textthree: '70k+ leads secured through targeted sales funnel strategies.'
        },
        {
            background: '',
            image: '',
            name:'Corvaglia',
            profesion:'Graphic Designer & Video Editor',
            textone: '+5 years of experience creating compelling digital media.',
            texttwo:'50% increase in video viewership achieved through developed motion graphics.',
            textthree: '10+ industries served with crafted brand visuals, enhancing market differentiation'
        },
        {
            background: '',
            image: '',
            name:'Fitt',
            profesion:'CX/UX Designer & Brand Strategist',
            textone: '+3 years of experience with Customer Experience Design.',
            texttwo:'30% boost in customer engagement achieved through developed CX strategies.',
            textthree: '22% increase in conversion rates resulting from revamped website design and UX.'
        },
        {
            background: '',
            image: '',
            name:'Rondon',
            profesion:'Full Stack Developer',
            textone: '+6 years of experience doing Sales Funnel & Meta ads.',
            texttwo:'$3M in advertising budgets managed with proven results.',
            textthree: '70k+ leads secured through targeted sales funnel strategies.'
        }
    ]

  return (
    <Stack  mt={{ xl: 10 }} alignContent={'center'} width={{lg: '70%', xl:'60%'}}>
    <Typography
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
      <Stack
        mt={{ xs: 5, md: 15 ,lg: 15, xl:15}}
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={{ xs: 6, lg: 10 }}
      >
        
        {dataTeam.map((team, index) => (
        <TeamCard
        background={team.background}
        image={team.image}
        name={team.name}
        profesion={team.profesion}
        textone={team.textone}
        texttwo={team.texttwo}
        textthree={team.textthree}
        />
        ))}
      </Stack>
    </Stack>
  )
}
