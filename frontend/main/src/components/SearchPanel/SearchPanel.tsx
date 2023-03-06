/* eslint-disable react/jsx-no-constructed-context-values */
import { useDatePicker } from 'main/src/hooks/useDatePicker';
import { Controller, useForm } from 'react-hook-form';
import { TextField } from 'main/src/UI/TextField';
import { FieldsContext } from '../../context/DateContext';
import { DatePicker } from '../DatePicker/DatePicker';
import * as css from './SearchPanel.sass';

export const SeacrhPanel = (): JSX.Element => {
  const { refs, datePicker, handlers } = useDatePicker();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      lake: '',
      dateStart: '',
      dateEnd: '',
    },
  });

  return (
    <div className={css.container}>
      <form className={css.form}>
        <Controller
          control={control}
          name="lake"
          render={({
            field: { onChange, onBlur, value, ref },
            formState,
            fieldState,
          }) => {
            return <TextField onChange={onChange} customPlaceholder="Lake" />;
          }}
        />
        <Controller
          control={control}
          name="dateStart"
          render={({
            field: { onChange, onBlur, value, ref },
            formState,
            fieldState,
          }) => {
            return (
              <TextField
                onFocus={handlers.onToggleIsCheckin}
                onChange={onChange}
                value={datePicker.checkin}
                fieldRef={refs.checkinRef}
                placeholder='"DD/MM/YYYY"'
                customPlaceholder="Check-in"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="dateEnd"
          render={({
            field: { onChange, onBlur, value, ref },
            formState,
            fieldState,
          }) => {
            return (
              <TextField
                onFocus={handlers.onToggleIsCheckout}
                onChange={onChange}
                value={datePicker.checkout}
                fieldRef={refs.checkoutRef}
                customPlaceholder="Check-out"
              />
            );
          }}
        />
        <input style={{ height: '50px' }} type="submit" />
      </form>

      {/* <input
        onFocus={() => {
          handlers.onToggleIsCheckin(true);
        }}
        ref={refs.checkinRef}
        value={datePicker.checkin}
        onChange={handlers.onChangeCheckIn}
      />
      <input
        onFocus={() => {
          handlers.onToggleIsCheckout(true);
          // handlers.setIsClose(false);
        }}
        ref={refs.checkoutRef}
        value={datePicker.checkout}
        onChange={handlers.onChangeCheckOut}
      /> */}
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
