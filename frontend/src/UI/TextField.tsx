import { UseControllerProps, useController } from 'react-hook-form';
import { SearchPanelForm } from '../components/Forms/SearchBookingForm';
import * as css from './TextField.sass';

export const TextField = ({ ...props }: UseControllerProps<SearchPanelForm> | any): JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <div ref={props.fieldRef} className={css.textField}>
      <label className={css.textField__lable} htmlFor={field.name}>
        {props?.name}
      </label>
      <input className={css.field} {...field} placeholder={props.name} onFocus={props.onFocus} />
      <p className={css.error}>
        {fieldState.error && (fieldState.error.message || 'This is required')}
      </p>
    </div>
  );
};
