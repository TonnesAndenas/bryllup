import { createTheme } from '@mui/material/styles';
import "@fontsource/montserrat"
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';


const gronnMork = "#3d8b7a"
const gronnLys = "#9feedb"
const gronn = "#6ebba9"
const blaa = "#79a8c2"
const blaaLys = "#a9d8f4"
const blaaMork = "#497996"


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
      main: blaa,
      dark: blaaMork,
      light: blaaLys
    },
    secondary: {
      main: blaaLys,
      dark: blaaMork,
      light: gronnLys,
    },
  },
});