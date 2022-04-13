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
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
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
        >
          <CardMedia
            component="img"
            alt="kart til Solstua i Oslo"
            image={require('../images/veiDetaljert.png')}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Solstua
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Thorleif Haugs vei 14, 0791 Oslo
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              href="https://g.page/solstua?share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" size="large">
                <DirectionsRoundedIcon />
                Google Maps
              </Button>
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
