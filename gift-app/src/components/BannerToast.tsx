import * as React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export default function BannerToast() {
  return (
    <Grid item xs={12} md={6} alignItems="center" justifyContent="center">
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          alt="Munch, Bohemens bryllup"
          image={require('../images/munchBohemensBryllup.jpg')}
        />
        <CardContent>
          <Typography variant="h4" component="div" textAlign={'center'}>
            Marie Kinge
          </Typography>
          <Typography gutterBottom variant="h4" component="div" textAlign={'center'}>
            Jonas Th Wik
          </Typography>
          <Typography variant="h6" color="text.secondary">
            De kan kontaktes på blablaabl
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
