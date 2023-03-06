/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-template */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { RefObject, useEffect, useRef, useState } from 'react';
import { ControllerFieldState, Noop } from 'react-hook-form';
import * as css from './TextField.sass';

interface TextFieldProps {
  value: string;
  onChange?: () => void;
  onBlur?: Noop;
  inputRef: React.RefCallback<HTMLInputElement>;
  onFocus?: () => void;
  fieldState: ControllerFieldState;
  label?: string;
  type?: string;
  inputType: string;
  placeholder?: string;
  customPlaceholder?: string;
  onShow?: (show: boolean, ref: RefObject<HTMLDivElement>) => void;
  pickerRef?: RefObject<HTMLDivElement>;
  fieldRef: RefObject<HTMLInputElement>;
}

export const TextField = (props: TextFieldProps): JSX.Element => {
  const [isPlaceHolder, setIsPlaceHolder] = useState(false);

  console.log(props.onFocus);

  return (
    <div className={css.textField}>
      <label className={css.textFieldLable}>{props?.label}</label>
      <input
        ref={props.fieldRef}
        className={css.field}
        value={props.value}
        onFocus={() => {
          setIsPlaceHolder(true);
          props.onFocus(true);
        }}
        onChange={props.onChange}
        // onFocus={hanldeFocus}
        // onBlur={!props.onShow ? hanldeBlur : null}
        // onChange={props.onChange}
        // ref={props.inputRef}
        // type={props.type}
        // placeholder={props.placeholder}
      />
      <div
        className={
          isPlaceHolder ? css.placeholder__active : css.placeholder__inactive
        }
      >
        {props.customPlaceholder}
      </div>
      <p className={css.error}>{props.fieldState?.error?.message}</p>
    </div>
  );
};
