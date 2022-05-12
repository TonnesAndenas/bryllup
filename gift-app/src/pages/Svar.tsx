import { Grid } from '@mui/material';
import Rsvp from '../components/Rsvp';

export default function Svar() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      height={'1300px'}
      width={'100%'}
      paddingY={4}
      paddingX={4}
    >
      <Rsvp />
    </Grid>
  );
}
