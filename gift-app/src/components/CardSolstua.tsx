import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DirectionsRoundedIcon from '@mui/icons-material/DirectionsRounded';
import { Grid, IconButton } from '@mui/material';

export default function CardSolstua() {
  return (
    <Grid item xs={12} md={4} alignItems="center" justifyContent="center">
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
              alt="kart til Solstua i Oslo"
              image={require('../images/veiDetaljert.png')}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Solstua
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Thorleif Haugs vei 14, 0791 Oslo
              </Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <CardActions>
              <IconButton
                href="https://g.page/solstua?share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" size="large" color="secondary">
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
