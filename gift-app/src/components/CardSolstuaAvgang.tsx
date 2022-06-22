import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';

export default function CardSolstuaAvgang() {
  return (
    <Grid item xs={12} md={4} alignItems="center" justifyContent="center">
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          alt="forslag til kollektivavganger"
          image={require('../images/avganger.png')}
        />
      </Card>
    </Grid>
  );
}
