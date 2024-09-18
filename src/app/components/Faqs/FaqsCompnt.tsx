import { ArrowDownward, ArrowDropDown, BuildOutlined, HeadsetMicOutlined, InfoOutlined, StarBorder } from '@mui/icons-material'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack, Box } from '@mui/material'
import { Raleway } from 'next/font/google'
import React from 'react'
import { AskQuestions } from './AskQuestions'

const raleway = Raleway({
    subsets: ['latin'],
    style: ['normal'],
    weight:["100",'200','300', '400', '500', '600', "700", "800","900"]
  })

export const FaqsCompnt = () => {

  const dataAskQuestions = [[{
    question: 'How long does it take to build a landing page?',
    ask:'Most projects are completed within 2-3 weeks, depending on complexity.'
    },
    {
    question: 'What do you need from me to get started?',
    ask: "We'll ask for your branding materials, content, and a clear understanding of your goals."},
    {
      question: 'How do I secure my spot?',
      ask: 'A 60% upfront payment will secure your spot in our schedule.',
    },{
    question: 'What if I already have a landing page?',
    ask: 'We can optimize your existing landing page as part of our service.'
  },
  {
    question: 'Do you offer custom plans?',
    ask: "No, we offer three structured plans designed to meet a wide range of needs. During the consultation, we'll help you choose the plan that fits best."

  },
  {
    question: 'How do payments work?',
    ask:'A 60% upfront payment is required to secure your spot and kickstart the process.'

  },
  {
    question: 'What happens if I need more revisions?',
    ask: 'Additional revisions beyond the two included may be subject to extra charges.'
  },
  {
    question: 'What if I need to cancel my project?',
    ask: "Cancellation terms will be outlined in your agreement, and refunds may be limited depending on the stage of the project."
  },
],
[{
  question: 'What’s included in your packages?',
  ask:'Each package includes a custom landing page, CRM integration, email marketing setup, 24/5 customer support, an active Slack channel for your project, and two revisions to perfect your landing page.'
  },
  {
  question: 'Do you handle ongoing maintenance?',
  ask: "Ongoing support is available, but maintenance services are discussed separately after the project launch."
  },
  {
    question: 'How many clients do you work with at a time?',
    ask: 'To ensure top-notch quality, we only work with 4 to 6 clients per month, dedicating ample time to each project.',
  },
  {
  question: 'Are your services suitable for my niche?',
  ask: 'Yes, we tailor our services to fit your specific industry and audience.'
  },
  {
  question: 'Can I see samples of your previous work?',
  ask: "Yes, we can provide examples during your consultation."
  },
{
  question: 'Do you work with templates?',
  ask:'No, each of our projects are completely unique to you, unless you want your page to look like one of out previous jobs.'

},
{
  question: 'Can you help with content creation?',
  ask: 'Content creation services can be discussed during your consultation.'
},
{
  question: 'Do your prices include ad budgets?',
  ask: "No, the prices do not include the budget for running ads. You'll need to set aside a separate budget for that."
},
{
  question: 'How will you drive traffic to my landing page?',
  ask: "We use targeted ad campaigns on Facebook and Instagram."
}
]
]

  return (
    <>
  <Accordion sx={{ backgroundColor: '#1f1d2b', color: 'white', maxWidth: {lg:'700px'} }}>
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
        // maxWidth: '700px', // Establece el ancho máximo
        // maxHeight: '400px', // Establece la altura máxima
        // overflow: 'auto', // Agrega scroll si el contenido excede el tamaño máximo
        padding: '16px',
        // border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >

      <AskQuestions />
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
