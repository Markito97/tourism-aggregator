/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm, Controller } from 'react-hook-form';
import { TextField } from 'main/src/UI/TextField';
import { useEffect, useRef, useState } from 'react';
import useDatePickGetter from 'main/src/hooks/useDatePickGetter';
import { useOutside } from 'main/src/hooks/useOutside';
import { DatePicker } from '../DatePicker/DatePicker';
import * as css from './SearchPanel.sass';

interface ISearchForm {
  lake: string;
  dateStart: string;
  dateEnd: string;
}

export const SeacrhPanel = (): JSX.Element => {
  const { control, handleSubmit, setFocus, setValue } = useForm({
    defaultValues: {
      lake: '',
      dateStart: '',
      dateEnd: '',
    },
  });
  const pickerRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const [isDatePicker, setIsDatePicker] = useState(false);
  const { pickedDates, pickedDateUnits } = useDatePickGetter();
  useOutside(handleClose, pickerRef, fieldRef, isDatePicker);
  const [test, setTest] = useState(false);

  useEffect(() => {
    if (pickedDates.firstPickedDate !== false) {
      setTest(true);
    }
  }, [pickedDates.firstPickedDate]);

  console.log(test);

  useEffect(() => {
    if (
      !pickedDateUnits.firstPickedDateUnit?.day ||
      !pickedDateUnits.firstPickedDateUnit?.month ||
      !pickedDateUnits.firstPickedDateUnit?.year
    )
      return;
    setValue(
      'dateStart',
      `${
        pickedDateUnits.firstPickedDateUnit?.day < 10
          ? `0${pickedDateUnits.firstPickedDateUnit?.day}`
          : pickedDateUnits.firstPickedDateUnit?.day
      }  / ${
        pickedDateUnits.firstPickedDateUnit?.month < 10
          ? `0${pickedDateUnits.firstPickedDateUnit?.month}`
          : pickedDateUnits.firstPickedDateUnit?.month
      } / ${pickedDateUnits.firstPickedDateUnit?.year}`,
    );
  }, [
    pickedDateUnits.firstPickedDateUnit?.day,
    pickedDateUnits.firstPickedDateUnit?.month,
    pickedDateUnits.firstPickedDateUnit?.year,
    setValue,
  ]);

  useEffect(() => {
    if (
      !pickedDateUnits.secondPickedDateUnit?.day ||
      !pickedDateUnits.secondPickedDateUnit?.month ||
      !pickedDateUnits.secondPickedDateUnit?.year
    )
      return;
    setValue(
      'dateEnd',
      `${
        pickedDateUnits.secondPickedDateUnit?.day < 10
          ? `0${pickedDateUnits.secondPickedDateUnit?.day}`
          : pickedDateUnits.secondPickedDateUnit?.day
      }  / ${
        pickedDateUnits.secondPickedDateUnit?.month < 10
          ? `0${pickedDateUnits.secondPickedDateUnit?.month}`
          : pickedDateUnits.secondPickedDateUnit?.month
      } / ${pickedDateUnits.secondPickedDateUnit?.year}`,
    );
  }, [
    pickedDateUnits.secondPickedDateUnit?.day,
    pickedDateUnits.secondPickedDateUnit?.month,
    pickedDateUnits.secondPickedDateUnit?.year,
    setValue,
  ]);

  function handleClose() {
    setIsDatePicker(false);
  }

  const onSubmit = (data: any) => {};

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
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => {
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
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => {
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
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => {
            return (
              <TextField
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                fieldState={fieldState}
                type="text"
                inputType="date"
                placeholder="dd/mm/yyyy"
                customPlaceholder="Check in"
                test={test}
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
