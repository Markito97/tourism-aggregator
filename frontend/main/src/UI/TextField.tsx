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

interface ITextField {
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
  startDate: boolean;
}

export const TextField = (props: ITextField): JSX.Element => {
  const [up, setUp] = useState(false);
  const [withValue, setWidthValue] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  const hanldeFocus = () => {
    setUp(true);
    if (!props.onShow) return;
    if (props.startDate) return;
    props.onShow(true, inputRef);
  };

  const hanldeBlur = () => {
    if (props.value) setWidthValue(true);
    if (!props.value) setWidthValue(false);
    setUp(false);
  };

  useEffect(() => {
    if (props.startDate) hanldeFocus();
  });

  return (
    <div ref={inputRef} className={css.textField}>
      <label className={css.textFieldLable}>{props?.label}</label>
      <input
        className={css.field}
        value={props.value}
        onFocus={hanldeFocus}
        onBlur={!props.onShow ? hanldeBlur : null}
        onChange={props.onChange}
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
