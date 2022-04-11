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
      <Typography variant="body1" color="text.secondary">
        Thorleif Haugs vei 14, 0791 Oslo
      </Typography>
    </div>
  );

  const content2 = (
    <div>
                  <Typography gutterBottom variant="h4" component="div">
              Kine og Tønnes gifter seg
            </Typography>
            <Typography variant="body1" color="text.secondary">
              9. juli!
            </Typography>
    </div>
  );

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 'auto',
        margin: 'auto 0',
        marginY: '5%',
        marginX: '5%',
        padding: '4%',
      }}
    >
      <Grid container>
        <Grid item xs sx={{ paddingTop: 16, paddingX: 8, paddingBottom: 8 }}>
          {content1}
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid item xs sx={{ paddingTop: 16, paddingX: 8, paddingBottom: 8 }}>
          {content2}
        </Grid>
      </Grid>
    </Paper>
  );
}
