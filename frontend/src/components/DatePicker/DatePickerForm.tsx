import { FC, Ref, useEffect, useState } from 'react';
import styles from './DatePickerForm.module.css';

interface DatePickerFormProps {
  checkInValue: string | undefined;
  checkOutValue: string | undefined;
  isMatches: boolean;
  checkInRef: Ref<HTMLInputElement>;
  checkOutRef: Ref<HTMLInputElement>;
  onCheckIn: () => void;
  onCheckOut: () => void;
}

export const DatePickerForm: FC<DatePickerFormProps> = ({
  checkInValue,
  checkOutValue,
  isMatches,
  checkInRef,
  checkOutRef,
  onCheckIn,
  onCheckOut,
}): JSX.Element => {
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');

  useEffect(() => {
    if (checkInValue) {
      setCheckIn(checkInValue);
    }
  }, [checkInValue]);

  useEffect(() => {
    if (checkOutValue) {
      setCheckOut(checkOutValue);
    }
  }, [checkOutValue]);

  if (isMatches) {
    return (
      <div className={styles.form__container}>
        <div className={styles.form__textfield} onClick={onCheckIn}>
          {checkInValue ? checkInValue : 'CheckIn'}
        </div>
        <div className={styles.form__textfield} placeholder="CheckOut" onClick={onCheckOut}>
          {checkOutValue ? checkOutValue : 'CheckOut'}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.form__container}>
        <input
          value={checkIn}
          className={styles.form__textfield}
          placeholder="CheckIn"
          onFocus={onCheckIn}
          onChange={(e) => setCheckIn(e.target.value)}
          ref={checkInRef}
        />
        <input
          value={checkOut}
          className={styles.form__textfield}
          placeholder="CheckOut"
          onFocus={onCheckOut}
          onChange={(e) => setCheckOut(e.target.value)}
          ref={checkOutRef}
        />
      </div>
    );
  }
};
