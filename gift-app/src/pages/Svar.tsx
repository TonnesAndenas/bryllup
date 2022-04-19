import { Grid } from '@mui/material';
import Rsvp from '../components/Rsvp';

export default function Svar() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      height={'1150px'}
      width={'100%'}
      padding={5}
    >
      <Rsvp />
    </Grid>
  );
}
