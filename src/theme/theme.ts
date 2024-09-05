
'use client';

import { createTheme, responsiveFontSizes } from "@mui/material";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(49, 51, 56)',
    },
    secondary: {
      main: 'rgb(43, 45, 49)',
    },
    dark: {
      main: 'rgb(30, 31, 34)',
    },
    light: {
      main: 'rgb(78, 80, 88)',
    },
    bg: {
      background: 'rgb(49, 51, 56)',
    },
    custom: {
      main: 'rgb(49, 51, 56)',
      sec: 'rgb(181, 186, 193)',
      white: '#edf0ff',
      green: 'rgb(35, 165, 89)',
      line: 'rgb(49, 51, 56)',
      grey: 'rgb(219, 222, 225)',
    },
  },
  typography: {
    fontFamily: raleway.style.fontFamily, // Usa la fuente Raleway
    fontSize: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 400;
          src: url(${raleway.style.fontFamily}) format('woff2');
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          color: '#fff',
          fontWeight: '600',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '55px',
          background: '#fff',
          fontWeight: '600',
          color: '#000',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: '18px',
          fontWeight: '500',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorSecondary: {
          color: '#fff',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: {
          color: '#fff',
        },
        outlined: {
          color: '#fff',
        },
      },
    },
  },
});

export const responsiveTheme = responsiveFontSizes(theme);

declare module '@mui/material/styles' {
  interface Palette {
    dark: {
      main: string;
    };
    light: {
      main: string;
    };
    bg: {
      background: string;
    };
    custom: {
      main: string;
      sec: string;
      white: string;
      green: string;
      line: string;
      grey: string;
    };
  }

  interface PaletteOptions {
    dark: {
      main: string;
    };
    light: {
      main: string;
    };
    bg: {
      background: string;
    };
    custom: {
      main: string;
      sec: string;
      white: string;
      green: string;
      line: string;
      grey: string;
    };
  }
}
