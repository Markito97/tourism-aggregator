import Bondhusvatnet from '@assets/Bondhusvatnet.jpg';
import Bondhusvatnet1 from '@assets/Bondhusvatnet1.jpg';
import Bondhusvatnet2 from '@assets/Bondhusvatnet2.jpg';

import Mjosa from '@assets/Mjosa.jpg';
import Hornindalsvatnet from '@assets/Hornindalsvatnet.jpg';

import styles from './Lakes.module.css';
import { Box, Button, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const lakes = [
  {
    image: Bondhusvatnet,
    title: 'Bondhusvatnet',
    description:
      'The Bondhusbreen is a glacier in Kvinnherad Municipality in Vestland county, Norway. The glacier is an offshoot of the vast Folgefonna glacier, and it lies inside the Folgefonna National Park. The glacier has a length of around 4 kilometres (2.5 mi) and a height difference of about 1,100 metres (3,600 ft) from its highest to its lowest points.',
    images: [Bondhusvatnet1, Bondhusvatnet2],
  },
  {
    image: Mjosa,
    title: 'Mjosa',
    description:
      "Mjøsa is Norway's largest lake, as well as one of the deepest lakes in Norway and in Europe. It is the fourth-deepest lake in Norway.[3] It is located in the southern part of Norway, about 100 kilometres (62 mi) north of the city of Oslo.",
    images: [],
  },
  {
    image: Hornindalsvatnet,
    title: 'Hornindalsvatnet',
    description:
      "Hornindalsvatnet is Norway's and Europe's deepest lake,[2] and the world's twelfth deepest lake, officially measured to a depth of 514 metres (1,686 ft). Its surface is 53 metres (174 ft) above sea level, which means that its bottom is 461 metres (1,512 ft) below sea level.",
    images: [],
  },
];

const ImageButton = styled(Button)({
  marginTop: '55px',
  position: 'relative',
  height: 535,
  width: '100%',
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
});

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export const Lakes = (): JSX.Element => {
  return (
    <section className={styles.section}>
      {lakes.map((lake) => (
        <Link key={lake.title} to={`/${lake.title.toLowerCase()}`} style={{ width: '100%' }}>
          <ImageButton focusRipple>
            <ImageSrc style={{ backgroundImage: `url(${lake.image})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {lake.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Link>
      ))}
    </section>
  );
};
