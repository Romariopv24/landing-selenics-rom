import { Button, ButtonProps, styled } from '@mui/material'

interface BtnPrimaryProps extends ButtonProps {
  width?: string
  height?: string
}

export const BtnPrimary = styled(Button)<BtnPrimaryProps>(
  ({ theme, width, height }) => ({
    background: theme.palette.custom.white,
    color: theme.palette.dark.main,
    borderRadius: '25px',
    width: width,
    height: height,
    // '&:hover': {
    //   backgroundColor: theme.palette.custom.white,
    // },
    '&:disabled': {
      backgroundColor: '#c2c2c2',
      color: '#000',
    },
  })
)
