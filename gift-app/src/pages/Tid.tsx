import { Grid } from '@mui/material';
import CustomizedTimeline from '../components/CustomizedTimeline';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

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
