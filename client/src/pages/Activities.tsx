import React from 'react'
import { DataRangePicker } from '../components/DataRangePicker/DataRangePicker'

export const Activities = (): JSX.Element => {
  const [selectedDate, setSelectedDay] = React.useState(new Date())

  console.log(selectedDate)

  return (
    <DataRangePicker
      selectedDate={selectedDate}
      selectDate={(date) => setSelectedDay(date)}
    />
  )
}
