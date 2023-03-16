import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { TextField } from '@mui/material';

interface TextFieldProps {
  autoFocus?: boolean;
  multiline?: boolean;
  onBlur?: (() => void) | undefined;
}

export function MuiTextField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: TextFieldProps & UseControllerProps<TFieldValues, TName>): JSX.Element {
  const { field, fieldState } = useController(props);

  return (
    <TextField
      sx={{
        textTransform: 'capitalize',
      }}
      multiline={props.multiline}
      autoFocus
      inputProps={{
        onBlur: () => !!props.onBlur && props.onBlur(),
      }}
      size="small"
      label={field.name}
      error={!!fieldState.error}
      {...field}
      helperText={fieldState.error && (fieldState.error.message || 'This is required')}
    />
  );
}
