import { Outlet } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import SnowmobileOutlinedIcon from '@mui/icons-material/SnowmobileOutlined';

export const AdminLayout = () => {
  return (
    <div style={{ paddingLeft: '250px' }}>
      <AppBar
        position="fixed"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: '#2D2D2D',
          zIndex: 1201,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography>Admin Panel</Typography>
          <Button
            variant="contained"
            size="medium"
            sx={{
              color: '#2D2D2D',
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#fff',
              },
            }}
          >
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 250,
            boxSizing: 'border-box',
            backgroundColor: '#202020',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Link style={{ color: 'white', textDecoration: 'none' }} to={'houseslist'}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HouseOutlinedIcon sx={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary={'Houses'} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link style={{ color: 'white', textDecoration: 'none' }} to={'activitieslist'}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SnowmobileOutlinedIcon sx={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary={'Activities'} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
        <Divider sx={{ bgcolor: 'white' }} />
      </Drawer>
      <main style={{ marginTop: '64px' }}>
        <section style={{ padding: '25px' }}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};
