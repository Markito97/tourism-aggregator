import { Ref, createContext, useEffect, useState } from 'react';
import {
  getNextYearAndMonth,
  getPrevYearAndMonth,
  getThisYearAndThisMonth,
} from '../../utils/dateHelpers/index';
import { Month } from './Month';
import { ChevronLeft } from '../../assets/icons/ChevronLeft';
import { ChevronRight } from '../../assets/icons/ChevronRight';
import { Box, styled, useMediaQuery, useTheme } from '@mui/material';
import { setCoords } from '../../utils/coords/setCoords';
import { FieldsContext } from '../../context/DateContext';
import { ScrollbarEvents } from 'swiper/types';

export const DisablePreviousDaysContext = createContext<boolean>(false);

const DatePickerStyles = styled(Box)(({ theme }) => ({
  fontSize: 'Montserrat',
  p: '15px',
  display: 'flex',
  columnGap: '30px',
  position: 'absolute',
  bgcolor: 'white',
  top: `120px`,
  left: '0',
  border: '1px solid black',
  borderRadius: '4px',
  background: 'white',
  [theme.breakpoints.down('averageMobile')]: {
    top: '0',
    width: '100%',
    flexDirection: 'column',
    position: 'sticky',
    border: 'none',
    fontSize: '14px',
    rowGap: '30px',
  },
}));

interface DatePickerProps {
  pickerRef: Ref<HTMLDivElement | null>;
  disablePreviousDays: boolean;
  isClose: boolean;
  isCheckIn: boolean;
  isCheckOut: boolean;
}

export const DatePicker = ({
  pickerRef,
  isClose,
  isCheckIn,
  isCheckOut,
  disablePreviousDays = false,
}: DatePickerProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('averageMobile'));

  const [thisYear, thisMonth] = getThisYearAndThisMonth();
  const [monthsDate, setMonthsDate] = useState([
    {
      year: thisYear,
      month: thisMonth + 1,
    },
    {
      year: thisYear,
      month: thisMonth + 2,
    },
  ]);

  const [mobileMonthsDate, setMobileMonthsDate] = useState([
    {
      year: thisYear,
      month: thisMonth + 1,
    },
    {
      year: thisYear,
      month: thisMonth + 2,
    },
    {
      year: thisYear,
      month: thisMonth + 3,
    },
    {
      year: thisYear,
      month: thisMonth + 4,
    },
    {
      year: thisYear,
      month: thisMonth + 5,
    },
    {
      year: thisYear,
      month: thisMonth + 6,
    },
    {
      year: thisYear,
      month: thisMonth + 7,
    },
    {
      year: thisYear,
      month: thisMonth + 8,
    },
    {
      year: thisYear,
      month: thisMonth + 9,
    },
    {
      year: thisYear,
      month: thisMonth + 10,
    },
  ]);

  const onClickNextButton = () => {
    setMonthsDate(([, { year: prevRightDisplayYear, month: prevRightDisplayMonth }]) => {
      const [nextRightDisplayYear, nextRightDisplayMonth] = getNextYearAndMonth(
        prevRightDisplayYear,
        prevRightDisplayMonth,
      );
      return [
        { year: prevRightDisplayYear, month: prevRightDisplayMonth },
        { year: nextRightDisplayYear, month: nextRightDisplayMonth },
      ];
    });
  };

  const onClickPrevButton = () => {
    setMonthsDate(([{ year: prevLeftDisplayYear, month: prevLeftDisplayMonth }]) => {
      const [nextLeftDisplayYear, nextLeftDisplayMonth] = getPrevYearAndMonth(
        prevLeftDisplayYear,
        prevLeftDisplayMonth,
      );
      return [
        { year: nextLeftDisplayYear, month: nextLeftDisplayMonth },
        { year: prevLeftDisplayYear, month: prevLeftDisplayMonth },
      ];
    });
  };

  const scrollHandler = (e: any): void => {
    if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100) {
      console.log('scroll');
    }
    // console.log(e.target.scrollHeight);
    // console.log(e.target.scrollTop);
    // console.log(window.innerHeight);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler, true);
    return () => {
      document.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);

  // useEffect(() => {
  //   setCoords(pickerRef);
  // }, []);

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);
  //   return () => {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, []);

  return (
    <FieldsContext.Provider
      value={{
        isClose,
        isCheckIn,
        isCheckOut,
      }}
    >
      <DisablePreviousDaysContext.Provider value={disablePreviousDays}>
        <DatePickerStyles ref={pickerRef}>
          {/* <Box>
            <ChevronLeft onClick={onClickPrevButton} />
          </Box> */}
          {!matches &&
            monthsDate.map(({ year, month }) => (
              <Month key={`${year}${month}`} year={year} month={month} />
            ))}
          {matches &&
            mobileMonthsDate.map(({ year, month }) => (
              <Month key={`${year}${month}`} year={year} month={month} />
            ))}
          {/* <div>
            <ChevronRight onClick={onClickNextButton} />
          </div> */}
        </DatePickerStyles>
      </DisablePreviousDaysContext.Provider>
    </FieldsContext.Provider>
  );
};
