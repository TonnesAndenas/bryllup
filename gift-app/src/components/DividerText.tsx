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
    <Paper sx={{ height: '100%' }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        minHeight="100%"
        padding={5}
      >
        <Grid item xs={8} md={4}>
          {content2}
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid item xs={8} md={4}>
          {content1}
        </Grid>
      </Grid>
    </Paper>
  );
}
