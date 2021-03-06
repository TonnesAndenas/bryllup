import { Box, Divider, Grid, Paper, Typography, useTheme } from '@mui/material';
import * as React from 'react';

export default function Footer() {
  const theme = useTheme();

  return (
    <Grid
      item
      sx={{
        position: 'relative',
        bottom: '0px',
        minWidth: '100%',
        maxHeight: '96px',
      }}
      component="footer"
    >
      <Paper
        square={true}
        elevation={24}
        sx={{
          minHeight: '96px',
          minWidth: '100%',
          bgcolor: 'primary.dark',
        }}
      >
        <Typography variant="h6" align="center" color="white" sx={{paddingTop: '8px'}}>
          {'Alea iacta est!'}
        </Typography>
        <Paper sx={{height: '1px', marginX: '2%', marginBottom: '16px'}} />
        <Typography variant="body1" align="center" color="white">
          {'Opphavsrett Guds åsyn © '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Paper>
    </Grid>
  );
}
