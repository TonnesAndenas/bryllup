import { Grid3x3 } from '@mui/icons-material';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CardSolstua from '../components/CardSolstua';
import CustomizedTimeline from '../components/CustomizedTimeline';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function Sted() {
  return (
    <div>
      <ResponsiveAppBar />
      <Grid item xs={12} md={6} alignItems="center" justifyContent="center">
        <CardSolstua />
      </Grid>

      <Footer />
    </div>
  );
}
