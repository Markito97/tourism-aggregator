import * as css from './Rating.sass';

import { Box, Typography, styled } from '@mui/material';

// font-family: Montserrat
// display: flex
// justify-content: space-between
// align-items: center
// flex-direction: row
// gap: 5px
// cursor: pointer

const RatingFieldStyles = styled(Box)(({ theme }) => ({
  fontFamily: 'Montserrat',
  display: 'flex',
  columnGap: '15px',
  alignItems: 'center',
  // justifyContent: 'space-between',
}));

const RatingMeaning = styled(Typography)(({}) => ({
  fontFamily: 'Montserrat',
  whiteSpace: 'nowrap',
  minWidth: '20%',
}));

const RatingBar = styled(Box)(({ theme }) => ({
  width: '55%',
  height: '10px',
  position: 'relative',
  display: 'flex',
  backgroundColor: '#f1f1e8',
}));

const RatingValue = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  width: '25%',
}));

// // width: 70%
// height: 10px
// // border: 0.1 px solid black
// background-color: #f1f1e8
// position: relative
// display: flex

export function RatingField(props: any) {
  let raitingColor = props.ratingType;
  let ratingWidth = props.ratingWidth + '%';

  let root = document.documentElement;
  return (
    <RatingFieldStyles>
      <RatingMeaning>{props.number}-star</RatingMeaning>
      <RatingBar>
        <div
          style={{ width: `${ratingWidth}`, backgroundColor: 'black' }}
          onMouseOver={(e) => (e.target.style.backgroundColor = raitingColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'black')}
        ></div>
      </RatingBar>
      <RatingValue>{props.percentage}%</RatingValue>
    </RatingFieldStyles>
  );
}
