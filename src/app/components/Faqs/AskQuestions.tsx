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


interface Props {
  question: string;
  ask: string;
}

export const AskQuestions = ({question, ask}: Props) => {
    const [expanded, setExpanded] = useState<string | false>();

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false)
      }

  return (
    <div>
    <Accordion expanded={expanded === question} onChange={handleChange(question)}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography  color={'white'}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color={'white'}> 
         {ask}
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
  )
}


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