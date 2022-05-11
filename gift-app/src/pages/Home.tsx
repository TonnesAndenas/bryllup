import * as React from 'react';
import { Dialog, Grid, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Banner from '../components/Banner';
import { Dispatch, SetStateAction } from 'react';
import { useLocation } from 'react-router-dom';
import ComplexButtonHome from '../components/ComplexButtonHome';

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

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

export default function Home({ open, setOpen }: HomeProps) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      minHeight={'100%'}
    >
      <Grid
        item
        xs={12}
        sx={{
          direction: 'column',
        }}
      >
        <Dialog
          fullScreen={true}
          fullWidth={true}
          open={open}
          TransitionComponent={Transition}
          transitionDuration={1200}
          sx={{
            direction: 'column',
          }}
        >
          <Grid
            container
            display={'flex'}
            direction="column"
            height={'100%'}
            onClick={() => setOpen(false)}
          >
            <Grid
              item
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height={'100%'}
            >
              <img
                src={require('../images/invitasjon_midt.png')}
                style={{ maxWidth: '95%', maxHeight: '95%' }}
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

      </Grid>
    </Grid>
  );
}
