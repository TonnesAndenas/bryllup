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

export default function DividerText() {
  const content1 = (
    <div>
      <Typography gutterBottom variant="h4" component="div">
        Solstua
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Thorleif Haugs vei 14, 0791 Oslo
      </Typography>
    </div>
  );

  const content2 = (
    <div>
      <Typography gutterBottom variant="h4" component="div">
        Kine og Tønnes gifter seg
      </Typography>
      <Typography variant="h6" color="text.secondary">
        9. juli!
      </Typography>
    </div>
  );

  return (
    <Paper elevation={3} >
{content2}
    </Paper>
  );
}
