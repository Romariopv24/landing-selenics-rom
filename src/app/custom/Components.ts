import { Button, ButtonProps, styled } from '@mui/material'

interface BtnPrimaryProps extends ButtonProps {
  width?: string
  height?: string
  boxShadow?: boolean
  transparent?: boolean
}

export const BtnPrimary = styled(Button)<BtnPrimaryProps>(
  ({ theme, width, height, boxShadow, transparent }) => ({
    background: transparent === false ? theme.palette.custom.white : 'transparent',
    color: transparent === false ? theme.palette.dark.main : theme.palette.custom.white,
    borderRadius: '25px',
    border: transparent === true ? `1px solid ${theme.palette.custom.white}` : 'none',
    width: width,
    height: height,
    boxShadow: boxShadow === true ? `0 6px 8px ${theme.palette.dark.main}` : 'none',
    // '&:hover': {
    //   backgroundColor: theme.palette.custom.white,
    // },
    '&:disabled': {
      backgroundColor: '#c2c2c2',
      color: '#000',
    },
  })
)
