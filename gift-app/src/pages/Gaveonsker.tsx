import { Grid } from '@mui/material';
import CardBryllupsreise from '../components/CardBryllupsreise';
import CardFinn from '../components/CardFinn';
import CardGavetekst from '../components/CardGavetekst';
import CardGiEffektivt from '../components/CardGiEffektivt';
import CardKano from '../components/CardKano';
import CardRestauranter from '../components/CardRestauranter';
import CardVinglass from '../components/CardVinglass';

export default function Gaveonsker() {
  return (
    <Grid
      item
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingY={4}
      paddingX={4}
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
        <CardRestauranter />
        <CardKano />        
        <CardVinglass />
        <CardFinn />
      </Grid>
    </Grid>
  );
}
