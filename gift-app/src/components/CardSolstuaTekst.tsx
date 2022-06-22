import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function CardSolstuaTekst() {
  return (
    <Grid
      item
      xs={12}
      md={4}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100%' }}
    >
      <Card sx={{ minHeight: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Bil og taxi
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Vi må ha beskjed på forhånd dersom du ønsker å komme med egen bil,
            da det er svært lite parkeringsplass på Solstua. Kontakt Kine på
            telefon 943 21 906.
            <br /> <br />
            Taxi er en bedre mulighet. Oppgi adresse Torleif Haugs vei 14.
            <br /> <br />
          </Typography>

          <Typography gutterBottom variant="h4" component="div">
            Kollektivtrafikk
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Vi anbefaler alle som kan å ta t-banen til Solstua, nærmere bestemt
            linje 1 i retning Frognerseteren. Nærmeste stopp er Voksenkollen -
            derfra er det ca 15 minutter å gå.
            <br /> <br />
            Avgangen som går kl. 13:07 fra Jernbanetorget er fremme på
            Voksenkollen kl. 13:42. Da har du god tid til et glass før vielsen!
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
