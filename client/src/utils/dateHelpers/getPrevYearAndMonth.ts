import { FIRST_MONTH, LAST_MONTH } from './date.consts'

export const getPrevYearAndMonth = (
  year: number,
  month: number
): [number, number] => {
  if (month === FIRST_MONTH) return [year - 1, LAST_MONTH]
  return [year, month - 1]
}
