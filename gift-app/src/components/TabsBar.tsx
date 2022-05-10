import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from '../pages/Home';
import { Grid, Paper } from '@mui/material';
import Gaveonsker from '../pages/Gaveonsker';
import Sted from '../pages/Sted';
import Svar from '../pages/Svar';
import Tid from '../pages/Tid';
import Toast from '../pages/Toast';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const [open, setOpen] = React.useState(true);

  return (
    <Grid container flexDirection={'column'} position="inherit" minWidth={'100%'}>
      <Grid item position={'relative'} minWidth={'100%'}>
        <AppBar
          sx={{
            height: '80px',
            top: '0px',
            backgroundColor: '#497996',
            position: 'static'
          }}
        >
          <Paper
            sx={{
              height: '32px',
              top: '0',
              backgroundColor: '#497996',
              position: 'static'
            }}
          ></Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            sx={{ marginY: 'auto', backgroundColor: '#79a8c2' }}
          >
            <Tab
              style={{ padding: '0', minWidth: '0' }}
              label={<Typography variant="h6"> Hjem </Typography>}
              {...a11yProps(0)}
            />
            <Tab
              style={{ padding: '0', minWidth: '0' }}
              label={<Typography variant="h6"> Tid </Typography>}
              {...a11yProps(1)}
            />
            <Tab
              style={{ padding: '0', minWidth: '0' }}
              label={<Typography variant="h6"> Sted </Typography>}
              {...a11yProps(2)}
            />
            <Tab
              style={{ padding: '0', minWidth: '0' }}
              label={<Typography variant="h6"> Toastmastere </Typography>}
              {...a11yProps(3)}
            />
            <Tab
              style={{ padding: '0', minWidth: '0' }}
              label={<Typography variant="h6"> Ønskeliste </Typography>}
              {...a11yProps(4)}
            />
            <Tab
              style={{ padding: '0', minWidth: '0' }}
              label={<Typography variant="h6"> Svar </Typography>}
              {...a11yProps(5)}
            />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item position={'relative'}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Home open={false} setOpen={setOpen} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Tid />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Sted />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Toast />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <Gaveonsker />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            <Svar />
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </Grid>
  );
}
