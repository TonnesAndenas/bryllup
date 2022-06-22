import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

export default function CardToastmaster() {
  return (
    <Grid item xs={12} md={4} alignItems="center" justifyContent="center">
      <Card>
        <CardMedia
          component="img"
          alt="Munch, Bohemens bryllup"
          image={require('../images/munchBohemensBryllup.jpg')}
        />
        <CardContent>
          <Typography variant="h6">
            Vår toastmaster og toastmadame er Jonas Thorsdalen Wik og Marie Kinge.
            Dersom du vil si noen ord eller bidra med annen underholdning under
            middagen, ber vi om at du tar kontakt med en av dem.
          </Typography>
          <Divider sx={{ paddingY: '8px' }} />
          <Typography variant="h6" color="text.secondary">
            mail: jonasthorsdalenwik@gmail.com - tlf: 90082366
          </Typography>
          <Typography variant="h6" color="text.secondary">
            mail: marie.kinge@gmail.com - tlf: 47054287
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
