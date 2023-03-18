import { Box, IconButton, Typography } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { MuiTextField } from '../../UI/MuiTextField';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { getString } from '../../utils/stringHelpers/getString';

export interface EditFormValues extends FieldValues {
  houseName: string;
  address: string;
  lake: string;
  price: string;
  persons: string;
  geoData: string;
}

interface EditFormProps {
  onUpdate(data: any): unknown;
  field: string;
  value: string;
}

export const EditForm = (props: EditFormProps): JSX.Element => {
  const { control, handleSubmit, setValue } = useForm<EditFormValues>({
    defaultValues: {
      [props.field]: props.value,
    },
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    if (!props.field && !props.value) return;
    setValue(props.field, props.value);
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleBlur = (data: any): void => {
    console.log(123);
    props.onUpdate(data);
    setIsEditing(false);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {!isEditing && (
        <Typography
          sx={{
            fontSize: 14,
            fontFamily: 'Montserrat',
            // textTransform: 'capitalize',
          }}
        >
          {getString<any>(props.value)}
        </Typography>
      )}
      {isEditing && (
        <MuiTextField
          control={control}
          name={props.field}
          autoFocus
          multiline
          rules={{ required: true }}
          onBlur={handleSubmit(handleBlur)}
        />
      )}

      <IconButton onClick={handleEdit}>
        <EditOutlinedIcon />
      </IconButton>
    </Box>
  );
};
