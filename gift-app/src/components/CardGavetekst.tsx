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
          <Typography variant="h6" color="text.secondary">
            Vi er begge to skrotnisser, og har det meste vi trenger av ting og
            tang. Vi ønsker oss derfor primært bidrag til bryllupsreise og andre
            opplevelser. Listen under er ment som forslag, og om du vet om en
            morsom aktivitet/opplevelse du tenker at passer bra som gave til
            oss, er det kjempegøy å bli overrasket! Vi kommer ikke til å ha en
            klassisk sesjon med åpning av gaver i selve bryllupet. Dette tar vi
            i ro og mak dagen derpå.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
