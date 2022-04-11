import * as React from 'react';
import {
  Box,
  Dialog,
  Divider,
  Grid,
  Paper,
  Slide,
  Typography,
} from '@mui/material';
import Footer from '../components/Footer';
import HeroUnit from '../components/HeroUnit';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { TransitionProps } from '@mui/material/transitions';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import DividerText from '../components/DividerText';

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
    <div style={{ minWidth: '100%' }}>
      {!open && (
        <>
          <ResponsiveAppBar />
          <Grid item xs={12} md={6} alignItems="center" justifyContent="center">
            <Banner />
            <DividerText />
          </Grid>
          <Footer />
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
                  src={require('../images/bryllup.png')}
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
