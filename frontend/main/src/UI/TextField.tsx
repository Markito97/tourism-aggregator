/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
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
  inputType: string | 'text';
  placeholder?: string;
  customPlaceholder?: string;
  onShow?: (show: boolean) => void;
  handleRef: RefObject<HTMLDivElement>;
  pickerRef: RefObject<HTMLDivElement>;
}

export const TextField = (props: ITextField): JSX.Element => {
  const [up, setUp] = useState(false);
  const [withValue, setWidthValue] = useState(false);

  const hanldeFocus = () => {
    setUp(true);
    props.onShow(true);
  };

  const hanldeBlur = () => {
    console.log(123);
    // if (props.value) {
    //   setWidthValue(true);
    // }
    // if (!props.value) {
    //   setWidthValue(false);
    // }
    setUp(false);
  };

  // useEffect(() => {
  //   if (props.value) {
  //     setUp(true);
  //     // setWidthValue(false);
  //   }
  // }, [props.value]);

  // console.log(props.value);

  // console.log(props.pickerRef.current);

  useEffect(() => {
    if (
      !props.pickerRef ||
      (!props.pickerRef?.current && !props.handleRef) ||
      !props.handleRef?.current
    )
      return;
    const handleClick = (e) => {
      if (
        props.pickerRef.current &&
        !props.pickerRef.current.contains(e.target) &&
        !props.handleRef.current.contains(e.target)
      ) {
        console.log('aboba');
        hanldeBlur();
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [up]);

  const handleChange = (e) => {
    let value = e.target.value;
    if (/\D\/$/.test(value)) {
      value = value.substr(0, value.length - 3);
    }
    const values = value.split('/').map((v) => v.replace(/\D/g, ''));
    const output = values.map((v, i) =>
      v.length == 2 && i < 2 ? v + ' / ' : v,
    );
    value = output.join('').substr(0, 14);
    props.onChange(value);
  };

  return (
    <div ref={props.handleRef} className={css.textField}>
      <label className={css.textFieldLable}>{props?.label}</label>
      <input
        className={css.field}
        value={props.value}
        onFocus={hanldeFocus}
        // onBlur={hanldeBlur}
        // onClick={hanldeBlur}
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
