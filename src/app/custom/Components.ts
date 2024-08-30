import { Button, ButtonProps, styled } from "@mui/material";

export const BtnPrimary = styled(Button)<ButtonProps>(({ theme }) => ({
    background: theme.palette.custom.white,
    color:theme.palette.dark.main,
    borderRadius: '25px',
    width: '150px',
    height:'60px',
    // '&:hover': {
    //   backgroundColor: theme.palette.custom.white,
    // },
    '&:disabled': {
      backgroundColor: '#c2c2c2',
      color: '#000',
    },
  }))