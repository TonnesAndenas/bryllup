import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function CardGavetekst() {
  return (
    <Grid item xs={12} sx={{ paddingBottom: 5 }}>
      <Card sx={{}}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Ønsker
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dictum iaculis tellus vitae elementum. In vel nibh at leo suscipit
            vestibulum id sit amet quam. Suspendisse hendrerit sapien urna, vel
            ornare enim sagittis vitae.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
