import { Grid } from '@mui/material';
import CardBryllupsreise from '../components/CardBryllupsreise';
import CardGavetekst from '../components/CardGavetekst';
import CardGiEffektivt from '../components/CardGiEffektivt';
import CardNorwayDesigns from '../components/CardNorwayDesigns';

export default function Gaveonsker() {
  return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={5}
      >
        <CardGavetekst />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <CardGiEffektivt />
          <CardBryllupsreise />
          <CardNorwayDesigns />
        </Grid>
      </Grid>
  );
}
