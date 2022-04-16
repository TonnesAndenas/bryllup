import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const HOME = 'Hjem';
const TID = 'Tid';
const STED = 'Sted';
const TOAST = 'Toastmastere';
const GAVER = 'Ønskeliste';

const pages = [
  { name: HOME, uri: '/visited' },
  { name: TID, uri: '/tid' },
  { name: STED, uri: '/sted' },
  { name: TOAST, uri: '/toast' },
  { name: GAVER, uri: '/gaver' },
];

interface ResponsiveAppBarProps {
  displayHeader: boolean;
}

const ResponsiveAppBar = ({ displayHeader }: ResponsiveAppBarProps) => {
  let navigate = useNavigate();

  const handleCloseNavMenu = (event) => {
    navigate(pages.find((el) => el.name === event.target.textContent).uri);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ minHeight: 64, display: displayHeader ? 'none' : 'flex' }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              xs={2}
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Typography variant="h6" color="text.secondary">
                9. Juli 2022
              </Typography>
            </Grid>

            <Grid
              item
              xs={8}
              sx={{
                justifyContent: 'center',
                justifySelf: 'center',
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  size="large"
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Typography variant="h6">{page.name}</Typography>
                </Button>
              ))}
            </Grid>

            <Grid
              item
              xs={2}
              sx={{
                display: { xs: 'none', md: 'flex' },
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
                open={open}
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
              }}
            >
              <Typography variant="h6" color="text.secondary">
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
