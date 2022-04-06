import * as React from 'react';
import {
  Box,
  CssBaseline,
  Dialog,
  Grid,
  Slide,
  ThemeProvider,
  Typography,
} from '@mui/material';
import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import HeroUnit from '../components/HeroUnit';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { TransitionProps } from '@mui/material/transitions';
import bryllupLogo from '../images/bryllup.png';
import { useParams } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Home() {
  const { visited } = useParams();
  const [open, setOpen] = React.useState(visited ? false : true);

  return (
    <div style={{ minHeight: '100%' }}>
      {!open && (
        <>
          <ResponsiveAppBar />
          <HeroUnit />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '3rem',
            }}
          >
            <Footer />
            <Copyright />
          </div>
        </>
      )}

      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
        transitionDuration={1000}
      >
        <Box
          onClick={() => setOpen(false)}
          sx={{ width: '100%', height: '100%' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid>
            <Grid item xs={12}>
              <div style={{ width: '90%', margin: 'auto' }}>
                <img
                  src={bryllupLogo}
                  height="auto"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            </Grid>
            <Typography variant="h4" align="center">
              Velkommen!
            </Typography>
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
