import { useController } from 'react-hook-form';
import { RefObject } from 'react';
import * as css from './TextField.sass';

interface TextFieldProps {
  fieldRef: RefObject<HTMLInputElement>;
  name: string;
  onFocus: () => void;
}

export const TextField = ({
  fieldRef,
  ...props
}: TextFieldProps): JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <div ref={fieldRef} className={css.textField}>
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
