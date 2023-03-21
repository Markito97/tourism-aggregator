import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceContext } from '../../context/ServiceContext';
import styles from './House.module.css';
import { SearchPanel } from '../../components/Forms/SearchBookingForm';
import { Typography, styled, useMediaQuery, useTheme, Box, Button } from '@mui/material';
import { Rating } from '../../components/Rating/Rating';
import { observer } from 'mobx-react-lite';

const HouseStyles = styled(Box)(({ theme }) => ({
  paddingTop: '60px',
  fontFamily: 'Montserrart',
  [theme.breakpoints.down('averageMobile')]: {
    paddingTop: '30px',
  },
}));

const HouseTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrart',
  textTransform: 'uppercase',
  fontSize: '55px',
  [theme.breakpoints.down('averageMobile')]: {
    fontSize: '30px',
  },
}));

const HouseHeaderStyles = styled(Box)(({ theme }) => ({
  paddingTop: '30px',
  display: 'flex',
  columnGap: '38px',
  [theme.breakpoints.down('laptop')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('averageMobile')]: {
    flexDirection: 'column',
  },
}));

const HouseInfo = styled(Box)(({ theme }) => ({
  paddingTop: '30px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  rowGap: '30px',
}));

const HouseImage = styled('img')(({ theme }) => ({
  maxWidth: '800px',
  height: '100%',
  [theme.breakpoints.down('desktop')]: {
    maxWidth: '700px',
  },
  [theme.breakpoints.down('laptop')]: {
    maxWidth: '100%',
  },
}));

const HouseInfoTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '25px',
}));

export const House = observer(() => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  const { id } = useParams();
  const { houses } = useContext(ServiceContext);

  useEffect(() => {
    houses.getHouse(id);
  }, []);

  if (!houses.currentHouse) return null;
  return (
    <HouseStyles>
      <HouseTitle variant="h1">{houses.currentHouse.houseName}</HouseTitle>
      <HouseHeaderStyles>
        <HouseImage src={houses.currentHouse?.image[0]} />
        <HouseInfo>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <HouseInfoTitle>Price 4500</HouseInfoTitle>
            <HouseInfoTitle>Persons</HouseInfoTitle>
          </Box>

          <Rating house={houses.currentHouse} />
        </HouseInfo>
      </HouseHeaderStyles>
      <Typography sx={{ fontFamily: 'Montserrat', fontSize: '25px', pt: '30px' }}>
        Check available dates
      </Typography>
      <SearchPanel house={houses.currentHouse} />

      <div className={styles.unitDescription}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernaturrerum, quisquam neque
        dignissimos omnis, adipisci alias accusamusveritatis unde quas quia voluptatibus ducimus in
        temporibus cupiditate molestiae hic? Ab, praesentium?
      </div>
      <div className={styles.unitIncludes}>
        <h6 className={styles.unitIncludesTitle}>Include</h6>
        <ul className={styles.unitIncludesList}>
          <li>2 beds</li>
          <li>bath</li>
          <li>shower</li>
        </ul>
      </div>
      <div style={{ width: '100%' }}>
        <img style={{ width: '100%', paddingTop: '30px' }} alt="" />
      </div>
      <div className={styles.unitContacts}>
        <h6 className={styles.unitIncludesTitle}>Contacts</h6>
        <ul className={styles.unitIncludesList}>
          <li className={styles.listUnit}>8-800-555-35-35</li>
        </ul>
      </div>
    </HouseStyles>
  );
});
