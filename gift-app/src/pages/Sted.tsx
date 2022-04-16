import { Grid3x3 } from '@mui/icons-material';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CardSolstua from '../components/CardSolstua';
import CustomizedTimeline from '../components/CustomizedTimeline';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function Sted() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      padding={5}
    >
      <CardSolstua />
    </Grid>
  );
}
