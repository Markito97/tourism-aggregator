import { useForm } from 'react-hook-form';
import { ServiceContext } from '../../context/ServiceContext';
import { useContext } from 'react';
import styles from './AdminForm.module.css';
import { IRating } from 'src/dto/house.dto';
import { DragForm } from './DragForm';
import { MuiTextField } from '../../UI/MuiTextField';
import { Box, Button, styled } from '@mui/material';

const RequiredFields = [];

export interface FormValues {
  houseName: string;
  address: string;
  lake: string;
  price: string;
  persons?: string;
  geoData?: string;
  files: Array<File>;
}

const rating: IRating = {
  oneStar: [],
  twoStar: [],
  threeStar: [],
  fourStar: [],
  fiveStar: [],
};

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('mobile')]: {},
  [theme.breakpoints.up('tablet')]: {},
  [theme.breakpoints.up('laptop')]: {},
  [theme.breakpoints.down('desktop')]: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'green',
  },
  // [theme.breakpoints.up('desktop')]: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   flexDirection: 'row',
  //   backgroundColor: 'red',
  // },

  // [theme.breakpoints.down('kingSize')]: {
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
}));

export const AdminForm = () => {
  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      houseName: '',
      address: '',
      lake: '',
      price: '',
      persons: '',
      geoData: '',
      files: [],
    },
  });
  const { houses } = useContext(ServiceContext);

  const handleFiles = (files: Array<File>) => {
    setValue('files', files);
  };

  const onSubmit = (house: FormValues): void => {
    houses.createHouse({ ...house, rating });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Root sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
        <div className={styles.requiredFields}>
          <MuiTextField control={control} rules={{ required: true }} name="houseName" />
          <MuiTextField control={control} rules={{ required: true }} name="address" />
          <MuiTextField control={control} rules={{ required: true }} name="lake" />
          <MuiTextField control={control} rules={{ required: true }} name="price" />
        </div>
        <div className={styles.rightFields}>
          <MuiTextField control={control} name="geoData" />
          <MuiTextField control={control} name="persons" />
          <DragForm
            control={control}
            name="files"
            onFiles={handleFiles}
            rules={{ required: true }}
          />
          <Button
            type="submit"
            variant="contained"
            size="medium"
            sx={{
              width: '100%',
              backgroundColor: '#2D2D2D',
              '&:hover': {
                backgroundColor: '#2D2D2D',
              },
            }}
          >
            Send
          </Button>
        </div>
      </Root>
    </form>
  );
};
