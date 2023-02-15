import React, {useState, useMemo, createContext} from 'react'
import { getYear, getMonth, getDate, startOfMonth, endOfMonth } from 'date-fns'
import styles from './DatePicker.module.css'

export const DisablePreviousDaysContext = createContext<boolean>(false);

type MonthTableRowType = Array<number | false>;

export const getWeekDay = (locale: string) => {
    if (locale.startsWith('ko')) {
      return ['일', '월', '화', '수', '목', '금', '토'];
    }
  
    if (locale.startsWith('ja')) {
      return ['日', '月', '火', '水', '木', '金', '土'];
    }
  
    if (locale.startsWith('zh')) {
      return ['日', '一', '二', '三', '四', '五', '六'];
    }
  
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  };


export const isBrowser = () => {
    return typeof window !== 'undefined';
  };

const getYearMonth = (year: number, month: number) => {
    const language = isBrowser() ? navigator.language : "en-US"
    return new Intl.DateTimeFormat(language, { year: 'numeric', month: 'long' }).format(
        new Date(year, month - 1),
      );
}

const splitArray = (array: MonthTableRowType, part: number): MonthTableRowType[] => {
    const tmp = [];
    for (let i = 0; i < array.length; i += part) {
      tmp.push(array.slice(i, i + part));
    }
  
    const lastTmpRow = tmp[tmp.length - 1];
    if (lastTmpRow.length < part) {
      const requiredCellCount = part - lastTmpRow.length;
      lastTmpRow.push(...Array(requiredCellCount).fill(false));
    }
  
    return tmp;
  };


const getThisYearAndThisMonth = () => {
    const today = new Date()
    return [getYear(today), getMonth(today)]
}

const getRangeArray = (start: number, end: number): number[] => {
    return Array(end - start + 1).fill(undefined).map((_, index) => index + start)    


}

export const getNextYearAndMonth = (year: number, month: number): [number, number] => {
    const firstMonth = 1;
    const lastMonth = 12;
  
    if (month === lastMonth) {
      return [year + 1, firstMonth];
    }
  
    return [year, month + 1];
  };

const getMonthData = (month: number, year: number) => {
    if (month < 1 || month > 12) {
        return [];
    }
    const date = new Date(year, month - 1);
    const startDay = getDate(startOfMonth(date));
    const endDay = getDate(endOfMonth(date));

    const daysArray = getRangeArray(1, endDay)

    const spaceArray = Array(startDay).fill(false);
    const targetArray = spaceArray.concat(daysArray);
  
    return splitArray(targetArray, 7); // 1d -> 2d
}

interface MonthProprety {
    year: number
    month: number
}

const language = isBrowser() ? navigator.language : "en-US"

const weekday =  getWeekDay(language)


export const getPrevYearAndMonth = (year: number, month: number): [number, number] => {
    const firstMonth = 1;
    const lastMonth = 12;
  
    if (month === firstMonth) {
      return [year - 1, lastMonth];
    }
  
    return [year, month - 1];
  };

const WeekDay = () => {
    console.log(weekday)
    return (
        <div>
            
        </div>
    )
}



export const DatePicker = ({disablePreviousDays = false}) => {
    const [thisYear, thisMonth]  = getThisYearAndThisMonth()
    const [monthsDate, setMonthData  ] = useState([{
        year: thisYear, month: thisMonth + 1
    }, {
        year: thisYear, month: thisMonth + 2
    }])


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
    

    return (
        <DisablePreviousDaysContext.Provider value={disablePreviousDays}>

<div>
            {monthsDate.map(({year, month}) => 
                <Month year={year} month={month}/>
            )}
        </div>
        </DisablePreviousDaysContext.Provider>
       
    )
}
