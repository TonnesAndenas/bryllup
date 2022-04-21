import { Grid } from '@mui/material';
import CustomizedTimeline from '../components/CustomizedTimeline';

export default function Tid() {
  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    padding={5}
  >
      <CustomizedTimeline />
    </Grid>
  );
}
