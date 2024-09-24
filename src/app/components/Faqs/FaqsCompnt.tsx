'use client'
import { ArrowDownward, ArrowDropDown, BuildOutlined, HeadsetMicOutlined, InfoOutlined, StarBorder } from '@mui/icons-material'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack, Box } from '@mui/material'
import { Raleway } from 'next/font/google'
import React, { useState } from 'react'
import { dataAskQuestions } from './data'
import { AskQuestions } from './AskQuestions'

const raleway = Raleway({
    subsets: ['latin'],
    style: ['normal'],
    weight:["100",'200','300', '400', '500', '600', "700", "800","900"]
  })

export const FaqsCompnt = () => {
 const [expandedParents, setExpadedParents] = useState<string | false>('panel1')
  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleParentChange =  (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpadedParents(newExpanded ? panel : false)
  }

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  const dataFaqs = dataAskQuestions


  return (
    <>
  <Accordion expanded={expandedParents === 'panel1'} sx={{ backgroundColor: '#1f1d2b', color: 'white' }}
  onChange={handleParentChange('panel1')}
  >
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
        const {question, ask, panel, panelContent,panelHeader } = item
        return(
        <div key={index}>
        <AskQuestions question={question} ask={ask} panel={panel} panelContent={panelContent} panelHeader={panelHeader}
        expanded={expanded}
        onChange={handleChange}
        />
        </div>
      )})}
      
    </Box>
      
    </Accordion>
    <Accordion
    expanded={expandedParents === 'panel2'}
    sx={{ backgroundColor: '#1f1d2b', color: 'white' }}
    onChange={handleParentChange('panel2')}
    >
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
        const {question, ask, panel, panelContent,panelHeader } = item
        return(
          <div key={index}>
  <AskQuestions question={question} ask={ask} panel={panel} panelContent={panelContent} panelHeader={panelHeader}
        expanded={expanded}
        onChange={handleChange}
  />
          </div>
      )})}
    </Box>
    </Accordion>
    <Accordion 
    expanded={expandedParents === 'panel3'}
    onChange={handleParentChange('panel3')}
    sx={{ backgroundColor: '#1f1d2b', color: 'white' }}>
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
          const {question, ask, panel, panelContent,panelHeader } = item
        return(
          <div key={index}>
        <AskQuestions question={question} ask={ask} panel={panel} panelContent={panelContent} panelHeader={panelHeader}
              expanded={expanded}
              onChange={handleChange}
        />
          </div>
      )})}
    </Box>
    </Accordion>
    <Accordion 
    expanded={expandedParents === 'panel4'}
    onChange={handleParentChange('panel4')}
    sx={{ backgroundColor: '#1f1d2b', color: 'white' }}>
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
        const {question, ask, panel, panelContent,panelHeader } = item
        return(
          <div key={index}>
        <AskQuestions question={question} ask={ask} panel={panel} panelContent={panelContent} panelHeader={panelHeader}
        expanded={expanded}
        onChange={handleChange}
  />
          </div>
      )})}
    </Box>
    </Accordion>
  </>
  )
}
