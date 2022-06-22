import { Grid } from '@mui/material';
import CardSolstua from '../components/CardSolstua';
import CardSolstuaAvgang from '../components/CardSolstuaAvgang';
import CardSolstuaTekst from '../components/CardSolstuaTekst';

export default function Sted() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      paddingY={4}
      paddingX={4}
      columnSpacing={4}
    >
      <CardSolstua />
      <CardSolstuaTekst />
    </Grid>
  );
}
