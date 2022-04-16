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
    <div style={{ minWidth: '100%' }}>
      {!open && (
        <>
          <Grid item xs={12} md={6} alignItems="center" justifyContent="center">
            <Banner />
            <DividerText />
          </Grid>
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
