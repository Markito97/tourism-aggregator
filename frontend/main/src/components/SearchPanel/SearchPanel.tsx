/* eslint-disable import/order */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useDatePicker } from 'main/src/hooks/useDatePicker';
import { Controller, useForm } from 'react-hook-form';
import TextField from 'main/src/UI/TextField';
import { FieldsContext } from '../../context/DateContext';
import { DatePicker } from '../DatePicker/DatePicker';
import { useRef } from 'react';
import * as css from './SearchPanel.sass';

export const SeacrhPanel = (): JSX.Element => {
  const { refs, datePicker, handlers } = useDatePicker();
  const { control, handleSubmit, setFocus, setValue } = useForm({
    defaultValues: {
      lake: '',
      dateStart: '',
      dateEnd: '',
    },
  });

  const onSubmit = (data: any) => {};

  // useEffect(() => {
  //   setValue('dateStart', datePicker.checkin);
  // }, [datePicker.checkin]);

  // useEffect(() => {
  //   setValue('dateEnd', datePicker.checkout);
  // }, [datePicker.checkout]);
  // console.log(datePicker.checkin);

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          onShow={handlers.onToggleIsCheckin}
          date={datePicker.checkin}
          // date={'aboba'}
          fieldRef={refs.checkinRef}
          type="text"
          placeholder="dd/mm/yyyy"
          customPlaceholder="Check in"
          pickerRef={refs.pickerRef}
          // test={refs.pickerRef}
          // dateEnd={datePicker.dateEnd}
        />

        {/* <Controller
          control={control}
          name="lake"
          rules={{ required: 'This required field.' }}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => {
            return (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                type="text"
                inputType="text"
                placeholder="Lake"
                customPlaceholder="Lake"
              />
            );
          }}
        /> */}
        {/* <Controller
          control={control}
          name="dateStart"
          rules={{ required: 'This required field.' }}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => {
            return (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                onShow={handlers.onToggleIsCheckin}
                value={datePicker.checkin}
                inputRef={ref}
                fieldRef={refs.checkinRef}
                type="text"
                inputType="date"
                placeholder="dd/mm/yyyy"
                customPlaceholder="Check in"
                datePicker={refs.pickerRef}
                dateEnd={datePicker.dateEnd}
              />
            );
          }}
        /> */}
        {/* <Controller
          control={control}
          name="dateEnd"
          rules={{ required: 'This required field.' }}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => {
            return (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                fieldRef={refs.checkoutRef}
                type="text"
                inputType="date"
                placeholder="dd/mm/yyyy"
                customPlaceholder="Check in"
                dateStart={datePicker.dateStart}
              />
            );
          }}
        /> */}
        <input style={{ height: '50px' }} type="submit" />
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
