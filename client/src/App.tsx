import React, { FunctionComponent, useEffect } from 'react'
import { Provider } from '../src/routes/RouterProvider'
import './App.css'
import { DatePickerProvider } from '../../client/src/context/DateContext'

const App: FunctionComponent<any> = () => {
  return (
    <DatePickerProvider>
      <Provider />
    </DatePickerProvider>
  )
}

export default App
