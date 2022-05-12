import { Grid } from '@mui/material';
import CustomizedTimeline from '../components/CustomizedTimeline';

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
      <CustomizedTimeline />
    </Grid>
  );
}
