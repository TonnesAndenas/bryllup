import * as React from 'react';
import { Grid } from '@mui/material';

export default function Banner() {
  return (
    <Grid
      item
      xs={12}
      direction="row"
      justifyContent="center"
      alignItems="stretch"
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeyHEngydDeBeETQfPdRdAoAJWJQiVejJSm2Aq0Y3J3_ITjmg/viewform?embedded=true"
        width="350"
        height="1100"
      >
        Loading…
      </iframe>
    </Grid>
  );
}
