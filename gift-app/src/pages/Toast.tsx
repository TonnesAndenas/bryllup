import { Grid } from '@mui/material';
import CardToastmaster from '../components/CardToastmaster';

export default function Toast() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      paddingY={4}
      paddingX={4}
    >
      <CardToastmaster />
    </Grid>
  );
}
