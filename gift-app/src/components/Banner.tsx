import * as React from 'react';
import { Grid } from '@mui/material';

export default function Banner() {
  return (
    <Grid
      sx={{
        position: 'static',
        height: 'auto',
        width: '100%',
      }}
    >
      <img
        src={require('../images/prideCropped.JPG')}
        height={'auto'}
        width={'100%'}
      />
    </Grid>
  );
}
