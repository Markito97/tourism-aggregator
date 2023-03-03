/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-template */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { RefObject, useEffect, useState } from 'react';
import { ControllerFieldState, Noop } from 'react-hook-form';
import * as css from './TextField.sass';
import { useOutside } from '../hooks/useOutside';

interface ITextField {
  value: string;
  onChange?: () => void;
  onBlur?: Noop;
  inputRef: React.RefCallback<HTMLInputElement>;
  onFocus?: () => void;
  fieldState: ControllerFieldState;
  label?: string;
  type?: string;
  inputType: string | 'text';
  placeholder?: string;
  customPlaceholder?: string;
  onShow?: (show: boolean) => void;
  handleRef?: RefObject<HTMLDivElement>;
  pickerRef?: RefObject<HTMLDivElement>;
  test: boolean;
}

export const TextField = (props: ITextField): JSX.Element => {
  const [up, setUp] = useState(false);
  const [withValue, setWidthValue] = useState(false);

  const hanldeFocus = () => {
    setUp(true);
    if (!props.onShow) return;
    props.onShow(true);
  };

  useEffect(() => {
    if (props.test) {
      hanldeFocus();
    }
  }, [props.test]);

  const hanldeBlur = () => {
    if (props.value) {
      setWidthValue(true);
    }
    if (!props.value) {
      setWidthValue(false);
    }
    setUp(false);
  };

  useOutside(hanldeBlur, props.pickerRef, props.handleRef);

  const handleChange = (e: { target: { value: any } }) => {
    let value = e.target.value;
    if (/\D\/$/.test(value)) {
      value = value.substr(0, value.length - 3);
    }
    const values = value.split('/').map((v: string) => v.replace(/\D/g, ''));
    const output = values.map((v: string | any[], i: number) =>
      v.length === 2 && i < 2 ? v + ' / ' : v,
    );
    value = output.join('').substr(0, 14);
    props.onChange!(value);
  };

  return (
    <div ref={props.handleRef} className={css.textField}>
      <label className={css.textFieldLable}>{props?.label}</label>
      <input
        className={css.field}
        value={props.value}
        onFocus={hanldeFocus}
        onBlur={!props.onShow ? hanldeBlur : null}
        onChange={props.inputType === 'date' ? handleChange : props.onChange}
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
