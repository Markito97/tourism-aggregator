import { FieldsContext } from '../../context/DateContext';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useContext } from 'react';
import { Box, Button, styled, useMediaQuery, useTheme } from '@mui/material';
import { ServiceContext } from '../../context/ServiceContext';
import DatePicker from '../DatePicker/DatePicker';
import { TextField } from '../../UI/TextField';

export interface SearchPanelForm {
  lake: string;
  checkIn: string;
  checkOut: string;
}

const SearchPanelStyles = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingTop: '35px',
  justifyContent: 'space-between',
  position: 'relative',
  flexDirection: 'row',
  columnGap: '15px',
  [theme.breakpoints.down('averageMobile')]: {
    flexDirection: 'column',
    rowGap: '15px',
  },
}));

export const SearchPanel = (props: any): JSX.Element => {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('averageMobile'));
  const { handleSubmit, control, setValue } = useForm<SearchPanelForm>({
    defaultValues: {
      checkIn: '',
      checkOut: '',
    },
    mode: 'onChange',
  });
  const { houses } = useContext(ServiceContext);

  // const onSubmit = (data: any) => {
  //   // const [DAY_START, MONTH_START, YEAR_START] = data.checkIn.split('/');
  //   // const [DAY_END, MONTH_END, YEAR_END] = data.checkOut.split('/');
  //   // const CHECK_IN = new Date(
  //   //   Number(YEAR_START),
  //   //   Number(MONTH_START - 1),
  //   //   Number(DAY_START),
  //   // ).getTime();
  //   // const CHECK_OUT = new Date(Number(YEAR_END), Number(MONTH_END - 1), Number(DAY_END)).getTime();
  //   // if (!props.house.booking.length) {
  //   //   setIsBooking(true);
  //   //   localStorage.setItem('range', JSON.stringify({ CHECK_IN, CHECK_OUT }));
  //   // }
  //   // if (checkIsBooking(CHECK_IN, CHECK_OUT, houses.currentHouse.booking)) {
  //   //   localStorage.setItem('range', JSON.stringify({ CHECK_IN, CHECK_OUT }));
  //   //   setIsWarn(false);
  //   //   setIsBooking(true);
  //   // } else {
  //   //   setIsBooking(false);
  //   //   setIsWarn(true);
  //   // }
  // };

  // const handleCloseModal = () => {
  //   setIsModal(false);
  // };

  const onSubmit = (data: any) => {
    console.log(data);
    const [DAY_START, MONTH_START, YEAR_START] = data.checkIn.split('.');

    const checkIn = new Date(data.checkIn);
    console.log(checkIn);
  };

  return (
    <SearchPanelStyles>
      <DatePicker disablePreviousDays={true} handleValue={setValue} />
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        component="label"
        size="large"
        sx={{
          fontFamily: 'Montserrat',
          backgroundColor: '#2D2D2D',
          '&:hover': {
            backgroundColor: '#2D2D2D',
          },
        }}
      >
        Booking
      </Button>
    </SearchPanelStyles>
  );
};
export { FieldsContext };
