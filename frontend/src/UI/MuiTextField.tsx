import { UseControllerProps, useController } from 'react-hook-form';
import { TextField } from '@mui/material';

export const MuiTextField = ({ ...props }: UseControllerProps<any>) => {
  const { field, fieldState } = useController(props);

  return (
    <TextField
      sx={{
        textTransform: 'capitalize',
        width: {
          smallMobile: '100%',
        },
      }}
      // onBlur={() => handleBlur()}
      // inputProps={{
      //   onBlur: () => {
      //     handleBlur();
      //   },
      // }}
      size="small"
      label={field.name}
      error={!!fieldState.error}
      {...field}
      helperText={fieldState.error && (fieldState.error.message || 'This is required')}
    />
  );
};
