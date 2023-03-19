import { Link } from 'react-router-dom';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import SnowmobileOutlinedIcon from '@mui/icons-material/SnowmobileOutlined';

const drawerList = [
  {
    icon: <HouseOutlinedIcon sx={{ color: 'white' }} />,
    text: 'House',
    link: 'houseslist',
  },
  {
    icon: <SnowmobileOutlinedIcon sx={{ color: 'white' }} />,
    text: 'Activities',
    link: 'activitieslist',
  },
];

type SidebarProps = {
  isDrawer: boolean;
  onClose: () => void;
};

export const Sidebar = (props: SidebarProps): JSX.Element => {
  const drawer = (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {drawerList.map((link) => (
            <Link key={link.link} style={{ color: 'white', textDecoration: 'none' }} to={link.link}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
      <Divider sx={{ bgcolor: 'white' }} />
    </>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={props.isDrawer}
        onClose={props.onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            smallMobile: 'block',
            averageMobile: 'block',
            tablet: 'block',
          },
          width: 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 250,
            boxSizing: 'border-box',
            backgroundColor: '#202020',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: {
            smallMobile: 'none',
            averageMobile: 'none',
            tablet: 'none',
            laptop: 'block',
          },
          width: 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 250,
            boxSizing: 'border-box',
            backgroundColor: '#202020',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
