import { Typography } from '@mui/material';
import * as React from 'react';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Opphavsrett Tønnes © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
