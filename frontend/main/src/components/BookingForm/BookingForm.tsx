import { useForm } from 'react-hook-form';
import { TextField } from '../../UI/TextField';
import { useParams } from 'react-router-dom';
import { ServiceContext } from 'main/src/context/ServiceContext';
import { useEffect, useState, useContext } from 'react';
import { DatePicker } from '../DatePicker/DatePicker';
import { useDatePicker } from 'main/src/hooks/useDatePicker';
import { FieldsContext } from '../SearchPanel/SearchPanel';

export const BookinForm = () => {
  const { refs, datePicker, handlers } = useDatePicker();
  const [house, setHouse] = useState({});
  const { id } = useParams();
  const { houses } = useContext(ServiceContext);
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      checkIn: '',
      checkOut: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    const fetchHouse = async () => {
      const data = await houses.getHouse(id);

      if (!data) return;
      setHouse(data);
    };
    fetchHouse();
  }, []);

  const onSubmit = (data: any) => {
    const [DAY_START, MONTH_START, YEAR_START] = data.checkIn.split('/');
    const [DAY_END, MONTH_END, YEAR_END] = data.checkOut.split('/');
    const CHECK_IN = new Date(
      Number(YEAR_START),
      Number(MONTH_START - 1),
      Number(DAY_START),
    ).getTime();
    const CHECK_OUT = new Date(
      Number(YEAR_END),
      Number(MONTH_END - 1),
      Number(DAY_END),
    ).getTime();

    houses.bookingHouse(id, {
      ...house,
      checkIn: CHECK_IN,
      checkOut: CHECK_OUT,
    });
  };

  useEffect(() => {
    if (datePicker.checkin) {
      setValue('checkIn', datePicker.checkin);
    }
  }, [datePicker.checkin]);

  useEffect(() => {
    if (datePicker.checkout) {
      setValue('checkOut', datePicker.checkout);
    }
  }, [datePicker.checkout]);

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          control={control}
          name="checkIn"
          fieldRef={refs.checkinRef}
          onFocus={handlers.setIsCheckIn}
        />
        <TextField
          control={control}
          name="checkOut"
          fieldRef={refs.checkoutRef}
          onFocus={handlers.setIsCheckOut}
        />
        <input type="submit" />
      </form>
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
