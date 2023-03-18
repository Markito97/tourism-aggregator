import { Box, Button, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { MuiTextField } from '../../UI/MuiTextField';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useContext } from 'react';
import { fromUnixTime } from 'date-fns';
import { ServiceContext } from '../../context/ServiceContext';

export const BookinForm = () => {
  const { id } = useParams();
  const { control } = useForm();
  const [date, setDate] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const { houses } = useContext(ServiceContext);

  useEffect(() => {
    const range = localStorage.getItem('range');
    if (range) {
      setDate(JSON.parse(range));
    }
  }, []);

  useEffect(() => {
    if (date !== undefined) {
      setStart(new Date(date.CHECK_IN));
      setEnd(new Date(date.CHECK_OUT));
    }
  }, [date]);

  const handleBooking = () => {
    if (!houses.currentHouse) return;
    houses.bookingHouse(houses.currentHouse.id, {
      ...houses.currentHouse,
      booking: [...houses.currentHouse.booking, date],
    });
    localStorage.clear();
  };

  return (
    <Box
      sx={{
        pt: '120px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ maxWidth: '700px', display: 'flex', rowGap: '30px', flexDirection: 'column' }}>
        <Typography
          sx={{
            fontSize: 35,
            fontFamily: 'Montserrat',
          }}
        >
          Contacts info
        </Typography>

        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ pr: 2 }}>From</Typography>
          <Typography sx={{ pr: 2 }}>{`${new Date(start).getDate()} / ${new Date(
            start,
          ).getMonth()} / ${new Date(start).getFullYear()}`}</Typography>
          <Typography sx={{ pl: 2 }}>To</Typography>
          <Typography sx={{ pl: 2 }}>{`${new Date(end).getDate()} / ${new Date(
            end,
          ).getMonth()} / ${new Date(end).getFullYear()}`}</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            columnGap: '30px',
          }}
        >
          <MuiTextField control={control} name="name" />
          <MuiTextField control={control} name="surname" />
          <MuiTextField control={control} name="email" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            columnGap: '30px',
          }}
        >
          <MuiTextField control={control} name="phone" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            onClick={handleBooking}
            variant="contained"
            component="label"
            size="large"
            sx={{
              m: '5px',

              fontFamily: 'Montserrat',
              backgroundColor: '#2D2D2D',
              '&:hover': {
                backgroundColor: '#2D2D2D',
              },
            }}
          >
            Booking
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
