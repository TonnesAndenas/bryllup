import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function CardKano() {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: '100%' }}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          minHeight="100%"
        >
          <Grid item>
            <CardMedia
              component="img"
              alt="Montenegro"
              image={require('../images/tintin.png')}
            />
            <CardContent sx={{ minHeigth: '40%' }}>
              <Typography gutterBottom variant="h4" component="div">
                #4 Spleisegave! Kano
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Vi ønsker oss en kano som vi kan bruke på hytta. Til kanoen
                trengs tilbehør som årer, redningsvester, tralle med mer. <br />{' '}
                <br />
                Ta kontakt med August Myrseth (tlf: 915 90 046) så fort som
                mulig om du vil være med på spleiselaget - det blir selvsagt
                bare noe av om mange nok melder seg.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
