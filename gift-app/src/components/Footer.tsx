import { Box, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';

export default function Footer() {
  return (
    <Grid
      sx={{
        position: 'static',
        bgcolor: 'background.paper',
        paddingTop: "64px",
        paddingX: "16px",
        paddingBottom: "16px",
      }}
      component="footer"
    >
      <Typography variant="subtitle1" align="center" color="text.secondary">
        <Divider>Alea iacta est!</Divider>
        {'Opphavsrett Guds åsyn © '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Grid>
  );
}
