import { useMemo, useState } from 'react'

import {
  getMonthesNames,
  createMonth,
  getWeekDaysNames,
  getMonthNumberOfDays,
  createDate,
} from '../utils/date'

interface UseCalendarParams {
  locale?: string
  date: Date
  firstWeekDayNumber?: number
}

const DAYS_IN_WEEK = 7

export const useCalendar = ({
  locale = 'default',
  date,
  firstWeekDayNumber = 2,
}: UseCalendarParams) => {
  const [selectedDay, setSelectedDay] = useState(createDate({ date }))
  const [selectedMonth, setSelectedMonth] = useState(
    createMonth({
      date: new Date(selectedDay.year, selectedDay.monthIndex),
      locale,
    })
  )
  const [selectedYear, setSelectedYear] = useState(selectedDay.year)

  const monthesNames = useMemo(() => getMonthesNames(locale), [])
  const weekDaysNames = useMemo(
    () => getWeekDaysNames(firstWeekDayNumber, locale),
    []
  )

  const days = useMemo(
    () => selectedMonth.createMonthDays(),
    [selectedMonth, selectedYear]
  )

  const calendarDays = useMemo(() => {
    const monthNumberOfDays = getMonthNumberOfDays(
      selectedMonth.monthIndex,
      selectedYear
    )

    const prevMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex - 1),
      locale,
    }).createMonthDays()

    const nextMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex + 1),
      locale,
    }).createMonthDays()

    const firstDay = days[0]
    const lastDay = days[monthNumberOfDays - 1]

    const shiftIndex = firstWeekDayNumber - 1
    const numberOfPrevDays =
      firstDay.dayNumberInWeek - 1 - shiftIndex < 0
        ? DAYS_IN_WEEK - (firstWeekDayNumber - firstDay.dayNumberInWeek)
        : firstDay.dayNumberInWeek - 1 - shiftIndex

    const numberOfNextDays =
      DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex > 6
        ? DAYS_IN_WEEK - lastDay.dayNumberInWeek - (DAYS_IN_WEEK - shiftIndex)
        : DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex

    const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays

    const result = []

    for (let i = 0; i < numberOfPrevDays; i += 1) {
      const inverted = numberOfPrevDays - i
      result[i] = prevMonthDays[prevMonthDays.length - inverted]
    }

    // console.log(numberOfPrevDays)

    for (
      let i = numberOfPrevDays;
      i < totalCalendarDays - numberOfNextDays;
      i += 1
    ) {
      result[i] = days[i - numberOfPrevDays]
    }

    for (
      let i = totalCalendarDays - numberOfNextDays;
      i < totalCalendarDays;
      i += 1
    ) {
      result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays]
    }

    return result
  }, [selectedMonth.year, selectedMonth.monthIndex, selectedYear])

  const onClickArrow = (direction: 'right' | 'left') => {
    const monthIndex =
      direction === 'left'
        ? selectedMonth.monthIndex - 1
        : selectedMonth.monthIndex + 1
    if (monthIndex === -1) {
      const year = selectedYear - 1
      setSelectedYear(year)
      return setSelectedMonth(
        createMonth({ date: new Date(selectedYear - 1, 11), locale })
      )
    }

    if (monthIndex === 12) {
      const year = selectedYear + 1
      setSelectedYear(year)
      return setSelectedMonth(createMonth({ date: new Date(year, 0), locale }))
    }

    setSelectedMonth(
      createMonth({ date: new Date(selectedYear, monthIndex), locale })
    )
  }

  return [
    {
      calendarDays,
      weekDaysNames,
      monthesNames,
      selectedDay,
      selectedMonth,
      selectedYear,
    },
    {
      onClickArrow,
      setSelectedDay,
      setSelectedYear,
    },
  ]
}
