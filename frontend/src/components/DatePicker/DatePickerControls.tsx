import { FC } from 'react';
import { Button } from '../../UI/Button';
import styles from './DatePickerControls.module.css';

interface DatePickerControlsProps {
  onClose: () => void;
}

export const DatePickerControls: FC<DatePickerControlsProps> = ({ onClose }): JSX.Element => {
  return (
    <div className={styles.controls__container}>
      <Button onClick={onClose}>close</Button>
      <Button onClick={onClose}>ok</Button>
    </div>
  );
};
