import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

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
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            textAlign={'center'}
          >
            Jonas Thorsdalen Wik
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{paddingTop: '8px'}}>
            Toastmasterne kan nås på
          </Typography>
          <Divider />
          <Typography variant="h6" color="text.secondary">
            mail: marie.kinge@gmail.com - tlf: 47054287
          </Typography>
          
          <Typography variant="h6" color="text.secondary">
            mail: jonasthorsdalenwik@gmail.com - tlf: 90082366
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
