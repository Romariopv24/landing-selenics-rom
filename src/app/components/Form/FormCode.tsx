import { Stack } from '@mui/material'
import Script from 'next/script'
import React from 'react'

const FormCode = async () => {

  return (
 <Stack width={'100%'} height={'100%'}>
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/tocsXjpDBjVrUBJybxlX"
      style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px'}}
      id="inline-tocsXjpDBjVrUBJybxlX" 
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Formulario Selenics"
      data-height="673"
      data-layout-iframe-id="inline-tocsXjpDBjVrUBJybxlX"
      data-form-id="tocsXjpDBjVrUBJybxlX"
      title="Formulario Selenics"
          >
    </iframe>
    <Script src="https://link.msgsndr.com/js/form_embed.js"></Script>
  </Stack>
  )
}

export default FormCode


