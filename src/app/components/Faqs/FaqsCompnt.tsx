import { ArrowDownward, ArrowDropDown, BuildOutlined, HeadsetMicOutlined, InfoOutlined, StarBorder } from '@mui/icons-material'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack, Box } from '@mui/material'
import { Raleway } from 'next/font/google'
import React from 'react'
import { AskQuestions } from './AskQuestions'
import { dataAskQuestions } from './data'

const raleway = Raleway({
    subsets: ['latin'],
    style: ['normal'],
    weight:["100",'200','300', '400', '500', '600', "700", "800","900"]
  })

export const FaqsCompnt = () => {
 
  const dataFaqs = dataAskQuestions


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
      <Box
      sx={{
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display:'flex',
        flexDirection:'column',
        gap:1
      }}
    >
      {dataFaqs['Getting Started'].map((item, index) => {
        const {question, ask} = item
        return(
        <AskQuestions key={index} question={question} ask={ask} />
      )})}
      
    </Box>
      {/* <AccordionDetails>
        <Typography
          className={raleway.className}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails> */}
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
      <Box
      sx={{
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display:'flex',
        flexDirection:'column',
        gap:1
      }}
    >
      {dataFaqs['Service Details'].map((item, index) => {
        const {question, ask} = item
        return(
        <AskQuestions key={index} question={question} ask={ask} />
      )})}
    </Box>
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
      <Box
      sx={{
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display:'flex',
        flexDirection:'column',
        gap:1
      }}
    >
      {dataFaqs['Project Execution'].map((item, index) => {
        const {question, ask} = item
        return(
        <AskQuestions key={index} question={question} ask={ask} />
      )})}
    </Box>
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
      <Box
      sx={{
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display:'flex',
        flexDirection:'column',
        gap:1
      }}
    >
      {dataFaqs['Support and Communication'].map((item, index) => {
        const {question, ask} = item
        return(
        <AskQuestions key={index} question={question} ask={ask} />
      )})}
    </Box>
    </Accordion>
  </>
  )
}
