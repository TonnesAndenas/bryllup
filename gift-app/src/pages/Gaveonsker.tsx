import { Grid } from '@mui/material';
import CardBryllupsreise from '../components/CardBryllupsreise';
import CardGavetekst from '../components/CardGavetekst';
import CardGiEffektivt from '../components/CardGiEffektivt';
import CardKano from '../components/CardKano';
import CardNorwayDesigns from '../components/CardNorwayDesigns';
import CardRestauranter from '../components/CardRestauranter';
import CardVinglass from '../components/CardVinglass';

export default function Gaveonsker() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingY={16}
      paddingX={3}
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
        <CardKano />
        <CardNorwayDesigns />
        <CardVinglass />
        <CardRestauranter />
      </Grid>
    </Grid>
  );
}
