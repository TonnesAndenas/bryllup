import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

export default function Album() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        <Grid xs={12} sm={6} md={6}>
          <Card1 />
          <Card2 />
          <Card3 />
        </Grid>
      </Grid>
    </Container>
  );
}

function Card1() {
  return (
    <Card
      sx={{
        height: '200',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://picsum.photos/500/300?random=1"
          alt="green olives"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Card2() {
  return (
    <Card
      sx={{
        height: '200',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://picsum.photos/500/300?random=2"
          alt="green olives"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Card3() {
  return (
    <Card
      sx={{
        height: '200',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://picsum.photos/500/300?random=3"
          alt="green olives"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
