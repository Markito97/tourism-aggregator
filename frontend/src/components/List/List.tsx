import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { ServiceContext } from '../../context/ServiceContext';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { Box, Button, Grid, ListItem, ListItemText, Typography } from '@mui/material';
import { MuiTextField } from '../../UI/MuiTextField';

export const List = observer((): JSX.Element | null => {
  const { houses } = useContext(ServiceContext);
  const { control } = useForm({
    defaultValues: {
      search: '',
    },
  });
  useEffect(() => {
    houses.getHouses();
  }, []);

  if (!houses.allHouses) return null;
  return (
    <>
      {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <MuiTextField control={control} name="Search" />
        <Link to={'create'} style={{ color: 'white', textDecoration: 'none' }}>
          <Button
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: '#2D2D2D',
              '&:hover': {
                backgroundColor: '#2D2D2D',
              },
            }}
          >
            Add new house
          </Button>
        </Link>
      </Box> */}
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
        {houses.allHouses.map((house, index) => (
          <Grid
            key={index + 1}
            container
            sx={{
              border: '1px solid #9B9B9B',
              borderRadius: '4px',
              alignItems: 'center',
              display: 'fext',
              // justifyContent: 'space-between',
              color: '#9B9B9B',
            }}
          >
            <Grid item mobile={2} sx={{ display: 'flex' }}>
              <Typography sx={{ p: 2, color: '#2D2D2D' }}>{index + 1}</Typography>
            </Grid>
            <Grid item mobile={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <CottageOutlinedIcon />
              <Typography
                sx={{
                  p: 2,
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  color: '#2D2D2D',
                }}
              >
                {house.houseName}
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <RoomOutlinedIcon />
              <Typography
                sx={{
                  p: 2,
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  color: '#2D2D2D',
                }}
              >
                {house.address}
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <WavesOutlinedIcon />
              <Typography
                sx={{
                  p: 2,
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  color: '#2D2D2D',
                }}
              >
                {house.lake}
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <GroupOutlinedIcon />
              <Typography
                sx={{
                  p: 2,
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  color: '#2D2D2D',
                }}
              >
                {house.persons}
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Box sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
                <EditOutlinedIcon />
              </Box>
              <Box sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
                <DeleteOutlineOutlinedIcon />
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </>
  );
});
