import React from 'react'
import { DataRangePicker } from '../components/DataRangePicker/DataRangePicker'

export const Activities = (): JSX.Element => {
  const [selectedDate, setSelectedDay] = React.useState(new Date())

  return (
    <DataRangePicker
      selectedDate={selectedDate}
      selectDate={(date) => setSelectedDay(date)}
    />
  )
}
