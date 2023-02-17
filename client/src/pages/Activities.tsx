import React from 'react'
import { useDatePickGetter } from '../hooks/useDatePickGetter'
import { SeacrhPanel } from '../../src/components/SearchPanel/SearchPanel'

export const Activities = (): JSX.Element => {
  const { pickedDates } = useDatePickGetter()

  return (
    <div>
      <SeacrhPanel />
      {/* <div>{pickedDates.firstPickedDate?.toString()}</div> */}
      {/* <div>{pickedDates.secondPickedDate?.toString()}</div> */}
    </div>
  )
}
