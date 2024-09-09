import { ArrowDownward, ArrowDropDown, BuildOutlined, HeadsetMicOutlined, InfoOutlined, StarBorder } from '@mui/icons-material'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack, Box } from '@mui/material'
import { Raleway } from 'next/font/google'
import React from 'react'

const raleway = Raleway({
    subsets: ['latin'],
    style: ['normal'],
    weight:["100",'200','300', '400', '500', '600', "700", "800","900"]
  })

export const Faqs = () => {
  return (
    <>
  <Accordion sx={{ backgroundColor: '#1f1d2b', color: 'white' }}>
      <AccordionSummary
        expandIcon={<ArrowDownward sx={{ color: 'white'}} />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box display="flex" alignItems="center" gap={1}>
            <StarBorder 
               
            />
            <Typography
            color='white'
              className={raleway.className}
              fontWeight={'700'}
            >Getting Started</Typography>
          </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          className={raleway.className}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{ backgroundColor: '#1f1d2b', color: 'white' }}>
      <AccordionSummary
        expandIcon={<ArrowDownward sx={{ color: 'white' }} />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Box display="flex" alignItems="center" gap={1}>
            <InfoOutlined />
            <Typography
            color='white'
              className={raleway.className}
              fontWeight={'700'}
            >Service Details</Typography>
          </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          className={raleway.className}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{ backgroundColor: '#1f1d2b', color: 'white' }}>
      <AccordionSummary
        expandIcon={<ArrowDownward sx={{ color: 'white' }} />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Box display="flex" alignItems="center" gap={1}>
        <BuildOutlined sx={{ transform: 'scaleX(-1)' }} />
            <Typography
            color='white'
              className={raleway.className}
              fontWeight={'700'}
            >Project Execution</Typography>
          </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography 
        color='white'
          className={raleway.className}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{ backgroundColor: '#1f1d2b', color: 'white' }}>
      <AccordionSummary
        expandIcon={<ArrowDownward sx={{ color: 'white' }} />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Box display="flex" alignItems="center" gap={1}>
            <HeadsetMicOutlined />
            <Typography 
            color='white'
            className={raleway.className}
            fontWeight={'700'}
            >Support and Communication</Typography>
          </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography 
        color='white'
            className={raleway.className}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </>
  )
}
