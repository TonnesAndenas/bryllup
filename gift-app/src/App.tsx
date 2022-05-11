import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toast from './pages/Toast';
import Sted from './pages/Sted';
import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline, Grid } from '@mui/material';
import { theme } from './utils/Theme';
import Tid from './pages/Tid';
import Gaveonsker from './pages/Gaveonsker';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';
import Svar from './pages/Svar';

function App() {
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ bgcolor: '#F5F5F6', overflow: 'auto', minHeight: '100vh' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Grid container display={'contents'} flexDirection={'column'} sx={{minHeight: '100vh'}}>
            <Grid item sx={{ height: { xs: '64px', md: '128px' } }}>
              <ResponsiveAppBar displayHeader={open} />
            </Grid>
            <Grid item sx={{minHeight: { xs: 'calc(100vh - 160px)', md: '100vh - 224px' } }}>
              <Routes>
                <Route
                  path="/"
                  element={<Home open={open} setOpen={setOpen} />}
                >
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
            <Grid item>
              <Footer />
            </Grid>
          </Grid>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
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
