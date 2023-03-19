import { UseControllerProps, useController } from 'react-hook-form';
import { SearchPanelForm } from '../components/Forms/SearchBookingForm';
import * as css from './TextField.sass';

export const TextField = ({ ...props }: UseControllerProps<SearchPanelForm> | any): JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <div ref={props.fieldRef} className={css.textField}>
      <input
        className={css.field}
        {...field}
        onFocus={props.onFocus}
        placeholder={props.name}
        autoComplete="off"
      />
      <p className={css.error}>
        {fieldState.error && (fieldState.error.message || 'This is required')}
      </p>
    </div>
  );
};
