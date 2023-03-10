import { UseControllerProps, useController } from 'react-hook-form';
import { RefObject } from 'react';
import * as css from './TextField.sass';
import { SearchPanelForm } from '../components/SearchPanel/SearchPanel';

export const TextField = ({
  ...props
}: UseControllerProps<SearchPanelForm> | any): JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <div ref={props.fieldRef} className={css.textField}>
      <input
        className={css.field}
        {...field}
        placeholder={props.name}
        onFocus={props.onFocus}
      />
      <p className={css.error}>
        {fieldState.error && (
          <span>{fieldState.error.message || 'This is required'}</span>
        )}
      </p>
    </div>
  );
};
