/* eslint-disable object-curly-newline */
import { getDate, startOfMonth, endOfMonth, getDay } from 'date-fns';
import { getRangeArray } from './getRangeArray';
import { splitArray } from './splitArray';

export const getMonthData = (
  year: number,
  month: number,
): Array<Array<number | false>> => {
  if (month < 1 || month > 12) return [];

  const startDay = getDay(startOfMonth(new Date(year, month - 1)));
  const endDate = getDate(endOfMonth(new Date(year, month - 1)));

  // getDaysInMonth

  let lengthNext = startDay - 1;
  if (lengthNext === -1) {
    lengthNext = 6;
  }
  const daysArray = getRangeArray(1, endDate);
  const spaceArray = Array(lengthNext).fill(false);
  const targetArray = spaceArray.concat(daysArray);

  return splitArray(targetArray, 7);
};
