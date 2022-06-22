import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function CardBryllupsreise() {
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
              image={require('../images/tintinThompson.png')}
            />
            <CardContent sx={{ minHeigth: '40%' }}>
              <Typography gutterBottom variant="h4" component="div">
                #2 Bryllupsreise til Montenegro!
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Vi reiser til Montenegro for å bade, spise sjømat, drikke god
                vin og nyte livet. Vi setter stor pris på et bidrag til
                reisekassen! <br /> <br />
                Bidrag kan overføres til konto 1224 . 80 . 57856.
                <br /> <br />
                Hvis du velger dette, er det ekstra hyggelig for oss om du tar
                med et fysisk kort i bryllupet, så vi får takket ordentlig.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
