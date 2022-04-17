import { Grid } from '@mui/material';
import Rsvp from '../components/Rsvp';

export default function Svar() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding={5}
    >
      <Rsvp />
    </Grid>
  );
}
