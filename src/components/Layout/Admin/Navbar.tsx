import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = (props: any) => {
  return (
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
        <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <IconButton
            sx={{
              display: {
                laptop: 'none',
              },
            }}
            onClick={props.onOpen}
          >
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Montserrat',
            }}
          >
            Admin Panel
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{
            fontWeight: 'bold',
            fontSize: 14,
            fontFamily: 'Montserrat',
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
  );
};
