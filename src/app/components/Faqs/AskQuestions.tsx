'use client'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { ArrowForwardIosSharp } from '@mui/icons-material';


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `0.5px solid #fff`,
    borderRadius:'5px',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '13px', color:'white' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: '#1f1d2b',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft:5,
    },
    border: `0.5px solid #fff`,
    borderRadius:'5px',

  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 'auto',
    borderTop: '1px solid #1f1d2b',
    backgroundColor: '#1f1d2b',
  }));


export const AskQuestions = () => {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false)
      }

  return (
    <div>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography color={'white'}>Collapsible Group Item #1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color={'white'}> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography color={'white'}>Collapsible Group Item #2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color={'white'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography color={'white'}>Collapsible Group Item #3</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color={'white'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
  )
}
