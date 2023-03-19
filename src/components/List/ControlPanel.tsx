import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { MuiTextField } from '../../UI/MuiTextField';
import { useForm } from 'react-hook-form';

export const ControlPanel = () => {
  const { control } = useForm({
    defaultValues: {
      search: '',
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        rowGap: '30px',
        width: {
          smallMobile: '100%',
        },
        flexDirection: {
          smallMobile: 'column',
          tablet: 'row',
        },
      }}
    >
      <MuiTextField control={control} name="Search" />
      <Link to={'create'} style={{ color: 'white', textDecoration: 'none', width: '100%' }}>
        <Button
          variant="contained"
          size="small"
          sx={{
            width: {
              smallMobile: '100%',
            },
            backgroundColor: '#2D2D2D',
            '&:hover': {
              backgroundColor: '#2D2D2D',
            },
          }}
        >
          Add new house
        </Button>
      </Link>
    </Box>
  );
};
