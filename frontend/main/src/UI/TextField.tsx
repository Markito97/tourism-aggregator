/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { ControllerFieldState, Noop } from 'react-hook-form';
import * as css from './TextField.sass';

interface ITextField {
  value: string;
  onChange?: () => void;
  onBlur?: Noop;
  inputRef: React.RefCallback<HTMLInputElement>;
  onFocus?: () => void;
  fieldState: ControllerFieldState;
  label?: string;
  type?: string;
  placeholder?: string;
}

export const TextField = (props: ITextField): JSX.Element => {
  console.log(props);
  const [up, setUp] = useState(false);

  const hanldeFocus = () => {
    console.log('aboba');
    setUp(true);
  };

  return (
    <div className={css.textField}>
      <label className={css.textFieldLable}>{props.label}</label>
      <input
        className={css.field}
        value={props.value}
        onFocus={hanldeFocus}
        onChange={props.onChange}
        ref={props.inputRef}
        type="text"
        placeholder={props.placeholder}
      />
      <div className={up ? css.active : css.inactive}>{props.placeholder}</div>
      <p className={css.error}>{props.fieldState?.error?.message}</p>
    </div>
  );
};
