import { Ref, createContext, useEffect, useState } from 'react';
import {
  getNextYearAndMonth,
  getPrevYearAndMonth,
  getThisYearAndThisMonth,
} from '../../utils/dateHelpers/index';
import { Month } from './Month';
import { ChevronLeft } from '../../assets/icons/ChevronLeft';
import { ChevronRight } from '../../assets/icons/ChevronRight';
import { Box } from '@mui/material';
import { setCoords } from '../../utils/coords/setCoords';

export const DisablePreviousDaysContext = createContext<boolean>(false);

interface DatePickerProps {
  pickerRef: Ref<HTMLDivElement | null>;
  disablePreviousDays: boolean;
}

export const DatePicker = ({ pickerRef, disablePreviousDays = false }: DatePickerProps) => {
  const [thisYear, thisMonth] = getThisYearAndThisMonth();
  const [monthsDate, setMonthData] = useState([
    {
      year: thisYear,
      month: thisMonth + 1,
    },
    {
      year: thisYear,
      month: thisMonth + 2,
    },
  ]);

  const onClickNextButton = () => {
    setMonthData(([, { year: prevRightDisplayYear, month: prevRightDisplayMonth }]) => {
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
    setMonthData(([{ year: prevLeftDisplayYear, month: prevLeftDisplayMonth }]) => {
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

  useEffect(() => {
    console.log('scroll');

    const handleScroll = () => {
      setCoords(pickerRef);
    };
    document.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, [pickerRef]);

  useEffect(() => {
    setCoords(pickerRef);
  }, []);

  return (
    <DisablePreviousDaysContext.Provider value={disablePreviousDays}>
      <Box
        ref={pickerRef}
        sx={{
          overflow: 'auto',
          p: '15px',
          display: 'flex',
          columnGap: '30px',
          position: 'absolute',
          bgcolor: 'white',
          top: `120px`,
          left: '0',
          border: '1px solid black',
          borderRadius: '4px',
          fontFamily: 'Montserrat',
        }}
      >
        <Box>
          <ChevronLeft onClick={onClickPrevButton} />
        </Box>
        {monthsDate.map(({ year, month }) => (
          <Month key={`${year}${month}`} year={year} month={month} />
        ))}
        <div>
          <ChevronRight onClick={onClickNextButton} />
        </div>
      </Box>
    </DisablePreviousDaysContext.Provider>
  );
};
