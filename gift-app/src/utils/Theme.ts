import { createTheme } from '@mui/material/styles';

const gul = "#e4d18f"
const gronnBlek = "#c4d7c1"
const gronn = "#6ebba9"
const blaa = "#79a8c2"
const blaaLys = "#4cadd8"
const blaaMork = "#316998"
const rosa = "#dac3b5"
const rosaLys = "#d4ccbf"
const rosaMork = "#b97f67"



export const theme = createTheme({
  palette: {
    primary: {
      main: blaa,
      dark: blaaMork,
      light: blaaLys
    },
    secondary: {
      main: blaaMork,
    },
  },
});