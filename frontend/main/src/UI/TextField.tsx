/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-template */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { RefObject, memo, useEffect, useState } from 'react';
import * as css from './TextField.sass';

interface ITextField {
  onShow?: (show: boolean) => void;
  pickerRef: RefObject<HTMLDivElement>;
  date: string;
}

const TextField = (props: ITextField): JSX.Element => {
  const [up, setUp] = useState(false);
  const [withValue, setWidthValue] = useState(false);
  // const [date, setDate] = useState<string>(props.date);

  const hanldeFocus = () => {
    setUp(true);
    if (!props.onShow) return;
    props.onShow(true);
  };

  console.log(props.date);

  useEffect(() => {
    // if (!props.date) return;
    const handleClick = (e) => {
      if (!props?.pickerRef?.current?.contains(e.relatedTarget)) {
        console.log(props.date);
        console.log('aboba');

        if (props.date) setWidthValue(true);
        if (!props.date) setWidthValue(false);
        setUp(false);
      }
    };
    document.addEventListener('blur', handleClick, true);
    return () => {
      document.removeEventListener('blur', handleClick, true);
    };
  });

  return (
    <div ref={props.fieldRef} className={css.textField}>
      <label className={css.textFieldLable}>{props.date}</label>
      <input
        className={css.field}
        value={props.date}
        onFocus={hanldeFocus}
        onChange={(e) => setDate(e.target.value)}
        // onChange={props.inputType === 'date' ? handleChange : props.onChange}
        ref={props.inputRef}
        type={props.type}
        placeholder={props.placeholder}
      />
      <div
        className={
          up
            ? css.placeholder__active
            : withValue
            ? css.placeholder__with
            : css.placeholder__inactive
        }
      >
        {props.customPlaceholder}
      </div>
      <p className={css.error}>{props.fieldState?.error?.message}</p>
    </div>
  );
};

export default memo(TextField);
