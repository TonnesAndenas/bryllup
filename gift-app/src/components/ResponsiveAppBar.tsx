import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import PinDropIcon from '@mui/icons-material/PinDrop';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const HOME = 'Hjem';
const TID = 'Tid';
const STED = 'Sted';
const TOAST = 'Toastmastere';
const GAVER = 'Ønskeliste';
const SVAR = 'Svar';

const pages = [
  { name: HOME, uri: '/visited' },
  { name: TID, uri: '/tid' },
  { name: STED, uri: '/sted' },
  { name: SVAR, uri: '/svar' },
  { name: TOAST, uri: '/toast' },
  { name: GAVER, uri: '/gaver' },
];

interface ResponsiveAppBarProps {
  displayHeader: boolean;
}

const ResponsiveAppBar = ({ displayHeader = false }: ResponsiveAppBarProps) => {
  let navigate = useNavigate();

  const handleCloseNavMenu = (event) => {
    navigate(pages.find((el) => el.name === event.target.textContent).uri);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openX = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        height: { xs: '64px', md: '128px' },
        top: '0px',
        position: 'fixed',
        justifyContent: 'center',
        bgcolor: 'primary.main',
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: { xs: '64px', md: '128px' } }}
      >
        <Toolbar disableGutters sx={{ height: { xs: '64px', md: '128px' } }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
            sx={{ height: { xs: '64px', md: '128px' } }}
          >
            <Grid
              item
              xs={1}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            >
              <Typography
                variant="h5"
                bgcolor="secondary.main"
                padding={1}
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                }}
              >
                9. Juli 2022
              </Typography>
            </Grid>

            <Grid
              item
              xs={10}
              sx={{
                justifyContent: 'space-evenly',
                justifySelf: 'center',
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                flexWrap: 'wrap',
                alignSelf: 'baseline',
                alignItems: 'flex-end',
              }}
            >
              <Button
                variant="text"
                size="large"
                sx={{
                  color: 'black',
                  flexDirection: 'column',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
                startIcon={
                  <HomeOutlinedIcon
                    sx={{ marginLeft: '8px', marginRight: '0px' }}
                  />
                }
                key={pages[0].name}
                onClick={handleCloseNavMenu}
              >
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                  {pages[0].name}
                </Typography>
              </Button>

              <Button
                variant="text"
                size="large"
                sx={{
                  color: 'black',
                  flexDirection: 'column',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
                startIcon={
                  <AccessTimeIcon
                    sx={{ marginLeft: '8px', marginRight: '0px' }}
                  />
                }
                key={pages[1].name}
                onClick={handleCloseNavMenu}
              >
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                  {pages[1].name}
                </Typography>
              </Button>

              <Button
                variant="text"
                size="large"
                sx={{
                  color: 'black',
                  flexDirection: 'column',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
                startIcon={
                  <PinDropIcon sx={{ marginLeft: '8px', marginRight: '0px' }} />
                }
                key={pages[2].name}
                onClick={handleCloseNavMenu}
              >
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                  {pages[2].name}
                </Typography>
              </Button>

              <Button
                variant="outlined"
                color="inherit"
                size="large"
                sx={{
                  marginBottom: '8px',
                  maxHeight: '36px',
                  color: 'black',
                  outlineWidth: '1px',
                  outlineColor: 'black',
                }}
                key={pages[3].name}
                onClick={handleCloseNavMenu}
              >
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                  {pages[3].name}
                </Typography>
              </Button>

              <Button
                variant="text"
                size="large"
                sx={{
                  color: 'black',
                  flexDirection: 'column',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
                startIcon={
                  <SpatialAudioOffIcon
                    sx={{ marginLeft: '8px', marginRight: '0px' }}
                  />
                }
                key={pages[4].name}
                onClick={handleCloseNavMenu}
              >
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                  {pages[4].name}
                </Typography>
              </Button>

              <Button
                variant="text"
                size="large"
                sx={{
                  color: 'black',
                  flexDirection: 'column',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
                startIcon={
                  <CardGiftcardIcon
                    sx={{ marginLeft: '8px', marginRight: '0px' }}
                  />
                }
                key={pages[5].name}
                onClick={handleCloseNavMenu}
              >
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  {pages[5].name}
                </Typography>
              </Button>
            </Grid>

            <Grid
              item
              xs={1}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            />

            <Grid item sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton onClick={handleClick} size="large">
                <Button size="large">
                  <MenuRoundedIcon sx={{ color: 'text.primary' }} />
                </Button>
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={openX}
                onClick={handleClose}
                onClose={handleClose}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    {page.name}
                  </MenuItem>
                ))}
              </Menu>
            </Grid>

            <Grid
              item
              sx={{
                display: { xs: 'flex', md: 'none' },
                paddingRight: '64px',
                backgroundColor: '#f3bd49',
              }}
            >
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ paddingLeft: '8px' }}
              >
                9. Juli 2022
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
