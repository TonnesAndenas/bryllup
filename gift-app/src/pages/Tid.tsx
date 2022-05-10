import { Grid } from '@mui/material';
import CustomizedTimeline from '../components/CustomizedTimeline';

export default function Tid() {
  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    paddingY={16}
    paddingX={3}
  >
      <CustomizedTimeline />
    </Grid>
  );
}
