import { Grid } from '@mui/material';
import CardSolstua from '../components/CardSolstua';

export default function Sted() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      padding={5}
    >
      <CardSolstua />
    </Grid>
  );
}
