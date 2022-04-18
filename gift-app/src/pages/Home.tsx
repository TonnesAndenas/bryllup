import * as React from 'react';
import { Dialog, Grid, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Banner from '../components/Banner';
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
      justifyContent="space-between"
      alignItems="center"
      sx={{ overflow: 'auto' }}
    >
      <Grid item xs={12}>
        <Dialog
          fullScreen={true}
          open={open}
          TransitionComponent={Transition}
          transitionDuration={1200}
        >
          <Grid
            container
            xs={12}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => setOpen(false)}
          >
            <Grid item height="100vh" display="flex" flexDirection="column">
              <img
                src={require('../images/invitasjon_midt.png')}
                height="100%"
              />
            </Grid>
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
          <Grid item xs={4} md={8}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
