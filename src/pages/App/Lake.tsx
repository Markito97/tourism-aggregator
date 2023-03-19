import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ServiceContext } from '../../context/ServiceContext';
import { HousesField } from '../../components/Houses/HousesField';
import { observer } from 'mobx-react-lite';
import { Titles } from '../../components/Layout/App/Titles';
import { Box, Typography } from '@mui/material';
import { lakes } from '../../components/Lakes/Lakes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { mockHouses } from '../../mockdata/mockHouses';

export const HOUSES = {
  title: 'Houses for Everyoune',
  subTitle: 'Beauties',
  className: 'Content',
};

export const Lake = observer((): JSX.Element => {
  const { lake } = useParams();

  return (
    <>
      <Titles titles={{ title: `${lake}`, subTitle: 'Beauties', className: 'Content' }} />
      <Box sx={{ pt: '96px' }}>
        <Swiper navigation={true} modules={[Navigation]}>
          {lakes.map((lake) =>
            lake.images.map((img) => (
              <SwiperSlide>
                <img
                  style={{
                    display: 'block',
                    width: '100%',
                    maxHeight: '500px',
                  }}
                  src={img}
                />
              </SwiperSlide>
            )),
          )}
        </Swiper>
      </Box>

      {lakes.map((house) => {
        if (house.title.toLowerCase() === lake) {
          return (
            <Box key={house.description}>
              <Typography
                sx={{
                  pt: 12,
                  fontSize: '20px',
                  fontFamily: 'Montserrat',
                  lineHeight: '24px',
                  color: 'black',
                  textAlign: 'justify',
                }}
              >
                {house.description}
              </Typography>
            </Box>
          );
        }
      })}
      <Titles titles={HOUSES} />
      <HousesField houses={mockHouses.filter((house) => house.lake.toLowerCase() === lake)} />
    </>
  );
});
