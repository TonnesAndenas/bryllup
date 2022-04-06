import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toast from './pages/Toast';
import Sted from './pages/Sted';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from './utils/Theme';

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path=":visited" element={<Home />} />
            </Route>
            <Route path="/toast" element={<Toast />} />
            <Route path="/sted" element={<Sted />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
