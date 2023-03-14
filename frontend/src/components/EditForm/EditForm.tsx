import { Box, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MuiTextField } from '../../UI/MuiTextField';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const EditForm = (props: any): JSX.Element => {
  console.log(props.house);

  const { control, setValue, setFocus } = useForm();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    if (!props.house) return;

    setValue(`${props.house}`, props.house);
    // setFocus('houseName');
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {!isEditing && <Typography>{props.house}</Typography>}
      {isEditing && <MuiTextField control={control} name={props.house} />}
      <IconButton onClick={handleEdit}>
        <EditOutlinedIcon />
      </IconButton>
    </Box>
  );
};
