import React from 'react'
import { DatePicker } from '../../src/components/DatePicker/DatePicker'
import { DatePickerProvider, useDatePickGetter } from '../context/DateContext'

export const Activities = (): JSX.Element => {
  const { pickedDates } = useDatePickGetter()
  return (
    <div>
      <DatePicker disablePreviousDays />
      <div>{pickedDates.firstPickedDate?.toString()}</div>
      <div>{pickedDates.secondPickedDate?.toString()}</div>
    </div>
  )
}
