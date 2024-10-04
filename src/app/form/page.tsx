import { Box, Stack, Typography } from "@mui/material"
import styles from '../page.module.css'
import { Navbar } from "../components/navigation/navbar/Navbar"
import { Suspense } from "react"
import FormCode from "../components/Form/FormCode"


const page = () => {
  return (
    <div className={styles.container}>
      <Stack sx={mainContainer} >
    <Stack width={'100%'} >
      <Navbar />
      </Stack>
        <Stack width={{lg:'70%', xs:'90%'}} flexDirection={{lg:'row', xs:'column'}} my={'5rem'} justifyContent={'center'} alignItems={'center'} gap={{lg:'8rem', xs:'2rem'}}>
          <Box display={'flex'} flexDirection={'column'} justifyContent={{lg:'start', xs:'center'}} alignItems={{lg:'start', xs:'center'}} width={'100%'}>
          <Typography variant="h3">
            title
          </Typography>
          <Typography variant="body1" paragraph>
              Línea 1 del texto del formulario.<br />
              Línea 2 del texto del formulario.<br />
              Línea 3 del texto del formulario.<br />
              Línea 4 del texto del formulario.<br />
              Línea 5 del texto del formulario.
            </Typography>
          </Box>
          <FormCode />
        </Stack>
      </Stack>
    </div>
  )
}


export default page
const mainContainer = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  // padding: '2rem',
}
