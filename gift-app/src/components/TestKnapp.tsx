import * as React from 'react';
import Button from '@mui/material/Button/Button';
import Stack from '@mui/material/Stack/Stack';

export default function TestKnapp() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Knapp1</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}