import * as React from 'react';
import { Grid, Paper } from '@mui/material';

export default function Banner() {
  return (
    <Grid
      item
      xs={12}
      direction="row"
      justifyContent="center"
      sx={{ height: '100%', width: '100%' }}
    >
      <Paper sx={{ height: '100%', width: '100%' }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeyHEngydDeBeETQfPdRdAoAJWJQiVejJSm2Aq0Y3J3_ITjmg/viewform?embedded=true"
          width="100%"
          height="100%"
        >
          Loading…
        </iframe>
      </Paper>
    </Grid>
  );
}
