import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import { Grid, IconButton } from '@mui/material';

export default function CardGiEffektivt() {
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
              alt="Lyspære"
              image={require('../images/gieffektivt.png')}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                #1 Gi Effektivt
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Gieffektivt.no er en donasjonsportal som distribuerer donasjoner til organisasjoner som jobber særlig kostnadseffektivt. Vi setter stor pris på en gave til dem, som kan gis via deres nettside gieffektivt.no. <br />
                <br />
                Hvis du velger dette er det ekstra hyggelig for oss om du tar med et fysisk kort i bryllupet, så vi får takket ordentlig.
              </Typography>
            </CardContent>
          </Grid>

          <Grid item>
            <CardActions>
              <IconButton
                href="https://gieffektivt.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" size="large" color="secondary">
                  <VolunteerActivismRoundedIcon />
                  gieffektivt.no
                </Button>
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
