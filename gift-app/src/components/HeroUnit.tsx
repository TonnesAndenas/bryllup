import * as React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';

export default function HeroUnit() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 0,
        pb: 6,
        position: 'static',
      }}
    >
      <Container>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          <div>
            <img
              src={require('../images/pride.JPG')}
              height={'auto'}
              width={'100%'}
            />
          </div>
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Velkommen skal du være!
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button size="large" variant="contained">
            Main call to action
          </Button>
          <Button size="large" variant="outlined">
            Secondary action
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
