import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DirectionsRoundedIcon from '@mui/icons-material/DirectionsRounded';
import { Grid, IconButton } from '@mui/material';

export default function CardNorwayDesigns() {
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
              alt="Butikken Norway Designs"
              image={require('../images/norwaydesignsTegning.jpg')}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                #3 Gaveliste hos Norway Designs
              </Typography>
              <Typography variant="body1" color="text.secondary">
                I butikken til Norway Designs (Lille Grensen 7) har vi lagt
                igjen en analog ønskeliste. Dra innom og kryss av, om du føler
                deg inspirert.
              </Typography>
            </CardContent>
          </Grid>

          <Grid item>
            <CardActions>
              <IconButton
                href="https://goo.gl/maps/AZwtYyafiZM1vhJ78"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" size="large">
                  <DirectionsRoundedIcon />
                  Google Maps
                </Button>
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
