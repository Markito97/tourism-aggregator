import { FieldsContext } from '../../context/DateContext';
import { DatePicker } from '../DatePicker/DatePicker';
import { TextField } from '../../UI/TextField';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useContext, useRef } from 'react';
import { useDatePicker } from '../../hooks/useDatePicker';
import * as css from './SearchBookingForm.sass';
import { Box, Button, Grow, Popper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDatePick } from '../../hooks/useDatePick';
import { ServiceContext } from '../../context/ServiceContext';

export interface SearchPanelForm {
  lake: string;
  checkIn: string;
  checkOut: string;
}

function checkIsBooking(
  start: number,
  end: number,
  range: { CHECK_IN: number; CHECK_OUT: number }[],
): boolean {
  return range.every(
    (date) =>
      (start < date.CHECK_IN && end < date.CHECK_IN) ||
      (start > date.CHECK_OUT && end > date.CHECK_OUT),
  );
}

function formatDate() {}

export const SearchPanel = (props: any): JSX.Element => {
  const [isBooking, setIsBooking] = useState(false);
  const [isWarn, setIsWarn] = useState(false);
  const { refs, datePicker, handlers } = useDatePicker();
  const [pickedDateUnits, setPickedDateUnits] = useDatePick();
  const { handleSubmit, control, setValue } = useForm<SearchPanelForm>({
    defaultValues: {
      lake: '',
      checkIn: '',
      checkOut: '',
    },
    mode: 'onChange',
  });
  const { houses } = useContext(ServiceContext);
  const fieldsRef = useRef(null);

  useEffect(() => {
    if (datePicker.checkin) {
      console.log(datePicker.checkin);

      setValue('checkIn', datePicker.checkin);
    }
  }, [datePicker.checkin]);

  useEffect(() => {
    if (datePicker.checkout) {
      setValue('checkOut', datePicker.checkout);
    }
  }, [datePicker.checkout]);

  const onSubmit = (data: any) => {
    const [DAY_START, MONTH_START, YEAR_START] = data.checkIn.split('/');
    const [DAY_END, MONTH_END, YEAR_END] = data.checkOut.split('/');
    const CHECK_IN = new Date(
      Number(YEAR_START),
      Number(MONTH_START - 1),
      Number(DAY_START),
    ).getTime();
    const CHECK_OUT = new Date(Number(YEAR_END), Number(MONTH_END - 1), Number(DAY_END)).getTime();
    if (!props.house.booking.length) {
      setIsBooking(true);
      localStorage.setItem('range', JSON.stringify({ CHECK_IN, CHECK_OUT }));
    }
    if (checkIsBooking(CHECK_IN, CHECK_OUT, houses.currentHouse.booking)) {
      localStorage.setItem('range', JSON.stringify({ CHECK_IN, CHECK_OUT }));
      setIsWarn(false);
      setIsBooking(true);
    } else {
      setIsBooking(false);
      setIsWarn(true);
    }
  };

  useEffect(() => {
    if (datePicker.checkout) {
      handleSubmit(onSubmit)();
    }
  }, [datePicker.checkout]);

  useEffect(() => {
    setIsBooking(false);
  }, []);

  return (
    <div className={css.container}>
      <form className={css.form}>
        <Box
          ref={fieldsRef}
          sx={{ width: '100%', display: 'flex', alignItems: 'center', columnGap: '30px' }}
        >
          <TextField
            control={control}
            name="checkIn"
            rules={{ required: true }}
            fieldRef={refs.checkinRef}
            onFocus={handlers.setIsCheckIn}
          />
          -
          <TextField
            control={control}
            name="checkOut"
            rules={{ required: true }}
            fieldRef={refs.checkoutRef}
            onFocus={handlers.setIsCheckOut}
          />
        </Box>
        <Button
          disabled={!isBooking}
          variant="contained"
          component="label"
          size="large"
          sx={{
            m: '5px',
            height: '100%',
            fontFamily: 'Montserrat',
            backgroundColor: '#2D2D2D',
            '&:hover': {
              backgroundColor: '#2D2D2D',
            },
          }}
        >
          <Link
            onClick={() => {
              setPickedDateUnits({ firstPickedDateUnit: null, secondPickedDateUnit: null });
            }}
            to={`/booking/${props?.house?.id}`}
            style={{ color: 'white' }}
          >
            Booking
          </Link>
        </Button>
      </form>

      {isWarn && (
        <Typography
          sx={{
            pt: '36px',
            display: 'flex',
            justifyContent: 'center',
            fontSize: 30,
            fontFamily: 'Montserrat',
          }}
        >
          It is not possible to book for this date, please try another date
        </Typography>
      )}

      {datePicker.isCheckIn || datePicker.isCheckOut ? (
        <FieldsContext.Provider
          value={{
            isClose: datePicker.isClose,
            isCheckIn: datePicker.isCheckIn,
            isCheckOut: datePicker.isCheckOut,
          }}
        >
          <DatePicker disablePreviousDays pickerRef={refs.pickerRef} />
        </FieldsContext.Provider>
      ) : null}
    </div>
  );
};
export { FieldsContext };
