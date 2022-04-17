import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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
const SVAR = 'Svar';

const pages = [
  { name: HOME, uri: '/visited' },
  { name: TID, uri: '/tid' },
  { name: STED, uri: '/sted' },
  { name: TOAST, uri: '/toast' },
  { name: GAVER, uri: '/gaver' },
  { name: SVAR, uri: '/svar' },
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
    <AppBar position="sticky" sx={{ display: displayHeader ? 'none' : 'flex' }}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Grid
              item
              xs={2}
              justifyContent="center"
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
              {pages.map((page, index) =>
                index === pages.length - 1 ? (
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    style={{ border: '2px solid' }}
                    sx={{
                      my: '16px',
                      color: 'text.primary',
                      paddingTop: '12px',
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      {page.name}
                    </Typography>
                  </Button>
                ) : (
                  <Button
                    size="large"
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: '16px', color: 'white', paddingTop: '14px' }}
                  >
                    <Typography variant="h6">{page.name}</Typography>
                  </Button>
                )
              )}
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
