import { Grid } from '@mui/material';
import BannerToast from '../components/BannerToast';

export default function Toast() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      paddingY={6}
      paddingX={3}
    >
      <BannerToast />
    </Grid>
  );
}
