import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { text } from 'stream/consumers';

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

const ResponsiveAppBar = () => {
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
    <AppBar position="sticky" sx={{ minHeight: 64 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'left',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Typography variant="h6" color="text.secondary">
              9. Juli 2022
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, justifyContent: 'left', display: { xs: 'none', md: 'flex' } }}>
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
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleClick} size='large'>
            <Button size="large">
            <MenuRoundedIcon sx={{ color: "text.primary" }}/>
              </Button>
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <Typography variant="h6" color="text.secondary">
              9. Juli 2022
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
