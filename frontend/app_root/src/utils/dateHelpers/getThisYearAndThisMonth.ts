import { getYear, getMonth } from 'date-fns'

export const getThisYearAndThisMonth = (): number[] => {
  const today = new Date()
  return [getYear(today), getMonth(today)]
}
