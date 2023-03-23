import { FieldsContext } from '../../context/DateContext';
import { DatePicker } from '../DatePicker/DatePicker';
import { TextField } from '../../UI/TextField';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useContext } from 'react';
import { useDatePicker } from '../../hooks/useDatePicker';
import * as css from './SearchBookingForm.sass';
import { Box, Button, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import { ServiceContext } from '../../context/ServiceContext';
import { checkIsBooking } from '../../utils/bookingHelpers/checkIsBooking';
import { FormControl } from '@mui/material';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const ModalContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  overflowY: 'scroll',
  height: '100%',
  padding: '16px',
  rowGap: '30px',
}));

const ModalHeader = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SearchControlStyles = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  [theme.breakpoints.down('averageMobile')]: {
    flexDirection: 'column',
    rowGap: '15px',
  },
}));

const TextFiledsStyles = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: '30px',
  [theme.breakpoints.down('averageMobile')]: {
    columnGap: '15px',
  },
}));

const ButtonStyles = styled(Button)(({ theme }) => ({
  fontFamily: 'Montserrat',
  backgroundColor: '#2D2D2D',
  '&:hover': {
    backgroundColor: '#2D2D2D',
  },
  [theme.breakpoints.down('averageMobile')]: {
    width: '100%',
  },
}));

export interface SearchPanelForm {
  lake: string;
  checkIn: string;
  checkOut: string;
}

export const SearchPanel = (props: any): JSX.Element => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('averageMobile'));
  const [isModal, setIsModal] = useState(false);
  const { refs, datePicker, handlers } = useDatePicker();
  const { handleSubmit, control, setValue } = useForm<SearchPanelForm>({
    defaultValues: {
      checkIn: '',
      checkOut: '',
    },
    mode: 'onChange',
  });
  const { houses } = useContext(ServiceContext);

  const handlePickerIn = (): void => {
    return matches ? setIsModal(true) : handlers.setIsCheckIn(true);
  };

  const handlePickerOut = (): void => {
    return matches ? setIsModal(true) : handlers.setIsCheckOut(true);
  };

  useEffect(() => {
    if (datePicker.checkin) setValue('checkIn', datePicker.checkin);
    if (datePicker.checkout) setValue('checkOut', datePicker.checkout);
  }, [datePicker.checkin, datePicker.checkout]);

  const onSubmit = (data: any) => {
    // const [DAY_START, MONTH_START, YEAR_START] = data.checkIn.split('/');
    // const [DAY_END, MONTH_END, YEAR_END] = data.checkOut.split('/');
    // const CHECK_IN = new Date(
    //   Number(YEAR_START),
    //   Number(MONTH_START - 1),
    //   Number(DAY_START),
    // ).getTime();
    // const CHECK_OUT = new Date(Number(YEAR_END), Number(MONTH_END - 1), Number(DAY_END)).getTime();
    // if (!props.house.booking.length) {
    //   setIsBooking(true);
    //   localStorage.setItem('range', JSON.stringify({ CHECK_IN, CHECK_OUT }));
    // }
    // if (checkIsBooking(CHECK_IN, CHECK_OUT, houses.currentHouse.booking)) {
    //   localStorage.setItem('range', JSON.stringify({ CHECK_IN, CHECK_OUT }));
    //   setIsWarn(false);
    //   setIsBooking(true);
    // } else {
    //   setIsBooking(false);
    //   setIsWarn(true);
    // }
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };

  return (
    <div className={css.container}>
      {!isModal && (
        <>
          <SearchControlStyles>
            <TextFiledsStyles>
              <TextField
                control={control}
                name="checkIn"
                rules={{ required: true }}
                fieldRef={refs.checkinRef}
                onFocus={handlePickerIn}
              />
              <TextField
                control={control}
                name="checkOut"
                rules={{ required: true }}
                fieldRef={refs.checkoutRef}
                onFocus={handlePickerOut}
              />
            </TextFiledsStyles>
            <ButtonStyles variant="contained" size="large">
              Booking
            </ButtonStyles>
          </SearchControlStyles>

          {datePicker.isCheckIn || datePicker.isCheckOut ? (
            <DatePicker
              pickerRef={refs.pickerRef}
              isClose={datePicker.isClose}
              isCheckIn={datePicker.isCheckIn}
              isCheckOut={datePicker.isCheckOut}
              disablePreviousDays
            />
          ) : null}
        </>
      )}

      <Modal open={isModal}>
        <ModalContent>
          <ModalHeader>
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                fontSize: '18px',
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              Booking date
            </Typography>
            <CloseIcon
              sx={{
                position: 'absolute',
                right: '0',
                width: '25px',
                height: '25px',
              }}
              onClick={handleCloseModal}
            />
          </ModalHeader>
          <TextFiledsStyles>
            <TextField control={control} name="checkIn" />
            <TextField control={control} name="checkOut" />
          </TextFiledsStyles>
          <DatePicker
            isClose={datePicker.isClose}
            isCheckIn={isModal}
            isCheckOut={isModal}
            disablePreviousDays
          />
        </ModalContent>
      </Modal>
    </div>
  );
};
export { FieldsContext };
