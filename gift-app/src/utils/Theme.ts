import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat/300.css';

const gronnMork = "#3d8b7a"
const gronnLys = "#9feedb"
const gronn = "#6ebba9"
const blaa = "#79a8c2"
const blaaLys = "#a9d8f4"
const blaaMork = "#497996"
const morkeGraa = "#282728"
const lyseGraa = "#d7d8d7"
const stavernGul = "#f3bd49"


export const theme = createTheme({
  
  typography: {
    button: {
      // textTransform: "none"
    },
    fontFamily: [
      "Montserrat",
    ].join(",")
  },
  
  palette: {
    primary: {
      main: lyseGraa,
      dark: blaaMork,
      light: blaaLys
    },
    secondary: {
      main: stavernGul,
      dark: blaaMork,
      light: gronnLys,
    },
  },
});