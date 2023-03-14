import { useForm } from 'react-hook-form';
import { ServiceContext } from '../../context/ServiceContext';
import { useContext } from 'react';
import { IRating } from 'src/dto/house.dto';
import { DragForm } from './DragForm';
import { MuiTextField } from '../../UI/MuiTextField';
import { Box, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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

export const AdminForm = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: {
            smallMobile: 'column',
            averageMobile: 'column',
            tablet: 'row',
            laptop: 'row',
          },
          rowGap: {
            smallMobile: '30px',
            averageMobile: '30px',
          },
        }}
      >
        <Box
          sx={{
            minWidth: {
              desktop: '400px',
            },
            maxWidth: {
              laptop: '300px',
            },
            display: 'flex',
            flexDirection: 'column',
            rowGap: '30px',
          }}
        >
          <MuiTextField control={control} rules={{ required: true }} name="houseName" />
          <MuiTextField control={control} rules={{ required: true }} name="address" />
          <MuiTextField control={control} rules={{ required: true }} name="lake" />
          <MuiTextField control={control} rules={{ required: true }} name="price" />
        </Box>
        <Box
          sx={{
            minWidth: {
              desktop: '400px',
            },
            maxWidth: {
              laptop: '300px',
              // desktop: '500px',
            },
            display: 'flex',
            flexDirection: 'column',
            rowGap: '30px',
          }}
        >
          <MuiTextField control={control} name="geoData" />
          <MuiTextField control={control} name="persons" />
          {matches && (
            <Button
              variant="contained"
              component="label"
              size="medium"
              sx={{
                width: '100%',
                backgroundColor: '#2D2D2D',
                '&:hover': {
                  backgroundColor: '#2D2D2D',
                },
              }}
            >
              Upload
              {/* TODO: Пофиксить  добавление файла */}
              <input type="file" hidden />
            </Button>
          )}
          {!matches && (
            <DragForm
              control={control}
              name="files"
              onFiles={handleFiles}
              rules={{ required: true }}
            />
          )}

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
        </Box>
      </Box>
    </form>
  );
};
