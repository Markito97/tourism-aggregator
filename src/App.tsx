import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './routes/provider'
import './App.css'

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider />
    </BrowserRouter>
  )
}
