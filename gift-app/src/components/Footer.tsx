import { Box, Divider, Typography } from '@mui/material';
import * as React from 'react';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="subtitle1" align="center" color="text.secondary">
        <Divider>Alea iacta est!</Divider>
      </Typography>
    </Box>
  );
}
