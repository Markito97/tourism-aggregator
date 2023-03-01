/* eslint-disable consistent-return */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm, Controller } from 'react-hook-form';
import { TextField } from 'main/src/UI/TextField';
// import styles from './SearchPanel.module.css';
import * as css from './SearchPanel.sass';
import { createRef, useEffect, useState } from 'react';
import { DatePicker } from '../DatePicker/DatePicker';
import useDatePickGetter from 'main/src/hooks/useDatePickGetter';

export const SeacrhPanel = (): JSX.Element => {
  const { control, handleSubmit, setFocus, setValue } = useForm({
    defaultValues: {
      lake: '',
      dateStart: '',
      dateEnd: '',
    },
  });
  const pickerRef = createRef();
  const fieldRef = createRef();
  const [isDatePicker, setIsDatePicker] = useState(false);
  const { pickedDateUnits } = useDatePickGetter();
  const { year, month, day } = { ...pickedDateUnits.firstPickedDateUnit };

  useEffect(() => {
    if (day) {
      setValue('dateStart', `${day}`);
    }
  }, [day]);

  const handleClose = () => {
    setIsDatePicker(false);
  };

  useEffect(() => {
    if (!isDatePicker) return;
    const handleClick = (e) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(e.target) &&
        !fieldRef.current.contains(e.target)
      ) {
        handleClose();
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  });

  // console.log(year, month, day);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleClick = (show: boolean) => {
    setIsDatePicker(show);
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="lake"
          rules={{ required: 'This required field.' }}
          render={({
            field: { onChange, onBlur, value, ref },
            formState,
            fieldState,
          }) => {
            return (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                fieldState={fieldState}
                type="text"
                inputType="text"
                placeholder="Lake"
                customPlaceholder="Lake"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="dateStart"
          rules={{ required: 'This required field.' }}
          render={({
            field: { onChange, onBlur, value, ref },
            formState,
            fieldState,
          }) => {
            return (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                onShow={handleClick}
                value={value}
                inputRef={ref}
                fieldState={fieldState}
                handleRef={fieldRef}
                pickerRef={pickerRef}
                type="text"
                inputType="date"
                placeholder="dd/mm/yyyy"
                customPlaceholder="Check in"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="dateEnd"
          rules={{ required: 'This required field.' }}
          render={({
            field: { onChange, onBlur, value, ref },
            formState,
            fieldState,
          }) => {
            return (
              <TextField
                onFocus={setFocus}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                fieldState={fieldState}
                type="text"
                inputType="date"
                placeholder="dd/mm/yyyy"
                customPlaceholder="Check in"
              />
            );
          }}
        />
        <input style={{ height: '50px' }} type="submit" />
      </form>
      {isDatePicker && <DatePicker pickerRef={pickerRef} />}
    </div>
  );
};
