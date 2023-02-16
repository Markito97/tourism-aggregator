import React from 'react'
import { DaysRow } from '../DatePicker/DaysRow'

interface DaysProps {
  days: Array<Array<number | false>>
}

export const Days = ({ days }: DaysProps): JSX.Element => {
  return (
    <div>
      {days.map((daysList, index) => (
        <DaysRow key={index} daysList={daysList} />
      ))}
    </div>
  )
}
