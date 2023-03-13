import { FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { TextField } from '@mui/material';

export const MuiTextField = (props: UseControllerProps<FieldValues, any>) => {
  const { field, fieldState } = useController(props);
  return (
    <TextField
      size="small"
      label={field.name}
      error={!!fieldState.error}
      {...field}
      helperText={fieldState.error && (fieldState.error.message || 'This is required')}
    />
  );
};
