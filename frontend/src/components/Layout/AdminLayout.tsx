import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { useToggle } from '../../hooks/useToggle';

export const AdminLayout = () => {
  const [isToggle, handleToggle] = useToggle();

  return (
    <Box
      sx={{
        pl: {
          laptop: '250px',
        },
      }}
    >
      <Navbar onOpen={handleToggle} />
      <Sidebar isDrawer={isToggle} onClose={handleToggle} />
      <Box component="main" sx={{ mt: '64px' }}>
        <Box component="section" sx={{ p: '25px' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
