import * as React from 'react';
import { Box, Dialog, Grid, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Banner from '../components/Banner';
import DividerText from '../components/DividerText';
import { Dispatch, SetStateAction } from 'react';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface HomeProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Home({ open, setOpen }: HomeProps) {
  return (
    <Grid
      container
      xs={12}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={10}>
        <Dialog
          fullScreen
          open={open}
          TransitionComponent={Transition}
          transitionDuration={1200}
        >
          <Grid
            container
            xs={12}
            direction="column"
            justifyContent="center"
            alignItems="center"
            onClick={() => setOpen(false)}
          >
            <img src={require('../images/bryllup.png')} height="90%" />

            <Typography variant="h4" align="center">
              Velkommen!
            </Typography>
          </Grid>
        </Dialog>
      </Grid>

      <Grid
        container
        xs={12}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ display: open ? 'none' : 'flex' }}
      >
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid
          container
          xs={12}
          direction="row"
          justifyContent="center"
          alignItems="stretch"

        >
          <Grid item xs={4} md={8}>
            <DividerText />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
