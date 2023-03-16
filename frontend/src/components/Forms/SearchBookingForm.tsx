import { FieldsContext } from '../../context/DateContext';
import { DatePicker } from '../DatePicker/DatePicker';
import { TextField } from '../../UI/TextField';
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { useDatePicker } from '../../hooks/useDatePicker';
import { ServiceContext } from '../../context/ServiceContext';
import * as css from './SearchBookingForm.sass';

export interface SearchPanelForm {
  lake: string;
  checkIn: string;
  checkOut: string;
}

export const SearchPanel = (): JSX.Element => {
  const { houses } = useContext(ServiceContext);
  const { refs, datePicker, handlers } = useDatePicker();
  const { handleSubmit, control, setValue } = useForm<SearchPanelForm>({
    defaultValues: {
      lake: '',
      checkIn: '',
      checkOut: '',
    },
    mode: 'onChange',
  });

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

  const onSubmit = (data: any) => {
    const [DAY_START, MONTH_START, YEAR_START] = data.checkIn.split('/');
    const [DAY_END, MONTH_END, YEAR_END] = data.checkOut.split('/');
    const CHECK_IN = new Date(
      Number(YEAR_START),
      Number(MONTH_START - 1),
      Number(DAY_START),
    ).getTime();
    const CHECK_OUT = new Date(Number(YEAR_END), Number(MONTH_END - 1), Number(DAY_END)).getTime();
    // console.log(CHECK_IN);
    // console.log(CHECK_OUT);
    houses.getFreeHouses({ CHECK_IN, CHECK_OUT });
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        {/* <TextField control={control} name="lake" rules={{ required: true }} /> */}
        <TextField
          control={control}
          name="checkIn"
          rules={{ required: true }}
          fieldRef={refs.checkinRef}
          onFocus={handlers.setIsCheckIn}
        />
        <TextField
          control={control}
          name="checkOut"
          rules={{ required: true }}
          fieldRef={refs.checkoutRef}
          onFocus={handlers.setIsCheckOut}
        />

        <button
          style={{
            margin: '5px',
            padding: '16px 56px',
            background: 'rgba(45, 45, 45, 1)',
            color: 'white',
          }}
          type="submit"
        >
          Send
        </button>
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
export { FieldsContext };
