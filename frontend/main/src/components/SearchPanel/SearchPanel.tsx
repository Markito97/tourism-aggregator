/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-void */
import { useForm, Controller } from 'react-hook-form';
import { TextField } from 'main/src/UI/TextField';
import { RefObject, useEffect, useRef, useState } from 'react';
import useDatePickGetter from 'main/src/hooks/useDatePickGetter';
import { useOutside } from 'main/src/hooks/useOutside';
import { DatePicker } from '../DatePicker/DatePicker';
import * as css from './SearchPanel.sass';

export const SeacrhPanel = (): JSX.Element => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      lake: '',
      dateStart: '',
      dateEnd: '',
    },
  });
  const pickerRef = useRef<HTMLDivElement>(null);
  const [isDatePicker, setIsDatePicker] = useState(false);
  const { pickedDates, pickedDateUnits } = useDatePickGetter();
  const [fieldRef, setFieldRef] = useState<RefObject<HTMLDivElement>>();
  useOutside(handleClose, pickerRef, fieldRef, isDatePicker);
  const [startDate, setStartDate] = useState(false);

  const handleClick = (show: boolean, ref: RefObject<HTMLDivElement>) => {
    void setFieldRef(ref);
    void setIsDatePicker(show);
  };

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
    setStartDate(true);
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
    void setStartDate(false);
    void setIsDatePicker(false);
  }, [
    pickedDateUnits.secondPickedDateUnit?.day,
    pickedDateUnits.secondPickedDateUnit?.month,
    pickedDateUnits.secondPickedDateUnit?.year,
    setValue,
  ]);

  function handleClose(): void {
    void setIsDatePicker(false);
  }

  const onSubmit = (data: any) => {};

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
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
                onShow={handleClick}
                value={value}
                inputRef={ref}
                fieldState={fieldState}
                pickerRef={pickerRef}
                type="text"
                inputType="date"
                placeholder="dd/mm/yyyy"
                customPlaceholder="Check in"
                startDate={startDate}
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
