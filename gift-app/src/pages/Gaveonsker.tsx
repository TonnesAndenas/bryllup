import { Grid } from '@mui/material';
import CardBryllupsreise from '../components/CardBryllupsreise';
import CardGiEffektivt from '../components/CardGiEffektivt';
import CardNorwayDesigns from '../components/CardNorwayDesigns';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function Gaveonsker() {
  return (
    <div>
      <ResponsiveAppBar />
      <Grid container alignItems="stretch">
        <CardGiEffektivt />
        <CardBryllupsreise />
        <CardNorwayDesigns />
      </Grid>
      <Footer />
    </div>
  );
}
