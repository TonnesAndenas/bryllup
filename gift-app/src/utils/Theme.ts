import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat/300.css';

const gronnMork = "#3d8b7a"
const gronnLys = "#9feedb"
const gronn = "#6ebba9"
const blaa = "#79a8c2"
const blaaLys = "#a9d8f4"
const blaaMork = "#497996"
const morkeGraa = "#a6a7a6"
const graa = "#d7d8d7"
const lyseGraa = "#F5F5F6"
const stavernGul = "#f3bd49"
const morkeGul = "#bd8d11"
const lyseGul = "#ffef7a"


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
      main: graa,
      dark: morkeGraa,
      light: lyseGraa,
    },
    secondary: {
      main: stavernGul,
      dark: morkeGul,
      light: lyseGul,
    },
  },
});