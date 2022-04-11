import { Box, Divider, Typography } from '@mui/material';
import * as React from 'react';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <Box
      sx={{
        position: 'static',
        height: '100%',
        bgcolor: 'background.paper',
        paddingTop: 16,
        paddingX: 4,
        paddingBottom: 4
      }}
      component="footer"
    >
      <Typography variant="subtitle1" align="center" color="text.secondary">
        <Divider>Alea iacta est!</Divider>
        {'Opphavsrett Guds åsyn © '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}
