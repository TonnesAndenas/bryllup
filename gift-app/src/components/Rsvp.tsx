import * as React from 'react';
import { Grid } from '@mui/material';

export default function Banner() {
  return (
    <Grid item xs={12} alignItems="center" justifyContent="center">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeyHEngydDeBeETQfPdRdAoAJWJQiVejJSm2Aq0Y3J3_ITjmg/viewform?embedded=true"
        width="640"
        height="1380"
      >
        Loading…
      </iframe>
    </Grid>
  );
}
