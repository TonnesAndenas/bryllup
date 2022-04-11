import { Typography } from '@mui/material';
import * as React from 'react';

export default function Copyright() {
  return (
    <div style={{ height: 'calc(100% - 60px)' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Opphavsrett Guds åsyn © '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}
