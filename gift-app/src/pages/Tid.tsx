import { Grid } from '@mui/material';
import CardTidslinje from '../components/CardTidslinje';

export default function Tid() {
  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    paddingY={4}
    paddingX={4}
  >
      <CardTidslinje />
    </Grid>
  );
}
