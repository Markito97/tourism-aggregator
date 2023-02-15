import React, {useState, createContext} from 'react'
import { getNextYearAndMonth } from 'utils/dateHelpers/getNextYearAndMonth';
import { getPrevYearAndMonth } from 'utils/dateHelpers/getPrevYearAndMonth';
import { getThisYearAndThisMonth } from 'utils/dateHelpers/getThisYearAndThisMonth';
import { Month } from './Month';

export const DisablePreviousDaysContext = createContext<boolean>(false);

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
