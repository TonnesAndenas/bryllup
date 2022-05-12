import { Grid } from '@mui/material';
import CardSolstua from '../components/CardSolstua';

export default function Sted() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      paddingY={4}
      paddingX={4}
    >
      <CardSolstua />
    </Grid>
  );
}
