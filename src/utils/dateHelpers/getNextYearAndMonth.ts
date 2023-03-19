import { FIRST_MONTH, LAST_MONTH } from './date.consts';

export const getNextYearAndMonth = (
  year: number,
  month: number,
): [number, number] => {
  if (month === LAST_MONTH) return [year + 1, FIRST_MONTH];
  return [year, month + 1];
};
