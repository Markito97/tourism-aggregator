import { FC, Ref } from 'react';
import styles from './DatePickerForm.module.css';

interface DatePickerFormProps {
  isMatches: boolean;
  checkInRef: Ref<HTMLInputElement>;
  checkOutRef: Ref<HTMLInputElement>;
  onCheckIn: () => void;
  onCheckOut: () => void;
}

export const DatePickerForm: FC<DatePickerFormProps> = ({
  isMatches,
  checkInRef,
  checkOutRef,
  onCheckIn,
  onCheckOut,
}): JSX.Element => {
  if (isMatches) {
    return (
      <div className={styles.form__container}>
        <input
          className={styles.form__textfield}
          placeholder="CheckIn"
          onClick={onCheckIn}
          ref={checkInRef}
        />
        <input
          className={styles.form__textfield}
          placeholder="CheckOut"
          onClick={onCheckOut}
          ref={checkOutRef}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.form__container}>
        <input
          className={styles.form__textfield}
          placeholder="CheckIn"
          onFocus={onCheckIn}
          ref={checkInRef}
        />
        <input
          className={styles.form__textfield}
          placeholder="CheckOut"
          onFocus={onCheckOut}
          ref={checkOutRef}
        />
      </div>
    );
  }
};
