import { FC } from 'react';
import { Button } from '../../UI/Button';

interface DatePickerControlsProps {
  isModal: boolean;
  onClose: () => void;
}

export const DatePickerControls: FC<DatePickerControlsProps> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        columnGap: '15px',
        paddingTop: '15px',
      }}
    >
      {props.isModal ? (
        <>
          <Button onClick={props.onClose}>close</Button>
          <Button onClick={props.onClose}>ok</Button>
        </>
      ) : null}
    </div>
  );
};
