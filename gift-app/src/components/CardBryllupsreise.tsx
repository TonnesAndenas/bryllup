import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import { Grid, IconButton } from '@mui/material';

export default function CardBryllupsreise() {
  return (
    <Grid item xs={12} md={4} style={{ display: 'flex' }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 'auto',
          margin: 'auto 0',
          marginY: '5%',
          marginX: '10%',
          padding: '4%',
        }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          alt="Montenegro"
          image={require('../images/montenegroTint.jpg')}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            #2 Bryllupsreise til Montenegro!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Vi reiser til Montenegro for å drikke vin og bli solbrente. Vil du
            bidra?
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            href="https://www.nrk.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" size="large">
              <VolunteerActivismRoundedIcon />
              Nrk.no
            </Button>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
