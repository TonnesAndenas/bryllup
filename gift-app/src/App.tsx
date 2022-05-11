import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toast from './pages/Toast';
import Sted from './pages/Sted';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Grid } from '@mui/material';
import { theme } from './utils/Theme';
import Tid from './pages/Tid';
import Gaveonsker from './pages/Gaveonsker';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';
import Svar from './pages/Svar';
import TabsBar from './components/TabsBar';

function App() {
  const [open, setOpen] = React.useState(true);
  return (
    <div style={{ overflow: 'auto', height: '100vh' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <ResponsiveAppBar displayHeader={open} />
          <Grid container sx={{paddingTop: {xs: "64px", md: "156px"}} }>
            <Routes>
              <Route path="/" element={<Home open={open} setOpen={setOpen} />}>
                <Route
                  path=":visited"
                  element={<Home open={false} setOpen={setOpen} />}
                />
              </Route>
              <Route path="/toast" element={<Toast />} />
              <Route path="/sted" element={<Sted />} />
              <Route path="/tid" element={<Tid />} />
              <Route path="/gaver" element={<Gaveonsker />} />
              <Route path="/svar" element={<Svar />} />
            </Routes>
          </Grid>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

{
  /* 

    <div style={{ overflow: 'auto', height: '100vh' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TabsBar />
        <Footer />
      </ThemeProvider>
    </div>

*/
}
