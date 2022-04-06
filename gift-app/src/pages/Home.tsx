import * as React from 'react';
import {
  Box,
  CssBaseline,
  Dialog,
  Grid,
  Paper,
  Slide,
  ThemeProvider,
  Typography,
} from '@mui/material';
import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import HeroUnit from '../components/HeroUnit';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { TransitionProps } from '@mui/material/transitions';
import { theme } from '../utils/Theme';
import bryllupLogo from '../images/bryllup.png';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
  const [open, setOpen] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        {!open && (
          <>
            <ResponsiveAppBar />
            <HeroUnit />
            <Footer />
            <Copyright />
          </>
        )}

        <Dialog
          fullScreen
          open={open}
          TransitionComponent={Transition}
          transitionDuration={1000}
        >
          <Box
            component={Paper}
            onClick={() => setOpen(false)}
            sx={{ width: '100%', height: '100%' }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid>
              <div style={{ height: 800 }}>
                <img src={bryllupLogo} height="100%" />
              </div>
              <Typography variant="h3" align="center">
                Velkommen!
              </Typography>
            </Grid>
          </Box>
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}
