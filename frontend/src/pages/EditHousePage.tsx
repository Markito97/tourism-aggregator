import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceContext } from '../context/ServiceContext';
import { Box, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { MuiTextField } from '../UI/MuiTextField';
import { useForm } from 'react-hook-form';
import { EditForm } from '../components/EditForm/EditForm';
import { mergeArraysToArrOfObjs } from '../utils/arrayHelpers/mergeArraysToArrOfObjs';

export const EditHousePage = (): JSX.Element | null => {
  const { id } = useParams();
  const { houses } = useContext(ServiceContext);
  const [house, setHouse] = useState();

  useEffect(() => {
    const fetchHouse = async () => {
      const data = await houses.getHouse(id);
      if (!data) return;
      setHouse(data);
    };
    fetchHouse();
  }, [id]);

  if (!house) return null;
  // const formFields = Object.keys(house).map((house) => <EditForm house={house} key={house} />);

  const formFields = Object.keys(house);
  const formValues: string[] = Object.values(house);
  interface Test {
    field: string;
    value: string;
  }
  const test = mergeArraysToArrOfObjs<string>(formFields, formValues);
  // const test = formFields.map((key, index) => ({field: key, value: formValues[index]}))

  console.log(test);

  return <Box>aboba</Box>;
};
