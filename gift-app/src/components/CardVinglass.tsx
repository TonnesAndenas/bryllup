import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import { Grid, IconButton } from '@mui/material';

export default function CardVinglass() {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: '100%' }}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          minHeight="100%"
        >
          <Grid item>
            <CardMedia
              component="img"
              alt="Captain Haddock drinking, Tintin"
              image={require('../images/tintinHaddock.jpg')}
            />
            <CardContent sx={{ minHeigth: '40%' }}>
              <Typography gutterBottom variant="h4" component="div">
                #5 Vinglass!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Vi ønsker oss vinglass X og Y fra Z. Skål!
              </Typography>
            </CardContent>
          </Grid>

          <Grid item>
            <CardActions>
              <IconButton
                href="https://www.nrk.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" size="large">
                  <VolunteerActivismRoundedIcon />
                  MANGLER
                </Button>
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
