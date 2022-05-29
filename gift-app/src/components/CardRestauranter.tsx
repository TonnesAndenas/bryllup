import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';

export default function CardRestauranter() {
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
          <Grid item minWidth="100%">
            <CardMedia
              component="img"
              alt="Montenegro"
              image={require('../images/tintinMat.png')}
            />
            <CardContent sx={{ minHeigth: '40%' }}>
              <Typography gutterBottom variant="h4" component="div">
                #3 Restauranter
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Vi er sultne! Hva med et gavekort på en restaurant? <br /> Vi
                elsker god mat, og ønsker oss gavekort på restauranter som vi
                kan bruke utover høsten og vinteren. <br /> <br />
                Her er noen restauranter i Oslo som vi har lyst til å besøke, og
                som tilbyr gavekort:
                <br />
                {/*                 <Link
                  color={'text.secondary'}
                  href="https://giftcard.superbexperience.com/kontrast"
                >
                  Kontrast (link)
                </Link>
                <br />{' '}
                <Link
                  color={'text.secondary'}
                  href="https://www.geitarestaurant.no/gavekort"
                >
                  Geita (link)
                </Link>
                <br />
                <Link
                  color={'text.secondary'}
                  href=" https://giftcard.superbexperience.com/einer/amount"
                >
                  Einer (link)
                </Link>
                <br />
                <Link
                  color={'text.secondary'}
                  href="https://chezcolin.givn.no/"
                >
                  Chez Colin (link)
                </Link>
                <br />
                <Link
                  color={'text.secondary'}
                  href="https://arakataka.givn.no/"
                >
                  Arakataka (link)
                </Link>
 */}
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <IconButton
                    href="https://giftcard.superbexperience.com/kontrast"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" size="large" color="secondary">
                      <RestaurantMenuRoundedIcon />
                      Kontrast
                    </Button>
                  </IconButton>

                  <IconButton
                    href="https://www.geitarestaurant.no/gavekort"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" size="large" color="secondary">
                      <RestaurantMenuRoundedIcon />
                      Geita
                    </Button>
                  </IconButton>

                  <IconButton
                    href="https://giftcard.superbexperience.com/einer/amount"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" size="large" color="secondary">
                      <RestaurantMenuRoundedIcon />
                      Einer
                    </Button>
                  </IconButton>

                  <IconButton
                    href="https://chezcolin.givn.no/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" size="large" color="secondary">
                      <RestaurantMenuRoundedIcon />
                      Chez Colin
                    </Button>
                  </IconButton>

                  <IconButton
                    href="https://arakataka.givn.no/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" size="large" color="secondary">
                      <RestaurantMenuRoundedIcon />
                      Arakataka
                    </Button>
                  </IconButton>
                </Grid>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
