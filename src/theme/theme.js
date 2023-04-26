import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#004DFF',
    },
    secondary: {
      main: '#E01EEC',
    },
    tercero: {
      main: '#ACCCDF',
    },
    error: {
      main: red.A400,
    },
  },
  
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 900,
  //     lg: 1200,
  //     xl: 1536,
  //   },
  // },
}

);
theme.typography.h5 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
 
}
