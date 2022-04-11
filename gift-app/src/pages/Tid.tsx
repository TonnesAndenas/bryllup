import { Grid } from '@mui/material';
import CustomizedTimeline from '../components/CustomizedTimeline';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function Tid() {
  return (
    <div>
      <ResponsiveAppBar />
      <Grid item xs={12} md={6} alignItems="center" justifyContent="center">
        <CustomizedTimeline />
      </Grid>
      <Footer />
    </div>
  );
}
