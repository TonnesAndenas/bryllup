import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

export default function CardTidslinje() {
  return (
    <Grid item xs={12} md={3} alignItems="center" justifyContent="center">
      <Card>
        <CardMedia
          component="img"
          alt="Munch, Bohemens bryllup"
          image={require('../images/tidslinje.png')}
        />
      </Card>
    </Grid>
  );
}
