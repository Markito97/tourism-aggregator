export const getWeekNumber = (date: Date) => {
  const fierstDayOfTheYear = new Date(date.getFullYear(), 0, 1)
  const pastDaysOfYear =
    (date.getTime() - fierstDayOfTheYear.getTime()) / 86400000

  return Math.ceil(pastDaysOfYear + fierstDayOfTheYear.getDate() + 1 / 7)
}
