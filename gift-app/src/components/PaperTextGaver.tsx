import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Paper, Typography } from '@mui/material';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function PaperTextGaver() {
  const content1 = (
    <div>
      <Typography gutterBottom variant="h4" component="div">
        Ønsker
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Vi ønsker oss en kano, kan vi få det?
      </Typography>
    </div>
  );

  return (
    <Grid item xs={12} md={4} style={{ display: 'flex' }}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 'auto',
          margin: 'auto 0',
          marginY: '5%',
          marginX: '10%',
          padding: '4%',
        }}
      >
        {content1}
      </Paper>
    </Grid>
  );
}
